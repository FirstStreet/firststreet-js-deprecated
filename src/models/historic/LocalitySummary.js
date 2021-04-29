const { isArray } = require('lodash');
const ResponseSummary = require('../ResponseSummary');
const HistoricData = require('./HistoricData');

class HistoricLocalitySummary extends ResponseSummary {
  #historic = []

  constructor(data) {
    super(data);
    if (data.historic && isArray(data.historic)) {
      this.#historic = data.historic.map(r => new HistoricData(r));
    }
  }

  get historic() {
    return this.#historic;
  }
}

module.exports = HistoricLocalitySummary;
