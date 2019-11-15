const FirstStreet = require('../../__mocks__/FirstStreet');
const tidalPropertyMock = require('../../__mocks__/tidalProperty');
const tidalCityMock = require('../../__mocks__/tidalCity');

const LAT = 39.811250630443;
const LNG = -75.4886086625372;

const validMethods = ['getPropertyByFSID', 'getCityByFSID', 'getPropertyByLatLng', 'getCityByLatLng', 'getPropertyByAddress', 'getCityByAddress'];

describe('tidal', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  });

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(fsf.tidal[method]).toBeDefined();
    });
  });

  it('.getPropertyByFSID should get property by ID', async () => {
    const property = await fsf.tidal.getPropertyByFSID(tidalPropertyMock.FSID);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(tidalPropertyMock.results[0].floodID);
  });

  it('.getPropertyByFSID should throw error if no ID', async () => {
    const property = await fsf.tidal.getPropertyByFSID();

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.messages).toBe('Expected required FSID. Usage: .getPropertyByFSID(fsid)');
  });

  it('.getPropertyByFSID should throw error if incorrect ID', async () => {
    const property = await fsf.tidal.getPropertyByFSID('1111111');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  });

  it('.getCityByFSID should get city by ID', async () => {
    const city = await fsf.tidal.getCityByFSID(tidalCityMock.FSID);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(tidalCityMock.results[0].floodID);
  });

  it('.getCityByFSID should throw error if no ID', async () => {
    const city = await fsf.tidal.getCityByFSID();

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.messages).toBe('Expected required FSID. Usage: .getCityByFSID(fsid)');
  });

  it('.getCityByFSID should throw error if incorrect ID', async () => {
    const city = await fsf.tidal.getCityByFSID('1111111');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  });

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.tidal.getPropertyByLatLng(LAT, LNG);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(tidalPropertyMock.results[0].floodID);
  });

  it('.getPropertyByLatLng should throw error if no lat or lng', async () => {
    const propertyNoLat = await fsf.tidal.getPropertyByLatLng(null,LNG);

    const propertyNoLng = await fsf.tidal.getPropertyByLatLng(LAT,null);

    expect(propertyNoLat).toThrowErrorMatchingSnapshot();
    expect(propertyNoLat.messages).toBe('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
    expect(propertyNoLng).toThrowErrorMatchingSnapshot();
    expect(propertyNoLng.messages).toBe('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
  });

  it('.getPropertyByLatLng should throw error if incorrect lat and lng', async () => {
    const property = await fsf.tidal.getPropertyByLatLng('0000000','-000000');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  });

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.tidal.getCityByLatLng(LAT, LNG);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(tidalCityMock.results[0].floodID);
  });

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.tidal.getCityByLatLng(LAT, LNG);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(tidalCityMock.results[0].floodID);
  });

  it('.getCityByLatLng should throw error if no lat or lng', async () => {
    const cityNoLat = await fsf.tidal.getCityByLatLng(null,LNG);

    const cityNoLng = await fsf.tidal.getCityByLatLng(LAT,null);

    expect(cityNoLat).toThrowErrorMatchingSnapshot();
    expect(cityNoLat.messages).toBe('Expected required lat. Usage: .getCityByLatLng(lat, lng)');
    expect(cityNoLng).toThrowErrorMatchingSnapshot();
    expect(cityNoLng.messages).toBe('Expected required lng. Usage: .getCityByLatLng(lat, lng)');
  });

  it('.getCityByLatLng should throw error if incorrect lat and lng', async () => {
    const city = await fsf.tidal.getCityByLatLng('0000000','-000000');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  });

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.tidal.getPropertyByAddress('212 appoquin s, middletown, delware');

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(tidalPropertyMock.results[0].floodID);
  });

  it('.getPropertyByAddress should throw an error if no address lookup', async () => {
    const property = await fsf.tidal.getPropertyByAddress();

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.messages).toBe('Expected required address. Usage: .getPropertyByAddress(address)');
  });

  it('.getPropertyByAddress should throw an error if incorrect address lookup', async () => {
    const property = await fsf.tidal.getPropertyByAddress('1 appoquin s, middletown, delware');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  });

  it('.getCityByAddress should get city by address lookup', async () => {
    const city = await fsf.tidal.getCityByAddress('middletown, delware');

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(tidalCityMock.results[0].floodID);
  });

  it('.getCityByAddress should throw an error if no address lookup', async () => {
    const city = await fsf.tidal.getCityByAddress();

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.messages).toBe('Expected required address. Usage: .getCityByAddress(address)');
  });

  it('.getCityByAddress should throw an error if incorrect address lookup', async () => {
    const city = await fsf.tidal.getCityByAddress('middle, delware');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  });
});
