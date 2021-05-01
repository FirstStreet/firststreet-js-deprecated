const { isArray } = require('lodash');
const FsidResponse = require('../FsidResponse');
const HistoricProperty = require('./HistoricProperty');

class HistoricPropertySummary extends FsidResponse {
  #historic = [];

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
