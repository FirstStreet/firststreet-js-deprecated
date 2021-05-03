const mapping = require('./ApiMapping');
const Resolver = require('./resolver');

const Http = require('../__mocks__/Http');
const probabilityCumulativeMock = require('../__mocks__/probabilityCumulative.json');
const propertyMock = require('../__mocks__/propertyDetail.json');
const historicEventMock = require('../__mocks__/historicEvent.json');

describe('resolver', () => {
  const http = new Http('aa.bb.cc');
  const resolverObj = new Resolver(http);

  it('should get probability cumulative by fsid(has one model per endpoint)', async () => {
    const probabilityCumulativeMapping = mapping('probability', 'cumulative');
    const property = await resolverObj.getServiceResponse(probabilityCumulativeMapping, { fsid: 362788780 }, 'property', 'fsid');
    expect(property).toMatchSnapshot();
    expect(property.raw).toEqual(probabilityCumulativeMock);
  });

  it('should get location detail by fsid (has various models per endpoint)', async () => {
    const propertyMapping = mapping('location', 'detail');
    const property = await resolverObj.getServiceResponse(propertyMapping, { fsid: 1202672032 }, 'property', 'fsid');
    expect(property).toMatchSnapshot();
    expect(property.raw).toEqual(propertyMock);
  });

  it('should get location detail by historic event (does not need location type)', async () => {
    const propertyMapping = mapping('historic', 'event');
    const property = await resolverObj.getServiceResponse(propertyMapping, { id: 12 }, null, 'id');
    expect(property).toMatchSnapshot();
    expect(property.raw).toEqual(historicEventMock);
  });

  it('should throw if unknown location type', (done) => {
    const propertyMapping = mapping('location', 'detail');
    resolverObj.getServiceResponse(propertyMapping, { fsid: 1202672032 }, 'unknown', 'fsid')
      .then(() => { throw new Error('should throw error'); })
      .catch((e) => {
        expect(e.message).toEqual('Internal error: cannot get model for endpoint /location/detail');
        done();
      });
  });

  it('should throw if unknown lookup type', (done) => {
    const propertyMapping = mapping('location', 'detail');
    resolverObj.getServiceResponse(propertyMapping, { fsid: 1202672032 }, 'property', 'unknown')
      .then(() => { throw new Error('should throw error'); })
      .catch((e) => {
        expect(e.message).toEqual('Internal error: lookup by unknown is not implemented');
        done();
      });
  });
});
