const Http = require('../../__mocks__/Http');
const resolver = require('./index');

const summaryPropertyMock = require('../../__mocks__/summaryProperty');
const summaryCityMock = require('../../__mocks__/summaryCity');
const cumulativePropertyMock = require('../../__mocks__/probabilityCumulative.json');
const detailPropertyMock = require('../../__mocks__/propertyDetail');
const detailCountyMock = require('../../__mocks__/countyDetail.json');
const detailNeighborhoodMock = require('../../__mocks__/neighborhoodDetail.json');
const detailDistrictMock = require('../../__mocks__/districtDetail.json');
const detailTractMock = require('../../__mocks__/tractDetail.json');

describe('resolver', () => {
  const http = new Http('aa.bb.cc');
  const resolverObj = resolver(http);

  it('should get property summary by fsid', async () => {
    const property = await resolverObj.getByFSID('property', { fsid: summaryPropertyMock.fsid }, 'summary');
    expect(property).toMatchSnapshot();
    expect(property.data.primaryNumber).toBe(summaryPropertyMock.primaryNumber);
  });

  it('should get property cumulative by fsid', async () => {
    const property = await resolverObj.getByFSID('property', { fsid: cumulativePropertyMock.fsid }, 'cumulative');

    expect(property).toMatchSnapshot();
    expect(property.data.fsid).toBe(cumulativePropertyMock.fsid);
  });

  it('should get property detail by fsid', async () => {
    const property = await resolverObj.getByFSID('property', { fsid: detailPropertyMock.fsid }, 'detail');

    expect(property).toMatchSnapshot();
    expect(property.data.fsid).toBe(detailPropertyMock.fsid);
  });

  it('should get county detail by fsid', async () => {
    const result = await resolverObj.getByFSID('county', { fsid: detailCountyMock.fsid }, 'detail');

    expect(result).toMatchSnapshot();
    expect(result.data.fsid).toBe(detailCountyMock.fsid);
  });

  it('should get neighborhood detail by fsid', async () => {
    const result = await resolverObj.getByFSID('neighborhood', { fsid: detailNeighborhoodMock.fsid }, 'detail');

    expect(result).toMatchSnapshot();
    expect(result.data.fsid).toBe(detailNeighborhoodMock.fsid);
  });

  it('should get district detail by fsid', async () => {
    const result = await resolverObj.getByFSID('cd', { fsid: detailDistrictMock.fsid }, 'detail');

    expect(result).toMatchSnapshot();
    expect(result.data.fsid).toBe(detailDistrictMock.fsid);
  });

  it('should get tract detail by fsid', async () => {
    const result = await resolverObj.getByFSID('tract', { fsid: detailTractMock.fsid }, 'detail');

    expect(result).toMatchSnapshot();
    expect(result.data.fsid).toBe(detailTractMock.fsid);
  });
  it('should get property summary by lat/lng', async () => {
    const lng = summaryPropertyMock.geometry.center.coordinates[0];
    const lat = summaryPropertyMock.geometry.center.coordinates[1];
    const property = await resolverObj.getByLatLng('property', { lat, lng }, 'summary');
    expect(property).toMatchSnapshot();
    expect(property.data.primaryNumber).toBe(summaryPropertyMock.primaryNumber);
  });

  it('should get property detail by lat/lng', async () => {
    const lng = summaryPropertyMock.geometry.center.coordinates[0];
    const lat = summaryPropertyMock.geometry.center.coordinates[1];
    const property = await resolverObj.getByLatLng('property', { lat, lng }, 'detail');
    expect(property).toMatchSnapshot();
    expect(property.data.footprintId).toEqual(detailPropertyMock.footprintId);
  });

  it('should get property cumulative by lat/lng', async () => {
    const lng = summaryPropertyMock.geometry.center.coordinates[0];
    const lat = summaryPropertyMock.geometry.center.coordinates[1];
    const property = await resolverObj.getByLatLng('property', { lat, lng }, 'cumulative');
    expect(property).toMatchSnapshot();
    expect(property.data.fsid).toEqual(cumulativePropertyMock.fsid);
  });

  it('should get property summary by address', async () => {
    const address = '212 appoquin s, middletown, delware';
    const property = await resolverObj.getByAddress('property', { address }, 'summary');
    expect(property).toMatchSnapshot();
    expect(property.data.primaryNumber).toBe(summaryPropertyMock.primaryNumber);
  });

  it('should get property detail by address', async () => {
    const address = '212 appoquin s, middletown, delware';
    const property = await resolverObj.getByAddress('property', { address }, 'detail');
    expect(property).toMatchSnapshot();
    expect(property.data.footprintId).toEqual(detailPropertyMock.footprintId);
  });

  it('should get property cumulative by address', async () => {
    const address = 'middletown, delware';
    const city = await resolverObj.getByAddress('city', { address }, 'summary');
    expect(city).toMatchSnapshot();
    expect(city.data.geometry.center).toEqual(summaryCityMock.geometry.center);
  });

  it('should throw error when error from http client', async () => {
    const result = await resolverObj.getByFSID('property', { fsid: 1 }, 'summary');
    expect(result).toMatchSnapshot();
    expect(result.errors).toBe(true);
    expect(result.error).toBe('data not found');
    expect(result.messages).toBe(null);
  });

  it('should throw error when fsid is missing', async () => {
    const result = await resolverObj.getByFSID('property', {}, 'summary');
    expect(result.errors).toBe(true);
    expect(result.messages).toBe('Expected required FSID. Usage: .getByFSID(fsid)');
  });

  it('should throw error when lat/lng is missing', async () => {
    let result = await resolverObj.getByLatLng('property', { lat: 12 }, 'summary');
    expect(result.errors).toBe(true);
    expect(result.messages).toBe('Expected required lng. Usage: .getByLatLng(lat, lng)');

    result = await resolverObj.getByLatLng('property', { lng: 12 }, 'summary');
    expect(result.errors).toBe(true);
    expect(result.messages).toBe('Expected required lat. Usage: .getByLatLng(lat, lng)');
  });

  it('should throw error when address is missing', async () => {
    const result = await resolverObj.getByAddress('property', {}, 'summary');
    expect(result.errors).toBe(true);
    expect(result.messages).toBe('Expected required address. Usage: .getByAddress(address)');
  });
});
