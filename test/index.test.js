const test = require('tape-catch');

test('Programmatic usage:  Fails', (is) => {
  is.throws(
    () => require('../module/index'),
    /\bnpm-keyword\b/,
    'with a helpful message'
  );

  is.end();
});
