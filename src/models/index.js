// readonly

class BaseModel {
  constructor(data) {
    this.data = data;
    this.relationships = null;
  }

  get type() {
    return this.data.type;
  }

  get id() {
    return this.data.ID;
  }

  get raw() {
    return this.data;
  }

  extend(key, properties) {
    this[key] = properties;
    return this;
  }
}

module.exports = BaseModel;
