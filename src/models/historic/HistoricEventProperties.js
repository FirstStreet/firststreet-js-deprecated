
class HistoricEventProperties {
  _data;

  constructor(data) {
    this._data = data;
  }

  get total() {
    return this._data.total;
  }

  get affected() {
    return this._data.affected;
  }
}
module.exports = HistoricEventProperties;
