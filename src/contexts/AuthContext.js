
import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const BASE_URL= 'https://mealy-backend-app.onrender.com/api/mealy'
export const AuthContext = createContext();

export const AuthProvider = ({ children, initialData }) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userData, setUserData] = useState(initialData.userData || []);
  const [userRecommendations, setUserRecommendations] = useState(initialData.userRecommendations || []);
  const [userOrderHistory, setUserOrderHistory] = useState(initialData.userOrderHistory || []);
  const [status, setStatus] = useState('');
  const onNavigate = useNavigation();

  useEffect(() => {    
    if (userData.length == 0){
        checkLoginStatus();
        retrieveUserData();
    }else{
      setIsLoggedIn(true)
    }
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
      const loggedintoken = response.data.data.login_token;
      if (status === 'success')
      {
      // Update the user state if registration is successful
        // await AsyncStorage.setItem('userToken', token);
        await AsyncStorage.setItem('userData', JSON.stringify(user));
        await AsyncStorage.setItem('loggedintoken', loggedintoken);
        setIsLoggedIn(true);
        setUserData(user);
        retrieveUserOrderHistory();
        retrieveUserRecommendation();
        showAlert('Login successful');
        onNavigate.navigate('MainScreens')
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
        showAlert('Account Registration successful');
        onNavigate.navigate('MainScreens')
      }else{
        showAlert('Account Registration failed');
      }
    } catch (error) {
      // Handle any errors that occur during registration
      console.error('Sign up failed:', error);
      showAlert('Account Registration failed');
    }
  };

  const logout = async () => {
    // Perform logout logic and reset the user state
    setIsLoggedIn(false);
    setUserData(null);
    await AsyncStorage.removeItem('userData');
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
      const status = response.data.message
      if (status === 'Token confirmed'){
        showAlert('Token confirmation was succesful');
        onNavigate.navigate('ResetPasswordScreen')
      }else{
        showAlert('Invalid token')
        onNavigate.navigate('ForgotPasswordScreen')
      }
    } catch (error) {
      showAlert('Token confirmation was unsuccessful')
      onNavigate.navigate('ForgotPasswordScreen')
    }
  };
  const resetPassword = async(email,password, confirmPassword) => {
    // Perform login logic and set the user state
    try {
      // Make the API call to register the user
      const response = await axios.post(`${BASE_URL}/user/resetpassword`, {
        // Include any required registration data
        email,
        password,
        confirmPassword
      });

      const status = response.data.message
      // if (status === 'Token confirmed'){
      //   showAlert('Token confirmation was succesful');
      //   onNavigate.navigate('ResetPasswordSreen')
      // }else{
      //   showAlert('Invalid token')
      //   onNavigate.navigate('ForgotPasswordScreen')
      // }
    } catch (error) {
      showAlert('Token confirmation was unsuccessful')
    }
  };
  const updateUser = async(value) => {
    const loggedintoken = await AsyncStorage.getItem('loggedintoken');
    const userstr = await AsyncStorage.getItem('userData');
    const usrobj = JSON.parse(userstr);
    const userid = usrobj._id;

    try {
      const response = await axios.put(`${BASE_URL}/user/updateuser/${userid}`,
      value,
      {
        headers: {
          Authorization: `Bearer ${loggedintoken}`,
        },
      });
      
      // Process the response data here
      const updateresponse =response.data;
      const user = response.data.data.updatedUser;
      const status = updateresponse.status;
      if (status === 'Success')
      {
      // Update the user state if registration is successful
      await AsyncStorage.setItem('userData', JSON.stringify(user));
      setUserData(user);
      showAlert('User profile updated succefully');
      }else{
        showAlert('User profile update failed');
      }      
    } catch (error) {
      showAlert('Error sending request:', error);
    }
  };
  const retrieveUserOrderHistory= async () => {
    const loggedintoken = await AsyncStorage.getItem('loggedintoken');
    try {
      const response = await axios.get(`${BASE_URL}/user/orderhistory`,
      {
        headers: {
          Authorization: `Bearer ${loggedintoken}`,
        },
      });
    } catch (error) {
      console.log('Error retrieving user order history:', error);
    }
  };
  const retrieveUserRecommendation = async () => {
    const userstr = await AsyncStorage.getItem('userData');
    const usrobj = JSON.parse(userstr);
    const userid = usrobj._id;
    const loggedintoken = await AsyncStorage.getItem('loggedintoken');
    try {
      const response = await axios.get(`${BASE_URL}/user/recommendations/${userid}`,
      {
        headers: {
          Authorization: `Bearer ${loggedintoken}`,
        },
      });
      const recData = response.data.data
      if (recData.length > 0){
        const processedData = recData.map(item => item.product);
        const filteredData = processedData.filter(item => item !== undefined);
        setUserRecommendations(filteredData);
      }else{
        setUserRecommendations([]);
      }
    } catch (error) {
      console.log('Error retrieving user order history:', error);
    }
  };


  return (
    <AuthContext.Provider
      value={{
        userRecommendations,
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
