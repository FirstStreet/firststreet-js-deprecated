const FirstStreet = require('../../__mocks__/FirstStreet');
const hurricanePropertyMock = require('../../__mocks__/hurricaneProperty');
const hurricaneCityMock = require('../../__mocks__/hurricaneCity');

const LAT = 39.811250630443;
const LNG = -75.4886086625372;

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

  it('.getPropertyByFSID should throw error if no ID', async () => {
    const property = await fsf.hurricane.getPropertyByFSID();

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.messages).toBe('Expected required FSID. Usage: .getPropertyByFSID(fsid)');
  ***REMOVED***);

  it('.getPropertyByFSID should throw error if incorrect ID', async () => {
    const property = await fsf.hurricane.getPropertyByFSID('1111111');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  ***REMOVED***);

  it('.getCityByFSID should get city by ID', async () => {
    const city = await fsf.hurricane.getCityByFSID(hurricaneCityMock.FSID);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(hurricaneCityMock.results[0].floodID);
  ***REMOVED***);

  it('.getCityByFSID should throw error if no ID', async () => {
    const city = await fsf.hurricane.getCityByFSID();

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.messages).toBe('Expected required FSID. Usage: .getCityByFSID(fsid)');
  ***REMOVED***);

  it('.getCityByFSID should throw error if incorrect ID', async () => {
    const city = await fsf.hurricane.getCityByFSID('1111111');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  ***REMOVED***);

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.hurricane.getPropertyByLatLng(LAT, LNG);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(hurricanePropertyMock.results[0].floodID);
  ***REMOVED***);

  it('.getPropertyByLatLng should throw error if no lat or lng', async () => {
    const propertyNoLat = await fsf.hurricane.getPropertyByLatLng(null,LNG);

    const propertyNoLng = await fsf.hurricane.getPropertyByLatLng(LAT,null);

    expect(propertyNoLat).toThrowErrorMatchingSnapshot();
    expect(propertyNoLat.messages).toBe('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
    expect(propertyNoLng).toThrowErrorMatchingSnapshot();
    expect(propertyNoLng.messages).toBe('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
  ***REMOVED***);

  it('.getPropertyByLatLng should throw error if incorrect lat and lng', async () => {
    const property = await fsf.hurricane.getPropertyByLatLng('0000000','-000000');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  ***REMOVED***);

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.hurricane.getCityByLatLng(LAT, LNG);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(hurricaneCityMock.results[0].floodID);
  ***REMOVED***);

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.hurricane.getCityByLatLng(LAT, LNG);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(hurricaneCityMock.results[0].floodID);
  ***REMOVED***);

  it('.getCityByLatLng should throw error if no lat or lng', async () => {
    const cityNoLat = await fsf.hurricane.getCityByLatLng(null,LNG);

    const cityNoLng = await fsf.hurricane.getCityByLatLng(LAT,null);

    expect(cityNoLat).toThrowErrorMatchingSnapshot();
    expect(cityNoLat.messages).toBe('Expected required lat. Usage: .getCityByLatLng(lat, lng)');
    expect(cityNoLng).toThrowErrorMatchingSnapshot();
    expect(cityNoLng.messages).toBe('Expected required lng. Usage: .getCityByLatLng(lat, lng)');
  ***REMOVED***);

  it('.getCityByLatLng should throw error if incorrect lat and lng', async () => {
    const city = await fsf.hurricane.getCityByLatLng('0000000','-000000');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  ***REMOVED***);

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.hurricane.getPropertyByAddress('212 appoquin s, middletown, delware');

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(hurricanePropertyMock.results[0].floodID);
  ***REMOVED***);

  it('.getPropertyByAddress should throw an error if no address lookup', async () => {
    const property = await fsf.hurricane.getPropertyByAddress();

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.messages).toBe('Expected required address. Usage: .getPropertyByAddress(address)');
  ***REMOVED***);

  it('.getPropertyByAddress should throw an error if incorrect address lookup', async () => {
    const property = await fsf.hurricane.getPropertyByAddress('1 appoquin s, middletown, delware');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  ***REMOVED***);

  it('.getCityByAddress should get city by address lookup', async () => {
    const city = await fsf.hurricane.getCityByAddress('middletown, delware');

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(hurricaneCityMock.results[0].floodID);
  ***REMOVED***);

  it('.getCityByAddress should throw an error if no address lookup', async () => {
    const city = await fsf.hurricane.getCityByAddress();

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.messages).toBe('Expected required address. Usage: .getCityByAddress(address)');
  ***REMOVED***);

  it('.getCityByAddress should throw an error if incorrect address lookup', async () => {
    const city = await fsf.hurricane.getCityByAddress('middle, delware');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  ***REMOVED***);
***REMOVED***);
