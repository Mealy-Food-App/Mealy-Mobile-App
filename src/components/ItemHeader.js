import { StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemHeader = ({data}) => {
  return (
    <TouchableOpacity style={styles.headerContainer}>
        <Image
            source={require("../assets/icons/favorite.png")}
            style={{ width: 27, height: 26,padding:6, borderRadius:21 }}
        />
    </TouchableOpacity>
  )
}

export default ItemHeader

const styles = StyleSheet.create({
    headerContainer:{
        top :16 ,
        right:8,
        width:32,
        height:32,
        position:'absolute'
    }
})