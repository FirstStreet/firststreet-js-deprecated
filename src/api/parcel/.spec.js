const FloodIQ = require('../../__mocks__/FloodIQ');
const propertyByID = require('../../__mocks__/propertyDataById');
const cityByID = require('../../__mocks__/cityDataById');

const validMethods = ['getPropertyByID', 'getCityByID', 'getPropertyByLatLng', 'getCityByLatLng', 'getPropertyByAddress', 'getCityByAddress'];

describe('parcel', () => {
  const floodIQ = new FloodIQ('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com'
  ***REMOVED***);

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(floodIQ.parcel[method]).toBeDefined();
    ***REMOVED***);
  ***REMOVED***);

  it('.getPropertyByID should get property by ID', async () => {
    const property = await floodIQ.parcel.getPropertyByID(propertyByID.ID);

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(propertyByID.primaryNumber);
  ***REMOVED***);

  it('.getCityById should get city by ID', async () => {
    const city = await floodIQ.parcel.getCityByID(cityByID.ID);

    expect(city).toMatchSnapshot();
    expect(city.name).toBe(cityByID.name);
  ***REMOVED***);

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await floodIQ.parcel.getPropertyByLatLng(propertyByID.geometry.center.coordinates[1], propertyByID.geometry.center.coordinates[0]);

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(propertyByID.primaryNumber)
  ***REMOVED***);

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await floodIQ.parcel.getCityByLatLng(cityByID.geometry.center.coordinates[1], cityByID.geometry.center.coordinates[0]);
    expect(city).toMatchSnapshot();
    expect(city.name).toBe(cityByID.name);
  ***REMOVED***);

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await floodIQ.parcel.getPropertyByAddress("212 appoquin s, middletown, delware")

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(propertyByID.primaryNumber);
  ***REMOVED***);

***REMOVED***);
