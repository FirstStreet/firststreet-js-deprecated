// // eslint-disable-next-line
// import regeneratorRuntime from 'regenerator-runtime';
// import ApiMapping from './ApiMapping';

// const { normalizeError } = require('../Error');
// const { fetcher } = require('../lib/fetcher.js');

// const resolver = http => ({
//   async getByID(type, params, detailLevel) {
//     const { fsid } = params;
//     if (!fsid) {
//       return normalizeError('Expected required ID. Usage: .getByFSID(fsid)');
//     }
//     mapping = ApiMapping()

//     const path = `${detailLevelSettings[detailLevel].endpointPrefix}/${type}/${fsid}?key=${http.getKey()}`;

//     const model = detailLevelSettings[detailLevel][type];
//     const res = await fetcher(http, path, model);

//     return res;
//   },

//   async getByLatLng(type, params, detailLevel) {
//     const { lat, lng } = params;
//     if (!lat) {
//       return normalizeError('Expected required lat. Usage: .getByLatLng(lat, lng)');
//     }

//     if (!lng) {
//       return normalizeError('Expected required lng. Usage: .getByLatLng(lat, lng)');
//     }

//     const path = `${detailLevelSettings[detailLevel].endpointPrefix}/${type}?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

//     const model = detailLevelSettings[detailLevel][type];

//     const res = await fetcher(http, path, model);

//     return res;
//   },
//   async getByAddress(type, params, detailLevel) {
//     const { address } = params;

//     if (!address) {
//       return normalizeError('Expected required address. Usage: .getByAddress(address)');
//     }

//     const path = `${detailLevelSettings[detailLevel].endpointPrefix}/${type}?address=${encodeURI(address)}&key=${http.getKey()}`;

//     const model = detailLevelSettings[detailLevel][type];
//     const res = await fetcher(http, path, model);

//     return res;
//   },
// });

// module.exports = resolver;


class Resolver {
  #http;

  constructor(http) {
    this.#http = http;
  }

  getServiceResponse(service, detailLevel, mapping, locationParams, serviceParams) {

  }
}

module.exports = Resolver;
