const { isArray } = require('lodash');
const FsidResponse = require('../FsidResponse');
const NFIPEstimate = require('./NFIPEstimate');

class NFIPPropertySummary extends FsidResponse {
  constructor(data) {
    super(data);
    if (data.data && isArray(data.data)) {
      this._nfipData = data.data.map((r) => new NFIPEstimate(r));
    }
  }

  get data() {
    return this._nfipData;
  }
}

module.exports = NFIPPropertySummary;
