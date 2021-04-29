const FsidResponse = require('./index');
const summaryPropertyMock = require('../../__mocks__/summaryProperty');

let summary = null;

describe('summaryPropertyMock', () => {
  beforeEach(() => {
    summary = new FsidResponse(summaryPropertyMock);
  });

  it('should initialize a base model', () => {
    expect(summary.raw).toMatchSnapshot();
  });

  it('should return a raw response', () => {
    expect(summary.raw).toBe(summaryPropertyMock);
  });

  it('should return the correct id', () => {
    expect(summary.fsid).toBe(summaryPropertyMock.fsid);
  });

  it('should return the correct results', () => {
    expect(summary.results).toBe(summaryPropertyMock.results);
  });
});
