const FirstStreet = require('../../__mocks__/FirstStreet');
const hurricanePropertyMock = require('../../__mocks__/hurricaneProperty');
const hurricaneCityMock = require('../../__mocks__/hurricaneCity');

const validMethods = ['getPropertyByFSID', 'getCityByFSID', 'getPropertyByLatLng', 'getCityByLatLng', 'getPropertyByAddress', 'getCityByAddress'];

describe('hurricane', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  ***REMOVED***);

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(fsf.hurricane[method]).toBeDefined();
    ***REMOVED***);
  ***REMOVED***);

  it('.getPropertyByFSID should get property by ID', async () => {
    const property = await fsf.hurricane.getPropertyByFSID(hurricanePropertyMock.FSID);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(hurricanePropertyMock.results[0].floodID);
  ***REMOVED***);

  it('.getCityByFSID should get city by ID', async () => {
    const city = await fsf.hurricane.getCityByFSID(hurricaneCityMock.FSID);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(hurricaneCityMock.results[0].floodID);
  ***REMOVED***);

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.hurricane.getPropertyByLatLng(-75.6451595133313, -75.6451595133313);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(hurricanePropertyMock.results[0].floodID);
  ***REMOVED***);

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.hurricane.getCityByLatLng(-75.6451595133313, -75.6451595133313);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(hurricaneCityMock.results[0].floodID);
  ***REMOVED***);

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.hurricane.getPropertyByAddress('212 appoquin s, middletown, delware');

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(hurricanePropertyMock.results[0].floodID);
  ***REMOVED***);

  it('.getCityByAddress should get city by address lookup', async () => {
    const city = await fsf.hurricane.getCityByAddress('middletown, delware');

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(hurricaneCityMock.results[0].floodID);
  ***REMOVED***);
***REMOVED***);
