const fetch = require('node-fetch').default;
const {
  UNKNOWN, NETWORK_ERROR, NO_BODY,
} = require('../Error');

const defaults = {
  host: process.env.HTTP_HOST || 'https://api.firststreet.org',
  apiVersion: 'v1',
};

/**
* http wrapper
* @constructor
 * @param {string} apiKey - A string with the base URL for account.
 * @param {Object} options - A configuration object.
*/
class Http {
  constructor(apiKey = null, options = defaults) {
    const requestOptions = { ...defaults, ...options };
    this.key = apiKey;
    this.options = {
      url: `${requestOptions.host}/${requestOptions.apiVersion}`,
      headers: {
        'Content-Encoding': 'gzip',
        'Content-Type': 'application/json',
        'User-Agent': 'js/firststreet',
        Accept: 'application/vnd.api+json',
        Authorization: `Bearer ${apiKey}`,
        'X-TITLE-ID': requestOptions.title,
      },
    };
  }

  getKey() {
    return this.key;
  }

  /**
   * format rate limit headers
   * @param {Object} headers - rate limit headers
   * @return {Object} formatted rate limit headers
   */
  parseRateLimit(headers) {
    return {
      limit: headers.get('x-ratelimit-limit'),
      remaining: headers.get('x-ratelimit-remaining'),
      reset: headers.get('x-ratelimit-reset'),
      requestId: headers.get('x-request-id'),
    };
  }

  /**
   * Perform get request to api
   * @param {string} endpoint - request URL endpoint
   * @param {Object} query - the query??
  */
  execute(method = 'GET', endpoint = null) {
    const requestOptions = { ...this.options, method };
    if (endpoint === null) {
      return new Error('HTTP Error: No endpoint to provide a request to.');
    }

    requestOptions.url += endpoint;

    return new Promise((resolve, reject) => {
      let rateLimit = null;
      let statusCode = 200;

      fetch(requestOptions.url, {
        method: requestOptions.method,
        headers: requestOptions.headers,
      }).then((res) => {
        if (res === null) {
          reject({
            errors: true,
            messages: NETWORK_ERROR,
            debug: requestOptions,
            rateLimit,
          });
        }
        rateLimit = this.parseRateLimit(res.headers);
        if (res.status !== 200) {
          statusCode = res.status;
        }

        return res.json();
      }).then((body) => {
        // Empty responses
        if (!body) {
          return reject({
            errors: true,
            messages: NO_BODY,
            debug: requestOptions,
            rateLimit,
          });
        }

        // Status code not 200
        if (body.errors || body.error || statusCode !== 200) {
          return reject({
            errors: true,
            body,
            status: statusCode,
            debug: requestOptions,
            rateLimit,
          });
        }

        return resolve({
          body,
          debug: requestOptions,
          rateLimit,
        });
      }).catch((err) => reject({
        errors: true,
        messages: UNKNOWN,
        details: err,
        debug: requestOptions,
        rateLimit,
      }));
    });
  }
}

module.exports = Http;
