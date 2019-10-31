const Response = require('../Response');

class MarketValueImpact extends Response {
  constructor(data) {
    super(data);
    this.data = data;
  }

  getData(key) {
    const results = this.results.map(item => item.floodData.map(floodData => floodData.data.find((data) => {
      if (data.type === key) {
        return data;
      }
      return null;
    })));

    return results[0];
  }

  get lossTotals() {
    return this.getData('loss_total');
  }
}

module.exports = MarketValueImpact;
