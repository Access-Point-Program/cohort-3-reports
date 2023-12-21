const rulesets = require('./Rulesets.json');
const rulesetsEx = require('./RulesetsEx.json');

const proxy = {
    'GET /ruleset': rulesets,
    'GET /ruleset-extended': rulesetsEx,
  }

module.exports = proxy;
