const City = require('./index');
const cityMock = require('../../../../__mocks__/cityDetail');

let city = null;
describe('City', () => {
  beforeEach(() => {
    city = new City(cityMock);
  });

  it('should initialize', () => {
    expect(city).toMatchSnapshot();
  });
});
