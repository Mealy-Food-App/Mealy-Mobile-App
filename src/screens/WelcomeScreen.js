import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';

import BigButton from '../components/BigButton'
import { useContext } from 'react'

const COLORS ={primary:'#00205C', btnPrimary:'#f5f5f5', bgPrimary:'#F5F5F5' }



const WelcomeScreen = () => {
    const {isLoggedIn,userData,logout, status} = useContext(AuthContext);
    const onNavigate = useNavigation();
    const updateOnboardingStatus = async () => {
        try {
          await AsyncStorage.setItem('onboardingStatus', 'completed');
        } catch (error) {
          // Handle the error if AsyncStorage access fails
        }
    };
    const onPressLoginHandler = () => {
        logout()
        updateOnboardingStatus();
        onNavigate.navigate('LogInScreen')
    };
    const onPressSignUpHandler = () => {
        logout()
        updateOnboardingStatus();
        onNavigate.navigate('SignUpScreen')
    };
    const onPressGuestHandler = () => {
        logout();
        updateOnboardingStatus();
        onNavigate.navigate('Home');
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mealy</Text>
      <Text style= {styles.subtitle}>Would you like to</Text>
      <TouchableOpacity style = {{width:'100%'}} onPressIn={onPressLoginHandler}>
        <BigButton props={{color:'#E69f14', borderColor:"#E69f14", title: "Log In", fontFamily: "Poppins_500Medium", fontSize:18 }} />
      </TouchableOpacity>
      <Text style = {styles.alternative}> or </Text>
      <TouchableOpacity style={{width:'100%'}} onPressIn={onPressSignUpHandler}>
        <BigButton props={{color:'transparent', borderColor:"#E69f14", title: "Sign Up", fontFamily: "Poppins_500Medium", fontSize:18 }}/>
      </TouchableOpacity>
      
      <Text style = {styles.alternative}> or </Text>
      <TouchableOpacity onPressIn={onPressGuestHandler} style={{height:48, width:'100%', marginBottom:276}}>
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
      backgroundColor:COLORS.bgPrimary,
      paddingTop: StatusBar.currentHeight,
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