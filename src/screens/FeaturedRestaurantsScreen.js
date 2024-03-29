import { StatusBar, StyleSheet, ScrollView, FlatList, Text, View, Dimensions } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import ScreenHeader from '../components/ScreenHeader';
import SearchBar from '../components/SearchBar';
import { ProductsContext } from '../contexts/ProductsContext';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import RestaurantItem from '../components/RestaurantItem';


const Tab = createMaterialTopTabNavigator();

function AllTab({ searchPhrase }) {
  const onNavigate = useNavigation();
  const { restaurants } = useContext(ProductsContext);

  const onNavigateToRestaurant = (item) => {
    onNavigate.navigate('RestaurantScreen', {
      restaurant: item,
    });
  };
  

  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#ffffff',
      }}
      renderItem={({ item, index }) => (
        <RestaurantItem 
        marginTop={8}
        marginBottom={8} 
        data={item}
        onPressItem={() => onNavigateToRestaurant(item)} />
      )}
    />
  );
}

function PopularTab({ searchPhrase }) {
  const onNavigate = useNavigation();
  const { restaurants } = useContext(ProductsContext);

  const onNavigateToRestaurant = (item) => {
    onNavigate.navigate('RestaurantScreen', {
      restaurant: item,
    });
  };

  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#ffffff',
      }}
      renderItem={({ item, index }) => (
        <RestaurantItem 
        marginTop={8} 
        marginBottom={8} 
        data={item} onPressItem={() => onNavigateToRestaurant(item)} 
        key ={item._id} />
      )}
    />
  );
}

function TrendingTab({ searchPhrase }) {
  const onNavigate = useNavigation();
  const { restaurants } = useContext(ProductsContext);
  
  const onNavigateToRestaurant = (item) => {
    onNavigate.navigate('RestaurantScreen', {
      restaurant: item,
    });
  };

  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#ffffff',
      }}
      renderItem={({ item, index }) => (
        <RestaurantItem marginTop={8} marginBottom={8} data={item} onPressItem={() => onNavigateToRestaurant(item)} key ={item._id} />
      )}
    />
  );
}

function NewestTab({ searchPhrase }) {
  const onNavigate = useNavigation();
  const { restaurants } = useContext(ProductsContext);

  const onNavigateToRestaurant = (item) => {
    onNavigate.navigate('RestaurantScreen', {
      restaurant: item,
    });
  };
  
  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#ffffff',
      }}
      renderItem={({ item, index }) => (
        <RestaurantItem marginTop={8} marginBottom={8} data={item} onPressItem={() => onNavigateToRestaurant(item)} key ={item._id} />
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
      <Tab.Screen name="Nearest">{() => <PopularTab searchPhrase={searchPhrase} />}</Tab.Screen>
      <Tab.Screen name="Top-Rated">{() => <TrendingTab searchPhrase={searchPhrase} />}</Tab.Screen>
      <Tab.Screen name="Newest">{() => <NewestTab searchPhrase={searchPhrase} />}</Tab.Screen>
    </Tab.Navigator>
  );
};

const FeaturedRestaurantScreen = () => {
  const insets = useSafeAreaInsets();
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScreenHeader props={{ title: 'Featured Restaurants' }} />
      <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setClicked={setClicked} />
      <SearchTabs searchPhrase={searchPhrase} />
    </View>
  );
};

export default FeaturedRestaurantScreen;

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
