const { isArray } = require('lodash');
const ResponseSummary = require('../../../ResponseSummary');
const HistoricProperty = require('./HistoricProperty');

class HistoricPropertySummary extends ResponseSummary {
  #historic = []

  constructor(data) {
    super(data);
    if (data.historic && isArray(data.historic)) {
      this.#historic = data.historic.map(r => new HistoricProperty(r));
    }
  }

  get historic() {
    return this.#historic;
  }
}

module.exports = HistoricPropertySummary;
