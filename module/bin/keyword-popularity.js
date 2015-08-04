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
const {zip} = require('trine/iterable/zip');
const {map} = require('trine/iterable/map');
const {to} = require('trine/iterable/to');
const {max} = Math;
const repeat = require('repeat-string');
const {bold} = require('chalk');

Promise.all(keywords.map(
  (keyword) => new Promise(
    (resolve, reject) => npmKeyword(keyword, (error, packages) => {
      if (error) reject(error);
      else resolve(packages.length);
    })
  )
))
  .then((results) => {
    const keywordTitle = 'KEYWORD';
    const maxKeywordLength = keywords.reduce(
      (maxLength, keyword) => max(maxLength, String(keyword).length),
      keywordTitle.length
    );

    const wordWithTab = (word) => word +
      repeat(' ', maxKeywordLength - String(word).length + 2)
    ;

    const popularityTable = [
      bold(wordWithTab(keywordTitle) + 'POPULARITY'),
    ].concat([keywords, results]
      ::zip()
      ::map(function() {
        return wordWithTab(this[0]) + this[1];
      })
      ::to(Array)
    ).join('\n') + '\n';

    stdout.write(popularityTable);
    exit(0);
  })
  .catch((error) => {
    stderr.write(error + '\n');
    exit(1);
  })
;
