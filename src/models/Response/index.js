// readonly

/**
 * Response Model
 * @typedef {Object***REMOVED*** Response
 * @property {number***REMOVED*** FSID - The location unique identifier
 * @property {Object***REMOVED*** results - Results of the query
*/
class Response {
  constructor(data) {
    this.data = data;
  ***REMOVED***

  get FSID() {
    return this.data.FSID;
  ***REMOVED***

  // results is an object of data that is associated with the data call
  get results() {
    return this.data.results;
  ***REMOVED***

  // raw is the literal response
  get raw() {
    return this.data;
  ***REMOVED***

  getData(key, floodID, year) {
    const matchingFloodIdData = this.results.find(results => results.floodID === floodID);

    if (!matchingFloodIdData) {
      return null;
    ***REMOVED***

    const correctYearData = matchingFloodIdData.floodData.find((data) => {
      if (data.year === year) {
        return data;
      ***REMOVED***
      return null;
    ***REMOVED***);

    if (!correctYearData) {
      return null;
    ***REMOVED***
    const results = correctYearData.data.find((item) => {
      if (item.type === key) {
        return item;
      ***REMOVED***
      return null;
    ***REMOVED***);

    return results;
  ***REMOVED***
***REMOVED***

module.exports = Response;
