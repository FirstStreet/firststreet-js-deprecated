const BaseModel = require('./index');
const summaryPropertyMock = require('../../__mocks__/summaryProperty');

let summary = null;

describe('summaryPropertyMock', () => {
  beforeEach(() => {
    summary = new BaseModel(summaryPropertyMock);
  ***REMOVED***);

  it('should initialize a base model', () => {
    expect(summary).toMatchSnapshot();
  ***REMOVED***);

  it('should return a raw response', () => {
    expect(summary.raw).toBe(summaryPropertyMock);
  ***REMOVED***);

  it('should return the correct id', () => {
    expect(summary.FSID).toBe(summaryPropertyMock.FSID);
  ***REMOVED***);
  it('should return the correct results', () => {
    expect(summary.results).toBe(summaryPropertyMock.results);
  ***REMOVED***);
***REMOVED***);
