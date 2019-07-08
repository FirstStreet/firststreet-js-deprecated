const BaseModel = require('./index');
const propertyById = require('../../__mocks__/propertyDataById');

describe('baseModel', () => {
  let baseModel = null;
  beforeEach(() => {
    baseModel = new BaseModel(propertyById);
  ***REMOVED***);

  it('should initialize a base model', () => {
    expect(baseModel).toMatchSnapshot();
  ***REMOVED***);

  it('should return a raw response', () => {
    expect(baseModel.raw).toBe(propertyById);
  ***REMOVED***);

  it('should return the correct id', () => {
    expect(baseModel.id).toBe(100032470544);
  ***REMOVED***);
***REMOVED***);
