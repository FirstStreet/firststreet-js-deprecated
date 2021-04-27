const fetch = require('node-fetch').default;
const {
  RATE_LIMIT, UNAUTHORIZED, UNKNOWN, NOT_FOUND, INTERNAL, OFFLINE, NOT_ACCEPTABLE,
} = require('../Error');

// Mock Data
const summaryProperty = require('./summaryProperty');
const summaryCity = require('./summaryCity');
const detailProperty = require('./propertyDetail');
const detailCounty = require('./countyDetail.json');
const detailTract = require('./tractDetail.json');
const neighborhoodDetail = require('./neighborhoodDetail.json');
const districtDetail = require('./districtDetail.json');
const propertyCumulative = require('./probabilityCumulative.json');

const defaults = {
  host: 'https://FAKE-HOST-FOR-TESTING.com/v1',
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
      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/summary/property/100032470544?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/detail/property/1202672032?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: detailProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/detail/tract/1001020802?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: detailTract,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/detail/county/12071?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: detailCounty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/detail/neighborhood/156067?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: neighborhoodDetail,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/detail/cd/4103?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: districtDetail,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/probability/cumulative/property/362788780?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: propertyCumulative,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/summary/city/1001400?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/summary/property?lat=39.4419892115&lng=-75.6453718685&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/detail/property?lat=39.4419892115&lng=-75.6453718685&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: detailProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/probability/cumulative/property?lat=39.4419892115&lng=-75.6453718685&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: propertyCumulative,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/summary/city?lat=30.6589162194187&lng=-81.4499316280516&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/summary/city?lat=39.811250630443&lng=-75.4886086625372&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryCity,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/summary/property?address=212%20appoquin%20s,%20middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/detail/property?address=212%20appoquin%20s,%20middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: detailProperty,
        });
      }

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/v1/location/summary/city?address=middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryCity,
        });
      }

      return reject({
        error: 'data not found',
      });
    });
  }
}

module.exports = Http;
