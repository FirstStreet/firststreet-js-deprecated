const isArray = require('lodash/isArray');
const ProbabilityCountSummary = require('./ProbabilityCountSummary');

const mock = require('../../__mocks__/probabilityCountSummary.json');

describe('probability count summary', () => {
  it('should construct object', () => {
    const result = new ProbabilityCountSummary(mock);
    expect(result).toMatchSnapshot();
    expect(result.raw).toEqual(mock);
    expect(result.fsid).toEqual(mock.fsid);
    expect(isArray(result.tract)).toEqual(true);
  });
});
