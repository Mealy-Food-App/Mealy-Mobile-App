import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DeliveryOption = () => {
  return (
    <View style = {styles.container}>
      <Text>DeliveryOption</Text>
    </View>
  )
}

export default DeliveryOption

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FAC660",
        height:184,
        borderRadius:8,
        marginHorizontal:8,
        marginVertical:16
    }
})