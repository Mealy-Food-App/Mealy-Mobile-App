import React, { useContext, useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Alert, StyleSheet, Text, View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import * as Font from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold , Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import {Montserrat_400Regular,Montserrat_500Medium,Montserrat_600SemiBold,Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import axios from 'axios';

import SplashScreen from './src/screens/SplashScreen';
import { AppStackScreens, OnboardingStackScreens } from './src/navigation/StackScreens';
import { AuthProvider } from './src/contexts/AuthContext';
import { CartProvider } from './src/contexts/CartContext';
import { ProductsProvider, ProductsContext } from './src/contexts/ProductsContext';
import { LocationProvider } from './src/contexts/LocationContext';
const BASE_URL = 'https://mealy-backend-app.onrender.com/api/mealy';


const Stack = createStackNavigator();

export default function App() {
  const [isAppReady, setIsAppReady] = React.useState(false);
  const [userOnboarded, setUserOnboarded]= React.useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [restaurantsLoaded, setRestaurantsLoaded] = useState(false);
  
  console.log(categoriesLoaded)
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
  const testAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('testKey', 'testValue');
      const value = await AsyncStorage.getItem('testKey');
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchData = async () => {
    try {
      const [categoriesResponse, productsResponse, restaurantsResponse] = await Promise.all([
        axios.get(`${BASE_URL}/home/categories`),
        axios.get(`${BASE_URL}/product/products`),
        axios.get(`${BASE_URL}/home/list/restaurants`),
      ]);

      setCategories(categoriesResponse.data.data);
      setCategoriesLoaded(true);

      setProducts(productsResponse.data.data);
      setProductsLoaded(true);

      setRestaurants(restaurantsResponse.data.data);
      setRestaurantsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };
  const loadFontsAndData = async () => {
    await testAsyncStorage();
    await checkOnboardingStatus();
    await fetchData();

    await Font.loadAsync({
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_600SemiBold,
      Poppins_700Bold,
      Montserrat_400Regular,
      Montserrat_500Medium,
      Montserrat_600SemiBold,
      Montserrat_700Bold,
    });

    setIsAppReady(true);
  };

  useEffect(() => {
    loadFontsAndData();
  }, []);

  const initialData = [categories, products, restaurants];

  if (!isAppReady || !categoriesLoaded || !productsLoaded || !restaurantsLoaded) {
    // Render the custom loading screen
    return(
      <NavigationContainer>
        <LocationProvider>
          <ProductsProvider initialData ={initialData}>
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
        </LocationProvider>
      </NavigationContainer>
    );
  }
  if (!userOnboarded){
    return(
      <NavigationContainer>
        <LocationProvider>
          <ProductsProvider initialData ={initialData}>
            <AuthProvider>   
              <CartProvider>  
                <OnboardingStackScreens/> 
              </CartProvider>
            </AuthProvider>
          </ProductsProvider>
        </LocationProvider>     
      </NavigationContainer>
      
    );
  }


  // Render the actual app content once the loading is complete
  return (
    <NavigationContainer>
      <LocationProvider>
        <ProductsProvider initialData ={initialData}>
          <AuthProvider> 
            <CartProvider>    
              <AppStackScreens/>
            </CartProvider>
          </AuthProvider>
        </ProductsProvider>
      </LocationProvider>
    </NavigationContainer>    
  );
};
