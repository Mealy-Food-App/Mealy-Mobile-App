import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WeekOffer = () => {
  return (
    <View style={styles.meal}>
      <Text style = {styles.title}>Meal of the week</Text>
      <View style={styles.mealContent}>
      <Image
          source={details.image}
          resizeMode="cover"
          style={{height: 320, width: "100%",position:'relative', borderBottomLeftRadius: 26, borderBottomRightRadius: 26 }}
        />
      </View>
    </View>
  )
}

export default WeekOffer

const styles = StyleSheet.create({
    meal:{
        height:264,
        alignItems:'center'
    },
    title:{
        textAlign:'center',
        fontFamily:Poppins_500Medium,
        fontSize:16,
        color:'#00205c',
        lineHeight:24,
    }
})