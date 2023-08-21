import React, { useContext, useState, useEffect, useRef } from 'react';
import { View, FlatList, Text, StyleSheet, Image, Pressable} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { topDeals } from '../dummyData';
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
import { LocationContext } from '../contexts/LocationContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import debounce from 'lodash.debounce';

const COLORS = {
  primary: '#00205C',
  btnPrimary: '#E69F14',
  bgPrimary: '#F5F5F5',
};

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const onNavigate = useNavigation();
  const isFocused = useIsFocused();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [headerColor, setHeaderColor] = useState('#fff');
  const [clicked, setClicked] = useState(false);
  const { isLoggedIn, userData, userRecommendations } = useContext(AuthContext);
  const { categories, products, restaurants } = useContext(ProductsContext);
  const  {userAddress } = useContext(LocationContext);
  const [recommendations, setRecommendations] = useState([]);
  const [showSearch, setShowSearch] = useState(false)


  const flatListRef = useRef(null);

  useEffect(() => {
    // Clear searchPhrase when the screen is focused again
    if (isFocused) {
      setSearchPhrase('');
    }
  }, [isFocused]);
  

  useEffect(() => {
    if (userRecommendations.length == 0){
      const firstten = products.slice(0, 10);
      setRecommendations(firstten)
    }else{
      setRecommendations(userRecommendations)
    }
    const timer = setTimeout(() => {
      if (searchPhrase !== '') {
        onNavigate.navigate('SearchScreen', searchPhrase, setSearchPhrase);
      }
    }, 500); // 1000 milliseconds (1 second) delay

    return () => {
      clearTimeout(timer);
    }
  }, [searchPhrase, onNavigate]);

  const openLeftDrawer = () => {
    onNavigate.openDrawer();
  };

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
  const onNavigateToOffer = (item) => {
    onNavigate.navigate('OfferDetailScreen', {
      productDetails: item,
    });
  };
  const onNavigateToRestaurant = (item) => {
    onNavigate.navigate('RestaurantScreen', {
      restaurant: item,
    });
  };
  const handleShowAll = (screenName) => {
    onNavigate.navigate(screenName);
  };
  const handleScroll = (offsetY) => {
    if (offsetY > 4) {
      handleScrollDown();
    } else {
      handleScrollUp();
    }
  }

  const handleScrollUp = () => {
      setHeaderColor('#fff')
      setShowSearch(false);
  };
  const handleScrollDown = () => {
    setHeaderColor('rgba(0, 32, 92, 0.005)')
    setShowSearch(true);
  };
  handlePressSearch = () => {
    if (flatListRef.current && showSearch) {
      const searchBarOffset = 0
      flatListRef.current.scrollToOffset({ offset: searchBarOffset, animated: true });
    }
  }



  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style= {{marginTop:-(insets.top), paddingTop:(insets.top), paddingBottom:16, paddingHorizontal:24, backgroundColor:headerColor, gap:8}}>
        <HomeHeader openLeftDrawer={openLeftDrawer} />
        {showSearch && <Pressable onPress={handlePressSearch} style={{width:80, position:'absolute', top:(insets.top), right:'50%'}}>
          <View style= {styles.searchButton}>
            <Image  source={require('../assets/icons/search.png')} style={styles.searchIcon}/>
            <View style={styles.smallIcon}>
              <Image source = {require('../assets/icons/filter.png')} />
            </View>
          </View>          
        </Pressable>}
      </View>
      <FlatList
        ref={flatListRef} 
        style={styles.homeScroll}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={300}
        onScroll={(event) => {
          const offsetY = event.nativeEvent.contentOffset.y;
          handleScroll(offsetY);
        }}
        data={[
          {id: 'Header'},
          { id: 'WeekOffer' },
          { id: 'ExploreCategories' },
          { id: 'PopularAroundYou' },
          { id: 'RecommendedForYou' },
          { id: 'FeaturedRestaurants' },
          { id: 'TopDeals' },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.id === 'Header') {
            return (
              <>
              {isLoggedIn === true && userData !== null ? (
                <View style={styles.headerContent}>
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
                {userAddress != '' ?
                <Text ellipsizeMode='tail' numberOfLines={1} style={styles.locationtext}>{userAddress}</Text>
                :
                <Text style={styles.loadinglocationtext}>Loading current location</Text>
                }
              </View>
        
              <Text numberOfLines={2} style={styles.subtitle} >
                What would you like to eat today?
              </Text>
              <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
              />

            </>
            )

          }else if (item.id === 'WeekOffer') {
            return <WeekOffer style={{ width: '100%' }} data={products[0]} key={item.id} onPressOffer={() => onNavigateToOffer(products[0])}/>;
          } else if (item.id === 'ExploreCategories') {
            return (
              <View key={item.id}>
                <Section title="Explore Categories" view="Show all" onPress={() => handleShowAll('MealyCategories')} />
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data={categories}
                  horizontal
                  style={styles.flatCont}
                  keyExtractor={(item) => item._id +'c'}
                  renderItem={({ item, index }) => (
                    <CategoryItem
                      key={item._id +'c'}
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
          } else if (item.id === 'PopularAroundYou') {
            return (
              <View key={item.id}>
                <Section title="Popular Around You" view="View more" onPress={() => handleShowAll('PopularAroundScreen')} />
                <FlatList
                  data={restaurants}
                  horizontal
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item._id + 're'}
                  style={{
                    borderRadius: 10,
                    height: 240,
                  }}
                  renderItem={({ item, index }) => (
                    <PopularItem
                      key={item._id +'re'}
                      data={item}
                      marginLeft={index === 0 ? 0 : 16}
                      marginRight={index === restaurants.length - 1 ? 0 : 0}
                      onPressItem={() => onNavigateToRestaurant(item)}
                    />
                  )}
                />
              </View>
            );
          } else if (item.id === 'RecommendedForYou') {
            return (
              <View key={item.id}>
                <Section title="Recommended For You" view="Show all" onPress={() => handleShowAll('RecommendedScreen')} />
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data={recommendations}
                  horizontal
                  keyExtractor={(item) => item._id + 'p'}
                  style={{
                    backgroundColor: '#ffffff',
                    paddingVertical: 8,
                    borderRadius: 8,
                    height: 260,
                  }}
                  renderItem={({ item, index }) => (
                    <RecommendedItem
                      key={item._id + 'p'}
                      data={item}
                      marginLeft={index === 0 ? 0 : 16}
                      marginRight={index === products.length - 1 ? 0 : 0}
                      onPressItem={() => onNavigateToProduct(item)}
                    />
                  )}
                />
              </View>
            );
          } else if (item.id === 'FeaturedRestaurants') {
            return (
              <View key={item.id}>
                <Section title="Featured Restaurants" view="Show all" onPress={() => handleShowAll('FeaturedRestaurantsScreen')} />
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
                      key={item._id + 'r'}
                      marginLeft={index === 0 || index % 2 === 0 ? 0 : 16}
                      onPressItem={() => onNavigateToRestaurant(item)}
                    />
                  )}
                />
              </View>
            );
          } else if (item.id === 'TopDeals') {
            return (
              <View key={5}>
                <Section title="Top Deals" view="Show all" />
                <FlatList
                  data={topDeals}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  keyExtractor={(item) => item.id + 't'}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    marginBottom: 16,
                  }}
                  renderItem={({ item, index }) => (
                    <TopDealItem
                      key={item._id +'t'}
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
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8,
    marginBottom: 8,
  },
  title: {
    color: COLORS.primary,
    fontSize: 32,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 48,
  },
  subtitle: {
    width: '80%',
    marginVertical: 8,
    color: 'rgba(0, 32, 92, 0.50)',
    fontFamily: 'Poppins_400Regular',
    fontSize: 22,
    lineHeight: 33,
  },
  homeScroll: {
    width: '100%',
    paddingHorizontal: 24,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationicon: {
    width: 16,
    height: 20,
    marginRight: 8,
  },
  locationtext: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#00205C',
    maxWidth:'100%'
  },
  loadinglocationtext: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    alignSelf: 'center',
    color: 'rgba(0, 32, 92, 0.50)'
  },
  searchButton:{
    borderWidth:1,
    borderColor:'#E69F14',
    flexDirection:'row',
    borderRadius:8,
    marginTop:8,
    marginBottom:16,
    alignItems:'center',
    justifyContent:'center'
  },
  smallIcon:{
    flex:0.5,
    padding:4,
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
    backgroundColor:'#E69F14'
  },
  searchIcon:{
    flex:0.5,
    margin:4,
  }
});
