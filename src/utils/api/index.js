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
  /* headers: DEFAULT_HEADER, */
});

const HandlerError = (err) => {
  const { data } = err.response;
  debugger;
  throw new Error(data.message);
};

export const EndPoints = (
  base,
  method,
  headers = {
    headers: DEFAULT_HEADER,
  },
) => ({ path = '', body = null, params, headers }) => {
  if (method !== 'get') {
    return API.post( base, body, { headers })
      .then((response) => {
        console.log(response);
      })
      .catch(HandlerError);

    /* return API[method](`${base}/${path}`, body, {
      params,
      headers,
    })
      .then((response) => response.data)
      .catch(HandlerError); */
  }

  /* return API[method](`${base}/${path}`, {
    params,
    headers,
  })
    .then((response) => response.data)
    .catch(HandlerError); */
};

export default API;
