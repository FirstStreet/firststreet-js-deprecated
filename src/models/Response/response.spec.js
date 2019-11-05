const BaseModel = require('./index');
const mock = require('../../__mocks__/hurricaneProperty');

let response = null;

describe('mock', () => {
  beforeEach(() => {
    response = new BaseModel(mock);
  });

  it('should initialize a base model', () => {
    expect(response).toMatchSnapshot();
  });

  it('should return a raw response', () => {
    expect(response.raw).toBe(mock);
  });

  it('should return the correct id', () => {
    expect(response.FSID).toBe(mock.FSID);
  });

  it('should return the correct results', () => {
    expect(response.results).toBe(mock.results);
  });

  it('getDataByYear should return the correct results', () => {
    expect(response.getDataByYear(2023).data).toBeDefined();
  });

  it('getDataByFloodID should return the correct results', () => {
    expect(response.getDataByFloodID('c1').data).toBeDefined();
  });

  it('method chaining should return the correct results', () => {
    expect(response.getDataByYear(2023).getDataByFloodID('c1').data).toBeDefined();
  });
});
