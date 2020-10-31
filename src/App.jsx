import React, { useContext } from 'react';
import ProgressIndicators from './components/ProgressIndicators';
/* import useAuthState from './context/auth-context'; */
import { UserProvider } from './context/auth-context';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const data = useContext(UserProvider);
  console.log(data);
  return (
    <React.Suspense fallback={<ProgressIndicators />}>
      { data.user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
    </React.Suspense>
  );
};

export default App;
