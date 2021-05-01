const ApiResponse = require('../ApiResponse');
const HistoricEventProperties = require('./HistoricEventProperties');

class HistoricEvent extends ApiResponse {
  #properties;

  constructor(data) {
    super(data);
    if (data.properties) {
      this.#properties = new HistoricEventProperties(data.properties);
    }
  }

  get eventId() {
    return this._data.eventId;
  }

  get name() {
    return this._data.name;
  }

  get type() {
    return this._data.type;
  }

  get month() {
    return this._data.month;
  }

  get year() {
    return this._data.year;
  }

  get returnPeriod() {
    return this._data.returnPeriod;
  }

  get properties() {
    return this.#properties;
  }

  get geometry() {
    return this._data.geometry;
  }
}

module.exports = HistoricEvent;
