import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SmallButton = ({props}) => {
    const btnwidth = (props.width !== undefined && props.width !== null) ? props.width : 137
    

    const buttonStyle = {
        backgroundColor:props.color,
        marginVertical:4,
        borderColor: props.borderColor,
        borderWidth: 1,
        alignContent: 'center',
        borderRadius:8,
        height:32,
        width: btnwidth,
        paddingVertical:6,
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

export default SmallButton;