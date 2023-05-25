import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import BigButton from '../components/BigButton'

const COLORS ={primary:'#00205C', btnPrimary:'#f5f5f5', bgPrimary:'#F5F5F5' }

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mealy</Text>
      <Text style= {styles.subtitle}>Would you like to</Text>
      <TouchableOpacity style = {{width:'100%'}}>
        <BigButton props={{color:'#E69f14', title: "Log In"}} />
      </TouchableOpacity>
      <Text style = {styles.alternative}> or </Text>
      <TouchableOpacity style={{width:'100%'}}>
        <BigButton props={{color:'transparent', title: "Get Started"}}/>
      </TouchableOpacity>
      
      <Text style = {styles.alternative}> or </Text>
      <TouchableOpacity>
        <Text style={styles.guestbtn}> Continue as a guest</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:24,
      width: '100%',
      alignItems: 'center',
      backgroundColor:COLORS.bgPrimary,
    },
    title:{
        marginTop: 128,
        color:COLORS.primary,
        textAlign:'center',
        fontSize: 32,
        fontFamily: 'Poppins_400Regular',
    },
    subtitle:{
        marginTop: 48,
        color:COLORS.primary,
        textAlign:'center',
        fontSize: 22,
        fontFamily: 'Poppins_400Regular',
    },
    alternative:{
        textAlign:'center',
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        color:'#00205c',
    },
    guestbtn:{
        marginTop: 24,
        textAlign:'center',
        fontFamily:'Poppins_500Medium',
        fontSize:18,
        color:'#00205c',
    }
});

export default WelcomeScreen;