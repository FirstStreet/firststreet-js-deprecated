class HistoricData {
  _data;

  constructor(data) {
    this._data = data;
  }

  get eventId() {
    return this._data.eventId;
  }

  get name() {
    return this._data.name;
  }

  get type() {
    return this._data.type;
  }

  get data() {
    return this._data.data;
  }
}

module.exports = HistoricData;
