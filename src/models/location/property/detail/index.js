const ResponseSummary = require('../../../ResponseSummary');

class LocationPropertyDetail extends ResponseSummary {
  get streetNumber() {
    return this.data.streetNumber;
  }

  get route() {
    return this.data.route;
  }

  get elevation() {
    return this.data.elevation;
  }

  get footprintId() {
    return this.data.footprintId;
  }

  get city() {
    return this.data.city;
  }

  get state() {
    return this.data.state;
  }

  get county() {
    return this.data.county;
  }

  get cd() {
    return this.data.cd;
  }

  get zcta() {
    return this.data.zcta;
  }

  get tract() {
    return this.data.tract;
  }

  get neighborhood() {
    return this.data.neighborhood;
  }

  get fema() {
    return this.data.fema;
  }

  get geometry() {
    return this.data.geometry;
  }

  get floorElevation() {
    return this.data.floorElevation;
  }

  get building() {
    return this.data.building;
  }

  get residential() {
    return this.data.residential;
  }

  get floodType() {
    return this.data.floodType;
  }
}

module.exports = LocationPropertyDetail;
