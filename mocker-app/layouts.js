const layouts = require('./layouts.json');

const proxy = {
    'GET /layouts': layouts
  }

module.exports = proxy;
