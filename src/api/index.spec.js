const FirstStreet = require('../__mocks__/FirstStreet');
const Resolver = require('../__mocks__/Resolver');
const propertyDetailMock = require('../__mocks__/propertyDetail.json');

describe('Api', () => {
  it('should setup lookup with fsid', async () => {
    const fs = new FirstStreet('aa.bb.cc');
    const lookup = fs.lookup('property', { fsid: 1234 });
    expect(lookup.probability).toBeDefined();
    expect(lookup._locationType).toEqual('property');
    expect(lookup._lookupType).toEqual('fsid');
  });

  it('should setup lookup with coordinates', async () => {
    const fs = new FirstStreet('aa.bb.cc');
    const lookup = fs.lookup('property', { lat: 1, lng: 2 });
    expect(lookup.probability).toBeDefined();
    expect(lookup._locationType).toEqual('property');
    expect(lookup._lookupType).toEqual('coordinate');
  });

  it('should setup lookup with address', async () => {
    const fs = new FirstStreet('aa.bb.cc');
    const lookup = fs.lookup('property', { address: 'Main street' });
    expect(lookup.probability).toBeDefined();
    expect(lookup._locationType).toEqual('property');
    expect(lookup._lookupType).toEqual('address');
  });

  it('should not allow a missing coordinate', async () => {
    const fs = new FirstStreet('aa.bb.cc');
    expect(() => fs.lookup('property', { lat: 1234 })).toThrow('Must provide both latitude and longitude for coordinate lookup');
    expect(() => fs.lookup('property', { lng: 1234 })).toThrow('Must provide both latitude and longitude for coordinate lookup');
  });

  it('should require a parameter for lookup setup', async () => {
    const fs = new FirstStreet('aa.bb.cc');

    expect(() => fs.lookup('property')).toThrow('Missing lookup parameters');
    expect(() => fs.lookup('property', {})).toThrow('Must provide a valid lookup parameter(fsid, address, lat, lng)');
  });

  it('should not allow unknown location type', async () => {
    const fs = new FirstStreet('aa.bb.cc');
    expect(() => fs.lookup('unknown', { fsid: 1 })).toThrow('Must provide a valid location type(state, city, county, zcta, cd, neighborhood, tract, property)');
  });

  it('should not allow unknown parameters', async () => {
    const fs = new FirstStreet('aa.bb.cc');

    expect(() => fs.lookup('property', { unknown: 1 })).toThrow('Unknown parameter(s): unknown');
  });

  it('lookup parameters should be an object', async () => {
    const fs = new FirstStreet('aa.bb.cc');

    expect(() => fs.lookup('property', 'a string')).toThrow('Lookup parameters need to be in an object');
  });

  it('should call probability resolver', async () => {
    const mockResolver = new Resolver([propertyDetailMock]);
    const fs = new FirstStreet('aa.bb.cc', null, mockResolver);
    const result = fs.lookup('property', { fsid: 1234 }).probability('cumulative');
    expect(result).toEqual(propertyDetailMock);
  });

  it('should require detail level to call a service', async () => {
    const mockResolver = new Resolver([propertyDetailMock]);
    const fs = new FirstStreet('aa.bb.cc', null, mockResolver);
    expect(() => fs.lookup('property', { fsid: 1234 }).probability()).toThrow('Detail level is required');
  });

  it('should ensure lookup type is set', async () => {
    const mockResolver = new Resolver([propertyDetailMock]);
    const fs = new FirstStreet('aa.bb.cc', null, mockResolver);
    expect(() => fs.probability('depth')).toThrow('Please set lookup parameters prior to calling service "probability"');
  });
});