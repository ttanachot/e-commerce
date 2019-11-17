import axios from 'axios';
import config from '../config';
import { getAccessToken } from './auth';

const { apiBasename } = config;

const getBearerToken = () => {
  const token = getAccessToken();
  return (token) ? `Bearer ${token}` : null;
}

const get = async (url) => {
  const bearerToken = getBearerToken();
  const headers = (!bearerToken)
    ? null
    : {
      headers: { authorization: bearerToken },
    }
    ;
  try {
    const response = await axios(
      `${apiBasename}${url}`,
      {
        method: 'GET',
        ...headers,
      },
    );
    // NOTE: We have to handle to get value from response like this:
    // - response.data => axios wrapper data
    // - reponse.data.data => data key response from server
    return response.data;
  } catch (err) {
    return err;
  }
};

const post = async (url, data) => {
  const bearerToken = getBearerToken();
  const headers = (!bearerToken)
    ? null
    : {
      headers: { authorization: bearerToken },
    }
    ;
  try {
    const response = await axios(
      `${apiBasename}${url}`,
      {
        method: 'POST',
        data,
        ...headers,
      },
    );
    // NOTE: We have to handle to get value from response like this:
    // - response.data => axios wrapper data
    return response.data;
  } catch (err) {
    return err;
  }
};

const put = async () => {
  // TODO: Implement later
};

const patch = async () => {
  // TODO: Implement later
};

const _delete = async () => {
  // TODO: Implement later
};

export default {
  get,
  post,
  put,
  patch,
  delete: _delete,
};