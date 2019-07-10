// lowercase
const Api = require('../api/index.js');
const Http = require('./Http');

class FloodIQ {
  constructor(apiKey = null, options = {}) {
    if (!apiKey) {
      throw new Error('Missing API Key.');
    }

    const api = new Api(new Http(apiKey, options));
    api.bindTo(this);
  }
}

module.exports = FloodIQ;
