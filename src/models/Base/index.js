// readonly

class BaseModel {
  constructor(data) {
    this.data = data;
  ***REMOVED***

  get id() {
    return this.data.ID;
  ***REMOVED***

  get raw() {
    return this.data;
  ***REMOVED***
***REMOVED***

module.exports = BaseModel;
