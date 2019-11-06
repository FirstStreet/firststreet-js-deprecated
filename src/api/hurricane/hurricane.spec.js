const FirstStreet = require('../../__mocks__/FirstStreet');
const hurricaneMock = require('../../__mocks__/hurricaneProperty');

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
    const property = await fsf.hurricane.getPropertyByFSID(hurricaneMock.FSID);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodType).toBe(hurricaneMock.results[0].floodType);
  ***REMOVED***);

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.hurricane.getPropertyByLatLng(-75.6451595133313, -75.6451595133313);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodType).toBe(hurricaneMock.results[0].floodType);
  ***REMOVED***);

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.hurricane.getPropertyByAddress('212 appoquin s, middletown, delware');

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodType).toBe(hurricaneMock.results[0].floodType);
  ***REMOVED***);
***REMOVED***);
