const isArray = require('lodash/isArray');
const FsidResponse = require('../fsidResponse');
const NfipEstimate = require('./NfipEstimate');

class NfipPropertySummary extends FsidResponse {
  _nfipData;

  constructor(data) {
    super(data);
    if (data && data.data && isArray(data.data)) {
      this._nfipData = data.data.map((r) => new NfipEstimate(r));
    } else if (data && data.data === null) {
      this._nfipData = null;
    }
  }

  get data() {
    return this._nfipData;
  }
}

module.exports = NfipPropertySummary;
