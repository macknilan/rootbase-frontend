import React from 'react';
import ReacDOM from 'react-dom';
import App from './App';
import AppProviders from './context/app-provider';

ReacDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
  , document.getElementById('app'),
);
