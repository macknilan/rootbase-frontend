import React from 'react';
// import { useAuth } from './context/auth-context'
import ProgressIndicators from './components/ProgressIndicators';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

function App() {
  { /* const { user } = useAuth(); */ }
  const user = 'mack';
  { /* const user = null; */ }
  return (
    <React.Suspense fallback={<ProgressIndicators />}>
      { user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
    </React.Suspense>
  );
};

export default App;
