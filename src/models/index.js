// readonly

class BaseModel {
  constructor(data) {
    this.data = data;
    this.relationships = null;
  ***REMOVED***

  set id(id) {
    this.data.id = id;
    return this;
  ***REMOVED***

  get type() {
    return this.data.type;
  ***REMOVED***

  get id() {
    return this.data.id;
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
