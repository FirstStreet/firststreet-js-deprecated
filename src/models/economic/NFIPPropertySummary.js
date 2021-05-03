const { isArray } = require('lodash');
const FsidResponse = require('../FsidResponse');
const NFIPEstimate = require('./NFIPEstimate');

class NFIPPropertySummary extends FsidResponse {
  _data;

  constructor(data) {
    super(data);
    if (data.data && isArray(data.data)) {
      this._data = data.data.map(r => new NFIPEstimate(r));
    }
  }

  get data() {
    return this._data;
  }
}

module.exports = NFIPPropertySummary;
