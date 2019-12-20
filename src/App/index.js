import React from 'react';
import { useAuthState } from '../hooks/useAuthState';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const App = () => {
  const { user } = useAuthState();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
