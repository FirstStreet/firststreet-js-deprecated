class AALAnnualLoss {
  _data;

  constructor(data) {
    this._data = data;
  }

  get year() {
    return this._data.year;
  }

  get data() {
    return this._data.data;
  }
}

module.exports = AALAnnualLoss;
