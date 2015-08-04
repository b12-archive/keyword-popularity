const {bold} = require('chalk');

module.exports =
`  ${bold('EXAMPLES')}

    $ keyword-popularity  cli  tool  cli-tool
    ${bold('KEYWORD')}    ${bold('POPULARITY')}
    cli        2422
    tool       497
    cli-tool   0
`;
