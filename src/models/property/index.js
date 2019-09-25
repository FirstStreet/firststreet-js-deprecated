const BaseModel = require('../Base');

/**
 * @typedef {import('../../Api/parcel').default} ParcelGeometry
*/

/**
 * A Property
 * @typedef {Object} ParcelProperty
 * @property {number} FSID - The parcel unique identifier
 * @property {string} primaryNumber - The street number
 * @property {string} streetName - The street number
 * @property {string} lastUpdated - date property data last updated
 * @property {string} predirection - an address element placed before the street
 * name that indicates its the geographic location
 * @property {string} postdirection - an address element placed after the street
 * name as a trailing designator such as ST for street or RD for road
 * @property {number} zipCode - The property zip code
 * @property {ParcelCityForProperty} city - The property city
 * @property {string} state - The property state
 * @property {ParcelGeometry} geometry - The viewport and bounding box of a location
 * @property {number} elevation - The elevation of a property
 * @property {number} lotSize - The size of the property
 * @property {number} floorArea - The size of the home
 * @property {string} landUse - The lot land use designator
 * @property {number} countyFips - The county federal information processing standards code
 * @property {number} distance - The distance
*/

class Property extends BaseModel {
  constructor(data) {
    super(data);
    this.data = data;
  }

  get primaryNumber() {
    return this.data.primaryNumber;
  }

  get lastUpdated() {
    return this.data.lastUpdated;
  }

  get streetName() {
    return this.data.streetName;
  }

  get zipCode() {
    return this.data.zipCode;
  }

  get city() {
    // this field is a relationship to a city parcel
    return this.data.city.Name;
  }

  get cityID() {
    return this.data.city.ID;
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

  get elevation() {
    return this.data.elevation;
  }

  get femaZone() {
    return this.data.femaZone;
  }

  get lotSize() {
    return this.data.lotSize;
  }

  get floorArea() {
    return this.data.floorArea;
  }

  get landUse() {
    return this.data.landUse;
  }

  get countyFips() {
    return this.data.countyFips;
  }

  get distance() {
    return this.data.distance;
  }
}

module.exports = Property;
