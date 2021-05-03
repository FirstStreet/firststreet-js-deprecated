class HistoricProperty {
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

  get depth() {
    return this._data.depth;
  }
}

module.exports = HistoricProperty;
