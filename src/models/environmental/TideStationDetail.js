const ApiResponse = require('../apiResponse');

class TideStationDetail extends ApiResponse {
  get name() {
    if (this._data) {
      return this._data.name;
    }
    return undefined;
  }

  get noaaId() {
    if (this._data) {
      return this._data.noaaId;
    }
    return undefined;
  }

  get slrHistoric() {
    if (this._data) {
      return this._data.slrHistoric;
    }
    return undefined;
  }

  get slrProjected() {
    if (this._data) {
      return this._data.slrProjected;
    }
    return undefined;
  }

  get center() {
    if (this._data) {
      return this._data.center;
    }
    return undefined;
  }
}
module.exports = TideStationDetail;
