class HistoricEvent {
  constructor(data) {
    this.data = data;
  }

  get eventId() {
    return this.data.eventId;
  }

  get name() {
    return this.data.name;
  }

  get type() {
    return this.data.type;
  }

  get month() {
    return this.data.month;
  }

  get year() {
    return this.data.year;
  }

  get returnPeriod() {
    return this.data.returnPeriod;
  }

  get properties() {
    return this.data.properties;
  }

  get geometry() {
    return this.data.geometry;
  }
}

module.exports = HistoricEvent;
