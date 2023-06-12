import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { Alert, StyleSheet, Text, View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold , Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import {Montserrat_400Regular,Montserrat_500Medium,Montserrat_600SemiBold,Montserrat_700Bold} from '@expo-google-fonts/montserrat';


import SplashScreen from './src/screens/SplashScreen';
import { AppStackScreens, OnboardingStackScreens } from './src/navigation/StackScreens';
import { AuthProvider } from './src/contexts/AuthContext';


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
    Poppins_600SemiBold,
    Poppins_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
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
        <AuthProvider>        
          <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
              name="Splash"
              component={SplashScreen}
            />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    );
  }
  if (!userOnboarded){
    return(
      <NavigationContainer>
        <AuthProvider>        
          <OnboardingStackScreens/> 
        </AuthProvider>         
      </NavigationContainer>
      
    );
  }


  // Render the actual app content once the loading is complete
  return (
    <NavigationContainer>
      <AuthProvider>      
        <AppStackScreens/>
      </AuthProvider>
    </NavigationContainer>    
  );
};
