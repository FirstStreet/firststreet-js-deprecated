const FsidResponse = require('../FsidResponse');

class ProbabilityCountSummary extends FsidResponse {
_probabilityData;

constructor(data) {
  super(data);
  this._probabilityData = data;
}

get state() {
  return this._probabilityData.state;
}

get city() {
  return this._probabilityData.city;
}

get county() {
  return this._probabilityData.county;
}

get zcta() {
  return this._probabilityData.zcta;
}

get cd() {
  return this._probabilityData.cd;
}

get neighborhood() {
  return this._probabilityData.neighborhood;
}

get tract() {
  return this._probabilityData.tract;
}
}
module.exports = ProbabilityCountSummary;
