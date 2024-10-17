import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser ] = useState(null);

  const loginUser  = (userData) => {
    setUser (userData);
  };

  const logoutUser  = () => {
    setUser (null);
    localStorage.removeItem('token'); // Clear token from local storage
  };

  return (
    <AuthContext.Provider value={{ user, loginUser , logoutUser  }}>
      {children}
    </AuthContext.Provider>
  );
};