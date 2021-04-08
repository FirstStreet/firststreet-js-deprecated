const Property = require('../../models/city/detail/index.js');
const City = require('../../models/property/detail/index.js');
const County = require('../../models/county/detail/index.js');
const Neighborhood = require('../../models/neighborhood/detail/index.js');
const Zcta = require('../../models/zcta/detail/index.js');
const State = require('../../models/zcta/detail/index.js');
const District = require('../../models/district/detail/index.js');
const { normalizeError } = require('../../Error');
const { fetcher } = require('../../lib/fetcher');

const API_VERSION = 'v1';
const ENDPOINT_PREFIX = `/${API_VERSION}/location/detail`;

const locationDetail = http =>
  // eslint-disable-next-line
   ({
    async getPropertyByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getPropertyByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/property/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, Property);

      return res;
    },
    async getPropertyByLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/property?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, Property);

      return res;
    },
    async getPropertyByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getPropertyByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/property?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, Property);

      return res;
    },
    async getCityByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getCityByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/city/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, City);

      return res;
    },
    async getCityByLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getCityByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getCityByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/city?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, City);

      return res;
    },
    async getCityByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getCityByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/city?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, City);

      return res;
    },
    async getStateByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getStateByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/state/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, State);

      return res;
    },
    async getStateByLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getStateByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getStateByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/state?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, State);

      return res;
    },
    async getStateByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getStateByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/state?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, State);

      return res;
    },
    async getCountyByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getCountyByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/county/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, County);

      return res;
    },
    async getCountyLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getStateByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getStateByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/state?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, State);

      return res;
    },
    async getCountyByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getCountyByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/county?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, County);

      return res;
    },
    async getZctaByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getZctaByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/zcta/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, Zcta);

      return res;
    },
    async getZctaLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getZctaByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getZctaByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/zcta?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, Zcta);

      return res;
    },
    async getZctaByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getZctaByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/zcta?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, Zcta);

      return res;
    },
    async getNeighborhoodByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getNeighborhoodByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/neighborhood/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, Neighborhood);

      return res;
    },
    async getNeighborhoodLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getNeighborhoodByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getNeighborhoodByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/neighborhood?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, Neighborhood);

      return res;
    },
    async getNeighborhoodByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getNeighborhoodByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/neighborhood?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, Neighborhood);

      return res;
    },
    async getDistrictByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getDistrictByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/cd/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, District);

      return res;
    },
    async getDistrictByLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getDistrictByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getDistrictByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/cd?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, District);

      return res;
    },
    async getDistrictByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getDistrictByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/cd?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, District);

      return res;
    },
  });

module.exports = locationDetail;
