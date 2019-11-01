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
    expect(data.maxDepth('c3', 2018)).toBeDefined();
  ***REMOVED***);

  it('incorrect floodID should return null', () => {
    expect(data.maxDepth('kt', 2018)).toBeNull();
  ***REMOVED***);

  it('incorrect year should return null', () => {
    expect(data.maxDepth('c3', 1991)).toBeNull();
  ***REMOVED***);

  it('should have lot', () => {
    expect(data.lot('c2', 2023)).toBeDefined();
  ***REMOVED***);

  it('should have neighborhood', () => {
    expect(data.neighborhood('c1', 2033)).toBeDefined();
  ***REMOVED***);

  it('should have road', () => {
    expect(data.road('c3', 2018)).toBeDefined();
  ***REMOVED***);
***REMOVED***);
