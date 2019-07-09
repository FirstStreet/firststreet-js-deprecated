// readonly

class BaseModel {
  constructor(data) {
    this.data = data;
  }

  get id() {
    return this.data.ID;
  }

  get raw() {
    return this.data;
  }
}

module.exports = BaseModel;
