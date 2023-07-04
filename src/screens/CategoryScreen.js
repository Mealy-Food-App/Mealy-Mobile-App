import { StatusBar, StyleSheet, ScrollView,FlatList, Text, View, Dimensions} from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useRoute } from '@react-navigation/native'
import ScreenHeader from '../components/ScreenHeader'
import SearchBar from '../components/SearchBar';
import { ProductsContext } from '../contexts/ProductsContext';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FoodProductItem from '../components/FoodProductItem';


const Tab = createMaterialTopTabNavigator();

function AllTab({props}){
  const { products } = useContext(ProductsContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const actualSearchPhrase = props.searchPhrase.toLowerCase();
  const categoryName = props.title.toLowerCase();


  const categoryItems = products.filter(categoryItem=>{
    const productCategory = categoryItem.category.toLowerCase();
    return (
      productCategory.indexOf(categoryName) !== -1
    )
  })

  useEffect(() => {
    const filtered = categoryItems.filter((categoryItem) =>
      {
        const productName = categoryItem.name.toLowerCase();
        const productCategory = categoryItem.category.toLowerCase();
        return (
          productName.indexOf(actualSearchPhrase) !== -1 ||
          productCategory.indexOf(actualSearchPhrase) !== -1
        )
      })
    setFilteredItems(filtered);
  }, [actualSearchPhrase]);

    return(
      <FlatList
      data={filteredItems}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#f5f5f5',
      }}

      renderItem={({ item, index }) => (
        <FoodProductItem
          marginTop={8}
          marginBottom={8}
          data={item}
          onPressItem={() => onNavigation(item)}


        />
      )}
    />
    )
}

  function PopularTab({props}){
    const { products } = useContext(ProductsContext);
    const [filteredItems, setFilteredItems] = useState([]);
    const actualSearchPhrase = props.searchPhrase.toLowerCase();
    const categoryName = props.title.toLowerCase();
  
  
    const categoryItems = products.filter(categoryItem=>{
      const productCategory = categoryItem.category.toLowerCase();
      return (
        productCategory.indexOf(categoryName) !== -1
      )
    })
  
    useEffect(() => {
      const filtered = categoryItems.filter((categoryItem) =>
        {
          const productName = categoryItem.name.toLowerCase();
          const productCategory = categoryItem.category.toLowerCase();
          return (
            productName.indexOf(actualSearchPhrase) !== -1 ||
            productCategory.indexOf(actualSearchPhrase) !== -1
          )
        })
      setFilteredItems(filtered);
    }, [actualSearchPhrase]);
    return(
      <FlatList
      data={filteredItems}
      keyExtractor={(item) => item.id} 
      showsVerticalScrollIndicator={false}
      style={{
                backgroundColor: '#f5f5f5',
      }}

      renderItem={({ item, index }) => (
        <FoodProductItem
          marginTop={8}
          marginBottom={8}
          data={item}
          onPressItem={() => onNavigation(item)}
        />
      )}
    />
    )
}

  function TrendingTab({props}){
    const { products } = useContext(ProductsContext);
    const [filteredItems, setFilteredItems] = useState([]);
    const actualSearchPhrase = props.searchPhrase.toLowerCase();
    const categoryName = props.title.toLowerCase();
  
  
    const categoryItems = products.filter(categoryItem=>{
      const productCategory = categoryItem.category.toLowerCase();
      return (
        productCategory.indexOf(categoryName) !== -1
      )
    })
  
    useEffect(() => {
      const filtered = categoryItems.filter((categoryItem) =>
        {
          const productName = categoryItem.name.toLowerCase();
          const productCategory = categoryItem.category.toLowerCase();
          return (
            productName.indexOf(actualSearchPhrase) !== -1 ||
            productCategory.indexOf(actualSearchPhrase) !== -1
          )
        })
      setFilteredItems(filtered);
    }, [actualSearchPhrase]);

    return(
      <FlatList
      data={filteredItems}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={{
                backgroundColor: '#f5f5f5',
      }}

      renderItem={({ item, index }) => (
        <FoodProductItem
          marginTop={8}
          marginBottom={8}
          data={item}
          onPressItem={() => onNavigation(item)}
        />
      )}
    />
    )
}

  function NewestTab({props}){
    const { products } = useContext(ProductsContext);
    const [filteredItems, setFilteredItems] = useState([]);
    const actualSearchPhrase = props.searchPhrase.toLowerCase();
    const categoryName = props.title.toLowerCase();
  
  
    const categoryItems = products.filter(categoryItem=>{
      const productCategory = categoryItem.category.toLowerCase();
      return (
        productCategory.indexOf(categoryName) !== -1
      )
    })
  
    useEffect(() => {
      const filtered = categoryItems.filter((categoryItem) =>
        {
          const productName = categoryItem.name.toLowerCase();
          const productCategory = categoryItem.category.toLowerCase();
          return (
            productName.indexOf(actualSearchPhrase) !== -1 ||
            productCategory.indexOf(actualSearchPhrase) !== -1
          )
        })
      setFilteredItems(filtered);
    }, [actualSearchPhrase]);
    return(
      <FlatList
      data={filteredItems}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={{
                backgroundColor: '#f5f5f5',
      }}

      renderItem={({ item, index }) => (
        <FoodProductItem
          marginTop={8}
          marginBottom={8}
          data={item}
          onPressItem={() => onNavigation(item)}
        />
      )}
    />
    )
}
  const SearchTabs =({props})=> {
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
            lineHeight:16,
            display:'flex' ,
            paddingBottom:6
          },
  
          tabBarStyle: {
            justifyContent:'space-evenly',
            backgroundColor:'#f5f5f5',
            width:(Dimensions.get("screen").width -48),
            height:38,
            padding:0, margin:0,},
        }}
      >
        <Tab.Screen name="All">
          {() => <AllTab props={props}/>}
        </Tab.Screen>
        <Tab.Screen name="Popular">
          {() => <PopularTab props={props}/>}
        </Tab.Screen>
        <Tab.Screen name="Trending">
          {() => <TrendingTab props={props}/>}
        </Tab.Screen>
        <Tab.Screen name="Newest">
          {() => <NewestTab props={props}/>}
        </Tab.Screen>
  
      </Tab.Navigator>
    );
  }


const CategoryScreen = () => {
    const route = useRoute();
    const [searchPhrase, setSearchPhrase] = useState(route.params.searchPhrase);
    const title = route.params.title
    const [clicked, setClicked] = useState(false);
   
    
  return (
    <View style ={styles.container}>
      <ScreenHeader props = {{title:title}}/>
        <SearchBar
            props={{searchPhrase:searchPhrase, title:title}}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
        />
        <SearchTabs props={{searchPhrase:searchPhrase, title:title}}/>
    </View>
  )
}

export default CategoryScreen
const styles = StyleSheet.create({
    container: {
        paddingTop:StatusBar.currentHeight,
        flex: 1,
        paddingHorizontal: 24,
        width: '100%',
        backgroundColor: '#F5F5F5',
    },
    innerContainer:{
        marginTop:24,

    }

})