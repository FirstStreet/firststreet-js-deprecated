// readonly

class BaseModel {
  constructor(data) {
    this.data = data;
    this.relationships = null;
  ***REMOVED***

  get type() {
    return this.data.type;
  ***REMOVED***

  get id() {
    return this.data.ID;
  ***REMOVED***

  get raw() {
    return this.data;
  ***REMOVED***

  extend(key, properties) {
    this[key] = properties;
    return this;
  ***REMOVED***
***REMOVED***

module.exports = BaseModel;
