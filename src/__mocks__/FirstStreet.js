const Http = require('./Http');
const Api = require('../api');
const Resolver = require('../api/resolver');

class FirstStreet {
  constructor(apiKey = null, options = {}, resolver = null) {
    if (!apiKey) {
      throw new Error('Missing API Key.');
    }

    let apiResolver = resolver;
    if (!apiResolver) {
      apiResolver = new Resolver(new Http(apiKey, options));
    }
    const api = new Api(apiResolver);

    api.bindTo(this);
  }
}

module.exports = FirstStreet;
