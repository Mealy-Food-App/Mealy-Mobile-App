import { StyleSheet, Alert, Text, View, Image,StatusBar } from 'react-native'
import React, {useContext, useState} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import HomeHeader from '../components/HomeHeader';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  {mealOfTheDay} from '../dummyData'
import WeekOffer from '../components/WeekOffer';
import Section from '../components/Section';


import SearchBar from '../components/SearchBar';
import { ScrollView } from 'react-native-gesture-handler';

const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#F5F5F5', }

const HomeScreen = () => {
  const route = useRoute();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [user, setUser] = useState(null)
  // const { user } = route.params;
  // console.log(user.fullName)
  // const userName = user.fullName.split(' ')[0].charAt(0).toUpperCase() + user.fullName.split(' ')[0].slice(1)
  console.log(mealOfTheDay)
return (
    <View style= {styles.container}>
      {user !== null ?
      <View style = {styles.headerContent}>
        <HomeHeader/>
        <View style ={styles.titleContainer}>
          <Text style={styles.title} >Hello {userName}</Text> 
        </View>
      </View> :
      <View style = {styles.headerContent}>
        <View style ={styles.titleContainer}>
          <Text style={styles.title} >Hello There</Text> 
          <Image source={require('../assets/icons/wave.png')} style = {{width:36, height:34, resizeMode:'contain', alignSelf:'center',marginLeft:8}}/>
        </View>
      </View>}
      <View style= {styles.location}>
      </View>
      <Text numberOfLines={2} style = {styles.subtitle}>What would you like to eat today?</Text>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <WeekOffer data ={mealOfTheDay}/>
      <ScrollView style={styles.homeScroll}>        
        <Section title="Explore Categories" view='Show all' />
      </ScrollView>
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    paddingHorizontal:24,
    width: '100%',
    backgroundColor:"#FFFFFF",
  },
  headerContent:{
    
  },
  titleContainer:{
    marginTop:24,
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:16,
    marginBottom:8
  },
  title:{
    color:COLORS.primary,
    fontSize: 32,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 48
  },
  subtitle:{
    width:240,
    marginVertical:8,
    color:'rgba(0, 32, 92, 0.50)',
    fontFamily: 'Poppins_400Regular',
    fontSize: 22,
    lineHeight:33
  },
  homeScroll:{
    width:'100%',
  }
})