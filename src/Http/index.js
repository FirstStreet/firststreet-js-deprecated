const fetch = require('node-fetch').default;
const {
  UNKNOWN, UNAUTHORIZED, RATE_LIMIT, NOT_FOUND, INTERNAL,
  OFFLINE, NOT_ACCEPTABLE, NETWORK_ERROR, NO_BODY,
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
   * Return errors for common error code scenarios
   * @param {Object} res - the response object
   * @param {Object} requestOptions - the request options object
   * @param {number} rateLimit - rate limit constant
   * @return {Object} - request object with error messaging added
  */
  parseErrors(res, requestOptions, rateLimit) {
    const { status } = res;
    const err = { errors: true };

    switch (status) {
    case 401:
      return {
        ...err, messages: UNAUTHORIZED, debug: requestOptions, rateLimit, ...res,
      };
    case 404:
      return {
        ...err, messages: NOT_FOUND, debug: requestOptions, rateLimit, ...res,
      };
    case 500:
      return {
        ...err, messages: INTERNAL, debug: requestOptions, rateLimit, ...res,
      };
    case 429:
      return {
        ...err, messages: RATE_LIMIT, debug: requestOptions, rateLimit, ...res,
      };
    case 503:
      return {
        ...err, messages: OFFLINE, debug: requestOptions, rateLimit, ...res,
      };
    case 406:
      return {
        ...err, messages: NOT_ACCEPTABLE, debug: requestOptions, rateLimit, ...res,
      };
    default:
      return {
        ...err, messages: UNKNOWN, debug: requestOptions, rateLimit, ...res,
      };
    }
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

      fetch(requestOptions.url, {
        method: requestOptions.method,
        headers: requestOptions.headers,
      }).then((res) => {
        rateLimit = this.parseRateLimit(res.headers);
        if (res.status !== 200) {
          return this.parseErrors(res, requestOptions, rateLimit);
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
        if (body.errors) {
          return reject({
            ...body,
            debug: requestOptions,
            rateLimit,
          });
        }

        return resolve({
          errors: null,
          body,
          debug: requestOptions,
          rateLimit,
        });
      }).catch((err) => reject({
        errors: true,
        messages: NETWORK_ERROR,
        details: err,
        debug: requestOptions,
        rateLimit,
      }));
    });
  }
}

module.exports = Http;
