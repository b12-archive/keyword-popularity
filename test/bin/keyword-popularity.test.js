const {resolve} = require('path');
const {execFile} = require('child_process');

const tape = require('tape-catch');
const curry = require('1-liners/curry');
const plus = require('1-liners/plus');
const spawn = require('tape-spawn');

const title = curry(plus)('The CLI tool:  ');
const keywordPopularity = resolve(__dirname, '../../module/bin/keyword-popularity.js');
const $keywordPopularity = curry(execFile)(keywordPopularity);

tape(title('Prints usage'), (is) => {
  is.plan(8);

  $keywordPopularity([], (error, _, stderr) => {
    is.equal(error && error.code, 1,
      '`keyword-popularity` fails…'
    );

    is.ok(
      /^usage:/i.test(stderr),
      '…and prints usage to stderr'
    );
  });

  $keywordPopularity(['--invalid', '--options'], (error, _, stderr) => {
    is.equal(error && error.code, 1,
      '`keyword-popularity --invalid --options` fails…'
    );

    is.ok(
      /^usage:/i.test(stderr),
      '…and prints usage to stderr'
    );
  });

  $keywordPopularity(['-h'], (error, stdout) => {
    is.equal(error, null,
      '`keyword-popularity -h` succeeds…'
    );

    is.ok(
      /^usage:/i.test(stdout),
      '…and prints usage'
    );
  });

  $keywordPopularity(['--help'], (error, stdout) => {
    is.equal(error, null,
      '`keyword-popularity --help` succeeds…'
    );

    is.ok(
      /SYNOPSIS/.test(stdout),
      '…and prints manpage-like help'
    );
  });
});

const cwd = resolve(__dirname, '../mock-cwd');

tape(title('Does what it says'), (is) => {
  const run = spawn(is, `"${keywordPopularity}"`, {cwd});

  run.succeeds(
    'succeeds'
  );

  run.timeout(500);
  run.end();
});
