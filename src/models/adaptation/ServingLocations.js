class ServingLocations {
  _servingLocationData
;

  constructor(data) {
    this._servingLocationData = data;
  }

  get property() {
    if (this._servingLocationData) {
      return this._servingLocationData.property;
    }
    return undefined;
  }

  get neighborhood() {
    if (this._servingLocationData) {
      return this._servingLocationData.neighborhood;
    }
    return undefined;
  }

  get zcta() {
    if (this._servingLocationData) {
      return this._servingLocationData.zcta;
    }
    return undefined;
  }

  get tract() {
    if (this._servingLocationData) {
      return this._servingLocationData.tract;
    }
    return undefined;
  }

  get city() {
    if (this._servingLocationData) {
      return this._servingLocationData.city;
    }
    return undefined;
  }

  get county() {
    if (this._servingLocationData) {
      return this._servingLocationData.county;
    }
    return undefined;
  }

  get cd() {
    if (this._servingLocationData) {
      return this._servingLocationData.cd;
    }
    return undefined;
  }

  get state() {
    if (this._servingLocationData) {
      return this._servingLocationData.state;
    }
    return undefined;
  }
}
module.exports = ServingLocations;
