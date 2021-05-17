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
const HistoricLocalitySummary = require('../../models/historic/HistoricLocalitySummary');
const HistoricPropertySummary = require('../../models/historic/HistoricPropertySummary');
const AalLocalitySummary = require('../../models/economic/AalLocalitySummary');
const AalPropertySummary = require('../../models/economic/AalPropertySummary');
const NfipPropertySummary = require('../../models/economic/NfipPropertySummary');
const ProbabilityDepth = require('../../models/probability/ProbabilityDepth');
const ProbabilityCount = require('../../models/probability/ProbabilityCount');
const ProbabilityChance = require('../../models/probability/ProbabilityChance');
const ProbabilityCountSummary = require('../../models/probability/ProbabilityCountSummary.js');
const AvmProvider = require('../../models/economic/AvmProvider.js');
const AvmProperty = require('../../models/economic/AvmProperty.js');
const Adaptation = require('../../models/adaptation/Adaptation.js');
const AdaptationSummary = require('../../models/adaptation/AdaptationSummary.js');
const FemaNfip = require('../../models/fema/FemaNfip.js');
const Precipitation = require('../../models/environmental/Precipitation.js');
const SeaLevel = require('../../models/environmental/SeaLevel.js');
const TideStationDetail = require('../../models/environmental/TideStationDetail');

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
// all models need to exend ApiResponse class
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
    summary: {
      model: {
        property: HistoricPropertySummary,
        city: HistoricLocalitySummary,
        county: HistoricLocalitySummary,
        neighborhood: HistoricLocalitySummary,
        zcta: HistoricLocalitySummary,
        state: HistoricLocalitySummary,
        cd: HistoricLocalitySummary,
        tract: HistoricLocalitySummary,
      },
      endpointPrefix: '/historic/summary',
      needsLocation: true,
    },
  },
  economic: {
    aal: {
      model: {
        property: AalPropertySummary,
        city: AalLocalitySummary,
        county: AalLocalitySummary,
        neighborhood: AalLocalitySummary,
        zcta: AalLocalitySummary,
        state: AalLocalitySummary,
        cd: AalLocalitySummary,
        tract: AalLocalitySummary,
      },
      endpointPrefix: '/economic/aal/summary',
      needsLocation: true,
      allowedParameters: ['depth', 'stories', 'basement', 'floorElevation', 'untis', 'avm'],
    },
    nfip: {
      model: { all: NfipPropertySummary },
      endpointPrefix: '/economic/nfip',
      needsLocation: true,
    },
    avmProvider: {
      model: { all: AvmProvider },
      endpointPrefix: '/economic/avm/provider',
      needsLocation: false,
      allowedParameters: ['id'],
    },
    avmProperty: {
      model: { all: AvmProperty },
      endpointPrefix: '/economic/avm',
      needsLocation: true,
    },
  },
  adaptation: {
    detail: {
      model: { all: Adaptation },
      endpointPrefix: '/adaptation/detail',
      needsLocation: false,
      allowedParameters: ['id'],
    },
    summary: {
      model: { all: AdaptationSummary },
      endpointPrefix: '/adaptation/summary',
      needsLocation: true,
    },
  },
  fema: {
    nfip: {
      model: { all: FemaNfip },
      needsLocation: true,
      endpointPrefix: '/fema/nfip',
    },
  },
  environmental: {
    precipitation: {
      model: { all: Precipitation },
      needsLocation: true,
      endpointPrefix: '/environmental/precipitation',
    },
    'sea-level': {
      model: { all: SeaLevel },
      needsLocation: true,
      endpointPrefix: '/environmental/sea-level',
    },
    'tide-station': {
      model: { all: TideStationDetail },
      needsLocation: false,
      endpointPrefix: '/environmental/tide-station',
      allowedParameters: ['id'],
    },
  },
};

module.exports = (service, detailLevel) => {
  if (!Object.keys(mapping).includes(service)) {
    throw new Error(`Invalid service ${service}. Allowed: ${Object.keys(mapping).join(', ')}`);
  }

  if (!Object.keys(mapping[service]).includes(detailLevel)) {
    throw new Error(`Invalid detail level ${detailLevel} for service ${service}. Allowed: ${Object.keys(mapping[service]).join(', ')}`);
  }

  return mapping[service][detailLevel];
};
