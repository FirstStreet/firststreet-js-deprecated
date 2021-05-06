class NfipEstimate {
  _nfipData;

  constructor(data) {
    this._nfipData = data;
  }

  get estimate() {
    if (this._nfipData) {
      return this._nfipData.estimate;
    }
    return undefined;
  }

  get building() {
    if (this._nfipData) {
      return this._nfipData.building;
    }
    return undefined;
  }

  get contents() {
    if (this._nfipData) {
      return this._nfipData.contents;
    }
    return undefined;
  }
}

module.exports = NfipEstimate;
