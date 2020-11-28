import {
  UserLogin,
  UserSingUp,
  UserRequest,
} from './utils/endpoints/user-endpoints';

const localStorageKey = '__event_up_auth_provider_token__';

// REQUEST
async function userByToken(token) {
  const userInfo = await UserRequest({
    path: '',
    body: null,
    params: {},
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return userInfo;
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

function handleAuthResponse({ authToken }) {
  if (authToken) {
    window.localStorage.setItem(localStorageKey, authToken);
    return authToken;
  }
  throw new Error('No Auth Token');
}

// LOGIN
async function login(email, password) {
  // eslint-disable-next-line no-useless-catch
  try {
    const loginRespone = await UserLogin({
      path: '',
      body: {
        email,
        password,
      },
      params: {},
    });
    handleAuthResponse(loginRespone.data);
    return loginRespone;
  } catch (error) {
    throw error;
  }
}

// REGISTER/SIGNUP
async function register(data) {
  /* console.log('auth-provider register data ->', data); */
  // eslint-disable-next-line no-useless-catch
  try {
    const registerResponse = await UserSingUp({
      path: '',
      body: { ...data },
      params: {},
    });
    return { registerResponse };
  } catch (err) {
    console.error({
      /* err, */
      'error auth-provider ': err,
      /* 'error auth-provider status': err.response.status,
      'error auth-provider response': err.response.data,
      'error auth-provider message': err.message, */
      /* 'error auth-provider status': err.response.status,
      'error auth-provider response.data.non_field_errors': err.response.data.non_field_errors,
      'error auth-provider response.data': err.response.data,
      'error auth-provider message': err.message, */
    });
    return { err };
  }
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
}

export { getToken, login, register, logout, localStorageKey, userByToken };
