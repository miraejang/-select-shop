import React, { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserSateChanged } from '../api/firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserSateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
