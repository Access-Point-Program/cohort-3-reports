const results = require("./results.json")
const rulesets = require('./Rulesets.json');

const proxy = {
    'GET /results': results,
    'GET /rulesets': rulesets
  }
  module.exports = proxy;
