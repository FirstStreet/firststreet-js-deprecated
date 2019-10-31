const Response = require('../Response');

class Tidal extends Response {
  constructor(data) {
    super(data);
    this.data = data;
  ***REMOVED***

  getData(key) {
    const results = this.results.map(item => item.floodData.map(floodData => floodData.data.find((data) => {
      if (data.type === key) {
        return data;
      ***REMOVED***
      return null;
    ***REMOVED***)));

    return results[0];
  ***REMOVED***

  get maxDepth() {
    return this.getData('maxdepth');
  ***REMOVED***

  get lot() {
    return this.getData('lot');
  ***REMOVED***

  get neighborhood() {
    return this.getData('neighborhood');
  ***REMOVED***

  get road() {
    return this.getData('road');
  ***REMOVED***
***REMOVED***

module.exports = Tidal;
