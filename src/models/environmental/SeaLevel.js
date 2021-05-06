const isArray = require('lodash/isArray');

const FsidResponse = require('../fsidResponse');
const TideStation = require('./TideStation');

class SeaLevel extends FsidResponse {
  _tideStations;

  constructor(data) {
    super(data);
    if (data && data.tideStation && isArray(data.tideStation)) {
      this._tideStations = data.tideStation.map((r) => new TideStation(r));
    } else if (data && data.tideStation === null) {
      this._tideStations = null;
    }
  }

  get tideStation() {
    return this._tideStations;
  }
}

module.exports = SeaLevel;
