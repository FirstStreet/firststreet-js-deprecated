const FirstStreet = require('../../__mocks__/FirstStreet');
const summaryPropertyMock = require('../../__mocks__/summaryProperty');
const summaryCityMock = require('../../__mocks__/summaryCity');

describe('location service summary', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  });

  it('.getPropertyByFSID should get property by fsid', async () => {
    const property = await fsf.lookup('property', { fsid: summaryPropertyMock.fsid }).location('summary');
    expect(property).toMatchSnapshot();
    expect(property.data.primaryNumber).toBe(summaryPropertyMock.primaryNumber);
  });

  it('.getPropertyByFSID should throw error if no ID', async () => {
    const property = await fsf.lookup('property', { fsid: 1 }).location('summary');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  });

  it('.getPropertyByFSID should throw error if incorrect ID', async () => {
    const property = await fsf.lookup('property', { fsid: '1111111' }).location('summary');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  });

  it('.getCityById should get city by ID', async () => {
    const city = await fsf.lookup('city', { fsid: summaryCityMock.fsid }).location('summary');

    expect(city).toMatchSnapshot();
    expect(city.data.name).toBe(summaryCityMock.name);
  });

  it('.getCityByFSID should throw error if incorrect ID', async () => {
    const city = await fsf.lookup('city', { fsid: '1111111'}).location('summary');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  });

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.lookup('property', { lat: summaryPropertyMock.geometry.center.coordinates[1], lng: summaryPropertyMock.geometry.center.coordinates[0] }).location('summary');
    
    expect(property).toMatchSnapshot();
    expect(property.data.primaryNumber).toBe(summaryPropertyMock.primaryNumber);
  });

  it('.getPropertyByLatLng should throw error if no lat or lng', async () => {
    const propertyNoLat = await fsf.lookup('property', { lat: null, lng: summaryPropertyMock.geometry.center.coordinates[1] }).location('summary');

    const propertyNoLng = await fsf.lookup('property', { lat: summaryPropertyMock.geometry.center.coordinates[0], lng: null }).location('summary');

    expect(propertyNoLat).toThrowErrorMatchingSnapshot();
    expect(propertyNoLat.messages).toBe('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
    expect(propertyNoLng).toThrowErrorMatchingSnapshot();
    expect(propertyNoLng.messages).toBe('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
  });

  it('.getPropertyByLatLng should throw error if incorrect lat and lng', async () => {
    const property = await fsf.lookup('property', { lat: '0000000', lng: '-000000' }).location('summary');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  });

  it('.getCityByLatLng should get city by lat, lng', async () => {
    const city = await fsf.lookup('city', { lat: summaryCityMock.geometry.center.coordinates[1], lng: summaryCityMock.geometry.center.coordinates[0] }).location('summary');

    expect(city).toMatchSnapshot();
    expect(city.name).toBe(summaryCityMock.name);
  });

  it('.getCityByLatLng should throw error if no lat or lng', async () => {
    const cityNoLat = await fsf.lookup('city', { lat: null, lng: summaryCityMock.geometry.center.coordinates[1] }).location('summary');

    const cityNoLng = await fsf.lookup('city', { lat: summaryCityMock.geometry.center.coordinates[0], lng: null }).location('summary');

    expect(cityNoLat).toThrowErrorMatchingSnapshot();
    expect(cityNoLat.messages).toBe('Expected required lat. Usage: .getCityByLatLng(lat, lng)');
    expect(cityNoLng).toThrowErrorMatchingSnapshot();
    expect(cityNoLng.messages).toBe('Expected required lng. Usage: .getCityByLatLng(lat, lng)');
  });

  it('.getCityByLatLng should throw error if incorrect lat and lng', async () => {
    const city = await fsf.lookup('city', { lat: '0000000', lng: '-000000' }).location('summary');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  });

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.lookup('property', { address: '212 appoquin s, middletown, delware' }).location('summary');

    expect(property).toMatchSnapshot();
    expect(property.data.primaryNumber).toBe(summaryPropertyMock.primaryNumber);
  });

  it('.getPropertyByAddress should throw an error if incorrect address lookup', async () => {
    const property = await fsf.lookup('property', { address: '1 appoquin s, middletown, delware' }).location('summary');

    expect(property).toThrowErrorMatchingSnapshot();
    expect(property.error).toBe('data not found');
  });

  it('.getCityByAddress should get city by address lookup', async () => {
    const city = await fsf.lookup('city', { address: 'middletown, delware' }).location('summary');

    expect(city).toMatchSnapshot();
    expect(city.name).toBe(summaryCityMock.name);
  });

  it('.getCityByAddress should throw an error if incorrect address lookup', async () => {
    const city = await fsf.lookup('city', { address: 'middle, delware' }).location('summary');

    expect(city).toThrowErrorMatchingSnapshot();
    expect(city.error).toBe('data not found');
  });
});
