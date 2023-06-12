import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput} from 'react-native'
import React from 'react'

const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#F5F5F5' }

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked,setShowFilters}) => {
  return (
    <View style= {styles.searchContainer}>
      <Image  source={require('../assets/icons/search.png')} style={styles.searchIcon}/>
      <TextInput
        style={styles.input}
        placeholder="what do you want to eat"
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        onFocus={() => {
          setClicked(true);
        }}
      />
      {clicked && (
        <TouchableOpacity onPress={() => {setSearchPhrase('')}}>
          <Image source = {require('../assets/icons/cancel.png')} style={styles.smallIcon}/>
        </TouchableOpacity>
      )}
      <TouchableOpacity style ={styles.filter} onPress={() => {setShowFilters('')}}>
        <Image source = {require('../assets/icons/filter.png')} style={styles.smallIcon}/>          
      </TouchableOpacity> 
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchContainer:{
        height:48,
        borderWidth:1,
        borderColor:'#E69F14',
        flexDirection:'row',
        width:'100%',
        borderRadius:8,
        marginTop:8,
        marginBottom:16
    },
    searchIcon:{
      width:24,
      height:24, 
      alignSelf:'center',
      marginLeft:8  
    },
    input: {
      fontSize: 14,
      marginLeft: 10,
      lineHeight:21,
      width: 220,
      fontFamily:'Poppins_400Regular',
      color:COLORS.primary
    },
    smallIcon:{
      width:24,
      height:24,
      resizeMode:'contain',
    },
    filter:{
      width:48,
      height:44,
      backgroundColor:COLORS.btnPrimary,
      borderRadius:8,
      top: 1,
      right:1,
      bottom:1,
      position:'absolute',
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center'
    }
})