const { isArray } = require('lodash');
const FsidResponse = require('../FsidResponse');
const NfipEstimate = require('./NfipEstimate');

class NfipPropertySummary extends FsidResponse {
  _nfipData=[];

  constructor(data) {
    super(data);
    if (data && data.data && isArray(data.data)) {
      this._nfipData = data.data.map((r) => new NfipEstimate(r));
    }
  }

  get data() {
    return this._nfipData;
  }
}

module.exports = NfipPropertySummary;
