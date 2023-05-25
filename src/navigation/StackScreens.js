import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

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
    </Stack.Navigator>
  )
}

export default StackScreens