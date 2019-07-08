const Property = require('./index');
const propertyById = require('../../__mocks__/propertyDataById');

describe('Property', () => {
  let propertyModel = null;
  beforeEach(() => {
    propertyModel = new Property(propertyById);
  ***REMOVED***);

  it('should initalize', () => {
    expect(propertyModel).toMatchSnapshot();
  ***REMOVED***);

  it('should have primaryNumber', () => {
    expect(propertyModel.primaryNumber).toBeDefined();
  ***REMOVED***);

  it('should have lastUpdated', () => {
    expect(propertyModel.lastUpdated).toBeDefined();
  ***REMOVED***);

  it('should have streetName', () => {
    expect(propertyModel.streetName).toBeDefined();
  ***REMOVED***);

  it('should have zipCode', () => {
    expect(propertyModel.zipCode).toBeDefined();
  ***REMOVED***);

  it('should have city', () => {
    expect(propertyModel.city).toBeDefined();
  ***REMOVED***);

  it('should have polygon data', () => {
    expect(propertyModel.polygon).toBeDefined();
  ***REMOVED***);

  it('should have center data', () => {
    expect(propertyModel.center).toBeDefined();
  ***REMOVED***);

  it('should have bounds data', () => {
    expect(propertyModel.bounds).toBeDefined();
  ***REMOVED***);

  it('should have elevation', () => {
    expect(propertyModel.elevation).toBeDefined();
  ***REMOVED***);

  it('should have femaZone', () => {
    expect(propertyModel.femaZone).toBeDefined();
  ***REMOVED***);

  it('should have lotSize', () => {
    expect(propertyModel.lotSize).toBeDefined();
  ***REMOVED***);

  it('should have floorArea', () => {
    expect(propertyModel.floorArea).toBeDefined();
  ***REMOVED***);

  it('should have landUse', () => {
    expect(propertyModel.floorArea).toBeDefined();
  ***REMOVED***);

  it('should have countyFips', () => {
    expect(propertyModel.countyFips).toBeDefined();
  ***REMOVED***);

  it('should have distance', () => {
    expect(propertyModel.distance).toBeDefined();
  ***REMOVED***);
***REMOVED***);
