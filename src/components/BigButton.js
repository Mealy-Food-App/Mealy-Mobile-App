import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BigButton({props}) {
  return (
    <View style = {{
        backgroundColor:props.color,
        marginTop:24,
        marginBottom:16,
        borderColor: '#e69f14',
        borderWidth: 1,
        alignContent: 'center',
        borderRadius:8,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical:12,
        }}>
      <Text style= {styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        fontFamily:'Poppins_500Medium',
        fontSize:18,
        color:'#00205c'
    },
})