const ApiResponse = require('../ApiResponse');
const HistoricEventProperties = require('./HistoricEventProperties');

class HistoricEvent extends ApiResponse {
  _properties;

  constructor(data) {
    super(data);
    if (data && data.properties) {
      this._properties = new HistoricEventProperties(data.properties);
    }
  }

  get eventId() {
    if (this._data) {
      return this._data.eventId;
    }
    return undefined;
  }

  get name() {
    if (this._data) {
      return this._data.name;
    }
    return undefined;
  }

  get type() {
    if (this._data) {
      return this._data.type;
    }
    return undefined;
  }

  get month() {
    if (this._data) {
      return this._data.month;
    }
    return undefined;
  }

  get year() {
    if (this._data) {
      return this._data.year;
    }
    return undefined;
  }

  get returnPeriod() {
    if (this._data) {
      return this._data.returnPeriod;
    }
    return undefined;
  }

  get properties() {
    return this._properties;
  }

  get geometry() {
    if (this._data) {
      return this._data.geometry;
    }
    return undefined;
  }
}

module.exports = HistoricEvent;
