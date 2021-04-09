const FirstStreet = require('../../__mocks__/FirstStreet');
const propertyMock = require('../../__mocks__/probabilityCumulative.json');

describe('location service detail', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  });

  it('.getPropertyByFSID should get property cumulative by fsid', async () => {
    const property = await fsf.lookup('property', { fsid: propertyMock.fsid }).probability('cumulative');
    expect(property).toMatchSnapshot();

    expect(property.data.fsid).toBe(propertyMock.fsid);
  });
});
