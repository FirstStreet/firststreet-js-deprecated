class HistoricEventProperties {
  _eventData;

  constructor(data) {
    this._eventData = data;
  }

  get total() {
    if (this._eventData) {
      return this._eventData.total;
    }
    return undefined;
  }

  get affected() {
    if (this._eventData) {
      return this._eventData.affected;
    }
    return undefined;
  }
}
module.exports = HistoricEventProperties;
