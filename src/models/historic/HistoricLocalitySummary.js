const { isArray } = require('lodash');
const FsidResponse = require('../FsidResponse');
const HistoricData = require('./HistoricData');

class HistoricLocalitySummary extends FsidResponse {
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
