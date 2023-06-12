import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BigButton({props}) {
  const buttonStyle = {
    backgroundColor:props.color,
    marginTop:24,
    marginBottom:16,
    borderColor: props.borderColor,
    borderWidth: 1,
    alignContent: 'center',
    borderRadius:8,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical:12,
    }
    const textStyle ={
      textAlign:'center',
      fontFamily:props.fontFamily,
      fontSize:props.fontSize,
      color:'#00205c',
    }
  return (
    <View style = {buttonStyle}>
      <Text style= {textStyle}>{props.title}</Text>
    </View>
  )
}
