const City = require('./index');
const cityById = require('../../__mocks__/cityDataById');

describe('City', () => {
  let cityModel = null;
  beforeEach(() => {
    cityModel = new City(cityById);
  ***REMOVED***);

  it('should initialize', () => {
    expect(cityModel).toMatchSnapshot();
  ***REMOVED***);

  it('should have name', () => {
    expect(cityModel.name).toBeDefined();
  ***REMOVED***);

  it('should have state', () => {
    expect(cityModel.state).toBeDefined();
  ***REMOVED***);

  it('should have polygon data', () => {
    expect(cityModel.polygon).toBeDefined();
  ***REMOVED***);

  it('should have polygon geoJSON', () => {
    expect(cityModel.polygonGeoJSON).toBeDefined();
  ***REMOVED***);

  it('should have center data', () => {
    expect(cityModel.center).toBeDefined();
  ***REMOVED***);

  it('should have center geoJSON', () => {
    expect(cityModel.centerGeoJSON).toBeDefined();
  ***REMOVED***);

  it('should have bounds data', () => {
    expect(cityModel.bounds).toBeDefined();
  ***REMOVED***);

  it('should have bounds geoJSON', () => {
    expect(cityModel.boundsGeoJSON).toBeDefined();
  ***REMOVED***);
***REMOVED***);
