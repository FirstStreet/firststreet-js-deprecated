const mapping = require('./ApiMapping');
const Resolver = require('./resolver');

const Http = require('../__mocks__/Http');
const probabilityCumulativeMock = require('../__mocks__/probabilityCumulative.json');


describe('resolver', () => {
  const http = new Http('aa.bb.cc');
  const resolverObj = new Resolver(http);

  it('should get probability cumulative by fsid', async () => {
    const probabilityCumulativeMapping = mapping('probability', 'cumulative');
    const property = await resolverObj.getServiceResponse(probabilityCumulativeMapping, { fsid: 362788780 }, 'property', 'fsid');
    expect(property).toMatchSnapshot();
    expect(property.raw).toEqual(probabilityCumulativeMock);
  });
});
