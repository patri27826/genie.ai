import React, { createContext, useState, useContext, useEffect, ReactNode, useMemo } from 'react';
import { Configuration, UserApi } from '../api/openapi';

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  checkLoginStatus: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const accessToken = localStorage.getItem('access_token') ?? '';
      const config = accessToken
        ? new Configuration({
            accessToken,
          })
        : undefined;
      const userApi = new UserApi(config);
      await userApi.verifyToken();
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
      setIsLoggedIn(false);
    }
  };

  const authValue = useMemo(
    () => ({ isLoggedIn, setIsLoggedIn, checkLoginStatus }),
    [isLoggedIn, setIsLoggedIn, checkLoginStatus],
  );

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
