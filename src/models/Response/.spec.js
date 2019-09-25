const BaseModel = require('./index');
const summaryMock = require('../../__mocks__/summary');

describe('summaryMock', () => {
  let summaryMock = null;
  beforeEach(() => {
    summary = new BaseModel(summaryMock);
  });

  it('should initialize a base model', () => {
    expect(summary).toMatchSnapshot();
  });

  it('should return a raw response', () => {
    expect(summary.raw).toBe(summaryMock);
  });

  it('should return the correct id', () => {
    expect(summary.FSID).toBe(summaryMock.FSID);
  });
});
