import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, {useContext} from 'react'
import ScreenHeader from '../components/ScreenHeader';
import { AuthContext } from '../contexts/AuthContext';
import Unauth from '../components/Unauth';

const DeliveryScreen = () => {
  const {isLoggedIn, userData, status,login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <ScreenHeader props={{title:'Delivery'}}/>
    {isLoggedIn ? (
      <Text>Delivery</Text>
    ):(
      <Unauth props={{message: "View and track your scheduled deliveries. By logging in you can access your scheduled deliveries"}}/>
    )}
  </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    // 16,
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
})