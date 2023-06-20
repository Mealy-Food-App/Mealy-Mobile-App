import {  StyleSheet,Image, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const TripletHeader = ({props}) => {
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback style={styles.arrowLeft}>
        <Image source={require('../assets/icons/arrow-left.png')} style={styles.arrowLeft}/>
      </TouchableWithoutFeedback>
      <Text style={styles.headerText}>
        {props.title}
      </Text>
      <TouchableWithoutFeedback style={styles.deleteAll}>
        <Image source={require('../assets/icons/deleteall.png')} style={styles.deleteAll}/>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default TripletHeader

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:16,
    },
    arrowLeft:{
        width:24,
        height:24,
        borderRadius:24,
    },
    deleteAll:{
        width:24,
        height:24,
        resizeMode:'contain'
    },
    headerText:{
        fontFamily:'Poppins_400Regular',
        fontSize:28,
        lineHeight:42,
        color:'#00205C'
    }
})