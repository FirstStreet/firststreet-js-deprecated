const FirstStreet = require('../src');

const PropertySummary = require('../src/models/location/property/summary/index.js');
const CityDetail = require('../src/models/location/city/detail/index.js');
const PropertyDetail = require('../src/models/location/property/detail/index.js');
const ProbabilityCumulative = require('../src/models/probability/ProbabilityCumulative');
const HistoricEvent = require('../src/models/historic/HistoricEvent');
const HistoricLocalitySummary = require('../src/models/historic/HistoricLocalitySummary');
const HistoricPropertySummary = require('../src/models/historic/HistoricPropertySummary');
const AalLocalitySummary = require('../src/models/economic/AalLocalitySummary');
const AalPropertySummary = require('../src/models/economic/AalPropertySummary');
const NfipPropertySummary = require('../src/models/economic/NfipPropertySummary');
const ProbabilityDepth = require('../src/models/probability/ProbabilityDepth');
const ProbabilityCount = require('../src/models/probability/ProbabilityCount');
const ProbabilityChance = require('../src/models/probability/ProbabilityChance');
const ProbabilityCountSummary = require('../src/models/probability/ProbabilityCountSummary.js');
const AvmProvider = require('../src/models/economic/AvmProvider.js');
const AvmProperty = require('../src/models/economic/AvmProperty.js');
const Adaptation = require('../src/models/adaptation/Adaptation');
const ServingLocations = require('../src/models/adaptation/ServingLocations');
const AdaptationSummary = require('../src/models/adaptation/AdaptationSummary');
const FemaNfip = require('../src/models/fema/FemaNfip');
const TideStationDetail = require('../src/models/environmental/TideStationDetail');
const SeaLevel = require('../src/models/environmental/SeaLevel');
const Precipitation = require('../src/models/environmental/Precipitation');

