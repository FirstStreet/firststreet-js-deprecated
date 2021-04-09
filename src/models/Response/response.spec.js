const BaseModel = require('./index');
const mock = require('../../__mocks__/summaryProperty');

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
});
