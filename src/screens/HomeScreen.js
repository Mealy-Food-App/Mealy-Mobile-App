import { StyleSheet, Text, View, Image, } from 'react-native'
import React, {useContext, useState} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import HomeHeader from '../components/HomeHeader';
import { StatusBar } from 'expo-status-bar'

import SearchBar from '../components/SearchBar';

const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#F5F5F5', }

const HomeScreen = () => {
  const [authState,setAuthState] = useContext(AuthContext);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <View style= {styles.container}>
      {/* {authState.signedIn== true ? */}
      <View>
        <HomeHeader/>
        <View style ={styles.titleContainer}>
          <Text style={styles.title} >Hello {authState.fullname}</Text> 
        </View>
      </View> {/*:*/}
      {/* <View>
        <View style ={styles.titleContainer}>
          <Text style={styles.title} >Hello There</Text> 
          <Image source={require('../assets/icons/wave.png')} style = {{width:36, height:34, resizeMode:'contain', alignSelf:'center',marginLeft:8}}/>
        </View>
      </View>} */}
      <View style= {styles.location}>
      </View>
      <Text numberOfLines={2} style = {styles.subtitle}>What would you like to eat today?</Text>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal:24,
    width: '100%',
    backgroundColor:COLORS.bgPrimary,
  },
  titleContainer:{
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
  }
})