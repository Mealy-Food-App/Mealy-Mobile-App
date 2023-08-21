import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native'
import React, {useContext, useState}from 'react'
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';



const ScreenHeader = ({props}) => {
  const onNavigate = useNavigation();
  const {cartItems} = useContext(CartContext)
  const {isLoggedIn} = useContext(AuthContext)
  
  const onNavigationHome = () => {
    onNavigate.goBack()
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
          <Image source={require('../assets/icons/cart4.png')} style={styles.cart}/>
          </>
          ): (
          <>
            <Image source={require('../assets/icons/cart2.png')} style={styles.cart}/>
          </>
          )}
        </TouchableOpacity>}
    </View>
  )
}

export default ScreenHeader

const styles = StyleSheet.create({
    headerContainer:{
      flexDirection:'row',
      justifyContent:'space-between',      
      height:56,
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
    cart:{
      width:26,
      height:26,
      borderRadius:26,
      tintColor:'#00205C'
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
        fontSize:18,
        lineHeight:56,
        color:'#00205C',
    },
    basketnum:{
      height:16,
      width:16,
      borderRadius:8,
      right:-6,
      top:0,
      alignItems:'center',
      backgroundColor:'#fff', 
      position:'absolute',
      zIndex:99999,
      borderColor:"#00205c",
      borderWidth:0.5
    },
    cartnum:{
      color:'#E69F14',           
      fontSize:10,      
      fontFamily:'Poppins_700Bold'
    }
})