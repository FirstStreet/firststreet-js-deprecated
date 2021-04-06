const ResponseSummary = require('../ResponseSummary');

/**
 * @typedef {import('../../Api/parcel').default} LocationGeometry
 */

/**
 * A city property
 * @typedef {Object} CityProperty
 * @property {number} FSID - The city unique identifier
 * @property {string} name - The city name
 * @property {string} state - The city state
 * @property {LocationGeometry} geometry - The viewport and bounding box of a location
*/

class City extends ResponseSummary {
  constructor(data) {
    super(data);
    this.data = data;
    this.location = this.results.location;
  }

  get FSID() {
    return this.location.FSID;
  }

  get name() {
    return this.location.name;
  }

  get state() {
    return this.location.state;
  }

  get polygon() {
    // todo: parse nested coordinates arrays
    return this.location.geometry.polygon.coordinates;
  }

  get polygonGeoJSON() {
    return this.location.geometry.polygon;
  }

  get center() {
    return this.location.geometry.center.coordinates;
  }

  get centerGeoJSON() {
    return this.location.geometry.center;
  }

  get bounds() {
    // todo: parse nested coordinates arrays
    return this.location.geometry.bbox.coordinates;
  }

  get boundsGeoJSON() {
    return this.location.geometry.bbox;
  }

  get firstFloodRisk() {
    return this.results.firstFloodRisk;
  }

  get floodRisks() {
    return this.results.floodRisks;
  }
}

module.exports = City;
