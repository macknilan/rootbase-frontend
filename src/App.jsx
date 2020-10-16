import React from 'react';
// import { useAuth } from './context/auth-context'
import ProgressIndicators from './components/ProgressIndicators';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  { /* const { user } = useAuth(); */ }
  const user = 'mack';
  /* const user = ''; */
  return (
    <React.Suspense fallback={<ProgressIndicators />}>
      { user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
    </React.Suspense>
  );
};

export default App;
