import React, { createContext, useState, useEffect } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(userAddress);
  useEffect(() => {
    checkLocationPermissions();
    console.log(userAddress);
  }, []);

  const checkLocationPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setError('Location permission not granted');
      setIsLoading(false);
      return;
    }

    const isLocationEnabled = await Location.hasServicesEnabledAsync();
    if (!isLocationEnabled) {
      setError('Location services are not enabled');
      setIsLoading(false);
      return;
    }

    fetchUserLocation();
  };

  const fetchUserLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
      fetchUserAddress(location.coords);
    } catch (error) {
      console.log('Error fetching location:', error);
      setError('Error fetching location');
      setIsLoading(false);
    }
  };

  const fetchUserAddress = async (coords) => {
    try {
      const { latitude, longitude } = coords;
      console.log(coords)
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );

      if (response.data && response.data.address) {
        console.log(response.data);
        const { suburb, road, city} = response.data.address;
        let userAddress = '';
        if (suburb) {
          userAddress += suburb;
        }

        if (road) {
          if (userAddress) {
            userAddress += `, ${road}`;
          } else {
            userAddress += road;
          }
        }

        if (city) {
          if (userAddress) {
            userAddress += `, ${city}`;
          } else {
            userAddress += city;
          }
        }
        setUserAddress(userAddress);
      } else {
        setError('No address found for the given coordinates');
      }
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching address:', error);
      setError('Error fetching address');
      setIsLoading(false);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        userLocation,
        userAddress,
        isLoading,
        error,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
