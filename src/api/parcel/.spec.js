const FloodIQ = require('../../__mocks__/FloodIQ.js');
const propertyByID = require('../../__mocks__/propertyDataById');
const cityByID = require('../../__mocks__/cityDataById');

const validMethods = ['getPropertyByID', 'getCityByID', 'getParcelByLatLng'];

describe('parcel', () => {
  const floodIQ = new FloodIQ('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com'
  });

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(floodIQ.parcel[method]).toBeDefined();
    });
  });

  it('.getPropertyByID should get property by ID', async () => {
    const property = await floodIQ.parcel.getPropertyByID(propertyByID.ID);

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(propertyByID.primaryNumber);
  });

  it('.getCityById should get city by ID', async () => {
    const city = await floodIQ.parcel.getCityByID(cityByID.ID);

    expect(city).toMatchSnapshot();
    expect(city.name).toBe(cityByID.name);
  });

  it('.getParcelByLatLng should get property by lat, lng', async () => {
    const property = await floodIQ.parcel.getParcelByLatLng(propertyByID.geometry.center.coordinates[1], propertyByID.geometry.center.coordinates[0]);

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(propertyByID.primaryNumber)
  });

  it('.getParcelByLatLng should get city by lat, lng', async () => {
    const city = await floodIQ.parcel.getParcelByLatLng(propertyByID.geometry.center.coordinates[1], propertyByID.geometry.center.coordinates[0], 'city');

    expect(city).toMatchSnapshot();
    expect(city.name).toBe(cityByID.name);
  });

});