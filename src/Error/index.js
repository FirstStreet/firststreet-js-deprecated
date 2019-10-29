const RATE_LIMIT = 'Request rate limited. Free for non-commercial use for up to 10 requests per minute! To increase your rate limit, please contact api@firststreet.com';
const UNAUTHORIZED = 'Unauthorized Access. invalid API key provided.';
const UNKNOWN = 'Unknown error, please check your request and try again.';
const INTERNAL = 'Internal Server Error.';
const NO_BODY = 'No body returned from response.';
const NOT_FOUND = 'The specified object could not be found.';
const OFFLINE = 'API is currently offline, try again later.';
const NOT_ACCEPTABLE = 'You requested a format that is\'t JSON';
const NETWORK_ERROR = 'Network error, check host name.';

function normalizeError(messages = 'Unknown Client error', attachments = {***REMOVED***) {
  return {
    errors: true,
    messages,
    ...attachments,
  ***REMOVED***;
***REMOVED***
module.exports = {
  RATE_LIMIT,
  UNAUTHORIZED,
  UNKNOWN,
  INTERNAL,
  NO_BODY,
  NOT_FOUND,
  OFFLINE,
  NOT_ACCEPTABLE,
  NETWORK_ERROR,
  normalizeError,
***REMOVED***;
