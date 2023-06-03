import React, { createContext, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = (userData) => {
    // Perform login logic and set the user state
    setUser(userData);
  };

  const register = (fullName, email, password) => {
    axios
      .post(`${BASE_URL}/user/signup`,{
        fullName,
        email,
        password
      })
      .then(res => {
        let userInfo = res.data;
        setUser(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
      })
  };

  const logout = () => {
    // Perform logout logic and reset the user state
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
