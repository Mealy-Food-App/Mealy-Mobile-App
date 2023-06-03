import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen
            name = "HomeScreen"
            component={HomeScreen}
          />
        {/* <Stack.Screen name = "WelcomeScreen" component={WelcomeScreen}/> */}
        <Stack.Screen
            name = "LoginScreen"
            component={LogInScreen}
          />
          <Stack.Screen
            name = "SignUpScreen"
            component={SignUpScreen}
          />   
          <Stack.Screen
            name = "ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />        
    </Stack.Navigator>
  )
}

export default StackScreens