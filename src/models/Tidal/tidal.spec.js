const Tidal = require('./index');
const tidalMock = require('../../__mocks__/tidalProperty');

let data = null;

describe('Tidal', () => {
  beforeEach(() => {
    data = new Tidal(tidalMock);
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
