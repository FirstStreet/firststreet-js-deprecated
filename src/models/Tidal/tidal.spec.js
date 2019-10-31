const Tidal = require('./index');
const tidalMock = require('../../__mocks__/tidalProperty');

let data = null;

describe('Tidal', () => {
  beforeEach(() => {
    data = new Tidal(tidalMock);
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
