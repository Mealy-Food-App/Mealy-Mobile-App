import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const CategoryItem = ({item, marginLeft, marginRight, onPressItem, children}) => {
  return (
    <View style={[styles.container,{marginLeft: marginLeft,margin: marginRight,}]}>
      <Image source={item.icon} style={styles.image}/>
      <Text style={styles.label}>{item.label}</Text>
      <Text style={styles.restaurants}>{item.restaurants}&nbsp; Places</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width:98,
        height:120,
        borderRadius:10,
        paddingHorizontal:17,
        paddingVertical:8,
        backgroundColor:"#F8F2F1",
    },
    image:{
        width:55,
        height:55,
        marginTop:0.5,
    },
    label:{
        fontFamily:'Montserrat_500Medium',
        fontSize:14,
        lineHeight:20,
        color:'#00205C',
        textAlign:'center',
        marginVertical:4,
        flexDirection:'row',
        justifyContent:'center'
    },
    restaurants:{
        fontFamily:'Montserrat_400Regular',
        fontSize:12,
        lineHeight:20,
        color:'#000000',
        textAlign:'center',
        flexDirection:'row',
        justifyContent:'center'
    }
})