const fetch = require('node-fetch');
const isArray = require('lodash/isArray');
const isPlainObject = require('lodash/isPlainObject');
const { UNKNOWN, UNAUTHORIZED ***REMOVED*** = require('./Errors');

const defaults = {
  host: process.env.HTTP_HOST,
  region: process.env.HTTP_REGION,
  statusUrl: process.env.STATUS_URL,
  title: 'floodiq-javascript-sdk',
***REMOVED***;

/**
* http wrapper
* @constructor
 * @param {string***REMOVED*** apiKey - A string with the base URL for account.
 * @param {Object***REMOVED*** options - A configuration object.
*/
export default class Http {
  constructor(apiKey = null, options = defaults) {
    const requestOptions = { ...defaults, ...options ***REMOVED***;
    this._tempRegion = null;
    this._region = requestOptions.region.toLowerCase();
    this.options = {
      url: `${requestOptions.host***REMOVED***`,
      status: requestOptions.statusUrl,
      headers: {
        'Content-Encoding': 'gzip',
        'Content-Type': 'application/json',
        'User-Agent': 'js/floodiq',
        Accept: 'application/vnd.api+json',
        Authorization: `Bearer ${apiKey***REMOVED***`,
        'X-TITLE-ID': requestOptions.title,
      ***REMOVED***,
    ***REMOVED***;
  ***REMOVED***

  /**
   * Return a region from the request options
   *
   * @return {String***REMOVED*** A request region
  */
  getRequestRegion() {
    return this.tempRegion ? this.tempRegion : this.region;
  ***REMOVED***

  /**
   * Set a new request region
   *
   * @return {String***REMOVED*** A new request region
  */
  set tempRegion(newTempRegion) {
    this._tempRegion = newTempRegion;
    return this;
  ***REMOVED***

  /**
   * Get request region
   *
   * @return {String***REMOVED*** A request region
  */
  get region() {
    return this._region;
  ***REMOVED***

  /**
   * Serialize request object into a list of URL query parameters
   * @param {Object***REMOVED*** obj - the request object
   * @return {String***REMOVED*** - the joined query parameters
  */
  serialize(obj) {
    const queries = [];
    const loop = (object, prefix = null) => {
      for (const property of Object.keys(object)) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
          if (isPlainObject(object[property])) {
            loop(object[property], property);
          ***REMOVED*** else if (isArray(object[property])) {
            if (prefix) {
              queries.push(`${prefix***REMOVED***[${encodeURIComponent(property)***REMOVED***]=${object[property].join(',')***REMOVED***`);
            ***REMOVED*** else {
              queries.push(`${encodeURIComponent(property)***REMOVED***=${object[property].join(',')***REMOVED***`);
            ***REMOVED***
          ***REMOVED*** else if (prefix) {
            queries.push(`${prefix***REMOVED***[${encodeURIComponent(property)***REMOVED***]=${object[property]***REMOVED***`);
          ***REMOVED*** else {
            queries.push(`${encodeURIComponent(property)***REMOVED***=${object[property]***REMOVED***`);
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***;

    loop(obj);
    return queries.join('&');
  ***REMOVED***

  /**
   * Return errors for common error code scenarios
   * @param {Object***REMOVED*** res - the response object
   * @param {Object***REMOVED*** requestOptions - the request options object
   * @param {Number***REMOVED*** rateLimit - rate limit constant
   * @return {Object***REMOVED*** - request object with error messaging added
  */
  parseErrors(res, requestOptions, rateLimit) {
    const { status ***REMOVED*** = res;
    const err = { errors: true ***REMOVED***;
    const region = this.getRequestedRegion();

    switch (status) {
      case 401:
        return {
          ...err, messages: UNAUTHORIZED, region, debug: requestOptions, rateLimit, ...res,
        ***REMOVED***;
      default:
        return {
          ...err, messages: UNKNOWN, region, debug: requestOptions, rateLimit, ...res,
        ***REMOVED***;
    ***REMOVED***
  ***REMOVED***

  /**
   * Return request status
   * @return {String***REMOVED*** - Status
  */
  status() {
    return fetch(this.options.status);
  ***REMOVED***

  /**
   * format rate limit headers
   * @param {Object***REMOVED*** headers - rate limit headers
   * @return {Object***REMOVED*** formatted rate limit headers
   */
  parseRateLimit(headers) {
    return {
      limit: headers.get('x-ratelimit-limit'),
      remaining: headers.get('x-ratelimit-remaining'),
      reset: headers.get('x-ratelimit-reset'),
      requestId: headers.get('x-request-id'),
    ***REMOVED***;
  ***REMOVED***
***REMOVED***
