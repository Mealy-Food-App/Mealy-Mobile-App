import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput, Keyboard} from 'react-native'
import React, {useState} from 'react'

const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#F5F5F5' }

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked,setShowFilters}) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  return (
    <View style= {styles.searchContainer}>
      <Image  source={require('../assets/icons/search.png')} style={styles.searchIcon}/>
      <TextInput
        style={styles.input}
        placeholder="search for meal"
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        onFocus={() => {
          setClicked(true);
        }}
        onBlur={() => {
          setClicked(false);
        }}
      />
      {clicked &&
        (<TouchableOpacity style ={styles.cancel} onPress={() => {
          Keyboard.dismiss();
          setSearchPhrase('');          
          setClicked(false);
        }}>
          <Image source = {require('../assets/icons/cancel.png')} style={styles.smallIcon}/>
        </TouchableOpacity>)}
      <TouchableOpacity style ={styles.filter} onPress={() => {setShowFilterModal(true)}}>
        <Image source = {require('../assets/icons/filter.png')} style={styles.smallIcon}/>          
      </TouchableOpacity> 
      {/* {showFilterModal &&
      <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
      />} */}
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
      width:14,
      height:14, 
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
      tintColor:COLORS.primary
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
    },
    cancel:{
      width:48,
      height:44,
      top: 1,
      right:52,
      bottom:1,
      position:'absolute',
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center'
    },

})