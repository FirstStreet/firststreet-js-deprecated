const Property = require('../../models/SummaryProperty/index.js');
const City = require('../../models/SummaryCity/index.js');
const { normalizeError ***REMOVED*** = require('../../Error');

const SUMMARY_VERSION = 'v1.0';

/**
 * @typedef {import('../models/Property').default***REMOVED*** SummaryProperty
 * @typedef {import('../models/City').default***REMOVED*** CityProperty
*/

/**
 * A City
 * @typedef {Object***REMOVED*** PropertyCity
 * @property {number***REMOVED*** FSID - The city unique identifier
 * @property {string***REMOVED*** name - The city name
*/

/**
 * A LocationGeometry which contains a polygon (boundingbox) and the Bound (viewport) of a location
 * @typedef {Object***REMOVED*** LocationGeometry
 * @property {string***REMOVED*** polygon - The bounding box of the location
 * @property {string***REMOVED*** center - The center of the location
 * @property {string***REMOVED*** bounds - The bounds of the location
*/

const ENDPOINT_PREFIX = `/data/${SUMMARY_VERSION***REMOVED***/summary`;

const dataSummary = http =>
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


        const model = new Property(response.body);

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

        const model = new City(response.body);
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

        const model = new Property(response.body);
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

        const model = new City(response.body);
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

        const model = new Property(response.body);
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

        const model = new City(response.body);
        return model;
      ***REMOVED*** catch (e) {
        return normalizeError(null, e);
      ***REMOVED***
    ***REMOVED***,
  ***REMOVED***);

module.exports = dataSummary;
