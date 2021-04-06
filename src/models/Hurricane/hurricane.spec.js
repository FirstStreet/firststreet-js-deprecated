const Hurricane = require('./index');
const hurricaneMock = require('../../__mocks__/hurricaneProperty');

let data = null;

describe('Hurricane', () => {
  beforeEach(() => {
    data = new Hurricane(hurricaneMock);
  });

  it('should initialize', () => {
    expect(data).toMatchSnapshot();
  });

  it('should have maxDepth', () => {
    expect(data.maxDepth('c3', 2018)).toBeDefined();
  });

  it('incorrect floodID should return null', () => {
    expect(data.maxDepth('kt', 2018)).toBeNull();
  });

  it('incorrect year should return null', () => {
    expect(data.maxDepth('c3', 1991)).toBeNull();
  });

  it('should have lot', () => {
    expect(data.lot('c2', 2023)).toBeDefined();
  });

  it('should have neighborhood', () => {
    expect(data.neighborhood('c1', 2033)).toBeDefined();
  });

  it('should have road', () => {
    expect(data.road('c3', 2018)).toBeDefined();
  });
});
