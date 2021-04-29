const { isArray } = require('lodash');
const Sut = require('./AALPropertySummary.js');

const mock = require('../../__mocks__/aalPropertySummary.json');

describe('AAL property summary', () => {
  it('should construct object', () => {
    const result = new Sut(mock);
    expect(result.raw).toMatchSnapshot();
    expect(result.raw.depthLoss).toBe(mock.depthLoss);
    expect(result.raw.annualLoss).toBe(mock.annualLoss);
    expect(isArray(result.depthLoss)).toBe(true);
    expect(result.depthLoss.length).toBe(3);
    expect(isArray(result.annualLoss)).toBe(true);
    expect(result.annualLoss.length).toBe(2);
    expect(result.depthLoss[0].constructor.name).toBe('AALDepthLoss');
    expect(result.annualLoss[0].constructor.name).toBe('AALAnnualLoss');
    expect(result.depthLoss[0].data).toEqual(25081);
  });

  it('should construct object without child nodes', () => {
    const result = new Sut({});
    expect(result.raw).toMatchSnapshot();
    expect(result.raw.depthLoss).toBeUndefined();
    expect(result.raw.annualLoss).toBeUndefined();
    expect(result.depthLoss).toBeUndefined();
    expect(result.annualLoss).toBeUndefined();
  });

  it('should construct object with empty child nodes', () => {
    const result = new Sut({ depthLoss: [], annualLoss: [] });
    expect(result.raw).toMatchSnapshot();
    expect(result.raw.depthLoss).toEqual([]);
    expect(result.raw.annualLoss).toEqual([]);
    expect(result.depthLoss).toEqual([]);
    expect(result.annualLoss).toEqual([]);
  });
});
