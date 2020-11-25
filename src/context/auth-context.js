import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as auth from '../auth-provider';

/*
AuthProvider
would be responsible for bootstrapping the app data
(if the user's authentication token is already in localStorage
then we can simply retrieve the user's data using that token) */
/*
UserProvider
Then the <UserProvider /> would be responsible for keeping
the user data up to date in memory and on the server as we
make changes to the user's data */

export const UserProvider = React.createContext();

const AppProviders = (props) => {
  const history = useHistory();

  const [data, setData] = useState({
    status: 'initial',
    error: null,
    user: null,
  }, []);

  // LOGIN
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
  const signup = async (registerParams) => {
    /* setData({
      status: 'pending',
      error: null,
      user: null,
    }); */
    console.log('registerParams auth-context -> ', registerParams);
    try {
      const responseRegister = await auth.register(registerParams);
      console.log('responseRegister[IN] auth-context -> ', responseRegister);
      /* console.log(responseRegister.registerResponse.err.message); */
      if (responseRegister.registerResponse.err.response.status >= 500 && responseRegister.registerResponse.err.response.status <= 599) {
        // SERVER ERROR
        console.error('SERVER ERRORS: ', responseRegister.registerResponse.err.response.status);
        setData({
          status: 'error',
          error: responseRegister.registerResponse.err.response.status,
          user: null,
        }, []);
      } else if (responseRegister.registerResponse.err.response.status >= 400 && responseRegister.registerResponse.err.response.status <= 499) {
        // THE REQUEST WAS MADE BUT ITS A CLIENT ERROR RESPONSES
        console.error('CLIENT ERRORS: ', responseRegister.registerResponse.err.response.status);
        console.error('CLIENT ERRORS: ', responseRegister.registerResponse.err.response.data.non_field_errors);
        setData({
          status: 'error',
          error: responseRegister.registerResponse.err.response.data.non_field_errors,
          user: null,
        }, []);
        //debugger;
      }
      // DISPATCH MESSAGE SUCCES Revirew email
      /* console.log(
        '%c Check your email',
        'background-color: green; color:white;',
        responseRegister.data.email,
      ); */
      console.log('DISPATCH MESSAGE SUCCES Revirew email');
      /* history.push('/dashboard'); */
    } catch (err) {
      console.error({
        /* err, */
        'error status': err.response.status,
        'error response': err.response.data,
        'error message': err.message,
      });
      setData({
        status: 'error',
        error: err,
        user: null,
      }, []);
    }
  };

  // LOGOUT
  /* const logout = () => {
    // remove info on localStorage and clean the user
    auth.logout();
    setData({ status: 'initial', error: null, user: null });
    history.push('/');
  }; */ // clear the token in localStorage and the user data

  useEffect(() => {
    async function fetchData(token) {
      const response = await auth.userByToken(token);
      console.log('Auth provider', response);
      setData({ status: 'success', error: null, user: response.data });
      history.push('/dashboard');
    }
    const token = auth.getToken();
    if (token) {
      fetchData(token);
    } else {
      setData({ status: 'initial', error: null, user: null });
    }
    // eslint-disable-next-line
  }, []);

  return (
    // <AuthContext.Provider value={{ data, login, logout, signup }}
    <UserProvider.Provider value={{ data, signup }}>
      { props.children }
    </UserProvider.Provider>
  );
};

export default AppProviders;
