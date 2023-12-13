const results = require("./results.json");
const rulesets = require('./Rulesets.json');
const layouts = require('./layouts.json');

const proxy = {
    'GET /results': results,
    'GET /rulesets': rulesets,
    'GET /layouts': layouts
  }

module.exports = proxy;
