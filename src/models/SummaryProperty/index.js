const Response = require('../Response');

/**
 * @typedef {import('../../Api/summary').default} LocationGeometry
*/

/**
 * FirstFloodRisk defines a first risk for a location
 * @typedef {Object} FirstFloodRisk
 * @property {string} floodID
 * @property {number} year
*/

/**
 * @typedef {Object} FloodRisk
 * @property {number} year
 * @property {string} floodID
 */

/**
 * @typedef {Array} FloodRisks
 * @property {FloodRisk} floodRisks
*/

/**
 * The recommended city of which is based on the property's zip code from the United States
 * Postal Service
 * @typedef {Object} USPSCity
 * @property {string} name
 * @property {string} state
*/

/**
 * A Property
 * @typedef {Object} SummaryProperty
 * @property {number} FSID - The parcel unique identifier
 * @property {string} primaryNumber - Address primary number
 * @property {string} streetName - Address street name
 * @property {string} lastUpdated - Last time parcel data was updated in the First Street
 * Foundation * API database
 * @property {string} predirection - Address predirection
 * @property {string} postdirection - Address postdirection
 * @property {number} zipCode - Address zip code
 * @property {Object} city - A City is associated with the requested Property. This
 * property may be `null` if the City has not been modeled in our database. If you require a city
 * name for display purposes, use uspsCity
 * @property {string} state - The property state
 * @property {USPSCity} uspsCity
 * @property {ParcelGeometry} geometry - The viewport and bounding box of a location
 * @property {string} femaZone - FEMA Zone
 * @property {number} elevation - The elevation of a property
 * @property {number} lotSize - The size of the property
 * @property {number} countyFips - The county federal information processing standards code
*/

class SummaryProperty extends Response {
  constructor(data) {
    super(data);
    this.data = data;
    this.location = this.results.location;
  }

  get FSID() {
    return this.location.FSID;
  }

  get primaryNumber() {
    return this.location.primaryNumber;
  }

  get lastUpdated() {
    return this.location.lastUpdated;
  }

  get streetName() {
    return this.location.streetName;
  }

  get zipCode() {
    return this.location.zipCode;
  }

  get city() {
    // this field is a relationship to a city parcel
    return this.location.city.Name;
  }

  get cityID() {
    return this.location.city.ID;
  }

  get uspsCity() {
    return this.location.uspsCity;
  }

  get state() {
    return this.location.state;
  }

  get geometry() {
    return this.location.geometry;
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
    return this.location.geometry.bounds.coordinates;
  }

  get boundsGeoJSON() {
    return this.location.geometry.bounds;
  }

  get elevation() {
    return this.location.elevation;
  }

  get femaZone() {
    return this.location.femaZone;
  }

  get lotSize() {
    return this.location.lotSize;
  }

  get countyFips() {
    return this.location.countyFips;
  }

  get firstFloodRisk() {
    return this.results.firstFloodRisk;
  }

  get floodRisks() {
    return this.results.floodRisks;
  }
}

module.exports = SummaryProperty;
