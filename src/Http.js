const fetch = require('node-fetch');
const isArray = require('lodash/isArray');
const isPlainObject = require('lodash/isPlainObject');
const {
  UNKNOWN, UNAUTHORIZED, RATE_LIMIT, NOT_FOUND, INTERNAL, NO_BODY, OFFLINE, NOT_ACCEPTABLE, NETWORK_ERROR,
***REMOVED*** = require('./Errors');

const defaults = {
  host: process.env.HTTP_HOST,
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

    switch (status) {
      case 401:
        return {
          ...err, messages: UNAUTHORIZED, debug: requestOptions, rateLimit, ...res,
        ***REMOVED***;
      case 404:
        return {
          ...err, messages: NOT_FOUND, debug: requestOptions, rateLimit, ...res,
        ***REMOVED***;
      case 500:
        return {
          ...err, messages: INTERNAL, debug: requestOptions, rateLimit, ...res,
        ***REMOVED***;
      case 429:
        return {
          ...err, messages: RATE_LIMIT, debug: requestOptions, rateLimit, ...res,
        ***REMOVED***;
      case 503:
        return {
          ...err, messages: OFFLINE, debug: requestOptions, rateLimit, ...res,
        ***REMOVED***;
      case 406:
        return {
          ...err, messages: NOT_ACCEPTABLE, debug: requestOptions, rateLimit, ...res,
        ***REMOVED***;
      default:
        return {
          ...err, messages: UNKNOWN, debug: requestOptions, rateLimit, ...res,
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

  /**
   * Perform get request to api
   * @param {String***REMOVED*** endpoint - request URL endpoint
   * @param {Object***REMOVED*** query - the query??
  */
  execute(endpoint = null, query = null) {
    const requestOptions = { ...this.options ***REMOVED***;
    if (endpoint === null) {
      return new Error('HTTP Error: No endpoint to provide a request to.');
    ***REMOVED***

    requestOptions.url += endpoint;

    if (query) {
      requestOptions.url += `?${this.serialize(query)***REMOVED***`;
    ***REMOVED***

    return new Promise((resolve, reject) => {
      let rateLimit = null;

      fetch(requestOptions.url, {
        method: requestOptions.method,
        headers: requestOptions.headers,
      ***REMOVED***).then((res) => {
        rateLimit = this.parseRateLimit(res.headers);
        if (res.status !== 200) {
          return this.parseErrors(res, requestOptions, rateLimit);
        ***REMOVED***
        return res.json();
      ***REMOVED***).then((body) => {
        // Empty responses
        if (!body) {
          return reject({
            errors: true, messages: NO_BODY, debug: requestOptions, rateLimit,
          ***REMOVED***);
        ***REMOVED***
        // Status code not 200
        if (body.errors) {
          return reject({
            ...body, debug: requestOptions, rateLimit,
          ***REMOVED***);
        ***REMOVED***

        return resolve({
          errors: null,
          body,
          debug: requestOptions,
          rateLimit,
        ***REMOVED***);
      ***REMOVED***).catch(err => reject({
        errors: true,
        messages: NETWORK_ERROR,
        details: err,
        debug: requestOptions,
        rateLimit,
      ***REMOVED***));
    ***REMOVED***);
  ***REMOVED***
***REMOVED***
