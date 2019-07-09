const City = require('./index');
const cityById = require('../../__mocks__/cityDataById');

describe('City', () => {
  let cityModel = null;
  beforeEach(() => {
    cityModel = new City(cityById);
  });

  it('should initialize', () => {
    expect(cityModel).toMatchSnapshot();
  });

  it('should have name', () => {
    expect(cityModel.name).toBeDefined();
  });

  it('should have state', () => {
    expect(cityModel.state).toBeDefined();
  });

  it('should have polygon data', () => {
    expect(cityModel.polygon).toBeDefined();
  });

  it('should have polygon geoJSON', () => {
    expect(cityModel.polygonGeoJSON).toBeDefined();
  });

  it('should have center data', () => {
    expect(cityModel.center).toBeDefined();
  });

  it('should have center geoJSON', () => {
    expect(cityModel.centerGeoJSON).toBeDefined();
  });

  it('should have bounds data', () => {
    expect(cityModel.bounds).toBeDefined();
  });

  it('should have bounds geoJSON', () => {
    expect(cityModel.boundsGeoJSON).toBeDefined();
  });
});
