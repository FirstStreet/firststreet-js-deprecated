const isArray = require('lodash/isArray');
const ProbabilityCumulative = require('./ProbabilityCumulative');

const mock = require('../../__mocks__/probabilityCumulative.json');

describe('probability cumulative', () => {
  it('should construct object', () => {
    const result = new ProbabilityCumulative(mock);
    expect(result.raw).toEqual(mock);
    expect(result.fsid).toBe(362788780);
    expect(isArray(result.cumulative)).toBe(true);
    expect(result.cumulative.length).toBe(7);
    expect(result.cumulative[0].constructor.name).toBe('ProbabilityData');
  });
});
