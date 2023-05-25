import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Alert, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {useFonts,Poppins_400Regular,Poppins_500Medium,Poppins_700Bold} from '@expo-google-fonts/poppins'

import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import StackScreens from './src/navigation/StackScreens';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isAppReady, setIsAppReady] = React.useState(false);
  const [userOnboarded, setUserOnboarded]= React.useState(false);
  React.useEffect(() =>{
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const onboardingStatus = await AsyncStorage.getItem('onboardingStatus');
      if (onboardingStatus !== null && onboardingStatus === 'completed') {
        setUserOnboarded(true);
      }
    } catch (error) {
      Alert.alert(error.message)
    } 
  };

  const [fontsReady] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });


  React.useEffect(() => {
      setTimeout(() => {
        setIsAppReady(true);
      },6000);
  }, [fontsReady]);
 

  if (!isAppReady) {
    // Render the custom loading screen
    return(
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
  if (!userOnboarded){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen
            name = "OnboardingScreen"
            component={OnboardingScreen}
          />
          <Stack.Screen
            name = "WelcomeScreen"
            component={WelcomeScreen}
          />
          <Stack.Screen
            name = "LoginScreen"
            component={LogInScreen}
          />
          <Stack.Screen
            name = "SignUpScreen"
            component={SignUpScreen}
          />
          <Stack.Screen
            name = "HomeScreen"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


  // Render the actual app content once the loading is complete
  return (
    <NavigationContainer>
      <StackScreens/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#e69f14'
  },
  image: {
    width: 240,
    height: 240,
    resizeMode: 'contain',
  },
  image2: {
    width: 160,
    height: 56,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 56,
    fontWeight: 'bold',
    marginTop: 20,
    color:'#00205C',
    fontFamily:'Lobster-Regular',
    fontWeight:'400'
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  }
});