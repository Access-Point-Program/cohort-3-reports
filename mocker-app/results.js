const results = require("./results.json");


const proxy = {
    'GET /results': results,
  }

module.exports = proxy;
