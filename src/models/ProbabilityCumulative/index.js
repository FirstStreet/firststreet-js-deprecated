const ResponseSummary = require('../ResponseSummary');

class ProbabilityCumulative extends ResponseSummary {
  constructor(data) {
    super(data);
    this.data = data;
  }

  get FSID() {
    return this.data.fsid;
  }

  get cumulative() {
    return this.data.cumulative;
  }
}

module.exports = ProbabilityCumulative;
