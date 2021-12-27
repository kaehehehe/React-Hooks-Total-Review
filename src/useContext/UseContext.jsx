import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

export const UserContext = createContext(null);

const UsernameContext = () => {
  const [username, setUsername] = useState('');
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </UserContext.Provider>
  );
};

export default UsernameContext;
