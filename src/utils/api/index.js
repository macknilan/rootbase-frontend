import axios from 'axios';
import { API_URL } from '../const';

const DEFAULT_HEADER = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'Content-Type': 'application/json',
};

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  mode: 'cors',
});

export const EndPoints = (
  base,
  method,
  headers = {
    headers: DEFAULT_HEADER,
  },
) => async ({ path = '', body = null, params, headers }) => {
  if (method !== 'GET') {
    try {
      const res = await API.post(base, body, headers);
      return { res };
    } catch (err) {
      console.error({
        /* err, */
        'error api status': err.response.status,
        'error api response.data.non_field_errors': err.response.data.non_field_errors,
        'error api response.data': err.response.data,
        'error api message': err.message,
      });
      return { err };
    }
  }
};

/* return API[method](`${base}/${path}`, body, {
      params,
      headers,
    })
      .then((response) => response.data)
      .catch(HandlerError); */

/* return API[method](`${base}/${path}`, {
    params,
    headers,
  })
    .then((response) => response.data)
    .catch(HandlerError); */
//};

export default API;
