const {bold} = require('chalk');
const indent = require('indent-string');

module.exports =
`  ${bold('SYNOPSIS')}

${indent(require('./usage'), '    ')}`;
