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

  it('.getPropertyByFSID should throw error if no ID', async () => {
    const property = await fsf.dataSummary.getPropertyByFSID();

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.messages).toBe('Expected required FSID. Usage: .getPropertyByFSID(fsid)');
  ***REMOVED***);

  it('.getPropertyByFSID should throw error if incorrect ID', async () => {
    const property = await fsf.dataSummary.getPropertyByFSID('1111111');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  ***REMOVED***);

  it('.getCityById should get city by ID', async () => {
    const city = await fsf.dataSummary.getCityByFSID(summaryCityMock.ID);

    expect(city).toMatchSnapshot();
    expect(city.name).toBe(summaryCityMock.name);
  ***REMOVED***);

  it('.getCityByFSID should throw error if no ID', async () => {
    const city = await fsf.dataSummary.getCityByFSID();

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.messages).toBe('Expected required FSID. Usage: .getCityByFSID(fsid)');
  ***REMOVED***);

  it('.getCityByFSID should throw error if incorrect ID', async () => {
    const city = await fsf.dataSummary.getCityByFSID('1111111');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  ***REMOVED***);

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.dataSummary.getPropertyByLatLng(summaryPropertyMock.results.location.geometry.center.coordinates[1], summaryPropertyMock.results.location.geometry.center.coordinates[0]);

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(summaryPropertyMock.results.location.primaryNumber);
  ***REMOVED***);

  it('.getPropertyByLatLng should throw error if no lat or lng', async () => {
    const propertyNoLat = await fsf.dataSummary.getPropertyByLatLng(null,summaryPropertyMock.results.location.geometry.center.coordinates[1]);

    const propertyNoLng = await fsf.dataSummary.getPropertyByLatLng(summaryPropertyMock.results.location.geometry.center.coordinates[0],null);

    expect(propertyNoLat).toThrowErrorMatchingSnapshot();
    expect(propertyNoLat.messages).toBe('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
    expect(propertyNoLng).toThrowErrorMatchingSnapshot();
    expect(propertyNoLng.messages).toBe('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
  ***REMOVED***);

  it('.getPropertyByLatLng should throw error if incorrect lat and lng', async () => {
    const property = await fsf.dataSummary.getPropertyByLatLng('0000000','-000000');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  ***REMOVED***);

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.dataSummary.getCityByLatLng(summaryCityMock.results.location.geometry.center.coordinates[1], summaryCityMock.results.location.geometry.center.coordinates[0]);
    expect(city).toMatchSnapshot();
    expect(city.name).toBe(summaryCityMock.name);
  ***REMOVED***);

  it('.getCityByLatLng should throw error if no lat or lng', async () => {
    const cityNoLat = await fsf.dataSummary.getCityByLatLng(null,summaryCityMock.results.location.geometry.center.coordinates[1]);

    const cityNoLng = await fsf.dataSummary.getCityByLatLng(summaryCityMock.results.location.geometry.center.coordinates[0],null);

    expect(cityNoLat).toThrowErrorMatchingSnapshot();
    expect(cityNoLat.messages).toBe('Expected required lat. Usage: .getCityByLatLng(lat, lng)');
    expect(cityNoLng).toThrowErrorMatchingSnapshot();
    expect(cityNoLng.messages).toBe('Expected required lng. Usage: .getCityByLatLng(lat, lng)');
  ***REMOVED***);

  it('.getCityByLatLng should throw error if incorrect lat and lng', async () => {
    const city = await fsf.dataSummary.getCityByLatLng('0000000','-000000');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  ***REMOVED***);

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.dataSummary.getPropertyByAddress('212 appoquin s, middletown, delware');

    expect(property).toMatchSnapshot();
    expect(property.primaryNumber).toBe(summaryPropertyMock.results.location.primaryNumber);
  ***REMOVED***);

  it('.getPropertyByAddress should throw an error if no address lookup', async () => {
    const property = await fsf.dataSummary.getPropertyByAddress();

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.messages).toBe('Expected required address. Usage: .getPropertyByAddress(address)');
  ***REMOVED***);

  it('.getPropertyByAddress should throw an error if incorrect address lookup', async () => {
    const property = await fsf.dataSummary.getPropertyByAddress('1 appoquin s, middletown, delware');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  ***REMOVED***);

  it('.getCityByAddress should get city by address lookup', async () => {
    const city = await fsf.dataSummary.getCityByAddress('middletown, delware');

    expect(city).toMatchSnapshot();
    expect(city.name).toBe(summaryCityMock.results.location.name);
  ***REMOVED***);

  it('.getCityByAddress should throw an error if no address lookup', async () => {
    const city = await fsf.dataSummary.getCityByAddress();

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.messages).toBe('Expected required address. Usage: .getCityByAddress(address)');
  ***REMOVED***);

  it('.getCityByAddress should throw an error if incorrect address lookup', async () => {
    const city = await fsf.dataSummary.getCityByAddress('middle, delware');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  ***REMOVED***);
***REMOVED***);
