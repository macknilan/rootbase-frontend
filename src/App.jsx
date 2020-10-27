/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import ProgressIndicators from './components/ProgressIndicators';
/* import useAuthState from './context/auth-context'; */
import { AuthContext } from './context/auth-context';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

/* export const App = () => { */
/* export default function App() { */
/* function App() { */
const App = () => {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <React.Suspense fallback={<ProgressIndicators />}>
      { data.user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
    </React.Suspense>
  );
};


/* const App = () => {
  return (
    <React.Suspense fallback={<ProgressIndicators />}>
      <h1>Hola Mundo</h1>
    </React.Suspense>
  );
}; */

/* const App = () => {
  return (
    <React.Suspense fallback={<ProgressIndicators />}>
      <UnauthenticatedApp />
    </React.Suspense>
  );
}; */

export default App;
/* export default { App }; */
