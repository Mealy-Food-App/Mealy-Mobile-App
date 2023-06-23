import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const itemWidth = (Dimensions.get("screen").width - 80) / 3 
const CategoryItem = ({item, marginLeft, marginVertical, marginRight, onPressCategory, backgroundColor, children}) => {
  return (
    <TouchableOpacity onPress={onPressCategory} 
      style={{
          width: itemWidth,
          height:120,        
          borderRadius:10,
          paddingHorizontal:8,
          justifyContent:'center',
          paddingVertical:8,
          marginLeft: marginLeft,
          margin: marginRight,
          backgroundColor:backgroundColor, 
          marginVertical:marginVertical
        }}>
      <View>
        <Image source={require('../assets/images/dummy/food.png')} style={styles.image}/>
        <Text style={styles.label}>{item.name}</Text>
        <Text style={styles.restaurants}>{item.totalPlaces}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    image:{
        width:55,
        height:55,
        marginTop:0.5,
        alignSelf:'center'
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