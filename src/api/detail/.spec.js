const FirstStreet = require('../../__mocks__/FirstStreet');
const propertyMock = require('../../__mocks__/propertyDetail');
const countyMock = require('../../__mocks__/countyDetail.json');
const neighborhoodMock = require('../../__mocks__/neighborhoodDetail.json');
const districtMock = require('../../__mocks__/districtDetail.json');
const tractMock = require('../../__mocks__/tractDetail.json');

describe('location service detail', () => {
  const fsf = new FirstStreet('aa.bb.cc', {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  });

  it('.getPropertyByFSID should get property by fsid', async () => {
    const property = await fsf.lookup('property', { fsid: propertyMock.fsid }).location('detail');
    expect(property).toMatchSnapshot();

    expect(property.data.route).toBe(propertyMock.route);
  });

  it('.getCountyByFSID should get county by fsid', async () => {
    const county = await fsf.lookup('county', { fsid: countyMock.fsid }).location('detail');

    expect(county).toMatchSnapshot();

    expect(county.data.name).toBe(countyMock.name);
  });

  it('.getNeighborhoodByFSID should get neighborhood by fsid', async () => {
    const neighborhood = await fsf.lookup('neighborhood', { fsid: neighborhoodMock.fsid }).location('detail');

    expect(neighborhood).toMatchSnapshot();

    expect(neighborhood.data.name).toBe(neighborhoodMock.name);
  });

  it('.getDistrictByFSID should get district by fsid', async () => {
    const district = await fsf.lookup('cd', { fsid: districtMock.fsid }).location('detail');

    expect(district).toMatchSnapshot();

    expect(district.data.name).toBe(districtMock.name);
  });

  it('.getTractByFSID should get tract by fsid', async () => {
    const tract = await fsf.lookup('tract', { fsid: tractMock.fsid }).location('detail');

    expect(tract).toMatchSnapshot();

    expect(tract.data.name).toBe(tractMock.name);
  });

});
