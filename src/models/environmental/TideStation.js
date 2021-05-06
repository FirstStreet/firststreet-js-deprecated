class TideStation {
  _tideStnData;

  constructor(data) {
    this._tideStnData = data;
  }

  get tideStationId() {
    if (this._tideStnData) {
      return this._tideStnData.tideStationId;
    }
    return undefined;
  }

  get noaaId() {
    if (this._tideStnData) {
      return this._tideStnData.noaaId;
    }
    return undefined;
  }

  get name() {
    if (this._tideStnData) {
      return this._tideStnData.name;
    }
    return undefined;
  }
}
module.exports = TideStation;
