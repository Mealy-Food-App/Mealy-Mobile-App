import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native'
import React, {useContext, useState}from 'react'
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';



const AccountHeader = ({props}) => {
  const onNavigate = useNavigation();
  const {cartItems} = useContext(CartContext)
  const {isLoggedIn} = useContext(AuthContext)
  
  const onNavigation = () => {
    onNavigate.navigate("AccountScreen");
  }
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.arrowLeftContainer} onPress={() => onNavigation()}>
          <Image source={require('../assets/icons/arrow-left.png')} style={styles.arrowLeft}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {props.title}
        </Text>
      </View>
    </View>
  )
}

export default AccountHeader

const styles = StyleSheet.create({
    headerContainer:{
      flexDirection:'row',
      justifyContent:'space-between',      
      height:42,
      marginVertical:16,
    },
    header:{
        flexDirection:'row',
        gap:25,
    },
    arrowLeft:{
        width:24,
        height:24,
        borderRadius:24,
        tintColor:'#00205C'
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
        fontSize:24,
        lineHeight:52,
        color:'#00205C',
    },
    cartnum:{
      color:'#E69F14',
      borderRadius:16,
      right:7,
      top:0,
      fontSize:12,
      position:'absolute',
      fontFamily:'Poppins_700Bold'
  }
})