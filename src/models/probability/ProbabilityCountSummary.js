const FsidResponse = require('../FsidResponse');

class ProbabilityCountSummary extends FsidResponse {
_probabilityData;

constructor(data) {
  super(data);
  this._probabilityData = data;
}

get state() {
  if (this._probabilityData) {
    return this._probabilityData.state;
  }
  return undefined;
}

get city() {
  if (this._probabilityData) {
    return this._probabilityData.city;
  }
  return undefined;
}

get county() {
  if (this._probabilityData) {
    return this._probabilityData.county;
  }
  return undefined;
}

get zcta() {
  if (this._probabilityData) {
    return this._probabilityData.zcta;
  }
  return undefined;
}

get cd() {
  if (this._probabilityData) {
    return this._probabilityData.cd;
  }
  return undefined;
}

get neighborhood() {
  if (this._probabilityData) {
    return this._probabilityData.neighborhood;
  }
  return undefined;
}

get tract() {
  if (this._probabilityData) {
    return this._probabilityData.tract;
  }
  return undefined;
}
}
module.exports = ProbabilityCountSummary;
