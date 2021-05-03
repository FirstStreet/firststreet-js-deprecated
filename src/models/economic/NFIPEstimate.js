class NFIPEstimate {
  _data;

  constructor(data) {
    this._data = data;
  }

  get estimate() {
    return this._data.estimate;
  }

  get building() {
    return this._data.building;
  }

  get contents() {
    return this._data.contents;
  }
}

module.exports = NFIPEstimate;
