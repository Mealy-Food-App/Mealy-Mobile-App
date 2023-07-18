import {  StyleSheet,Image, Text, View, TouchableWithoutFeedback, TouchableOpacity, StatusBar } from 'react-native'
import React, {useContext} from 'react'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast, } from 'react-native-alert-notification';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../contexts/CartContext';

const TripletHeader = ({props}) => {
  const onNavigate = useNavigation();
  
  const {clearCart} = useContext(CartContext)

  const onNavigationHome = () => {
    onNavigate.navigate("Home");
  }
  const onDeleteAll = () => {
    clearCart();
  }
  return (
    <AlertNotificationRoot style={{top:0}}>
    <View style={styles.header}>
      <TouchableWithoutFeedback style={styles.arrowLeft} onPress={() => onNavigationHome()}>
        <Image source={require('../assets/icons/arrow-left.png')} style={styles.arrowLeft}/>
      </TouchableWithoutFeedback>
      <Text style={styles.headerText}>
        {props.title}
      </Text>
      <TouchableOpacity style={styles.deleteAll} onPress={() => 
        Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Delete All',
        textBody: 'Are you sure you want to delete all?',
        button: 'Yes',
        onPressButton:() => onDeleteAll()
      })}>
        <Image source={require('../assets/icons/delete.png')} style={styles.deleteAll}/>
      </TouchableOpacity>
    </View>
  </AlertNotificationRoot>
  )
}

export default TripletHeader

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#ffffff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:0,
        marginBottom:8
    },
    arrowLeft:{
      width:24,
        height:24,
        borderRadius:24,
    },
    deleteAll:{
        width:28,
        height:34,
        resizeMode:'contain',
        tintColor:'#00205C'
    },
    headerText:{
        fontFamily:'Poppins_400Regular',
        fontSize:28,
        lineHeight:42,
        color:'#00205C'
    }
})