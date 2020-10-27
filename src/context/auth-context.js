import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as auth from '../auth-provider';

export const AuthContext = React.createContext();

/* export const AuthProvider = (props) => { */
/* function AuthProvider(props) { */

const AppProviders = (props) => {
  const history = useHistory();

  const [data, setData] = useState({
    status: 'initial',
    error: null,
    user: null,
  });

  // DATA FOR TESTING
  /* const data = () => {
    setData({
      status: 'pending',
      error: null,
      user: null,
    });
  }; */

  // LOGIN
  /* const login = () => {
    setData({
      status: 'pending',
      error: null,
      user: null,
    });
  }; */

  /* const login = async (user, password) => {
    setData({
      status: 'pending',
      error: null,
      user: null,
    });
    try {
      const responseUser = await auth.login(user, password);
      if (responseUser.hasOwnProperty('data') && responseUser.status) {
        setData({
          status: 'success',
          error: null,
          user: { ...responseUser.data.user },
        });
        history.push('/dashboard');
      } else {
        setData({
          status: 'error',
          error: null,
          user: null,
        });
      }
    } catch (err) {
      setData({ status: 'error', error: err, user: null });
    }
  }; */

  // REGISTER/SIGNUP
  /* const signup = () => {
    setData({
      status: 'pending',
      error: null,
      user: null,
    });
  }; */

  /* const signup = async (registerParams) => {
    console.log(registerParams);
    setData({
      status: 'pending',
      error: null,
      user: null,
    });
    try {
      const responseRegister = await auth.register(registerParams);
      setData({
        status: 'success',
        error: null,
        user: null,
      });
      // DISPATCH MESSAGE SUCCES Revirew email
      console.log(
        '%c Check your email',
        'background-color: green; color:white;',
        responseRegister.data.email
      );
      history.push('/dashboard');
    } catch (err) {
      console.log('%c Error on', err);
      setData({ status: 'error', error: err, user: null });
    }
  }; */

  // LOGOUT
  /* const logout = () => {
    setData({
      status: 'pending',
      error: null,
      user: null,
    });
  }; */

  /* const logout = () => {
    // remove info on localStorage and clean the user
    auth.logout();
    setData({ status: 'initial', error: null, user: null });
    history.push('/');
  }; */ // clear the token in localStorage and the user data

  /* useEffect(() => {
    async function fetchData(token) {
      const response = await auth.userByToken(token);
      console.log('Auth provider', response);
      setData({ status: 'success', error: null, user: response.data });
      history.push('/dashboard');
    }
    let token = auth.getToken();
    if (token) {
      fetchData(token);
    } else {
      setData({ status: 'initial', error: null, user: null });
    }
    // eslint-disable-next-line
  }, []); */

  return (
    // eslint-disable-next-line react/jsx-first-prop-new-line
    // <AuthContext.Provider value={{ data, login, logout, signup }}
    <AuthContext.Provider value={{ data }}>
      { props.children }
    </AuthContext.Provider>
  );
};

/* const useAuthState = () => React.useContext(AuthContext); */
/* export default { AuthProvider, useAuthState }; */

/* export const useAuthState = () => React.useContext(AuthContext); */
export default AppProviders;
