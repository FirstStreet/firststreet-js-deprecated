class HistoricData {
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

  get data() {
    return this._historicData.data;
  }
}

module.exports = HistoricData;
