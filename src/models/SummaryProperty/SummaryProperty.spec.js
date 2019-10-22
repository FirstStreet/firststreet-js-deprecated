const Property = require('./index');
const summaryMock = require('../../__mocks__/summary');

let summary = null;

describe('Property', () => {
  beforeEach(() => {
    summary = new Property(summaryMock);
  });

  it('should initalize', () => {
    expect(summary).toMatchSnapshot();
  });

  it('should have FSID', () => {
    expect(summary.FSID).toBeDefined();
  });

  it('should have primaryNumber', () => {
    expect(summary.primaryNumber).toBeDefined();
  });

  it('should have lastUpdated', () => {
    expect(summary.lastUpdated).toBeDefined();
  });

  it('should have streetName', () => {
    expect(summary.streetName).toBeDefined();
  });

  it('should have zipCode', () => {
    expect(summary.zipCode).toBeDefined();
  });

  it('should have city', () => {
    expect(summary.city).toBeDefined();
  });

  it('should have state', () => {
    expect(summary.state).toBeDefined();
  });

  it('should have polygon data', () => {
    expect(summary.polygon).toBeDefined();
  });

  it('should have polygon geoJSON', () => {
    expect(summary.polygonGeoJSON).toBeDefined();
  });

  it('should have center data', () => {
    expect(summary.center).toBeDefined();
  });

  it('should have center geoJSON', () => {
    expect(summary.centerGeoJSON).toBeDefined();
  });

  it('should have bounds data', () => {
    expect(summary.bounds).toBeDefined();
  });

  it('should have bounds geoJSON', () => {
    expect(summary.boundsGeoJSON).toBeDefined();
  });

  it('should have elevation', () => {
    expect(summary.elevation).toBeDefined();
  });

  it('should have femaZone', () => {
    expect(summary.femaZone).toBeDefined();
  });

  it('should have lotSize', () => {
    expect(summary.lotSize).toBeDefined();
  });

  it('should have countyFips', () => {
    expect(summary.countyFips).toBeDefined();
  });

  it('should have firstFloodRisk', () => {
    expect(summary.firstFloodRisk).toBeDefined();
  });

  it('should have floodRisks', () => {
    expect(summary.floodRisks).toBeDefined();
  });
});
