class AALForLocation {
  _aalData;

  constructor(data) {
    this._aalData = data;
  }

  get year() {
    return this._aalData.year;
  }

  get totalLoss() {
    return this._aalData.totalLoss;
  }

  get count() {
    return this._aalData.count;
  }

  get floodFactor() {
    return this._aalData.floodFactor;
  }
}

module.exports = AALForLocation;
