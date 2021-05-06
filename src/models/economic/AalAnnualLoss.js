class AalAnnualLoss {
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

  get data() {
    if (this._aalData) {
      return this._aalData.data;
    }
    return undefined;
  }
}

module.exports = AalAnnualLoss;
