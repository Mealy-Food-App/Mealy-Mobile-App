
import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const BASE_URL= 'https://mealy-backend-app.onrender.com/api/mealy'
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [status, setStatus] = useState('');
  const onNavigate = useNavigation();

  useEffect(() => {
    checkLoginStatus();
    retrieveUserData();
  }, []);

  const showAlert = (message) => {
    setStatus(message);
    setTimeout(() => {
      setStatus('');
    }, 3000); // 3000 milliseconds (3 seconds)
  };

  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');

      if (value !== null && value === 'true') {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log('Error retrieving login status:', error);
    }
  };
  // Retrieve user data if logged in
  const retrieveUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      if (data !== null) {
        setUserData(JSON.parse(data));
      }
    } catch (error) {
      console.log('Error retrieving user data:', error);
    }
  };

  const login = async(email, password) => {
    // Perform login logic and set the user state
    try {
      // Make the API call to register the user
      const response = await axios.post(`${BASE_URL}/user/signin`, {
        // Include any required registration data
        email,
        password
      });
      const loginresponse =response.data;
      const user = response.data.data.user;
      const status = loginresponse.status;
      if (status === 'success')
      {
      // Update the user state if registration is successful
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('userData', JSON.stringify(user));
        setIsLoggedIn(true);
        setUserData(user);
        console.log(user)
        showAlert('Login successful');
        onNavigate.navigate('HomeScreen')
      }else{
        showAlert('Login failed');
      }
    } catch (error) {
      // Handle any errors that occur during registration
      console.error('Sign in failed:', error);
      showAlert('Login failed');
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
      const registrationresponse = response.data;
      const user = response.data.data.user;
      const status = registrationresponse .status;
      if (status === 'Success')
      {
      // Update the user state if registration is successful
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('userData', JSON.stringify(user));
        setIsLoggedIn(true);
        setUserData(user);
        console.log(user);
        showAlert('Account Registration successful');
        onNavigate.navigate('HomeScreen')
      }else{
        showAlert('Account Registration failed');
      }
    } catch (error) {
      // Handle any errors that occur during registration
      console.error('Sign up failed:', error);
      showAlert('Account Registration failed');
    }
  };

  const logout = () => {
    // Perform logout logic and reset the user state
    setIsLoggedIn(false);
    setUserData(null);
  };

  const forgotPassword = async(email) => {
    // Perform login logic and set the user state
    try {
      // Make the API call to register the user
      const response = await axios.post(`${BASE_URL}/user/forgotpassword`, {
        // Include any required registration data
        email
      });
      const status = response.data.message
      console.log(response);
      console.log("hdhhdhdh", status)
      if (status === 'Reset email sent'){
        showAlert('Account verification code sent to email. Enter token to verify your account');
        onNavigate.navigate('ConfirmTokenScreen')
      }else{
        showAlert('Account does not exist')
      }
    } catch (error) {
      // Handle any errors that occur during registration
      showAlert('Account verification code couldn\'t be sent to email');
    }
  };
  const confirmToken = async(token) => {
    // Perform login logic and set the user state
    try {
      // Make the API call to register the user
      const response = await axios.post(`${BASE_URL}/user/confirmtoken`, {
        // Include any required registration data
        token
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
  const resetPassword = async(email,password) => {
    // Perform login logic and set the user state
    try {
      // Make the API call to register the user
      const response = await axios.post(`${BASE_URL}/user/resetpassword`, {
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
  const updateUser = async(email,password) => {
    // Perform login logic and set the user state
    try {
      // Make the API call to register the user
      const response = await axios.post(`${BASE_URL}/user/resetpassword`, {
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


  return (
    <AuthContext.Provider
      value={{
        status,
        userData,
        isLoggedIn,
        resetPassword,
        confirmToken,
        forgotPassword,
        updateUser,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
