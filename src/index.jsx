import React from 'react';
import ReacDOM from 'react-dom';
import App from './App';
/* import AppProviders from './context/app-provider'; */
import AppProviders from './context/auth-context';

ReacDOM.render(
  <AppProviders>
    <App />
  </AppProviders>
  , document.getElementById('app'),
);
