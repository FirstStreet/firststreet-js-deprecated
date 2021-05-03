const { isArray } = require('lodash');
const FsidResponse = require('../FsidResponse');
const HistoricData = require('./HistoricData');

class HistoricLocalitySummary extends FsidResponse {
  _historic = [];

  constructor(data) {
    super(data);
    if (data.historic && isArray(data.historic)) {
      this._historic = data.historic.map(r => new HistoricData(r));
    }
  }

  get historic() {
    return this._historic;
  }
}

module.exports = HistoricLocalitySummary;
