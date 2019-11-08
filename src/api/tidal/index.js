const Tidal = require('../../models/Tidal');
const { normalizeError } = require('../../Error');

const SUMMARY_VERSION = 'v0.1';
const ENDPOINT_PREFIX = `/data/${SUMMARY_VERSION}/tidal`;

const tidal = http =>
  // eslint-disable-next-line
   ({
    async getPropertyByFSID(id) {
      if (!id) {
        return normalizeError('Expected required FSID. Usage: .getPropertyByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/property/${id}?key=${http.getKey()}`;
      try {
        const response = await http.execute('GET', path);
        const { errors, messages } = response;

        if (errors) {
          return normalizeError(messages);
        }

        const model = new Tidal(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
    async getCityByFSID(id) {
      if (!id) {
        return normalizeError('Expected required FSID. Usage: .getCityByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/city/${id}?key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);
        const { errors, messages } = response;

        if (errors) {
          return normalizeError(messages);
        }

        const model = new Tidal(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
    async getPropertyByLatLng(lat, lng) {
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/property?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);

        const {
          errors,
          message,
        } = response;

        if (errors) {
          return normalizeError(message);
        }

        const model = new Tidal(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
    async getCityByLatLng(lat, lng) {
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getCityByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getCityByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/city?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);

        const {
          errors,
          message,
        } = response;

        if (errors) {
          return normalizeError(message);
        }

        const model = new Tidal(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
    async getPropertyByAddress(address) {
      if (!address) {
        return normalizeError('Expected required address. Usage: .getPropertyByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/property?address=${encodeURI(address)}&key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);

        const {
          errors,
          message,
        } = response;

        if (errors) {
          return normalizeError(message);
        }

        const model = new Tidal(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
    async getCityByAddress(address) {
      if (!address) {
        return normalizeError('Expected required address. Usage: .getCityByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/city?address=${encodeURI(address)}&key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);

        const { errors, message } = response;

        if (errors) {
          return normalizeError(message);
        }

        const model = new Tidal(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
  });

module.exports = tidal;
