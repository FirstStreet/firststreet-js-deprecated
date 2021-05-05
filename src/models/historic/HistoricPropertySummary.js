const { isArray } = require('lodash');
const FsidResponse = require('../FsidResponse');
const HistoricProperty = require('./HistoricProperty');

class HistoricPropertySummary extends FsidResponse {
  _historic = [];

  constructor(data) {
    super(data);
    if (data && data.historic && isArray(data.historic)) {
      this._historic = data.historic.map((r) => new HistoricProperty(r));
    }
  }

  get historic() {
    return this._historic;
  }
}

module.exports = HistoricPropertySummary;
