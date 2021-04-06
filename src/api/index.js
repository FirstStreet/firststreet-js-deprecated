const dataSummary = require('./summary');
// const hurricane = require('./hurricane');
// const tidal = require('./tidal');
// const mvi = require('./marketValueImpact');

/**
 * api wrapper
 * @constructor
 * @param {Object***REMOVED*** http - Http request module
 */
class Api {
  constructor(http) {
    this.http = http;
    this.type = null;
    this.params = null;
    this.lookupType = '';
  ***REMOVED***

  setLookupType(params) {
    if (params.fsid) {
      this.lookupType = 'fsid';
    ***REMOVED*** else if (params.lat && params.lng) {
      this.lookupType = 'coordinate';
    ***REMOVED*** else if (params.address) {
      this.lookupType = 'address';
    ***REMOVED*** else {
      throw new Error('Invalid lookup parameters');
    ***REMOVED***
  ***REMOVED***

  property(serviceName) {
    let response = null;

    switch (serviceName) {
      case 'summary': {
        const data = this.summary;

        if (this.lookupType === 'fsid') {
          response = data.getPropertyByFSID(this.params);
        ***REMOVED***
        if (this.lookupType === 'address') {
          response = data.getPropertyByAddress(this.params);
        ***REMOVED***
        if (this.lookupType === 'coordinate') {
          response = data.getPropertyByLatLng(this.params);
        ***REMOVED***
        break;
      ***REMOVED***

      case 'detail': {
        // todo: write handlers for location detail service
        return null;
      ***REMOVED***

      default: {
        return null;
      ***REMOVED***
    ***REMOVED***

    return response;
  ***REMOVED***

  location(service) {
    // service is a str mapping to api location services
    switch (this.type) {
      case 'property': {
        return this.property(service);
      ***REMOVED***

      default: {
        return null;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***

  lookup(type, params) {
    // type equals the locationtype
    // params can be an fsid, lat & lng, or an address
    if (!type) {
      throw new Error('Missing location type.');
    ***REMOVED***

    if (!params) {
      throw new Error('Missing lookup parameters.');
    ***REMOVED***

    this.type = type;
    this.params = params;
    this.setLookupType(params);

    return this;
  ***REMOVED***

  bindTo(context) {
    const ctx = context;

    ctx.lookup = this.lookup;
    ctx.location = this.location;
    ctx.property = this.property;
    ctx.setLookupType = this.setLookupType;

    ctx.summary = dataSummary(this.http);
    // ctx.hurricane = hurricane(this.http);
    // ctx.tidal = tidal(this.http);
    // ctx.mvi = mvi(this.http);
  ***REMOVED***
***REMOVED***

module.exports = Api;
