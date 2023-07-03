import React, { useContext, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { Alert, StyleSheet, Text, View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold , Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import {Montserrat_400Regular,Montserrat_500Medium,Montserrat_600SemiBold,Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import axios from 'axios';

import SplashScreen from './src/screens/SplashScreen';
import { AppStackScreens, OnboardingStackScreens } from './src/navigation/StackScreens';
import { AuthProvider } from './src/contexts/AuthContext';
import { CartProvider } from './src/contexts/CartContext';
import { ProductsProvider } from './src/contexts/ProductsContext';


const Stack = createStackNavigator();

export default function App() {
  const [isAppReady, setIsAppReady] = React.useState(false);
  const [userOnboarded, setUserOnboarded]= React.useState(false);


  useEffect(() =>{
    checkOnboardingStatus();
  }, []);
  const testAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('testKey', 'testValue');
      const value = await AsyncStorage.getItem('testKey');
      console.log(value); // Check if 'testValue' is logged correctly
    } catch (error) {
      console.log(error.message);
    }
  };
  
  // Call the test function to verify AsyncStorage functionality
  testAsyncStorage();

  const checkOnboardingStatus = async () => {
    try {
      const onboardingStatus = await AsyncStorage.getItem('onboardingStatus');
      console.log(onboardingStatus);
      if (onboardingStatus !== null && onboardingStatus === 'completed') {
        setUserOnboarded(true);

      }
    } catch (error) {
      console.log(error.message)
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
    if(fontsReady){
      setTimeout(() => {
        setIsAppReady(true);
      },12000);
    }
  }, [fontsReady]);
 

  if (!isAppReady) {
    // Render the custom loading screen
    return(
      <NavigationContainer>
          <ProductsProvider>
            <AuthProvider>
              <CartProvider>   
                <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                  />
                </Stack.Navigator>
              </CartProvider>   
            </AuthProvider>
          </ProductsProvider>
      </NavigationContainer>
    );
  }
  if (!userOnboarded){
    return(
      <NavigationContainer>
        <ProductsProvider>
          <AuthProvider>   
            <CartProvider>  
              <OnboardingStackScreens/> 
            </CartProvider>
          </AuthProvider>
        </ProductsProvider>     
      </NavigationContainer>
      
    );
  }


  // Render the actual app content once the loading is complete
  return (
    <NavigationContainer>
      <ProductsProvider>
        <AuthProvider> 
          <CartProvider>    
            <AppStackScreens/>
          </CartProvider>
        </AuthProvider>
      </ProductsProvider>
    </NavigationContainer>    
  );
};
