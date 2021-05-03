class AALForLocation {
  _data;

  constructor(data) {
    this._data = data;
  }

  get year() {
    return this._data.year;
  }

  get totalLoss() {
    return this._data.totalLoss;
  }

  get count() {
    return this._data.count;
  }

  get floodFactor() {
    return this._data.floodFactor;
  }
}

module.exports = AALForLocation;
