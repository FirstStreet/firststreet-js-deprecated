const Response = require('../Response');

class MarketValueImpact extends Response {
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

  get lossTotals() {
    return this.getData('loss_total');
  ***REMOVED***
***REMOVED***

module.exports = MarketValueImpact;
