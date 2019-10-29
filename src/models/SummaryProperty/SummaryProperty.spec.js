const Property = require('./index');
const summaryMock = require('../../__mocks__/summary');

let summary = null;

describe('Property', () => {
  beforeEach(() => {
    summary = new Property(summaryMock);
  ***REMOVED***);

  it('should initalize', () => {
    expect(summary).toMatchSnapshot();
  ***REMOVED***);

  it('should have FSID', () => {
    expect(summary.FSID).toBeDefined();
  ***REMOVED***);

  it('should have primaryNumber', () => {
    expect(summary.primaryNumber).toBeDefined();
  ***REMOVED***);

  it('should have lastUpdated', () => {
    expect(summary.lastUpdated).toBeDefined();
  ***REMOVED***);

  it('should have streetName', () => {
    expect(summary.streetName).toBeDefined();
  ***REMOVED***);

  it('should have zipCode', () => {
    expect(summary.zipCode).toBeDefined();
  ***REMOVED***);

  it('should have city', () => {
    expect(summary.city).toBeDefined();
  ***REMOVED***);

  it('should have uspsCity', () => {
    expect(summary.uspsCity).toBeDefined();
  ***REMOVED***);

  it('should have state', () => {
    expect(summary.state).toBeDefined();
  ***REMOVED***);

  it('should have polygon data', () => {
    expect(summary.polygon).toBeDefined();
  ***REMOVED***);

  it('should have polygon geoJSON', () => {
    expect(summary.polygonGeoJSON).toBeDefined();
  ***REMOVED***);

  it('should have center data', () => {
    expect(summary.center).toBeDefined();
  ***REMOVED***);

  it('should have center geoJSON', () => {
    expect(summary.centerGeoJSON).toBeDefined();
  ***REMOVED***);

  it('should have bounds data', () => {
    expect(summary.bounds).toBeDefined();
  ***REMOVED***);

  it('should have bounds geoJSON', () => {
    expect(summary.boundsGeoJSON).toBeDefined();
  ***REMOVED***);

  it('should have elevation', () => {
    expect(summary.elevation).toBeDefined();
  ***REMOVED***);

  it('should have femaZone', () => {
    expect(summary.femaZone).toBeDefined();
  ***REMOVED***);

  it('should have lotSize', () => {
    expect(summary.lotSize).toBeDefined();
  ***REMOVED***);

  it('should have countyFips', () => {
    expect(summary.countyFips).toBeDefined();
  ***REMOVED***);

  it('should have firstFloodRisk', () => {
    expect(summary.firstFloodRisk).toBeDefined();
  ***REMOVED***);

  it('should have floodRisks', () => {
    expect(summary.floodRisks).toBeDefined();
  ***REMOVED***);
***REMOVED***);
