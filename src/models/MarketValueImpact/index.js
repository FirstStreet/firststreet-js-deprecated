const Response = require('../Response');

class MarketValueImpact extends Response {
  constructor(data) {
    super(data);
    this.data = data;
  }

  lossTotals(floodID, year) {
    return this.getData('loss_total', floodID, year);
  }
}

module.exports = MarketValueImpact;
