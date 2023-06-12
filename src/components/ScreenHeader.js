import { StyleSheet,Image, Text, View, TouchableWithoutFeedback  } from 'react-native'
import React from 'react'

const ScreenHeader = ({props}) => {
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback style={styles.arrowLeft}>
        <Image source={require('../assets/icons/arrow-left.png')} style={styles.arrowLeft}/>
      </TouchableWithoutFeedback>
      <Text style={styles.headerText}>
        {props.title}
      </Text>
    </View>
  )
}

export default ScreenHeader

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        gap:25,
    },
    arrowLeft:{
        width:24,
        height:24,
        borderRadius:24,
    },
    headerText:{
        fontFamily:'Poppins_400Regular',
        fontSize:28,
        lineHeight:42,
        color:'#00205C'
    }
})