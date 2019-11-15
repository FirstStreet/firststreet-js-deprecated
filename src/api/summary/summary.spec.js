const FirstStreet = require('../../__mocks__/FirstStreet');
const summaryPropertyMock = require('../../__mocks__/summaryProperty');
const summaryCityMock = require('../../__mocks__/summaryCity');

const validMethods = ['getPropertyByFSID', 'getCityByFSID', 'getPropertyByLatLng', 'getCityByLatLng', 'getPropertyByAddress', 'getCityByAddress'];

describe('dataSummary', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  ***REMOVED***);

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(fsf.dataSummary[method]).toBeDefined();
    ***REMOVED***);
  ***REMOVED***);

  it('.getPropertyByFSID should get property by ID', async () => {
    const property = await fsf.dataSummary.getPropertyByFSID(summaryPropertyMock.FSID);

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(summaryPropertyMock.results.location.primaryNumber);
  ***REMOVED***);

  it('.getCityById should get city by ID', async () => {
    const city = await fsf.dataSummary.getCityByFSID(summaryCityMock.ID);

    expect(city).toMatchSnapshot();
    expect(city.name).toBe(summaryCityMock.name);
  ***REMOVED***);

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.dataSummary.getPropertyByLatLng(summaryPropertyMock.results.location.geometry.center.coordinates[1], summaryPropertyMock.results.location.geometry.center.coordinates[0]);

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(summaryPropertyMock.results.location.primaryNumber);
  ***REMOVED***);

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.dataSummary.getCityByLatLng(summaryCityMock.results.location.geometry.center.coordinates[1], summaryCityMock.results.location.geometry.center.coordinates[0]);
    expect(city).toMatchSnapshot();
    expect(city.name).toBe(summaryCityMock.name);
  ***REMOVED***);

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.dataSummary.getPropertyByAddress('212 appoquin s, middletown, delware');

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(summaryPropertyMock.results.location.primaryNumber);
  ***REMOVED***);

  it('.getCityByAddress should get city by address lookup', async () => {
    const city = await fsf.dataSummary.getCityByAddress('middletown, delware');

    expect(city).toMatchSnapshot();
    expect(city.name).toBe(summaryCityMock.results.location.name);
  ***REMOVED***);
***REMOVED***);
