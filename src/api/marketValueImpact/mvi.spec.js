const FirstStreet = require('../../__mocks__/FirstStreet');
const mviMockProperty = require('../../__mocks__/mviProperty');
const mviMockCity = require('../../__mocks__/mviCity');

const LAT = 39.811250630443;
const LNG = -75.4886086625372;

const validMethods = ['getPropertyByFSID', 'getCityByFSID', 'getPropertyByLatLng', 'getCityByLatLng', 'getPropertyByAddress', 'getCityByAddress'];
describe('mvi', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  });

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(fsf.mvi[method]).toBeDefined();
    });
  });

  it('.getPropertyByFSID should get property by ID', async () => {
    const property = await fsf.mvi.getPropertyByFSID(mviMockProperty.FSID);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(mviMockProperty.results[0].floodID);
  });

  it('.getPropertyByFSID should throw error if no ID', async () => {
    const property = await fsf.mvi.getPropertyByFSID();

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.messages).toBe('Expected required FSID. Usage: .getPropertyByFSID(fsid)');
  });

  it('.getPropertyByFSID should throw error if incorrect ID', async () => {
    const property = await fsf.mvi.getPropertyByFSID('1111111');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  });

  it('.getCityByFSID should get city by ID', async () => {
    const city = await fsf.mvi.getCityByFSID(mviMockCity.FSID);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(mviMockCity.results[0].floodID);
  });

  it('.getCityByFSID should throw error if no ID', async () => {
    const city = await fsf.mvi.getCityByFSID();

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.messages).toBe('Expected required FSID. Usage: .getCityByFSID(fsid)');
  });

  it('.getCityByFSID should throw error if incorrect ID', async () => {
    const city = await fsf.mvi.getCityByFSID('1111111');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  });

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.mvi.getPropertyByLatLng(LAT, LNG);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(mviMockProperty.results[0].floodID);
  });

  it('.getPropertyByLatLng should throw error if no lat or lng', async () => {
    const propertyNoLat = await fsf.mvi.getPropertyByLatLng(null,LNG);

    const propertyNoLng = await fsf.mvi.getPropertyByLatLng(LAT,null);

    expect(propertyNoLat).toThrowErrorMatchingSnapshot();
    expect(propertyNoLat.messages).toBe('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
    expect(propertyNoLng).toThrowErrorMatchingSnapshot();
    expect(propertyNoLng.messages).toBe('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
  });

  it('.getPropertyByLatLng should throw error if incorrect lat and lng', async () => {
    const property = await fsf.mvi.getPropertyByLatLng('0000000','-000000');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  });

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.mvi.getCityByLatLng(LAT, LNG);

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(mviMockCity.results[0].floodID);
  });

  it('.getCityByLatLng should throw error if no lat or lng', async () => {
    const cityNoLat = await fsf.mvi.getCityByLatLng(null,LNG);

    const cityNoLng = await fsf.mvi.getCityByLatLng(LAT,null);

    expect(cityNoLat).toThrowErrorMatchingSnapshot();
    expect(cityNoLat.messages).toBe('Expected required lat. Usage: .getCityByLatLng(lat, lng)');
    expect(cityNoLng).toThrowErrorMatchingSnapshot();
    expect(cityNoLng.messages).toBe('Expected required lng. Usage: .getCityByLatLng(lat, lng)');
  });

  it('.getCityByLatLng should throw error if incorrect lat and lng', async () => {
    const city = await fsf.mvi.getCityByLatLng('0000000','-000000');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  });

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.mvi.getPropertyByAddress('212 appoquin s, middletown, delware');

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodID).toBe(mviMockProperty.results[0].floodID);
  });

  it('.getPropertyByAddress should throw an error if no address lookup', async () => {
    const property = await fsf.mvi.getPropertyByAddress();

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.messages).toBe('Expected required address. Usage: .getPropertyByAddress(address)');
  });

  it('.getPropertyByAddress should throw an error if incorrect address lookup', async () => {
    const property = await fsf.mvi.getPropertyByAddress('1 appoquin s, middletown, delware');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  });

  it('.getCityByAddress should get city by address lookup', async () => {
    const city = await fsf.mvi.getCityByAddress('middletown, delware');

    expect(city).toMatchSnapshot();
    expect(city.results[0].floodID).toBe(mviMockCity.results[0].floodID);
  });

  it('.getCityByAddress should throw an error if no address lookup', async () => {
    const city = await fsf.mvi.getCityByAddress();

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.messages).toBe('Expected required address. Usage: .getCityByAddress(address)');
  });

  it('.getCityByAddress should throw an error if incorrect address lookup', async () => {
    const city = await fsf.mvi.getCityByAddress('middle, delware');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  });
});
