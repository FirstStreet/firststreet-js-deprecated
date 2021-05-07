class HistoricData {
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

  get data() {
    if (this._historicData) {
      return this._historicData.data;
    }
    return undefined;
  }
}

module.exports = HistoricData;
