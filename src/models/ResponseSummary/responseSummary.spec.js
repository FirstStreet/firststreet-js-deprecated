const BaseModel = require('./index');
const summaryPropertyMock = require('../../__mocks__/summaryProperty');

let summary = null;

describe('summaryPropertyMock', () => {
  beforeEach(() => {
    summary = new BaseModel(summaryPropertyMock);
  });

  it('should initialize a base model', () => {
    expect(summary).toMatchSnapshot();
  });

  it('should return a raw response', () => {
    expect(summary.raw).toBe(summaryPropertyMock);
  });

  it('should return the correct id', () => {
    expect(summary.FSID).toBe(summaryPropertyMock.FSID);
  });
  it('should return the correct results', () => {
    expect(summary.results).toBe(summaryPropertyMock.results);
  });
});
