import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from '@expo/vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold , Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import axios from 'axios';

import { AppStackScreens, OnboardingStackScreens } from './src/navigation/StackScreens';
import { AuthProvider } from './src/contexts/AuthContext';
import { CartProvider } from './src/contexts/CartContext';
import { ProductsProvider } from './src/contexts/ProductsContext';
import { LocationProvider } from './src/contexts/LocationContext';

const BASE_URL = 'https://mealy-backend-app.onrender.com/api/mealy';

const Stack = createStackNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [userOnboarded, setUserOnboarded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [restaurants, setRestaurants] = useState([]);


  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
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
        await checkOnboardingStatus();
        const data = await fetchData();
  
        setCategories(data.categories);
        setProducts(data.products);
        setRestaurants(data.restaurants);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const onboardingStatus = await AsyncStorage.getItem('onboardingStatus');
      if (onboardingStatus === 'completed') {
        setUserOnboarded(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const [categoriesResponse, productsResponse, restaurantsResponse] = await Promise.all([
        axios.get(`${BASE_URL}/home/categories`),
        axios.get(`${BASE_URL}/product/products`),
        axios.get(`${BASE_URL}/home/list/restaurants`),
      ]);

      return {
        categories: categoriesResponse.data.data,
        products: productsResponse.data.data,
        restaurants: restaurantsResponse.data.data,
      };
    } catch (error) {
      console.error(error);
      return {
        categories: [],
        products: [],
        restaurants: [],
      };
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <LocationProvider>
          <ProductsProvider initialData={{ categories, products, restaurants }}>
            <AuthProvider>
              <CartProvider>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                  {userOnboarded ? (
                    <Stack.Screen name="AppStack" component={AppStackScreens} />
                  ) : (
                    <Stack.Screen name="OnboardingStack" component={OnboardingStackScreens} />
                  )}
                </Stack.Navigator>
              </CartProvider>
            </AuthProvider>
          </ProductsProvider>
        </LocationProvider>
      </NavigationContainer> 
    </View>
  );
}