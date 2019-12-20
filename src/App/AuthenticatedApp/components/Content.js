import React from 'react';
import { useAuthState } from '../../../hooks/useAuthState';

const Content = () => {
  const { user } = useAuthState();
  return <p>I am so happy to have you here {user.username}.</p>;
};

export default Content;
