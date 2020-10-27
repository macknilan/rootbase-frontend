import React from 'react';
import { withRouter } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */
/*
AuthProvider
would be responsible for bootstrapping the app data
(if the user's authentication token is already in localStorage
then we can simply retrieve the user's data using that token)
*/
/*
UserProvider
Then the <UserProvider /> would be responsible for keeping
the user data up to date in memory and on the server as we
make changes to the user's data
*/

import { AuthProvider } from './auth-context';
import { UserProvider } from './user-context';

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};

/* export default withRouter(AppProviders); */
export default { AppProviders };
