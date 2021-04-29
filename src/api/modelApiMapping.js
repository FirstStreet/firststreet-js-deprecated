const PropertySummary = require('../models/location/property/summary/index.js');
const CitySummary = require('../models/location/city/summary/index.js');
const LocalitySummary = require('../models/location/LocalitySummary.js');
const CityDetail = require('../models/location/city/detail/index.js');
const PropertyDetail = require('../models/location/property/detail/index.js');
const CountyDetail = require('../models/location/county/detail/index.js');
const NeighborhoodDetail = require('../models/location/neighborhood/detail/index.js');
const ZctaDetail = require('../models/location/zcta/detail/index.js');
const StateDetail = require('../models/location/state/detail/index.js');
const DistrictDetail = require('../models/location/district/detail/index.js');
const TractDetail = require('../models/location/tract/detail/index.js');
const ProbabilityCumulative = require('../models/probability/ProbabilityCumulative');
const HistoricEvent = require('../models/historic/HistoricEvent');
const AALLocalitySummary = require('../models/economic/AALLocalitySummary');
const AALPropertySummary = require('../models/economic/AALPropertySummary');

const mapping = {
  location: {
    detail: {
      model: {
        property: PropertyDetail,
        city: CityDetail,
        county: CountyDetail,
        neighborhood: NeighborhoodDetail,
        zcta: ZctaDetail,
        state: StateDetail,
        cd: DistrictDetail,
        tract: TractDetail,
      },
      endpointPrefix: '/location/detail',
      needsLocation: true,
    },
    summary: {
      model: {
        property: PropertySummary,
        city: CitySummary,
        county: LocalitySummary,
        neighborhood: LocalitySummary,
        zcta: LocalitySummary,
        state: LocalitySummary,
        cd: LocalitySummary,
        tract: LocalitySummary,
      },
      endpointPrefix: '/location/summary',
      needsLocation: true,
    },
  },
  probability: {
    cumulative: {
      model: ProbabilityCumulative,
      endpointPrefix: '/probability/cumulative',
      needsLocation: true,
    },
  },
  historic: {
    event: {
      model: HistoricEvent,
      endpointPrefix: '/historic/event',
      needsLocation: false,
    },
  },
  economic: {
    aal: {
      summary: {
        model: {
          property: AALPropertySummary,
          city: AALLocalitySummary,
          county: AALLocalitySummary,
          neighborhood: AALLocalitySummary,
          zcta: AALLocalitySummary,
          state: AALLocalitySummary,
          cd: AALLocalitySummary,
          tract: AALLocalitySummary,
        },
        endpointPrefix: '/economic/aal/summary',
        needsLocation: true,
      },
    },
    nfip: {

    },
  },
};

module.exports = (service, detailLevel) => {
  if (!Object.keys(mapping).includes(service)) {
    throw new Error(`Invalid service ${service}. Allowed: ${Object.keys(mapping).join(', ')}`);
  }

  if (!Object.keys(mapping[service]).includes(detailLevel)) {
    throw new Error(`Invalid detail level ${detailLevel}. Allowed: ${Object.keys(mapping[service]).join(', ')}`);
  }
};
