class AalForLocation {
  _aalData;

  constructor(data) {
    this._aalData = data;
  }

  get year() {
    if (this._aalData) {
      return this._aalData.year;
    }
    return undefined;
  }

  get totalLoss() {
    if (this._aalData) {
      return this._aalData.totalLoss;
    }
    return undefined;
  }

  get count() {
    if (this._aalData) {
      return this._aalData.count;
    }
    return undefined;
  }

  get floodFactor() {
    if (this._aalData) {
      return this._aalData.floodFactor;
    }
    return undefined;
  }
}

module.exports = AalForLocation;
