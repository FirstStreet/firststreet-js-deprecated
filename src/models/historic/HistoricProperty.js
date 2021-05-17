class HistoricProperty {
  _historicData;

  constructor(data) {
    this._historicData = data;
  }

  get eventId() {
    if (this._historicData) {
      return this._historicData.eventId;
    }
    return undefined;
  }

  get name() {
    if (this._historicData) {
      return this._historicData.name;
    }
    return undefined;
  }

  get type() {
    if (this._historicData) {
      return this._historicData.type;
    }
    return undefined;
  }

  get depth() {
    if (this._historicData) {
      return this._historicData.depth;
    }
    return undefined;
  }
}

module.exports = HistoricProperty;
