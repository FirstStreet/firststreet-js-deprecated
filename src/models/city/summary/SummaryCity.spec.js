const City = require('./index');
const summaryCityMock = require('../../../__mocks__/summaryCity');

let summary = null;
describe('City', () => {
  beforeEach(() => {
    summary = new City(summaryCityMock);
  });

  it('should initialize', () => {
    expect(summary).toMatchSnapshot();
  });

  it('should have FSID', () => {
    expect(summary.FSID).toBeDefined();
  });

  it('should have name', () => {
    expect(summary.name).toBeDefined();
  });

  it('should have state', () => {
    expect(summary.state).toBeDefined();
  });

  it('should have polygon data', () => {
    expect(summary.polygon).toBeDefined();
  });

  it('should have center data', () => {
    expect(summary.center).toBeDefined();
  });

  it('should have bounds data', () => {
    expect(summary.bounds).toBeDefined();
  });
});
