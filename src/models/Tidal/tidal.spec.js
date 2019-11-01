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
    expect(data.maxDepth('em', 2023)).toBeDefined();
  });

  it('should have lot', () => {
    expect(data.lot('kt', 2018)).toBeDefined();
  });

  it('should have neighborhood', () => {
    expect(data.neighborhood('em', 2033)).toBeDefined();
  });

  it('should have road', () => {
    expect(data.road('kt', 2023)).toBeDefined();
  });
});
