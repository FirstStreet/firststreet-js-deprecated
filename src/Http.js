const fetch = require('node-fetch');
const isArray = require('lodash/isArray');
const isPlainObject = require('lodash/isPlainObject');
const { UNKNOWN, UNAUTHORIZED } = require('./Errors');

const defaults = {
  host: process.env.HTTP_HOST,
  region: process.env.HTTP_REGION,
  statusUrl: process.env.STATUS_URL,
  title: 'floodiq-javascript-sdk',
};

/**
* http wrapper
* @constructor
 * @param {string} apiKey - A string with the base URL for account.
 * @param {Object} options - A configuration object.
*/
export default class Http {
  constructor(apiKey = null, options = defaults) {
    const requestOptions = { ...defaults, ...options };
    this._tempRegion = null;
    this._region = requestOptions.region.toLowerCase();
    this.options = {
      url: `${requestOptions.host}`,
      status: requestOptions.statusUrl,
      headers: {
        'Content-Encoding': 'gzip',
        'Content-Type': 'application/json',
        'User-Agent': 'js/floodiq',
        Accept: 'application/vnd.api+json',
        Authorization: `Bearer ${apiKey}`,
        'X-TITLE-ID': requestOptions.title,
      },
    };
  }

  /**
   * Return a region from the request options
   *
   * @return {String} A request region
  */
  getRequestRegion() {
    return this.tempRegion ? this.tempRegion : this.region;
  }

  /**
   * Set a new request region
   *
   * @return {String} A new request region
  */
  set tempRegion(newTempRegion) {
    this._tempRegion = newTempRegion;
    return this;
  }

  /**
   * Get request region
   *
   * @return {String} A request region
  */
  get region() {
    return this._region;
  }

  /**
   * Serialize request object into a list of URL query parameters
   * @param {Object} obj - the request object
   * @return {String} - the joined query parameters
  */
  serialize(obj) {
    const queries = [];
    const loop = (object, prefix = null) => {
      for (const property of Object.keys(object)) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
          if (isPlainObject(object[property])) {
            loop(object[property], property);
          } else if (isArray(object[property])) {
            if (prefix) {
              queries.push(`${prefix}[${encodeURIComponent(property)}]=${object[property].join(',')}`);
            } else {
              queries.push(`${encodeURIComponent(property)}=${object[property].join(',')}`);
            }
          } else if (prefix) {
            queries.push(`${prefix}[${encodeURIComponent(property)}]=${object[property]}`);
          } else {
            queries.push(`${encodeURIComponent(property)}=${object[property]}`);
          }
        }
      }
    };

    loop(obj);
    return queries.join('&');
  }

  /**
   * Return errors for common error code scenarios
   * @param {Object} res - the response object
   * @param {Object} requestOptions - the request options object
   * @param {Number} rateLimit - rate limit constant
   * @return {Object} - request object with error messaging added
  */
  parseErrors(res, requestOptions, rateLimit) {
    const { status } = res;
    const err = { errors: true };
    const region = this.getRequestedRegion();

    switch (status) {
      case 401:
        return {
          ...err, messages: UNAUTHORIZED, region, debug: requestOptions, rateLimit, ...res,
        };
      default:
        return {
          ...err, messages: UNKNOWN, region, debug: requestOptions, rateLimit, ...res,
        };
    }
  }

  /**
   * Return request status
   * @return {String} - Status
  */
  status() {
    return fetch(this.options.status);
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
}
