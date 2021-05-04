const FirstStreet = require('../src');

describe('Firststreet Api', () => {
  it('should be able to get property detail by fsid', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const detail = await lookup.location('detail');
    const probability = await lookup.probability('cumulative');
    expect(detail).toMatchSnapshot();
    expect(probability).toMatchSnapshot();
  });

  it('should be able to get property detail by address', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { address: '11750+WAYWARD+DAISY%2CSAN+ANTONIO%2CTX' });
    const detail = await lookup.location('detail');
    const probability = await lookup.probability('cumulative');
    expect(detail).toMatchSnapshot();
    expect(probability).toMatchSnapshot();
  });

  it('should be able to get property detail by coordinate', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { lng: -98.72524, lat: 29.41842 });
    const detail = await lookup.location('detail');
    const probability = await lookup.probability('cumulative');
    expect(detail).toMatchSnapshot();
    expect(probability).toMatchSnapshot();
  });

  it('should be able to get historic event', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const historic = await fs.historic('event', { id: 12 });
    expect(historic).toMatchSnapshot();
  });

  it('should be able to get aal with defaults', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const aal = await lookup.economic('aal');
    expect(aal).toMatchSnapshot();
  });

  it('should be able to get aal with custom parameters', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const aal = await lookup.economic('aal', { basement: true, floorElevation: 122, depth: 100 });
    expect(aal).toMatchSnapshot();
  });

  it('should be able to get locality aal', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('city', { fsid: 4808860 });
    const aal = await lookup.economic('aal');
    expect(aal).toMatchSnapshot();
  });

  it('should be able to get AVM provider', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const avm = await fs.economic('avmProvider', { id: 2 });
    expect(avm).toMatchSnapshot();
  });

  it('should be able to get property AVM', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const avm = await lookup.economic('avmProperty');
    expect(avm).toMatchSnapshot();
  });
});
