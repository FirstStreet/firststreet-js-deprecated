const Property = require('./index');
const propertyById = require('../../__mocks__/propertyDataById');

describe('Property', () => {
  let propertyModel = null;
  beforeEach(() => {
    propertyModel = new Property(propertyById);
  });

  it('should initalize', () => {
    expect(propertyModel).toMatchSnapshot();
  });

  it('should have primaryNumber', () => {
    expect(propertyModel.primaryNumber).toBeDefined();
  });

  it('should have lastUpdated', () => {
    expect(propertyModel.lastUpdated).toBeDefined();
  });

  it('should have streetName', () => {
    expect(propertyModel.streetName).toBeDefined();
  });

  it('should have zipCode', () => {
    expect(propertyModel.zipCode).toBeDefined();
  });

  it('should have city', () => {
    expect(propertyModel.city).toBeDefined();
  });

  it('should have polygon data', () => {
    expect(propertyModel.polygon).toBeDefined();
  });

  it('should have center data', () => {
    expect(propertyModel.center).toBeDefined();
  });

  it('should have bounds data', () => {
    expect(propertyModel.bounds).toBeDefined();
  });

  it('should have elevation', () => {
    expect(propertyModel.elevation).toBeDefined();
  });

  it('should have femaZone', () => {
    expect(propertyModel.femaZone).toBeDefined();
  });

  it('should have lotSize', () => {
    expect(propertyModel.lotSize).toBeDefined();
  });

  it('should have floorArea', () => {
    expect(propertyModel.floorArea).toBeDefined();
  });

  it('should have landUse', () => {
    expect(propertyModel.floorArea).toBeDefined();
  });

  it('should have countyFips', () => {
    expect(propertyModel.countyFips).toBeDefined();
  });

  it('should have distance', () => {
    expect(propertyModel.distance).toBeDefined();
  });
});
