import { StatusBar, StyleSheet, ScrollView,FlatList, View, Dimensions} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, {useContext} from 'react'
import {orderHistories} from '../dummyData';
import CustomTopTabs from '../components/CustomTopTabs';
import ScreenHeader from '../components/ScreenHeader';
import OrderHistoryItem from "../components/OrderHistoryItem";
import { AuthContext } from '../contexts/AuthContext';
import Unauth from '../components/Unauth';



const Tab = createMaterialTopTabNavigator();
  const orderHistoryItems = orderHistories.flatMap((history) => history.data);
  const deliveredHistoryItems =orderHistoryItems.filter((item) => item.status === "D");
  const canceledHistoryItems =orderHistoryItems.filter((item) => item.status === "C");
  const scheduledHistoryItems =orderHistoryItems.filter((item) => item.status === "P");
const renderSeparator = () => {
  return (
    <View
      style={{
        width: "100%",
        height:1,
        backgroundColor: "#B8B5B5",
      }}
    />
  );
};

function AllTab(){
  return(
    <FlatList
    data={orderHistoryItems}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    style={{
      backgroundColor: '#ffffff',
    }}
    ItemSeparatorComponent={renderSeparator}
    renderItem={({ item, index }) => (
      <OrderHistoryItem
        marginTop={index === 0 ? 42 : 16}
        marginBottom={index === orderHistoryItems.length - 1 ? 42 : 16}
        data={item}
        onPressItem={() => onNavigation(item)}
      />
    )}
  />
  )
}
function CompletedTab(){
  return(
    <FlatList
    data={deliveredHistoryItems}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    style={{
      backgroundColor: '#ffffff',
    }}
    ItemSeparatorComponent={renderSeparator}
    renderItem={({ item, index }) => (
      <OrderHistoryItem
        marginTop={index === 0 ? 42 : 16}
        marginBottom={index === orderHistoryItems.length - 1 ? 42 : 16}
        data={item}
        onPressItem={() => onNavigation(item)}
      />
    )}
  />
  )
}
function CancelledTab(){
  return(
    <FlatList
    data={canceledHistoryItems}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    style={{
      backgroundColor: '#ffffff',
    }}
    ItemSeparatorComponent={renderSeparator}
    renderItem={({ item, index }) => (
      <OrderHistoryItem
        marginTop={index === 0 ? 42 : 16}
        marginBottom={index === orderHistoryItems.length - 1 ? 42 : 16}
        data={item}
        onPressItem={() => onNavigation(item)}
      />
    )}
  />
  )
}
function ScheduledTab(){
  return(
    <FlatList
    data={scheduledHistoryItems}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    style={{
      backgroundColor: '#ffffff',
    }}
    ItemSeparatorComponent={renderSeparator}
    renderItem={({ item, index }) => (
      <OrderHistoryItem
        marginTop={index === 0 ? 42 : 16}
        marginBottom={index === orderHistoryItems.length - 1 ? 42 : 16}
        data={item}
        onPressItem={() => onNavigation(item)}
      />
    )}
  />
  )
}
const HistoryTabs =()=> {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorContainerStyle:{margin:0, padding:0,},
        tabBarAndroidRipple:false,
        tabBarGap:8,
        tabBarActiveTintColor:'#ffffff',
        tabBarInactiveTintColor:'#ffffff',
        tabBarItemStyle:{
          margin:0,      
          paddingHorizontal:0,
          height:38,
          width:(Dimensions.get("screen").width - 72)/4
        },
        tabBarIndicatorStyle:{
          backgroundColor:'#00205C'
        },
        tabBarLabelStyle: {
          textTransform:'capitalize',
          fontSize:12, 
          fontFamily:'Poppins_500Medium',
          color:'#00205C',
          lineHeight:21,
          display:'flex' ,
          paddingBottom:6
        },

        tabBarStyle: {
          justifyContent:'space-evenly',
          width:(Dimensions.get("screen").width -48),
          height:38,
          padding:0, margin:0,},
      }}
    >
      <Tab.Screen name="All" component={AllTab} />
      <Tab.Screen name="Completed" component={CompletedTab} />
      <Tab.Screen name="Canceled" component={CancelledTab} />
      <Tab.Screen name="Scheduled" component={ScheduledTab} />

    </Tab.Navigator>
  );
}
const HistoryScreen = () => {
  const {isLoggedIn, userData, status,login} = useContext(AuthContext);
  if (isLoggedIn){
    const orderHistoryItems = orderHistories.flatMap((history) => history.data);
  const deliveredHistoryItems =orderHistoryItems.filter((item) => item.status === "D");
  const canceledHistoryItems =orderHistoryItems.filter((item) => item.status === "C");
  const scheduledHistoryItems =orderHistoryItems.filter((item) => item.status === "P");
  }

  return (
      <View style={styles.container}>
        <ScreenHeader props={{title:'Order History'}}/>
        {isLoggedIn ? (
          <HistoryTabs/>
        ):(
          <Unauth props={{message: "View your order history. By logging in you can access your order history"}}/>
        )}
      </View>
  )
}

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    
    // 16,
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
})