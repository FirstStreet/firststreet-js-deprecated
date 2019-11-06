const FirstStreet = require('../../__mocks__/FirstStreet');
const mviMock = require('../../__mocks__/mviProperty');

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
    const property = await fsf.mvi.getPropertyByFSID(mviMock.FSID);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodType).toBe(mviMock.results[0].floodType);
  });

  it('.getPropertyByLatLng should get property by lat, lng', async () => {
    const property = await fsf.mvi.getPropertyByLatLng(-75.6451595133313, -75.6451595133313);

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodType).toBe(mviMock.results[0].floodType);
  });

  it('.getPropertyByAddress should get property by address lookup', async () => {
    const property = await fsf.mvi.getPropertyByAddress('212 appoquin s, middletown, delware');

    expect(property).toMatchSnapshot();
    expect(property.results[0].floodType).toBe(mviMock.results[0].floodType);
  });
});
