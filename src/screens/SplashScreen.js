import React from 'react';
import { View, Image, StatusBar, StyleSheet,Text, Dimensions, TouchableWithoutFeedback } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Your splash screen content */}
        <Image source={require('../assets/splash.png')} style={styles.image} />
        <Image source={require('../assets/Mealy.png')} style={styles.image2}/>   
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#e69f14',
      paddingTop: StatusBar.currentHeight,
    },
    image: {
      width: 240,
      height: 240,
      resizeMode: 'contain',
    },
    image2: {
      width: 160,
      height: 56,
      resizeMode: 'contain',
      marginTop:14
    },
    text: {
      fontSize: 56,
      fontWeight: 'bold',
      marginTop: 20,
      color:'#00205C',
      fontFamily:'Lobster-Regular',
      fontWeight:'400'
    },
    appContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white'
    },  
    textTap:{
      position:'absolute',
      bottom:20,
      marginBottom:20,
      fontWeight: 700,
      fontSize:18,
      color:'#00205C'
    }
  });