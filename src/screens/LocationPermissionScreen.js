import React, { useEffect,  useState, useContext } from 'react';
import { StyleSheet,StatusBar, Text, TextInput, View, Button, Image, TouchableOpacity, TouchableHighlight, ScrollView,Alert, Pressable, ToastAndroid} from 'react-native'
import * as Location from 'expo-location';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';



const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#F5F5F5', }

const LocationPermissionScreen = () => {
  const [spinner, setSpinner] = useState(true)
  const navigation = useNavigation();

  useEffect(() => {
    checkLocationEnabled();
  }, []);

  const checkLocationEnabled = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status === 'granted') {
      let isLocationEnabled = await Location.hasServicesEnabledAsync();

      if (isLocationEnabled) {
        setSpinner(false);
        navigation.navigate('Main');
      } else {
        setSpinner(false);
        navigation.navigate('LocationEnabledScreen');
      }
    } else if (status === 'undetermined') {
      status = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        setSpinner(false);
        const isLocationEnabled = await Location.hasServicesEnabledAsync();

        if (isLocationEnabled) {
          navigation.navigate('Main');
        } else {
          navigation.navigate('LocationEnabledScreen');
        }
      } else {
        setSpinner(false);
        openAppSettings();
      }
    } else {
      openAppSettings();
    }
  };

  const openAppSettings = () => {
    Linking.openSettings();
  };
  return(
    <Spinner
      visible={spinner}
      color ={COLORS.primary}
      textContent='loading'
      textStyle={styles.loadingText}
      overlayColor = "transparent"
      style ={{height:"100%"}}
    />
  ) // Return null or a loading screen
};

export default LocationPermissionScreen;
const styles = StyleSheet.create({
  loadingText:{
    fontFamily:"Poppins_400Regular",
    color:COLORS.primary
  }
});