import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useContext } from 'react'
import ScreenHeader from '../components/ScreenHeader';
import { AuthContext } from '../contexts/AuthContext';
import Unauth from '../components/Unauth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DeliveryScreen = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScreenHeader props={{ title: 'Delivery' }} />
      {isLoggedIn ? (
        <Text>Delivery</Text>
      ) : (
        <Unauth props={{ message: "View and track your scheduled deliveries. By logging in you can access your scheduled deliveries" }} />
      )}
    </View>
  )
}

export default DeliveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
});
