const Response = require('../Response');

class Hurricane extends Response {
  constructor(data) {
    super(data);
    this.data = data;
  ***REMOVED***

  maxDepth(floodID, year) {
    return this.getData('maxdepth', floodID, year);
  ***REMOVED***

  lot(floodID, year) {
    return this.getData('lot', floodID, year);
  ***REMOVED***

  neighborhood(floodID, year) {
    return this.getData('neighborhood', floodID, year);
  ***REMOVED***

  road(floodID, year) {
    return this.getData('road', floodID, year);
  ***REMOVED***
***REMOVED***

module.exports = Hurricane;
