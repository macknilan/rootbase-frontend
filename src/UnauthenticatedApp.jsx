import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import SignUpForm from './pages/SignUp';
import Login from './components/Login';

const UnauthenticatedApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={SignUpForm} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default UnauthenticatedApp;
