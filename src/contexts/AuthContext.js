
import React, { createContext, useState } from 'react';
import axios from 'axios';


const BASE_URL= 'https://mealy-backend-app.onrender.com/api/mealy'
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async(email, password) => {
    // Perform login logic and set the user state
    try {
      // Make the API call to register the user
      const response = await axios.post(`${BASE_URL}/user/signin`, {
        // Include any required registration data
        email,
        password
      });

      // Update the user state if registration is successful
      setUser(response.data.user);

      // Return the API response
      return response.data;
    } catch (error) {
      // Handle any errors that occur during registration
      console.error('Sign in failed:', error);
      throw error;
    }
  };

  const register = async (fullName, email, password) => {
    try {
      // Make the API call to register the user
      const response = await axios.post(`${BASE_URL}/user/signup`, {
        // Include any required registration data
        fullName,
        email,
        password
      });

      // Update the user state if registration is successful
      setUser(response.data.user);

      // Return the API response
      return response.data;
    } catch (error) {
      // Handle any errors that occur during registration
      console.error('Sign up failed:', error);
      throw error;
    }
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
