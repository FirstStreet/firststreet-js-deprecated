class AALAnnualLoss {
  _aalData;

  constructor(data) {
    this._aalData = data;
  }

  get year() {
    return this._aalData.year;
  }

  get data() {
    return this._aalData.data;
  }
}

module.exports = AALAnnualLoss;
