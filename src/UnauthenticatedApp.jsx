import React from 'react';
/* import SignIn from './components/Login'; */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* import { UserProvider } from '../context/UserContext' */
import NotFound from './pages/NotFound';
import SignUpForm from './pages/SignUp';
import Login from './components/Login';

const UnauthenticatedApp = () => {
  return (
    /* <UserProvider > */
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={SignUpForm} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    /* </UserProvider> */
  );
};

export default UnauthenticatedApp;
