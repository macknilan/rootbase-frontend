import React from 'react';
import useAuthState from './auth-context';

const UserContext = React.createContext();

const UserProvider = (props) => (
  <UserContext.Provider value={useAuthState().data.user} {...props} />
);

const useUser = () => React.useContext(UserContext);
export default { UserProvider, useUser };

// the UserProvider in user-context.js is basically:
// const UserProvider = props => (
//   <UserContext.Provider value={useAuth().data.user} {...props} />
// )
// and the useUser hook is basically this:
// const useUser = () => React.useContext(UserContext)