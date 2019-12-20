import React from 'react';
import { useAuthState } from '../../../hooks/useAuthState';

const Header = () => {
  const { user } = useAuthState();
  return <p>Hello {user.username}</p>;
};

export default Header;
