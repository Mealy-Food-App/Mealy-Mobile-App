import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold , Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import axios from 'axios';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppStackScreens, OnboardingStackScreens } from './src/navigation/StackScreens';
import { AuthProvider } from './src/contexts/AuthContext';
import { CartProvider } from './src/contexts/CartContext';
import { ProductsProvider } from './src/contexts/ProductsContext';
import LoadingScreen from "./src/screens/LoadingScreen"
import { LocationProvider } from './src/contexts/LocationContext';
const BASE_URL = 'https://mealy-backend-app.onrender.com/api/mealy';

const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [userOnboarded, setUserOnboarded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userData, setUserData] = useState(null);
  const [userRecommendations, setUserRecommendations] = useState([]);
  const [userOrderHistory, setUserOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    async function prepare() {
      try {
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
        setUserOrderHistory(data.userOrderHistory)
        if (data.userRecommendations.length > 0){
          const processedData = data.userRecommendations.map(item => item.product);
          const filteredData = processedData.filter(item => item !== undefined);
          setUserRecommendations(filteredData);
        }else{
          const firstten = products.slice(0, 10);
          setUserRecommendations(firstten);
        }
        const userstr = await AsyncStorage.getItem('userData');
        const loggedintoken = await AsyncStorage.getItem('loggedintoken');
        if (userstr != null && loggedintoken != null){
          const usrobj = JSON.parse(userstr);
          setUserData(usrobj);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
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
    const userstr = await AsyncStorage.getItem('userData');
    const loggedintoken = await AsyncStorage.getItem('loggedintoken');
    try {

      if (userstr != null && loggedintoken != null){
        const usrobj = JSON.parse(userstr);
        const userid = usrobj._id;
        const [categoriesResponse, productsResponse, restaurantsResponse,  userRecommendationsResponse, userOrderHistoryResponse] = await Promise.all([
          axios.get(`${BASE_URL}/home/categories`),
          axios.get(`${BASE_URL}/product/products`),
          axios.get(`${BASE_URL}/home/list/restaurants`),
          axios.get(`${BASE_URL}/user/recommendations/${userid}`, 
          {
            headers: {
              Authorization: `Bearer ${loggedintoken}`,
            },
          }),
          axios.get(`${BASE_URL}/user/orderhistory`,
          {
            headers: {
              Authorization: `Bearer ${loggedintoken}`,
            },
          })
        ]);

        return {
          categories: categoriesResponse.data.data,
          products: productsResponse.data.data,
          restaurants: restaurantsResponse.data.data,
          userRecommendations:userRecommendationsResponse.data.data,
          userOrderHistory:userOrderHistoryResponse.data.data
        };
      }else{
        const [categoriesResponse, productsResponse, restaurantsResponse] = await Promise.all([
          axios.get(`${BASE_URL}/home/categories`),
          axios.get(`${BASE_URL}/product/products`),
          axios.get(`${BASE_URL}/home/list/restaurants`)
        ]);

        return {
          categories: categoriesResponse.data.data,
          products: productsResponse.data.data,
          restaurants: restaurantsResponse.data.data
        };
      }
    } catch (error) {
      console.error(error);
      return {
        categories: [],
        products: [],
        restaurants: [],
        userRecommendations:[],
        userOrderHistory:[]
      };
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      setLoading(false);
    }
  }, [appIsReady]);

  if (!appIsReady && loading) {
    return <LoadingScreen/>;
  }

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <LocationProvider>
            <ProductsProvider initialData={{ categories, products, restaurants }}>
              <AuthProvider initialData={{userData, userOrderHistory, userRecommendations}}>
                <CartProvider>
                  {userOnboarded ? <AppStackScreens /> : <OnboardingStackScreens />}
                </CartProvider>
              </AuthProvider>
            </ProductsProvider>
          </LocationProvider>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
