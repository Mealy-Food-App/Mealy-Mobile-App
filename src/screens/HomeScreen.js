import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { mealOfTheDay, aroundYou, recommended, featured, topDeals } from '../dummyData';
import WeekOffer from '../components/WeekOffer';
import Section from '../components/Section';
import CategoryItem from '../components/CategoryItem';
import PopularItem from '../components/PopularItem';
import RecommendedItem from '../components/RecommendedItem';
import FeaturedItem from '../components/FeaturedItem';
import TopDealItem from '../components/TopDealItem';
import SearchBar from '../components/SearchBar';
import { AuthContext } from '../contexts/AuthContext';
import { ProductsContext } from '../contexts/ProductsContext';
import HomeHeader from '../components/HomeHeader';

import * as Location from 'expo-location';
import * as LocationGeocoding from 'expo-location';


const COLORS = {
  primary: '#00205C',
  btnPrimary: '#E69F14',
  bgPrimary: '#F5F5F5',
};

const HomeScreen = () => {
  const onNavigate = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const { isLoggedIn, userData, status } = useContext(AuthContext);
  const { categories, products, restaurants } = useContext(ProductsContext);
  const [userLocation, setUserLocation] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  console.log(restaurants)

  useEffect(() => {
    fetchUserLocation();
  }, []);

  const fetchUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
      fetchUserAddress(location.coords);
    }
  };

  const fetchUserAddress = async (coords) => {
    try {
      const address = await LocationGeocoding.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });

      if (address.length > 0) {
        const { street, city } = address[0];
        const formattedAddress = (street !== null && city !== null) ? `${street}, ${city}` : `${city}`
        setUserAddress(formattedAddress);
      }
    } catch (error) {
      console.log('Error fetching address:', error);
    }
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchPhrase !== '') {
        onNavigate.navigate('SearchScreen', searchPhrase);
      }
    }, 500); // 1000 milliseconds (1 second) delay

    return () => clearTimeout(timer);
  }, [searchPhrase, onNavigate]);

  const onNavigateToCategory = (item) => {
    onNavigate.navigate('CategoryScreen', {
      title: item.name,
      searchPhrase: item.name
    });
  };

  const onNavigateToProduct = (item) => {
    onNavigate.navigate('ProductDetailScreen', {
      productDetails: item,
    });
  };

  const handleShowAllCategories = () => {
    onNavigate.navigate('MealyCategories');
  };

  return (
    <View style={styles.container}>
      {isLoggedIn === true && userData !== null ? (
        <View style={styles.headerContent}>
          <HomeHeader />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Hello {userData.fullName.split(' ')[0].charAt(0).toUpperCase() + userData.fullName.split(' ')[0].slice(1)}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.headerContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Hello There</Text>
            <Image
              source={require('../assets/icons/wave.png')}
              style={{ width: 36, height: 34, resizeMode: 'contain', alignSelf: 'center', marginLeft: 8 }}
            />
          </View>
        </View>
      )}
      <View style={styles.location}>
      <Image source={require("../assets/icons/location.png")} style={styles.locationicon} />
      <Text style={styles.locationtext}>{userAddress}</Text>
      </View>
      
      <Text numberOfLines={2} style={styles.subtitle}>
        What would you like to eat today?
      </Text>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />

      <FlatList
        style={styles.homeScroll}
        showsVerticalScrollIndicator={false}
        data={['WeekOffer', 'ExploreCategories', 'PopularAroundYou', 'RecommendedForYou', 'FeaturedRestaurants', 'TopDeals']}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          if (item === 'WeekOffer') {
            return <WeekOffer style={{ width: '100%' }} data={mealOfTheDay} />;
          } else if (item === 'ExploreCategories') {
            return (
              <View>
                <Section title="Explore Categories" view="Show all" onPress={handleShowAllCategories} />
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data={categories}
                  horizontal
                  style={styles.flatCont}
                  keyExtractor={(item) => item._id}
                  renderItem={({ item, index }) => (
                    <CategoryItem
                      key={item._id}
                      item={item}
                      backgroundColor="#F8F2F1"
                      marginLeft={index === 0 ? 0 : 8}
                      marginRight={index === categories.length - 1 ? 0 : 0}
                      onPressCategory={() => onNavigateToCategory(item)}
                    />
                  )}
                />
              </View>
            );
          } else if (item === 'PopularAroundYou') {
            return (
              <View>
                <Section title="Popular Around You" view="View more" onPress={() => handleShowAll('PopularAroundScreen')} />
                <FlatList
                  data={restaurants}
                  horizontal
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id}
                  style={{
                    borderRadius: 10,
                    height:240,
                  }}
                  renderItem={({ item, index }) => (
                    <PopularItem
                      key={item._id}
                      data={item}
                      marginLeft={index === 0 ? 0 : 16}
                      marginRight={index === restaurants.length - 1 ? 0 : 0}
                      onPressItem={() => onNavigation(item)}
                    />
                  )}
                />
              </View>
            );
          } else if (item === 'RecommendedForYou') {
            return (
              <View>
                <Section title="Recommended For You" view="Show all" onPress={() => handleShowAll('RecommendedScreen')} />
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data={products}
                  horizontal
                  keyExtractor={(item) => item._id}
                  style={{
                    backgroundColor: '#ffffff',
                    paddingVertical: 8,
                    borderRadius: 8,
                    height:250
                  }}
                  renderItem={({ item, index }) => (
                    <RecommendedItem
                      key={item.id}
                      data={item}
                      marginLeft={index === 0 ? 0 : 16}
                      marginRight={index === recommended.length - 1 ? 0 : 0}
                      onPressItem={() => onNavigateToProduct(item)}
                    />
                  )}
                />
              </View>
            );
          } else if (item === 'FeaturedRestaurants') {
            return (
              <View>
                <Section title="Featured Restaurants" view="Show all" onPress={() => handleShowAll('FeaturedScreen')} />
                <FlatList
                  data={restaurants}
                  numColumns={2}
                  keyExtractor={(item) => (item._id + 'r')}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  style={{
                    backgroundColor: '#ffffff',
                  }}
                  renderItem={({ item, index }) => (
                    <FeaturedItem
                      data={item}
                      key={item.id}
                      marginLeft={index === 0 || index % 2 === 0 ? 0 : 16}
                      onPressItem={() => onNavigation(item)}
                    />
                  )}
                />
              </View>
            );
          } else if (item === 'TopDeals') {
            return (
              <View>
                <Section title="Top Deals" view="Show all" />
                <FlatList
                  data={topDeals}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  keyExtractor={(item) => item.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    marginBottom: 16,
                  }}
                  renderItem={({ item, index }) => (
                    <TopDealItem
                      key={item.id}
                      data={item}
                      marginLeft={index === 0 ? 0 : 16}
                      backgroundColor={index === 0 ? '#FFEBEB' : index === 1 ? 'rgba(20, 1, 0, 0.1)' : index === 2 ? '#F5EFF5' : '#fff1eb'}
                      marginRight={index === topDeals.length - 1 ? 0 : 0}
                      onPressItem={() => onNavigation(item)}
                    />
                  )}
                />
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  headerContent: {},
  titleContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    color: COLORS.primary,
    fontSize: 32,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 48,
  },
  subtitle: {
    width: 240,
    marginVertical: 8,
    color: 'rgba(0, 32, 92, 0.50)',
    fontFamily: 'Poppins_400Regular',
    fontSize: 22,
    lineHeight: 33,
  },
  homeScroll: {
    width: '100%',
  },
  location:{
    flexDirection:'row',
    alignItems:'center'
  },
  locationicon:{
    width:16,
    height:20,
    marginRight:8
  },
  locationtext:{
    fontFamily:"Poppins_500Medium",
    fontSize:20,
    lineHeight:24,
    textAlign:'center',
    alignSelf:'center',
    color:'#00205C'
  }
});
