const FirstStreet = require('../../__mocks__/FirstStreet');
const propertyByID = require('../../__mocks__/propertyDataById');
const cityByID = require('../../__mocks__/cityDataById');

const validMethods = ['getPropertyByID', 'getCityByID', 'getPropertyByLatLng', 'getCityByLatLng', 'getPropertyByAddress', 'getCityByAddress'];

describe('summary', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
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

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await floodIQ.parcel.getPropertyByLatLng(propertyByID.geometry.center.coordinates[1], propertyByID.geometry.center.coordinates[0]);

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(propertyByID.primaryNumber)
  });

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await floodIQ.parcel.getCityByLatLng(cityByID.geometry.center.coordinates[1], cityByID.geometry.center.coordinates[0]);
    expect(city).toMatchSnapshot();
    expect(city.name).toBe(cityByID.name);
  });

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await floodIQ.parcel.getPropertyByAddress("212 appoquin s, middletown, delware")

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(propertyByID.primaryNumber);
  });

});
