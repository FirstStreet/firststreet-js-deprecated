class HistoricProperty {
  _historicData;

  constructor(data) {
    this._historicData = data;
  }

  get eventId() {
    return this._historicData.eventId;
  }

  get name() {
    return this._historicData.name;
  }

  get type() {
    return this._historicData.type;
  }

  get depth() {
    return this._historicData.depth;
  }
}

module.exports = HistoricProperty;
