const Api = require('./api');
const Http = require('./http');

const Resolver = require('./resolver');

/**
 * Create a FirstStreet class
 * @constructor
 * @param {string} apiKey - A string with the base URL for account.
 * @param {Object} options - A configuration object.
*/
class FirstStreet {
  constructor(apiKey = null, options = {}) {
    if (!apiKey) {
      throw new Error('Missing API Key.');
    }

    const resolverObj = new Resolver(new Http(apiKey, options));
    const api = new Api(resolverObj);
    api.bindTo(this);
  }
}

module.exports = FirstStreet;
