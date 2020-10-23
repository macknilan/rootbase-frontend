/* eslint-disable import/prefer-default-export */
import React from 'react';
import ProgressIndicators from './components/ProgressIndicators';
import useAuthState from './context/auth-context';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

/* export const App = () => { */
/* export default function App() { */
const App = () => {
  const { data } = useAuthState();
  return (
    <React.Suspense fallback={<ProgressIndicators />}>
      { data.user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
    </React.Suspense>
  );
};

export default App;

/* const App = () => (
  <h1>Hola Mundo</h1>
);

export default App; */
