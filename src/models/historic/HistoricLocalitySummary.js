const isArray = require('lodash/isArray');
const FsidResponse = require('../fsidResponse');
const HistoricData = require('./HistoricData');

class HistoricLocalitySummary extends FsidResponse {
  _historic;

  constructor(data) {
    super(data);
    if (data && data.historic && isArray(data.historic)) {
      this._historic = data.historic.map((r) => new HistoricData(r));
    } else if (data && data.historic === null) {
      this._historic = null;
    }
  }

  get historic() {
    return this._historic;
  }
}

module.exports = HistoricLocalitySummary;
