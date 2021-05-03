class HistoricEventProperties {
  _eventData;

  constructor(data) {
    this._eventData = data;
  }

  get total() {
    return this._eventData.total;
  }

  get affected() {
    return this._eventData.affected;
  }
}
module.exports = HistoricEventProperties;
