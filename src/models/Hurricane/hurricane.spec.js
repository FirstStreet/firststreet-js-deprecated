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
    expect(data.maxDepth).toBeDefined();
  });

  it('should have lot', () => {
    expect(data.lot).toBeDefined();
  });

  it('should have neighborhood', () => {
    expect(data.neighborhood).toBeDefined();
  });

  it('should have road', () => {
    expect(data.road).toBeDefined();
  });
});
