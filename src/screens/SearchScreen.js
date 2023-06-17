import { StatusBar, StyleSheet, ScrollView,FlatList, View, Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import ScreenHeader from '../components/ScreenHeader'
import SearchBar from '../components/SearchBar';
import { ProductsContext } from '../contexts/ProductsContext';
import { AuthContext } from '../contexts/AuthContext';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {orderHistories} from '../dummyData'
import OrderHistoryItem from "../components/OrderHistoryItem";

const orderHistoryItems = orderHistories.flatMap((history) => history.data);
const deliveredHistoryItems =orderHistoryItems.filter((item) => item.status === "D");
const canceledHistoryItems =orderHistoryItems.filter((item) => item.status === "C");
const scheduledHistoryItems =orderHistoryItems.filter((item) => item.status === "P");

const Tab = createMaterialTopTabNavigator();

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
  const SearchTabs =()=> {
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
        <Tab.Screen name="Popular" component={CompletedTab} />
        <Tab.Screen name="Trending" component={CancelledTab} />
        <Tab.Screen name="Newest" component={ScheduledTab} />
  
      </Tab.Navigator>
    );
  }


const SearchScreen = () => {
    const route = useRoute();
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState(route.params);
    const [clicked, setClicked] = useState(false);
   
    
    // useEffect(() => {
    //     const filtered = products.filter(product =>
    //         product.name.toLowercase().includes(searchPrase.toLowercase()) || product.category.toLowercase().includes(searchPrase.toLowercase())
    //     )
    //     setFilteredItems(filtered)
    // }), [searchPhrase]
  return (
    <View style ={styles.container}>
      <ScreenHeader props = {{title:searchPhrase}}/>
      <View style={styles.innerContainer}>
        <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
        />
        <SearchTabs/>
      </View>
    </View>
  )
}

export default SearchScreen
const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        // StatusBar.currentHeight,
        flex: 1,
        paddingHorizontal: 24,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    innerContainer:{
        marginTop:24,

    }

})