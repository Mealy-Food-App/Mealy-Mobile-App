import React from 'react'
import { Alert, StyleSheet, Text, View, StatusBar} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import BottomTabs from "./BottomTabs";
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import AccountScreen from '../screens/AccountScreen';
import HistoryScreen from '../screens/HistoryScreen';
import CartScreen from '../screens/CartScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HelpScreen from '../screens/HelpScreen';
import AboutScreen from '../screens/AboutScreen';
import LeftDrawerContent from './LeftDrawerContent';
import ConfirmTokenScreen from '../screens/ConfirmTokenScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SearchScreen from '../screens/SearchScreen';
import CategoryScreen from '../screens/CategoryScreen';
import AllCategoriesScreen from '../screens/AllCategoriesScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import RecommendationScreen from "../screens/RecommendedScreen"
import DealsScreen from "../screens/DealsScreen"
import ChatScreen from "../screens/ChatScreen"
import PaymentScreen from "../screens/PaymentScreen"
import PreferenceScreen from "../screens/PreferenceScreen"


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


export const MainScreens = () => {
  return (

    <Drawer.Navigator 
      screenOptions={{
        headerShown:false,
        headerTintColor:'#00205C',
        headerTransparent:true,
        headerTitle:'',
        headerTitleStyle:styles.headerdrawer
      }}
      drawerContent={({ navigation }) => <LeftDrawerContent navigation={navigation} />}>
          <Drawer.Screen
            name = "BottomTabScreens"
            component={BottomTabs}
          />
          <Drawer.Screen name="AccountScreen" component={AccountScreen} />
          <Drawer.Screen name="CartScreen" component={CartScreen} />
          <Drawer.Screen name="HistoryScreen" component={HistoryScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="HelpScreen" component={HelpScreen} />
          <Drawer.Screen name="AboutScreen" component={AboutScreen} />

    </Drawer.Navigator>
  )
}
export const OnboardingStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='OnboardingScreen'>
    <Stack.Screen
      name = "MainScreens"
      component={MainScreens}
    />
    <Stack.Screen
      name = "OnboardingScreen"
      component={OnboardingScreen}
    />
    <Stack.Screen
      name = "WelcomeScreen"
      component={WelcomeScreen}
    />
    <Stack.Screen
      name = "LogInScreen"
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
    <Stack.Screen
      name = "ConfirmTokenScreen"
      component={ConfirmTokenScreen}
    />
    <Stack.Screen
      name = "ResetPasswordScreen"
      component={ResetPasswordScreen}
    />
    <Stack.Screen
      name = "ProfileScreen"
      component={ProfileScreen}
    />
    <Stack.Screen
      name = "NotificationScreen"
      component={NotificationScreen}
    />
    <Stack.Screen
      name = "PreferenceScreen"
      component={PreferenceScreen}
    />
    <Stack.Screen
      name = "DealsScreen"
      component={DealsScreen}
    />
    <Stack.Screen
      name = "ChatScreen"
      component={ChatScreen}
    />
    <Stack.Screen
      name = "PaymentScreen"
      component={PaymentScreen}
    />
    <Stack.Screen
      name = "SettingsScreen"
      component={SettingsScreen}
    />
    <Stack.Screen
      name = "RecommendationScreen"
      component={RecommendationScreen}
    />
    <Stack.Screen
      name = "SearchScreen"
      component={SearchScreen}
    />
    <Stack.Screen
      name = "CategoryScreen"
      component={CategoryScreen}
    />
    <Stack.Screen
      name = "MealyCategories"
      component={AllCategoriesScreen}
    />
    <Stack.Screen
      name = "ProductDetailScreen"
      component={ProductDetailScreen}
    />
  </Stack.Navigator>
  )
}
export const AppStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen
      name = "MainScreens"
      component={MainScreens}
    />
    <Stack.Screen
      name = "ProfileScreen"
      component={ProfileScreen}
    />
    <Stack.Screen
      name = "NotificationScreen"
      component={NotificationScreen}
    />
    <Stack.Screen
      name = "PreferenceScreen"
      component={PreferenceScreen}
    />
    <Stack.Screen
      name = "DealsScreen"
      component={DealsScreen}
    />
    <Stack.Screen
      name = "ChatScreen"
      component={ChatScreen}
    />
    <Stack.Screen
      name = "PaymentScreen"
      component={PaymentScreen}
    />
    <Stack.Screen
      name = "SettingsScreen"
      component={SettingsScreen}
    />
    <Stack.Screen
      name = "RecommendationScreen"
      component={RecommendationScreen}
    />
    <Stack.Screen
      name = "SearchScreen"
      component={SearchScreen}
    />
    <Stack.Screen
      name = "CategoryScreen"
      component={CategoryScreen}
    />
    <Stack.Screen
      name = "MealyCategories"
      component={AllCategoriesScreen}
    />
    <Stack.Screen
      name = "ProductDetailScreen"
      component={ProductDetailScreen}
    />
    <Stack.Screen
      name = "LogInScreen"
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
    <Stack.Screen
      name = "ConfirmTokenScreen"
      component={ConfirmTokenScreen}
    />
    <Stack.Screen
      name = "ResetPasswordScreen"
      component={ResetPasswordScreen}
    />

  </Stack.Navigator>

  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
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
  },
  headerdrawer:{
    marginHorizontal:24
  }
});

