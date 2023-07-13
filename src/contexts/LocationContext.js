import React, { createContext, useState, useEffect } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const navigation = useNavigation();
  const [userLocation, setUserLocation] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showTurnOn, setShowTurnOn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkLocationEnabled();
  }, []);

  const checkLocationEnabled = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status === 'granted') {
      let isLocationEnabled = await Location.hasServicesEnabledAsync();
      await fetchUserLocation();

      if (isLocationEnabled) {
        await fetchUserAddress(userLocation.coords);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        showTurnOnLocationComponent();
      }
    } else if (status === 'undetermined') {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        const isLocationEnabled = await Location.hasServicesEnabledAsync();

        if (isLocationEnabled) {
          await fetchUserLocation();
          setIsLoading(false);
        } else {
          setIsLoading(false);
          showTurnOnLocationComponent();
        }
      } else {
        setIsLoading(false);
        openAppSettings();
      }
    } else {
      setIsLoading(false);
      openAppSettings();
    }
  };

  const showTurnOnLocationComponent = async () => {
    const providers = await Location.getProviderStatusAsync();
    if (!providers.networkAvailable) {
      setIsLoading(false);
      setShowTurnOn(true);
    }
  };

  const openAppSettings = () => {
    Linking.openSettings();
  };

  const fetchUserLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation(location.coords);
      } else {
        setError('Location permission not granted');
      }
    } catch (error) {
      console.log('Error fetching location:', error);
      setError('Error fetching location');
    }
  };

  const fetchUserAddress = async (coords) => {
    try {
      const { latitude, longitude } = coords;
      const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );

      setUserAddress('Nairobi');
      // if (response.data.results.length > 0) {
      //   const { formatted_address } = response.data.results[0];
      //   setUserAddress(formatted_address);
      // } else {
      //   setUserAddress('Nairobi');
      // }
    } catch (error) {
      console.log('Error fetching address:', error);
      setError('Error fetching address');
    }
  };

  return (
    <LocationContext.Provider
      value={{
        userLocation,
        userAddress,
        isLoading,
        error,
        showTurnOn,
        setShowTurnOn,
        setIsLoading,
        fetchUserLocation,
        checkLocationEnabled,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