describe('Firststreet Api', () => {
  if (process.env.CI) {
    it.only('Skipping integration tests in CI environment', () => {
      console.warn('Skipping integration tests in CI environment');
    });
  }

  it('should be able to get location detail by fsid', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const detail = await lookup.location('detail');
    expect(detail.errors).toBeUndefined();
    expect(detail instanceof PropertyDetail).toBe(true);
    expect(detail).toMatchSnapshot();
  });

  it('should be able to get location detail for city', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('city', { fsid: 4808860 });
    const detail = await lookup.location('detail');
    expect(detail.errors).toBeUndefined();
    expect(detail instanceof CityDetail).toBe(true);
    expect(detail).toMatchSnapshot();
  });

  it('should be able to reuse lookup object', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { address: '11750+WAYWARD+DAISY%2CSAN+ANTONIO%2CTX' });
    const detail = await lookup.location('detail');
    const probability = await lookup.probability('cumulative');
    expect(detail.errors).toBeUndefined();
    expect(detail instanceof PropertyDetail).toBe(true);
    expect(detail).toMatchSnapshot();
    expect(probability.errors).toBeUndefined();
    expect(probability instanceof ProbabilityCumulative).toBe(true);
    expect(probability).toMatchSnapshot();
  });
  it('should be able to get location detail by address', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { address: '11750+WAYWARD+DAISY%2CSAN+ANTONIO%2CTX' });
    const detail = await lookup.location('detail');
    expect(detail.errors).toBeUndefined();
    expect(detail instanceof PropertyDetail).toBe(true);
    expect(detail).toMatchSnapshot();
  });

  it('should be able to get location detail by coordinate', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { lng: -98.72524, lat: 29.41842 });
    const detail = await lookup.location('detail');
    expect(detail.errors).toBeUndefined();
    expect(detail instanceof PropertyDetail).toBe(true);
    expect(detail).toMatchSnapshot();
  });

  it('should be able to get location summary', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const detail = await lookup.location('summary');
    expect(detail.errors).toBeUndefined();
    expect(detail instanceof PropertySummary).toBe(true);
    expect(detail).toMatchSnapshot();
  });

  it('should be able to get probability depth', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const probability = await lookup.probability('depth');
    expect(probability.errors).toBeUndefined();
    expect(probability instanceof ProbabilityDepth).toBe(true);
    expect(probability).toMatchSnapshot();
  });

  it('should be able to get probability count', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('city', { fsid: 4808860 });
    const probability = await lookup.probability('count');
    expect(probability.errors).toBeUndefined();
    expect(probability instanceof ProbabilityCount).toBe(true);
    expect(probability).toMatchSnapshot();
  });

  it('should be able to pass through api exception', (done) => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4808860333 });
    lookup.probability('count')
      .then(() => {
        done('Should throw an error here');
      })
      .catch((e) => {
        expect(e.status).toEqual(404);
        expect(e.body.error).toBeDefined();
        expect(e.body.error).toEqual({ code: '404', message: 'Unsupported location type' });
        done();
      });
  });

  it('should be able to get probability chance', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const probability = await lookup.probability('chance');
    expect(probability.errors).toBeUndefined();
    expect(probability instanceof ProbabilityChance).toBe(true);
    expect(probability).toMatchSnapshot();
  });

  it('should be able to get probability count summary', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const probability = await lookup.probability('count-summary');
    expect(probability.errors).toBeUndefined();
    expect(probability instanceof ProbabilityCountSummary).toBe(true);
    expect(probability).toMatchSnapshot();
  });

  it('should be able to get historic event', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const historic = await fs.historic('event', { id: 12 });
    expect(historic.errors).toBeUndefined();
    expect(historic instanceof HistoricEvent).toBe(true);
    expect(historic).toMatchSnapshot();
  });

  it('should be able to get historic property summary', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const historic = await lookup.historic('summary');
    expect(historic.errors).toBeUndefined();
    expect(historic instanceof HistoricPropertySummary).toBe(true);
    expect(historic).toMatchSnapshot();
  });

  it('should be able to get historic city summary', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('city', { fsid: 4808860 });
    const historic = await lookup.historic('summary');
    expect(historic.errors).toBeUndefined();
    expect(historic instanceof HistoricLocalitySummary).toBe(true);
    expect(historic).toMatchSnapshot();
  });

  it('should be able to get aal with defaults', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const aal = await lookup.economic('aal');
    expect(aal.errors).toBeUndefined();
    expect(aal instanceof AalPropertySummary).toBe(true);
    expect(aal).toMatchSnapshot();
  });

  it('should be able to get aal with custom parameters', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const aal = await lookup.economic('aal', { basement: true, floorElevation: 122, depth: 100 });
    expect(aal.errors).toBeUndefined();
    expect(aal instanceof AalPropertySummary).toBe(true);
    expect(aal).toMatchSnapshot();
  });

  it('should be able to get locality aal', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('city', { fsid: 4808860 });
    const aal = await lookup.economic('aal');
    expect(aal.errors).toBeUndefined();
    expect(aal instanceof AalLocalitySummary).toBe(true);
    expect(aal).toMatchSnapshot();
  });

  it('should be able to get AVM provider data', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const avm = await fs.economic('avmProvider', { id: 2 });
    expect(avm.errors).toBeUndefined();
    expect(avm instanceof AvmProvider).toBe(true);
    expect(avm).toMatchSnapshot();
  });

  it('should be able to get property AVM', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const avm = await lookup.economic('avmProperty');
    expect(avm.errors).toBeUndefined();
    expect(avm instanceof AvmProperty).toBe(true);
    expect(avm).toMatchSnapshot();
  });

  it('should be able to get property NFIP estimate', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const nfip = await lookup.economic('nfip');
    expect(nfip.errors).toBeUndefined();
    expect(nfip instanceof NfipPropertySummary).toBe(true);
    expect(nfip).toMatchSnapshot();
  });

  it('should be able to get adaptation detail', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const adaptation = await fs.adaptation('detail', { id: 2 });
    expect(adaptation.errors).toBeUndefined();
    expect(adaptation instanceof Adaptation).toBe(true);
    expect(adaptation.serving).not.toBeUndefined();
    expect(adaptation.serving instanceof ServingLocations).toBe(true);
    expect(adaptation).toMatchSnapshot();
  });
  it('should be able to get adaptation summary', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const adaptation = await lookup.adaptation('summary');
    expect(adaptation.errors).toBeUndefined();
    expect(adaptation instanceof AdaptationSummary).toBe(true);
    expect(adaptation).toMatchSnapshot();
  });

  it('should be able to get FEMA NFIP', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('county', { fsid: 48029 });
    const nfip = await lookup.fema('nfip');
    expect(nfip.errors).toBeUndefined();
    expect(nfip instanceof FemaNfip).toBe(true);
    expect(nfip).toMatchSnapshot();
  });

  it('should be able to get environmental precipitation', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('county', { fsid: 48029 });
    const env = await lookup.environmental('precipitation');
    expect(env.errors).toBeUndefined();
    expect(env instanceof Precipitation).toBe(true);
    expect(env).toMatchSnapshot();
  });

  it('should be able to get environmental sea-level', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('city', { fsid: 4808860 });
    const env = await lookup.environmental('sea-level');
    expect(env.errors).toBeUndefined();
    expect(env instanceof SeaLevel).toBe(true);
    expect(env).toMatchSnapshot();
  });

  it('should be able to get environmental tide station', async () => {
    const apiKey = process.env.FSF_API_KEY;
    const fs = new FirstStreet(apiKey);
    const env = await fs.environmental('tide-station', { id: 19 });
    expect(env.errors).toBeUndefined();
    expect(env instanceof TideStationDetail).toBe(true);
    expect(env).toMatchSnapshot();
  });
});
