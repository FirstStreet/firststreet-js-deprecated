const Hurricane = require('./index');
const hurricaneMock = require('../../__mocks__/hurricaneProperty');

let data = null;

describe('Hurricane', () => {
  beforeEach(() => {
    data = new Hurricane(hurricaneMock);
  ***REMOVED***);

  it('should initialize', () => {
    expect(data).toMatchSnapshot();
  ***REMOVED***);

  it('should have maxDepth', () => {
    expect(data.maxDepth).toBeDefined();
  ***REMOVED***);

  it('should have lot', () => {
    expect(data.lot).toBeDefined();
  ***REMOVED***);

  it('should have neighborhood', () => {
    expect(data.neighborhood).toBeDefined();
  ***REMOVED***);

  it('should have road', () => {
    expect(data.road).toBeDefined();
  ***REMOVED***);
***REMOVED***);
