const { isArray } = require('lodash');
const Sut = require('./NfipPropertySummary');

const mock = require('../../__mocks__/nfipPropertySummary.json');

describe('NFIP property summary', () => {
  it('should construct object', () => {
    const result = new Sut(mock);
    expect(result.raw).toMatchSnapshot();
    expect(result.raw.data).toBe(mock.data);
    expect(isArray(result.data)).toBe(true);
    expect(result.data.length).toBe(2);
    expect(result.data[0].constructor.name).toBe('NfipEstimate');
    expect(result.data[1].estimate).toEqual(376);
    expect(result.fsid).toEqual(mock.fsid);
  });

  it('should construct object without child nodes', () => {
    const result = new Sut({});
    expect(result.raw).toMatchSnapshot();
    expect(result.raw.data).toBeUndefined();
    expect(result.data).toBeUndefined();
  });

  it('should construct object with empty child nodes', () => {
    const result = new Sut({ data: [] });
    expect(result.raw).toMatchSnapshot();
    expect(result.raw.data).toEqual([]);
    expect(result.data).toEqual([]);
  });
});
