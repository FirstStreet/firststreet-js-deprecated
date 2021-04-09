const ProbabilityCumulative = require('../../models/ProbabilityCumulative');
const { normalizeError } = require('../../Error');
const { fetcher } = require('../../lib/fetcher');

const ENDPOINT_PREFIX = `/probability/cumulative`;


const locationDetail = http =>
  // eslint-disable-next-line
   ({
    async getLocationByFSID(type, params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getLocationByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/${type}/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, ProbabilityCumulative);

      return res;
    },
    async getLocationByLatLng(type, params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getLocationByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getLocationByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/${type}?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, ProbabilityCumulative);

      return res;
    },
    async getLocationByAddress(type, params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getLocationByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/${type}?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, ProbabilityCumulative);

      return res;
    },
  });

module.exports = locationDetail;
