const _ = require('lodash');
const Sut = require('./AvmProperty.js');

const mock = require('../../__mocks__/avmProperty.json');

describe('AVM property', () => {
  it('should construct object', () => {
    const result = new Sut(mock);
    expect(result.raw).toMatchSnapshot();
    expect(result.avm).toBeDefined();
    expect(result.avm).toMatchSnapshot();
    expect(result.avm.low).not.toBeDefined();
    expect(result.avm.mid).toEqual(144500);
    expect(result.fsid).toEqual(4801470191);
  });
});

describe('AVM property', () => {
  it('should construct when there\'s no AVM', () => {
    let mockCopy = _.clone(mock);
    mockCopy = _.omit(mockCopy, ['avm']);
    const result = new Sut(mockCopy);
    expect(result.raw).toMatchSnapshot();
    expect(result.avm).not.toBeDefined();
    expect(result.fsid).toEqual(4801470191);
  });
});
