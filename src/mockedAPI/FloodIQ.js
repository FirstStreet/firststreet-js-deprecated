const Api = require('../Api');
const Http = require('../mockedAPI/Http');

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
