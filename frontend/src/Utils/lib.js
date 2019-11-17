import qs from 'qs';
import { compose, pick } from 'lodash/fp';

export const parseQueryString = (params) => qs.parse(params, { ignoreQueryPrefix: true });

export const stringifyParams = (obj) => qs.stringify(obj, { encodeValuesOnly: true });

export const buildQueryString = (obj, keys) => compose(
  str => (!str) ? '': `?${str}`,
  stringifyParams,
  pick(keys),
  parseQueryString,
)(obj);