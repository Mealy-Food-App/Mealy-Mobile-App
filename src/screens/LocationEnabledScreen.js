import { StyleSheet, Text, View, Image} from 'react-native'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import * as Location from 'expo-location';
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LocationEnabledScreen = () => {
    const navigation = useNavigation();
    const handleEnableLocation = async () => {
        // Handle enabling location service
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === 'granted') {
      const { coords } = await Location.getCurrentPositionAsync({});

      if (coords) {
        await Location.enableNetworkProviderAsync();
      }
    }
    
        navigation.navigate('Main');
    };

  return (
    <View style= {styles.container}>
        <View style= {styles.mybox}>
            <View style={styles.titleHolder}>
                <Text style={styles.title}>Location is turned off</Text>
            </View>
            <View style={styles.midSection}>
                <Image source = {require("../assets/icons/location-on-rounded.png")} width={80} height={80}/>
                <Text style={styles.normaltext} numberOfLines={2}>To enjoy the best delivery experience, turn on location in settings</Text>
            </View>
            <View style={styles.btnholder}>
                <Pressable style={styles.btn1} onPress={handleEnableLocation}>
                    <Text style={styles.normaltext}>Yes</Text>
                </Pressable>
                <Pressable style={styles.btn2}>
                    <Text style={styles.normaltext} onPress={handleEnableLocation}>No</Text>
                </Pressable>
            </View>
        
        </View>
    </View>
  )
}

export default LocationEnabledScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:"100%",
        paddingTop:StatusBar.currentHeight,
    },
    mybox:{
        height:267,
        elevation:4,
        width:291,
        marginTop:"50%",
        alignSelf:'center',
        backgroundColor:"#FFFFFF",
        borderRadius:8,
        justifyContent:'space-between'
    },
    titleHolder:{
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        backgroundColor:"#E7EAEE",
        height:42,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:"#00205C",
        fontFamily:"Poppins_500Medium",
        fontSize:16,
        lineHeight:24,
    },
    midSection:{
        alignItems:'center',
        paddingVertical:20,
        justifyContent:'space-between',
        paddingHorizontal:16
    },
    normaltext:{
        fontFamily:"Poppins_400Regular",
        fontSize:14,
        lineHeight:21,
        textAlign:'center',
        color:"#00205C"
    },
    btnholder:{
        height:48,
        flexDirection:'row',
        justifyContent:'center'
    },
    btn1:{
        borderTopWidth:2,
        borderRightWidth:1,
        borderColor:'#E7EAEE',
        flex:0.5,
        justifyContent:'center'
    },
    btn2:{
        justifyContent:'center',
        borderTopWidth:2,
        flex:0.5,
        borderLefttWidth:1,
        borderColor:'#E7EAEE',
    }
})