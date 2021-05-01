const PropertySummary = require('../../models/location/property/summary/index.js');
const CitySummary = require('../../models/location/city/summary/index.js');
const LocalitySummary = require('../../models/location/LocalitySummary.js');
const CityDetail = require('../../models/location/city/detail/index.js');
const PropertyDetail = require('../../models/location/property/detail/index.js');
const CountyDetail = require('../../models/location/county/detail/index.js');
const NeighborhoodDetail = require('../../models/location/neighborhood/detail/index.js');
const ZctaDetail = require('../../models/location/zcta/detail/index.js');
const StateDetail = require('../../models/location/state/detail/index.js');
const DistrictDetail = require('../../models/location/district/detail/index.js');
const TractDetail = require('../../models/location/tract/detail/index.js');
const ProbabilityCumulative = require('../../models/probability/ProbabilityCumulative');
const HistoricEvent = require('../../models/historic/HistoricEvent');
const AALLocalitySummary = require('../../models/economic/AALLocalitySummary');
const AALPropertySummary = require('../../models/economic/AALPropertySummary');
const NFIPPropertySummary = require('../../models/economic/NFIPPropertySummary');
const ProbabilityDepth = require('../../models/probability/ProbabilityDepth');
const ProbabilityCount = require('../../models/probability/ProbabilityCount');
const ProbabilityChance = require('../../models/probability/ProbabilityChance');
const ProbabilityCountSummary = require('../../models/probability/ProbabilityCountSummary.js');

/*
  Mapping between fsf-probability and the client code is done through two-level object:
    first level is service, second level is 'detail level'
    i.e. the first entry corresponds to service=location and detailLevel=detail.

  model - class to handle response data.
    If model is an object then data returned by endpoint differes based on location type.
    If the model is string then the same class is used to return responses for all locations

  needsLocation - whether endpoint takes locationtype parameter

  endpointPrefix - fsf-probability endpoint path

  allowedParameters - a list of parameters that the operation can take

*/
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
      needsLocation: true,
      endpointPrefix: '/location/detail',
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
      model: { all: ProbabilityCumulative },
      endpointPrefix: '/probability/cumulative',
      needsLocation: true,
    },
    depth: {
      model: { all: ProbabilityDepth },
      endpointPrefix: '/probability/depth',
      needsLocation: true,
    },
    count: {
      model: { all: ProbabilityCount },
      endpointPrefix: '/probability/count',
      needsLocation: true,
    },
    chance: {
      model: { all: ProbabilityChance },
      endpointPrefix: '/probability/chance',
      needsLocation: true,
    },
    'count-summary': {
      model: { all: ProbabilityCountSummary },
      endpointPrefix: '/probability/count-summary',
      needsLocation: true,
    },
  },
  historic: {
    event: {
      model: { all: HistoricEvent },
      endpointPrefix: '/historic/event',
      needsLocation: false,
      allowedParameters: ['id'],
    },
  },
  economic: {
    aal: {
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
      allowedParameters: ['depth', 'stories', 'basement', 'floorElevation', 'untis', 'avm'],
    },
    nfip: {
      model: { all: NFIPPropertySummary },
      endpointPrefix: '/economic/nfip/summary',
      needsLocation: true,
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

  return mapping[service][detailLevel];
};
