const BaseModel = require('./index');
const summaryMock = require('../../__mocks__/summary');

let summary = null;

describe('summaryMock', () => {
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
  it('should return the correct results', () => {
    expect(summary.results).toBe(summaryMock.results);
  });
});
