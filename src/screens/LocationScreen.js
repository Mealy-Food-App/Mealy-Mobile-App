import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { check, PERMISSIONS, openSettings } from 'react-native-permissions';

const LocationScreen = () => {
  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    try {
      const permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (permissionStatus === 'granted') {
        // Location permission granted, you can proceed with accessing the location
        getCurrentLocation();
      } else if (permissionStatus === 'denied') {
        // Location permission denied, show a prompt to enable it
        showLocationPrompt();
      }
    } catch (error) {
      console.log('Error checking location permission:', error);
    }
  };

  const showLocationPrompt = () => {
    Alert.alert(
      'Location Permission',
      'Please enable location services to use this feature.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Open Settings',
          onPress: () => openSettings(),
        },
      ],
      { cancelable: false }
    );
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        // Location data available, you can use it here
        console.log('Current location:', position.coords);
      },
      (error) => {
        console.log('Error getting current location:', error);
      }
    );
  };

  return (
    <View>
      <Text>Location Screen</Text>
      <Button title="Check Location" onPress={checkLocationPermission} />
    </View>
  );
};

export default LocationScreen;
