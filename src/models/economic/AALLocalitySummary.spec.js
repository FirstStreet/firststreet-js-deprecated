const { isArray } = require('lodash');
const Sut = require('./AalLocalitySummary.js');

const mock = require('../../__mocks__/aalCitySummary.json');

describe('AALlocality summary', () => {
  it('should construct object', () => {
    const result = new Sut(mock);
    expect(result.raw).toMatchSnapshot();
    expect(result.raw.annualLoss).toBe(mock.annualLoss);
    expect(isArray(result.annualLoss)).toBe(true);
    expect(result.annualLoss.length).toBe(19);
    expect(result.annualLoss[0].constructor.name).toBe('AalForLocation');
    expect(result.annualLoss[0].year).toEqual(2050);
    expect(result.annualLoss[0].totalLoss).toEqual({
      low: 0,
      mid: 0,
      high: 143,
    });
  });

  it('should construct object without child nodes', () => {
    const result = new Sut({});
    expect(result.raw).toMatchSnapshot();
    expect(result.raw.annualLoss).toBeUndefined();
    expect(result.annualLoss).toBeUndefined();
  });

  it('should construct object with empty child nodes', () => {
    const result = new Sut({ depthLoss: [], annualLoss: [] });
    expect(result.raw).toMatchSnapshot();
    expect(result.raw.annualLoss).toEqual([]);
    expect(result.annualLoss).toEqual([]);
  });
});
