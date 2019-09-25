const FirstStreet = require('../../__mocks__/FirstStreet');
const summaryMock = require('../../__mocks__/summary');

const validMethods = ['getPropertyByFSID', 'getCityByID', 'getPropertyByLatLng', 'getCityByLatLng', 'getPropertyByAddress', 'getCityByAddress'];

describe('summary', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com'
  ***REMOVED***);

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(fsf.summary[method]).toBeDefined();
    ***REMOVED***);
  ***REMOVED***);

  it('.getPropertyByFSID should get property by ID', async () => {
    const property = await fsf.summary.getPropertyByFSID(summaryMock.FSID);

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(summaryMock.primaryNumber);
  ***REMOVED***);

  it('.getCityById should get city by ID', async () => {
    const city = await fsf.summary.getCityByID(summaryMock.ID);

    expect(city).toMatchSnapshot();
    expect(city.name).toBe(summaryMock.name);
  ***REMOVED***);

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.summary.getPropertyByLatLng(summaryMock.results.location.geometry.center.coordinates[1], summaryMock.results.location.geometry.center.coordinates[0]);

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(summaryMock.primaryNumber)
  ***REMOVED***);

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.summary.getCityByLatLng(summaryMock.results.location.geometry.center.coordinates[1], summaryMock.results.location.geometry.center.coordinates[0]);
    expect(city).toMatchSnapshot();
    expect(city.name).toBe(summaryMock.name);
  ***REMOVED***);

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.summary.getPropertyByAddress("212 appoquin s, middletown, delware")

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(summaryMock.primaryNumber);
  ***REMOVED***);

***REMOVED***);
