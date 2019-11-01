const BaseModel = require('./index');
const mock = require('../../__mocks__/hurricaneProperty');

let response = null;

describe('mock', () => {
  beforeEach(() => {
    response = new BaseModel(mock);
  ***REMOVED***);

  it('should initialize a base model', () => {
    expect(response).toMatchSnapshot();
  ***REMOVED***);

  it('should return a raw response', () => {
    expect(response.raw).toBe(mock);
  ***REMOVED***);

  it('should return the correct id', () => {
    expect(response.FSID).toBe(mock.FSID);
  ***REMOVED***);

  it('should return the correct results', () => {
    expect(response.results).toBe(mock.results);
  ***REMOVED***);

  it('getData() should return the correct results', () => {
    const mockedData = {
      type: 'maxdepth',
      unit: 'meters',
      value: 0,
    ***REMOVED***;
    expect(response.getData('maxdepth', 'c1', 2023)).toEqual(mockedData);
  ***REMOVED***);
***REMOVED***);
