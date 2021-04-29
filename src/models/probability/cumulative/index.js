const ResponseSummary = require('../../ResponseSummary');

class ProbabilityCumulative extends ResponseSummary {
  get cumulative() {
    return this.data.cumulative;
  }
}

module.exports = ProbabilityCumulative;
