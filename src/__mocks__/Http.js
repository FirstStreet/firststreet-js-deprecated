const fetch = require('node-fetch').default;
const {
  RATE_LIMIT, UNAUTHORIZED, UNKNOWN, NOT_FOUND, INTERNAL, OFFLINE, NOT_ACCEPTABLE,
} = require('../Error');

// Mock Data
const summaryProperty = require('./summaryProperty');
const summaryCity = require('./summaryCity');
const hurricaneProperty = require('./hurricaneProperty');
const hurricaneCity = require('./hurricaneCity');
const tidalProperty = require('./tidalProperty');
const tidalCity = require('./tidalCity');
const mviProperty = require('./mviProperty');
const mviCity = require('./mviCity');

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
        'User-Agent': 'js/firststreet',
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
      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/summary/property/100032470544?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/summary/city/1001400?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/summary/property?lat=39.4419892115&lng=-75.6453718685&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/summary/city?lat=39.811250630443&lng=-75.4886086625372&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/summary/property?address=212%20appoquin%20s,%20middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/summary/city?address=middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/hurricane/property/100032470544?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: hurricaneProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/hurricane/city/1222175?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: hurricaneCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/hurricane/property?lat=39.811250630443&lng=-75.4886086625372&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: hurricaneProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/hurricane/city?lat=39.811250630443&lng=-75.4886086625372&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: hurricaneCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/hurricane/property?address=212%20appoquin%20s,%20middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: hurricaneProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/hurricane/city?address=middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: hurricaneCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/tidal/property/100032470544?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: tidalProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/tidal/city/1222175?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: tidalCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/tidal/property?lat=39.811250630443&lng=-75.4886086625372&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: tidalProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/tidal/city?lat=39.811250630443&lng=-75.4886086625372&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: tidalCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/tidal/property?address=212%20appoquin%20s,%20middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: tidalProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/tidal/city?address=middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: tidalCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/property/450350219571?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviProperty,
        });
      }
      
      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/city/1222175?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/property?lat=39.811250630443&lng=-75.4886086625372&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviProperty,
        });
      }
      
      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/city?lat=39.811250630443&lng=-75.4886086625372&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/property?address=212%20appoquin%20s,%20middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/city?address=middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviCity,
        });
      }

      return reject({
        error: 'data not found',
      });
    });
  }
}

module.exports = Http;
