const BaseModel = require('./index');
const propertyById = require('../../__mocks__/propertyDataById');

describe('baseModel', () => {
  let baseModel = null;
  beforeEach(() => {
    baseModel = new BaseModel(propertyById);
  });

  it('should initialize a base model', () => {
    expect(baseModel).toMatchSnapshot();
  });

  it('should return a raw response', () => {
    expect(baseModel.raw).toBe(propertyById);
  });

  it('should return the correct id', () => {
    expect(baseModel.id).toBe(propertyById.ID);
  });
});
