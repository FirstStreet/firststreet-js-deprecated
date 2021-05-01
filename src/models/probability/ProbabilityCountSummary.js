const FsidResponse = require('../FsidResponse');

class ProbabilityCountSummary extends FsidResponse {
_data;

constructor(data) {
  super(data);
  this._data = data;
}

get state() {
  return this._data.state;
}

get city() {
  return this._data.city;
}

get county() {
  return this._data.county;
}

get zcta() {
  return this._data.zcta;
}

get cd() {
  return this._data.cd;
}

get neighborhood() {
  return this._data.neighborhood;
}

get tract() {
  return this._data.tract;
}
}
module.exports = ProbabilityCountSummary;
