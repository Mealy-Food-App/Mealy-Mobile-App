import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList,ScrollView, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { useNavigation} from '@react-navigation/native';
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

const COLORS = {
  primary: '#00205C',
  btnPrimary: '#E69F14',
  bgPrimary: '#F5F5F5',
};

const HomeScreen = () => {
  const onNavigate = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const {isLoggedIn, userData, status} = useContext(AuthContext);
  const {categories} = useContext(ProductsContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchPhrase !== '') {
        onNavigate.navigate('SearchScreen',  searchPhrase );
      }
    }, 1000); // 1000 milliseconds (1 second) delay

    return () => clearTimeout(timer);
  }, [searchPhrase, onNavigate]);

  const onNavigateToCategory = (item) => {
    onNavigate.navigate('CategoryScreen', {
      title: item.name,
      searchPhrase:item.name
    });
  }

  return (
    <View style={styles.container}>
      {isLoggedIn === true  &&  userData !== null  ? (
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
      <View style={styles.location}></View>
      <Text numberOfLines={2} style={styles.subtitle}>
        What would you like to eat today?
      </Text>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />

      <ScrollView style={styles.homeScroll} contentInset={{ bottom: 138 }} showsVerticalScrollIndicator={false} >
        <View>
          <WeekOffer style={{ width: '100%' }} data={mealOfTheDay} />
          <Section title="Explore Categories" view="Show all" />
          <View>
            <FlatList
              data={categories}
              nestedScrollEnabled={true}
              horizontal
              keyExtractor={(item) => item._id}
              renderItem={({ item, index }) => (
                <CategoryItem
                  item={item}
                  marginLeft={index === 0 ? 0 : 8}
                  marginRight={index === categories.length - 1 ? 0 : 0}
                  onPressCategory={() => onNavigateToCategory(item)}
                />
              )}
            />
          </View>
          <Section title="Popular Around You" view="View more" />
          <View>
            <FlatList
              data={aroundYou}
              nestedScrollEnabled={true}
              horizontal
              keyExtractor={(item) => item.id}
              style={{
                borderRadius: 10,
              }}
              renderItem={({ item, index }) => (
                <PopularItem
                  data={item}
                  marginLeft={index === 0 ? 0 : 16}
                  marginRight={index === aroundYou.length - 1 ? 0 : 0}
                  onPressItem={() => onNavigation(item)}
                />
              )}
            />
          </View>
          <Section title="Recommended For You" view="Show all" />
          <View>
            <FlatList
              data={recommended}
              horizontal
              nestedScrollEnabled={true}
              keyExtractor={(item) => item.id}
              style={{
                backgroundColor: '#ffffff',
                paddingVertical: 8,
                borderRadius: 8,
              }}
              renderItem={({ item, index }) => (
                <RecommendedItem
                  data={item}
                  marginLeft={index === 0 ? 0 : 16}
                  marginRight={index === recommended.length - 1 ? 0 : 0}
                  onPressItem={() => onNavigation(item)}
                />
              )}
            />
          </View>
          <Section title="Featured Restaurants" view="Show all" />
          <View>
            <FlatList
              nestedScrollEnabled={true}
              data={featured}
              numColumns={2}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={{
                backgroundColor: '#ffffff',
              }}
              renderItem={({ item, index }) => (
                <FeaturedItem
                  data={item}
                  marginLeft={index === 0 || index % 2 === 0 ? 0 :16}
                  onPressItem={() => onNavigation(item)}
                />
              )}
            />
          </View>
          <Section title="Top Deals" view="Show all" />
          <View>
            <FlatList
              nestedScrollEnabled={true}   
              data={topDeals}
              horizontal
              keyExtractor={(item) => item.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 10,
                marginBottom: 32,
              }}
              renderItem={({ item, index }) => (
                <TopDealItem
                  data={item}
                  marginLeft={index === 0 ? 0 : 16}
                  backgroundColor= {index  === 0 ? '#FFEBEB' :index  === 1 ? 'rgba(20, 1, 0, 0.1)': index  === 2 ? '#F5EFF5': '#fff1eb'}
                  marginRight={index === topDeals.length - 1 ? 0 : 0}
                  onPressItem={() => onNavigation(item)}
                />
              )}
          />
          </View>
        </View>
      </ScrollView>
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
});
