const fetch = require('node-fetch').default;
const {
  RATE_LIMIT, UNAUTHORIZED, UNKNOWN, NOT_FOUND, INTERNAL, OFFLINE, NOT_ACCEPTABLE,
} = require('../Error');

// Mock Data
const summaryMockData = require('../__mocks__/summary');

const defaults = {
  host: 'https://FAKE-HOST-FOR-TESTING.com/',
};

class Http {
  constructor(apiKey = null, options = defaults) {
    const requestOptions = { ...defaults, ...options };
    this.key = apiKey;
    this.options = {
      url: requestOptions.host,
      headers: {
        'Content-Encoding': 'gzip',
        'Content-Type': 'application/json',
        'User-Agent': 'js/floodiq',
      },
    };
  }

  getKey() {
    return this.key;
  }

  parseBody(body, parseOptions = {}) {
    if (parseOptions.override) {
      return body;
    }

    if (body && 'errors' in body) {
      if (body.errors.title) {
        return {
          error: true,
          messages: body.errors.title,
        };
      }
      return {
        error: true,
        messages: body.errors,
      };
    }

    return body;
  }

  parseErrors(status) {
    const err = {
      error: true,
    };
    switch (status) {
      case 401:
        return {
          ...err, messages: UNAUTHORIZED,
        };
      case 404:
        return {
          ...err, messages: NOT_FOUND,
        };
      case 500:
        return {
          ...err, messages: INTERNAL,
        };
      case 429:
        return {
          ...err, messages: RATE_LIMIT,
        };
      case 503:
        return {
          ...err, messages: OFFLINE,
        };
      case 406:
        return {
          ...err, messages: NOT_ACCEPTABLE,
        };
      default:
        return {
          ...err, messages: UNKNOWN,
        };
    }
  }

  status() {
    return fetch(this.options.status);
  }

  execute(method = 'GET', endpoint = null) {
    const requestOptions = {
      ...this.options,
      method,
    };

    if (endpoint === null) {
      return new Error('HTTP Error: No endpoint to provide a request to.');
    }

    requestOptions.url += endpoint;

    return new Promise((resolve, reject) => {
      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/1.0/parcel/100032470544?type=property&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: propertyById,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/1.0/parcel/1001400?type=city&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: cityById,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/1.0/parcel?lat=39.4419892114799&lng=-75.6453718684964&type=property&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: propertyById,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/1.0/parcel?lat=39.811250630443&lng=-75.4886086625372&type=city&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: cityById,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/1.0/parcel?address=212%20appoquin%20s,%20middletown,%20delware&type=property&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: propertyById,
        });
      }


      return reject({
        error: 'data not found',
      });
    });
  }
}

module.exports = Http;
