const rulesets = require('./Rulesets.json');


const proxy = {
    'GET /rulesets': rulesets
  }
  module.exports = proxy;