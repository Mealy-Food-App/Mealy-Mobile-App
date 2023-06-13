import React, { createContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import * as Location from "expo-location";

const LocationContext = createContext({
  location: undefined,
  refresh: () => {},
  error: "",
  loading: false,
});

const LocationProvider = (props) => {
  const [location, setLocation] = useState();
  const [error, setError] = useState("");
  const [perms, setPerms] = useState();
  const [loading, setLoading] = useState(false);

  const checkPerms = async () => {
    if (perms && perms.status === "granted") return;

    const permsResponse = await Location.requestPermissionsAsync();
    setPerms(permsResponse);

    if (permsResponse.status !== "granted") {
      setError("Permission to access location was denied");
    }
  };

  const refresh = async () => {
    try {
      setLoading(true);
      checkPerms();
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const locationContextValue = { location, refresh, error, loading };

  return <LocationContext.Provider value={locationContextValue} {...props} />;
};

const useLocation = () => React.useContext(LocationContext);

export { LocationProvider, useLocation };