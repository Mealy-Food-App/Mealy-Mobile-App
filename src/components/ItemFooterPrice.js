import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'

const ItemFooterPrice = ({data}) => {
  return (
    <View style={styles.ItemFooter}>
        <Text style= {styles.ItemFooterText}>#{Number(data.price).toLocaleString()}</Text>     
    </View>
  )
}

export default ItemFooterPrice

const styles = StyleSheet.create({
    ItemFooter:{
        width:56,
        paddingVertical:2,
        position:'absolute',
        right:4,
        bottom:4,
        backgroundColor:"#ffffff",
        borderRadius:4,

    },
    ItemFooterText:{
        textAlign:'center',
        fontFamily:'Poppins_500Medium',
        color: '#00205C',
        fontSize:14,
        lineHeight:21
    },
})