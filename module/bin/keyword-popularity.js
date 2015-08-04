#! /usr/bin/env node

const {stdout, stderr, exit, argv} = process;

const flags = require('minimist')(argv.slice(2), {boolean: true});
const keywords = flags._;

// Print usage

if (flags.h) stdout.write(require('./help/usage'));

if (flags.help) stdout.write([
  require('./help/synopsis'),
  require('./help/options'),
  require('./help/examples'),
].join('\n\n'));

// Exit early

if (flags.h || flags.help) exit(0);

if (!keywords.length) {
  stderr.write(require('./help/usage'));
  exit(1);
}

// The logic

const {Promise} = require('es6-promise');
const npmKeyword = require('npm-keyword');
const zip = require('trine/iterable/zip');
const map = require('trine/iterable/map');
const to = require('trine/iterable/to');
const easyTable = require('easy-table');

Promise.all(keywords.map(
  (keyword) => new Promise(
    (resolve, reject) => npmKeyword(keyword, (error, packages) => {
      if (error) reject(error);
      else resolve(packages.length);
    })
  )
))
  .then((results) => {
    const popularityTable = easyTable([
      {1: 'KEYWORD', 2: 'POPULARITY'},
    ].concat(keywords
      ::zip(results)
      ::map(function() {
        return {1: this[0], 2: this[1]};
      })
      ::to(Array)
    )).print();

    stdout.write(popularityTable + '\n');

    exit(0);
  })
  .catch((error) => {
    stderr.write(error + '\n');
    exit(1);
  })
;
