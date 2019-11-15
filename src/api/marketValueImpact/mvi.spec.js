const FirstStreet = require('../../__mocks__/FirstStreet');
const mviMockProperty = require('../../__mocks__/mviProperty');
const mviMockCity = require('../../__mocks__/mviCity');

const validMethods = ['getPropertyByFSID', 'getCityByFSID', 'getPropertyByLatLng', 'getCityByLatLng', 'getPropertyByAddress', 'getCityByAddress'];
describe('mvi', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  ***REMOVED***);

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(fsf.mvi[method]).toBeDefined();
    ***REMOVED***);
  ***REMOVED***);

  it('.getPropertyByFSID should get property by ID', async () => {
    const property = await fsf.mvi.getPropertyByFSID(mviMockProperty.FSID);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(mviMockProperty.results[0].floodID);
  ***REMOVED***);

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.mvi.getPropertyByLatLng(-75.6451595133313, -75.6451595133313);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(mviMockProperty.results[0].floodID);
  ***REMOVED***);

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.mvi.getPropertyByAddress('212 appoquin s, middletown, delware');

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(mviMockProperty.results[0].floodID);
  ***REMOVED***);

  it('.getCityByFSID should get city by ID', async () => {
    const city = await fsf.mvi.getCityByFSID(mviMockCity.FSID);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(mviMockCity.results[0].floodID);
  ***REMOVED***);

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.mvi.getCityByLatLng(-75.6451595133313, -75.6451595133313);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(mviMockCity.results[0].floodID);
  ***REMOVED***);

  it('.getCityByAddress should get city by address lookup', async () => {
    const city = await fsf.mvi.getCityByAddress('middletown, delware');

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(mviMockCity.results[0].floodID);
  ***REMOVED***);
***REMOVED***);
