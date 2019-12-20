import React, { useContext, useState, useEffect, createContext } from 'react';

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const getUser = () => sleep(1000).then(() => ({ username: 'elmo' }));
// .then(() => null)

export const AuthContext = createContext();

const Data = ({ status, error, children }) => {
  if (status === 'pending') {
    return <h1>Loading</h1>;
  }

  if (status === 'error') {
    return (
      <div>
        Oh no
        <div>
          <pre>{error.message}</pre>
        </div>
      </div>
    );
  }

  return children;
};

export const useAuthState = () => {
  const state = useContext(AuthContext);
  const isPending = state.status === 'pending';
  const isError = state.status === 'error';
  const isSuccess = state.status === 'success';
  const isAuthenticated = state.user && isSuccess;

  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    status: 'pending',
    error: null,
    user: null,
  });

  useEffect(() => {
    getUser().then(
      user => setState({ status: 'success', error: null, user }),
      error => setState({ status: 'error', error, user: null })
    );
  }, []);

  return (
    <AuthContext.Provider value={state}>
      <Data {...{ ...state, children }} />
    </AuthContext.Provider>
  );
};
