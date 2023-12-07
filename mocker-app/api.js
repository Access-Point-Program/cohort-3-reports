const results = require("./results.json");
const rulesets = require('./Rulesets.json');
const rulesetsEx = require('./RulesetsEx.json');
const layouts = require('./layouts.json');

const proxy = {
    'GET /results': results,
    'GET /rulesets-extended': rulesetsEx,
    'GET /layouts': layouts
  }

module.exports = proxy;
