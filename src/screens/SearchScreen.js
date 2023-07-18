import { StatusBar, StyleSheet, ScrollView, FlatList, Text, View, Dimensions } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import ScreenHeader from '../components/ScreenHeader';
import SearchBar from '../components/SearchBar';
import { ProductsContext } from '../contexts/ProductsContext';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FoodProductItem from '../components/FoodProductItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

function AllTab({ searchPhrase }) {
  const onNavigate = useNavigation();
  const { products } = useContext(ProductsContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const actualSearchPhrase = searchPhrase.toLowerCase();

  useEffect(() => {
    const filtered = products.filter((product) => {
      const productName = product.name.toLowerCase();
      const productCategory = product.category.toLowerCase();
      return productName.indexOf(actualSearchPhrase) !== -1 || productCategory.indexOf(actualSearchPhrase) !== -1;
    });
    setFilteredItems(filtered);
  }, [actualSearchPhrase]);

  const onNavigateToItem = (item) => {
    onNavigate.navigate('ProductDetailScreen', {
      productDetails: item,
    });
  };
  

  return (
    <FlatList
      data={filteredItems}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#ffffff',
      }}
      renderItem={({ item, index }) => (
        <FoodProductItem 
        marginTop={8}
        marginBottom={8} 
        data={item}
        onPressItem={() => onNavigateToItem(item)} />
      )}
    />
  );
}

function PopularTab({ searchPhrase }) {
  const onNavigate = useNavigation();
  const { products } = useContext(ProductsContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const actualSearchPhrase = searchPhrase.toLowerCase();

  useEffect(() => {
    const filtered = products.filter((product) => {
      const productName = product.name.toLowerCase();
      const productCategory = product.category.toLowerCase();
      return productName.indexOf(actualSearchPhrase) !== -1 || productCategory.indexOf(actualSearchPhrase) !== -1;
    });
    setFilteredItems(filtered);
  }, [actualSearchPhrase]);

  const onNavigateToItem = (item) => {
    onNavigate.navigate('ProductDetailScreen', {
      productDetails: item,
    });
  };

  return (
    <FlatList
      data={filteredItems}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#ffffff',
      }}
      renderItem={({ item, index }) => (
        <FoodProductItem 
        marginTop={8} 
        marginBottom={8} 
        data={item} onPressItem={() => onNavigateToItem(item)} 
        key ={item._id} />
      )}
    />
  );
}

function TrendingTab({ searchPhrase }) {
  const onNavigate = useNavigation();
  const { products } = useContext(ProductsContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const actualSearchPhrase = searchPhrase.toLowerCase();

  useEffect(() => {
    const filtered = products.filter((product) => {
      const productName = product.name.toLowerCase();
      const productCategory = product.category.toLowerCase();
      return productName.indexOf(actualSearchPhrase) !== -1 || productCategory.indexOf(actualSearchPhrase) !== -1;
    });
    setFilteredItems(filtered);
  }, [actualSearchPhrase]);

  const onNavigateToItem = (item) => {
    onNavigate.navigate('ProductDetailScreen', {
      productDetails: item,
    });
  };

  return (
    <FlatList
      data={filteredItems}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#ffffff',
      }}
      renderItem={({ item, index }) => (
        <FoodProductItem marginTop={8} marginBottom={8} data={item} onPressItem={() => onNavigateToItem(item)} key ={item._id} />
      )}
    />
  );
}

function NewestTab({ searchPhrase }) {
  const onNavigate = useNavigation();
  const { products } = useContext(ProductsContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const actualSearchPhrase = searchPhrase.toLowerCase();

  useEffect(() => {
    const filtered = products.filter((product) => {
      const productName = product.name.toLowerCase();
      const productCategory = product.category.toLowerCase();
      return productName.indexOf(actualSearchPhrase) !== -1 || productCategory.indexOf(actualSearchPhrase) !== -1;
    });
    setFilteredItems(filtered);
  }, [actualSearchPhrase]);

  const onNavigateToItem = (item) => {
    onNavigate.navigate('ProductDetailScreen', {
      productDetails: item,
    });
  };
  
  return (
    <FlatList
      data={filteredItems}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#ffffff',
      }}
      renderItem={({ item, index }) => (
        <FoodProductItem marginTop={8} marginBottom={8} data={item} onPressItem={() => onNavigateToItem(item)} key ={item._id} />
      )}
    />
  );
}

const SearchTabs = ({ searchPhrase }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorContainerStyle: { margin: 0, padding: 0 },
        tabBarAndroidRipple: false,
        tabBarGap: 8,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff',
        tabBarItemStyle: {
          margin: 0,
          paddingHorizontal: 0,
          height: 38,
          width: (Dimensions.get('screen').width - 72) / 4,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#00205C',
        },
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: 12,
          fontFamily: 'Poppins_500Medium',
          color: '#00205C',
          lineHeight: 16,
          display: 'flex',
          paddingBottom: 6,
        },
        tabBarStyle: {
          justifyContent: 'space-evenly',
          backgroundColor: '#ffffff',
          width: Dimensions.get('screen').width - 48,
          height: 38,
          padding: 0,
          margin: 0,
        },
      }}
    >
      <Tab.Screen name="All">{() => <AllTab searchPhrase={searchPhrase} />}</Tab.Screen>
      <Tab.Screen name="Popular">{() => <PopularTab searchPhrase={searchPhrase} />}</Tab.Screen>
      <Tab.Screen name="Trending">{() => <TrendingTab searchPhrase={searchPhrase} />}</Tab.Screen>
      <Tab.Screen name="Newest">{() => <NewestTab searchPhrase={searchPhrase} />}</Tab.Screen>
    </Tab.Navigator>
  );
};

const SearchScreen = () => {
  const route = useRoute();
  const insets = useSafeAreaInsets();
  const [searchPhrase, setSearchPhrase] = useState(route.params);
  const [clicked, setClicked] = useState(false);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScreenHeader props={{ title: searchPhrase }} />
      <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setClicked={setClicked} />
      <SearchTabs searchPhrase={searchPhrase} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    marginTop: 24,
  },
});
