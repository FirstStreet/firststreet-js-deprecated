const FirstStreet = require('../../__mocks__/FirstStreet');
const propertyMock = require('../../__mocks__/propertyDetail');

describe('location service detail', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  });

  it('.getPropertyByFSID should get property by fsid', async () => {
    const property = await fsf.lookup('property', { fsid: propertyMock.fsid }).location('detail');
    expect(property).toMatchSnapshot();

    expect(property.data.route).toBe(propertyMock.route);
  });

});
