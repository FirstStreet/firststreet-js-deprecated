const fetch = require('node-fetch').default;
const {
  RATE_LIMIT, UNAUTHORIZED, UNKNOWN, NOT_FOUND, INTERNAL, OFFLINE, NOT_ACCEPTABLE,
***REMOVED*** = require('../Error');

// Mock Data
const propertyById = require('../__mocks__/propertyDataById');
const cityById = require('../__mocks__/cityDataById');

const defaults = {
  host: 'https://FAKE-HOST-FOR-TESTING.com/',
***REMOVED***;

class Http {
  constructor(apiKey = null, options = defaults) {
    const requestOptions = { ...defaults, ...options ***REMOVED***;
    this.key = apiKey;
    this.options = {
      url: requestOptions.host,
      headers: {
        'Content-Encoding': 'gzip',
        'Content-Type': 'application/json',
        'User-Agent': 'js/vainglory',
        Accept: 'application/vnd.api+json',
        Authorization: `Bearer ${apiKey***REMOVED***`,
        'X-TITLE-ID': requestOptions.title,
      ***REMOVED***,
    ***REMOVED***;
  ***REMOVED***

  getKey() {
    return this.key;
  ***REMOVED***

  parseBody(body, parseOptions = {***REMOVED***) {
    if (parseOptions.override) {
      return body;
    ***REMOVED***

    if (body && 'errors' in body) {
      if (body.errors.title) {
        return {
          error: true,
          messages: body.errors.title,
        ***REMOVED***;
      ***REMOVED***
      return {
        error: true,
        messages: body.errors,
      ***REMOVED***;
    ***REMOVED***

    return body;
  ***REMOVED***

  parseErrors(status) {
    const err = {
      error: true,
    ***REMOVED***;
    switch (status) {
      case 401:
        return {
          ...err, messages: UNAUTHORIZED,
        ***REMOVED***;
      case 404:
        return {
          ...err, messages: NOT_FOUND,
        ***REMOVED***;
      case 500:
        return {
          ...err, messages: INTERNAL,
        ***REMOVED***;
      case 429:
        return {
          ...err, messages: RATE_LIMIT,
        ***REMOVED***;
      case 503:
        return {
          ...err, messages: OFFLINE,
        ***REMOVED***;
      case 406:
        return {
          ...err, messages: NOT_ACCEPTABLE,
        ***REMOVED***;
      default:
        return {
          ...err, messages: UNKNOWN,
        ***REMOVED***;
    ***REMOVED***
  ***REMOVED***

  status() {
    return fetch(this.options.status);
  ***REMOVED***

  execute(method = 'GET', endpoint = null) {
    const requestOptions = {
      ...this.options,
      method,
    ***REMOVED***;

    if (endpoint === null) {
      return new Error('HTTP Error: No endpoint to provide a request to.');
    ***REMOVED***

    requestOptions.url += endpoint;

    return new Promise((resolve, reject) => {
      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/1.0/parcel/100032470544?type=property&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: propertyById,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/1.0/parcel/1001400?type=city&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: cityById,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/1.0/parcel?lat=39.4419892114799&lng=-75.6453718684964&type=property&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: propertyById,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/1.0/parcel?lat=39.4419892114799&lng=-75.6453718684964&type=city&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: cityById,
        ***REMOVED***);
      ***REMOVED***

      return reject({
        error: 'data not found',
      ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***
***REMOVED***

module.exports = Http;
