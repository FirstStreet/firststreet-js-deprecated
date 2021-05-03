class NFIPEstimate {
  _nfipData;

  constructor(data) {
    this._nfipData = data;
  }

  get estimate() {
    return this._nfipData.estimate;
  }

  get building() {
    return this._nfipData.building;
  }

  get contents() {
    return this._nfipData.contents;
  }
}

module.exports = NFIPEstimate;
