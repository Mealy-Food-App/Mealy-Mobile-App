import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState,useEffect,useContext } from 'react';

import React from "react";
import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import CartScreen from "../screens/CartScreen";
import DeliveryScreen from '../screens/DeliveryScreen';
import { AuthContext } from '../contexts/AuthContext';

import { Image, View, Text, StyleSheet, BackHandler } from "react-native";
import { color } from 'react-native-reanimated';
import { CartContext } from '../contexts/CartContext';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const BottomTabs = () => {
    const {isLoggedIn,userData,logout, status} = useContext(AuthContext);
    const {cartItems} = useContext(CartContext)
    // useEffect(() => {
    //     const backAction = () => {
    //         if (isLoggedIn){
    //             return true; 
    //         }
    //         return false;
    //       // Logic to prevent going back to the login screen
      
    //       // Return 'true' to prevent default back button behavior
    //     };
      
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
      
    //     return () => backHandler.remove(); // Cleanup the event listener on unmount
    //   }, []);
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{ 
                headerShown: false,
                tabBarInactiveBackgroundColor:'#ffffff',
                tabBarActiveBackgroundColor:'#E69F14',
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor:'#00000075',
                tabBarShowLabel: true ,
                tabBarHideOnKeyboard: true,
                tabBarIconStyle:{
                    width:24,
                    height:24,
                },
                tabBarLabelStyle:{
                    fontFamily:'Poppins_400Regular',
                    fontSize:12,
                    lineHeight:21,
                },
                tabBarItemStyle:{ //Add this 
                    borderTopRightRadius:200,
                },

            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                headerShown: false,
                tabBarIcon: ({focused,}) => focused ?
                        <Image
                        source={require("../assets/icons/home.png")}
                        style={styles.navIconActive}
                        />
                        :
                        <Image
                        source={require("../assets/icons/home.png")}
                        style={styles.navIcon}/>
                }}
            />
            <Tab.Screen
                name="History"
                component={HistoryScreen}
                options={{ 
                headerShown: false,
                tabBarIcon:({focused,color, size}) => focused ?
                        <Image
                        source={require("../assets/icons/history.png")}
                        style={styles.navIconActive}
                        />
                    :
                    <Image
                    source={require("../assets/icons/history.png")}
                    style={styles.navIcon}
                    />
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                headerShown: false,
                tabBarIcon: ({focused,color, size}) => focused ?
                    <View>
                        <Image
                        source={require("../assets/icons/cart.png")}
                        style={styles.navIconActive}
                        />
                    </View>
                    :
                    <View>
                        {isLoggedIn && cartItems.length > 0 &&<Text style={styles.cartnum}>{cartItems.length}</Text>}
                        <Image
                        source={require("../assets/icons/cart.png")}
                        style={styles.navIcon}
                        />
                    </View>

                }}
            />
            <Tab.Screen
                name="Delivery"
                component={DeliveryScreen}
                options={{
                headerShown: false,
                tabBarIcon: ({focused,color, size}) => focused ?
                        <Image
                        source={require("../assets/icons/delivery.png")}
                        style={styles.navIconActive}
                        tintColor = 'white'
                        />
                    :
                    <Image
                    source={require("../assets/icons/delivery.png")}
                    style={styles.navIcon}
                    />
              }}
            />                
        </Tab.Navigator>
    );
};
export default BottomTabs;

const styles = StyleSheet.create({
    navIcon:{
        width:24,
        height:24,
        tintColor:'#00000075',
    },
    navIconActive:{
        width:24,
        height:24,
        tintColor:'#ffffff',       
    },
    cartnum:{
        color:'#00000050',
        borderRadius:16,
        left:24,
        top:-4,
        position:'absolute',
        fontFamily:'Poppins_700Bold',
        fontSize:10
    }

})