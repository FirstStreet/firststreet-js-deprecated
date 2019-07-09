const BaseModel = require('../Base/index');

/**
 * @typedef {import('../../Api/parcel').default} ParcelGeometry
 */

/**
 * A Parcel City
 * @typedef {Object} ParcelCity
 * @property {number} ID - The city unique identifier
 * @property {string} name - The city name
 * @property {string} state - The city state
 * @property {ParcelGeometry} geometry - The viewport and bounding box of a location
 */

class City extends BaseModel {
  constructor(data) {
    super(data);
    this.data = data;
  }

  get name() {
    return this.data.name;
  }

  get state() {
    return this.data.state;
  }

  get polygon() {
    // todo: parse nested coordinates arrays
    return this.data.geometry.polygon.coordinates;
  }

  get polygonGeoJSON() {
    return this.data.geometry.polygon;
  }

  get center() {
    return this.data.geometry.center.coordinates;
  }

  get centerGeoJSON() {
    return this.data.geometry.center;
  }

  get bounds() {
    // todo: parse nested coordinates arrays
    return this.data.geometry.bounds.coordinates;
  }

  get boundsGeoJSON() {
    return this.data.geometry.bounds;
  }
}

module.exports = City;
