const FirstStreet = require('../../__mocks__/FirstStreet');
const tidalPropertyMock = require('../../__mocks__/tidalProperty');
const tidalCityMock = require('../../__mocks__/tidalCity');

const validMethods = ['getPropertyByFSID', 'getCityByFSID', 'getPropertyByLatLng', 'getCityByLatLng', 'getPropertyByAddress', 'getCityByAddress'];

describe('tidal', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  ***REMOVED***);

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(fsf.tidal[method]).toBeDefined();
    ***REMOVED***);
  ***REMOVED***);

  it('.getPropertyByFSID should get property by ID', async () => {
    const property = await fsf.tidal.getPropertyByFSID(tidalPropertyMock.FSID);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(tidalPropertyMock.results[0].floodID);
  ***REMOVED***);

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.tidal.getPropertyByLatLng(-75.6451595133313, -75.6451595133313);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(tidalPropertyMock.results[0].floodID);
  ***REMOVED***);

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.tidal.getPropertyByAddress('212 appoquin s, middletown, delware');

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(tidalPropertyMock.results[0].floodID);
  ***REMOVED***);

  it('.getCityByFSID should get city by ID', async () => {
    const city = await fsf.tidal.getCityByFSID(tidalCityMock.FSID);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(tidalCityMock.results[0].floodID);
  ***REMOVED***);

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.tidal.getCityByLatLng(-75.6451595133313, -75.6451595133313);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(tidalCityMock.results[0].floodID);
  ***REMOVED***);

  it('.getCityByAddress should get city by address lookup', async () => {
    const city = await fsf.tidal.getCityByAddress('middletown, delware');

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(tidalCityMock.results[0].floodID);
  ***REMOVED***);
***REMOVED***);
