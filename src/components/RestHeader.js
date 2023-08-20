import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native'
import React, {useContext, useState}from 'react'
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';



const RestHeader = ({props}) => {
  const onNavigate = useNavigation();
  const {cartItems} = useContext(CartContext)
  const {isLoggedIn} = useContext(AuthContext)
  
  const onNavigationHome = () => {
    onNavigate.navigate("Home");
  }
  const onNavigationCart = () => {
    onNavigate.navigate("Cart");
  }
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.arrowLeftContainer} onPress={() => onNavigationHome()}>
          <Image source={require('../assets/icons/restheader.png')} style={styles.arrowLeft}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {props.title}
        </Text>
      </View>
      {isLoggedIn &&<TouchableOpacity style={styles.cartContainer} onPress={() => onNavigationCart()}>
        {cartItems.length > 0 ? (
          <>
          <View style={styles.basketnum}>
            <Text style={styles.cartnum}>{cartItems.length}</Text>
          </View>
          <View style={styles.basket}>
            <Image source={require('../assets/icons/cart4.png')} style={styles.cart}/>
          </View>
          </>
          ): (
          <View style={styles.basket}>
            <Image source={require('../assets/icons/cart2.png')} style={styles.cart}/>
          </View>
          )}
        </TouchableOpacity>}
    </View>
  )
}

export default RestHeader

const styles = StyleSheet.create({
    headerContainer:{
      flexDirection:'row',
      justifyContent:'space-between',      
      height:42,
      marginBottom:8,
    },
    header:{
        flexDirection:'row',
        gap:25,
    },
    arrowLeft:{
        width:24,
        height:24,
        borderRadius:24,
    },
    basket:{
      width:24,
      height:24,
      padding:4,
      backgroundColor:'#fff',
      borderWidth:1,
      borderColor:'#00205C',
      borderRadius:12,
      alignItems:'center'
    },
    cart:{
      width:16,
      height:16,
      tintColor:'#00205c',
    },
    arrowLeftContainer:{
      width:48,
      alignContent:'center',
      justifyContent:'center'
    },
    cartContainer:{
      width:48,
      alignItems:'flex-end',
      justifyContent:'center'
    },
    headerText:{
        fontFamily:'Poppins_400Regular',
        fontSize:24,
        lineHeight:52,
        color:'#00205C',
    },
    basketnum:{
      height:16,
      width:16,
      borderRadius:8,
      right:-6,
      top:0,
      alignItems:'center',
      backgroundColor:'#00205C', 
      position:'absolute',
      zIndex:99999
    },
    cartnum:{
      color:'#E69F14',           
      fontSize:10,      
      fontFamily:'Poppins_700Bold'
  }
})