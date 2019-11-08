const MarketValueImpact = require('../../models/MarketValueImpact');
const { normalizeError ***REMOVED*** = require('../../Error');

const SUMMARY_VERSION = 'v0.1';
const ENDPOINT_PREFIX = `/data/${SUMMARY_VERSION***REMOVED***/market-value-impact`;

const mvi = http =>
  // eslint-disable-next-line
   ({
    async getPropertyByFSID(id) {
      if (!id) {
        return normalizeError('Expected required FSID. Usage: .getPropertyByFSID(fsid)');
      ***REMOVED***

      const path = `${ENDPOINT_PREFIX***REMOVED***/property/${id***REMOVED***?key=${http.getKey()***REMOVED***`;
      try {
        const response = await http.execute('GET', path);
        const { errors, messages ***REMOVED*** = response;

        if (errors) {
          return normalizeError(messages);
        ***REMOVED***

        const model = new MarketValueImpact(response.body);
        return model;
      ***REMOVED*** catch (e) {
        return normalizeError(null, e);
      ***REMOVED***
    ***REMOVED***,
    async getCityByFSID(id) {
      if (!id) {
        return normalizeError('Expected required FSID. Usage: .getCityByFSID(fsid)');
      ***REMOVED***

      const path = `${ENDPOINT_PREFIX***REMOVED***/city/${id***REMOVED***?key=${http.getKey()***REMOVED***`;

      try {
        const response = await http.execute('GET', path);
        const { errors, messages ***REMOVED*** = response;

        if (errors) {
          return normalizeError(messages);
        ***REMOVED***

        const model = new MarketValueImpact(response.body);
        return model;
      ***REMOVED*** catch (e) {
        return normalizeError(null, e);
      ***REMOVED***
    ***REMOVED***,
    async getPropertyByLatLng(lat, lng) {
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
      ***REMOVED***

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
      ***REMOVED***

      const path = `${ENDPOINT_PREFIX***REMOVED***/property?lat=${lat***REMOVED***&lng=${lng***REMOVED***&key=${http.getKey()***REMOVED***`;

      try {
        const response = await http.execute('GET', path);

        const {
          errors,
          message,
        ***REMOVED*** = response;

        if (errors) {
          return normalizeError(message);
        ***REMOVED***

        const model = new MarketValueImpact(response.body);
        return model;
      ***REMOVED*** catch (e) {
        return normalizeError(null, e);
      ***REMOVED***
    ***REMOVED***,
    async getCityByLatLng(lat, lng) {
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getCityByLatLng(lat, lng)');
      ***REMOVED***

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getCityByLatLng(lat, lng)');
      ***REMOVED***

      const path = `${ENDPOINT_PREFIX***REMOVED***/city?lat=${lat***REMOVED***&lng=${lng***REMOVED***&key=${http.getKey()***REMOVED***`;

      try {
        const response = await http.execute('GET', path);

        const {
          errors,
          message,
        ***REMOVED*** = response;

        if (errors) {
          return normalizeError(message);
        ***REMOVED***

        const model = new MarketValueImpact(response.body);
        return model;
      ***REMOVED*** catch (e) {
        return normalizeError(null, e);
      ***REMOVED***
    ***REMOVED***,
    async getPropertyByAddress(address) {
      if (!address) {
        return normalizeError('Expected required address. Usage: .getPropertyByAddress(address)');
      ***REMOVED***

      const path = `${ENDPOINT_PREFIX***REMOVED***/property?address=${encodeURI(address)***REMOVED***&key=${http.getKey()***REMOVED***`;

      try {
        const response = await http.execute('GET', path);

        const {
          errors,
          message,
        ***REMOVED*** = response;

        if (errors) {
          return normalizeError(message);
        ***REMOVED***

        const model = new MarketValueImpact(response.body);
        return model;
      ***REMOVED*** catch (e) {
        return normalizeError(null, e);
      ***REMOVED***
    ***REMOVED***,
    async getCityByAddress(address) {
      if (!address) {
        return normalizeError('Expected required address. Usage: .getCityByAddress(address)');
      ***REMOVED***

      const path = `${ENDPOINT_PREFIX***REMOVED***/city?address=${encodeURI(address)***REMOVED***&key=${http.getKey()***REMOVED***`;

      try {
        const response = await http.execute('GET', path);

        const { errors, message ***REMOVED*** = response;

        if (errors) {
          return normalizeError(message);
        ***REMOVED***

        const model = new MarketValueImpact(response.body);
        return model;
      ***REMOVED*** catch (e) {
        return normalizeError(null, e);
      ***REMOVED***
    ***REMOVED***,
  ***REMOVED***);

module.exports = mvi;
