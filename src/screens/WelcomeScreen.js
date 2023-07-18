import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BigButton from '../components/BigButton';

const WelcomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const updateOnboardingStatus = async () => {
    try {
      await AsyncStorage.setItem('onboardingStatus', 'completed');
    } catch (error) {
      // Handle the error if AsyncStorage access fails
    }
  };

  const onPressLoginHandler = () => {
    updateOnboardingStatus();
    navigation.navigate('LogInScreen');
  };

  const onPressSignUpHandler = () => {
    updateOnboardingStatus();
    navigation.navigate('SignUpScreen');
  };

  const onPressGuestHandler = () => {
    updateOnboardingStatus();
    navigation.navigate('MainScreens', { screen: 'BottomTabScreens' });
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>Welcome to Mealy</Text>
      <Text style={styles.subtitle}>Would you like to</Text>
      <TouchableOpacity style={{ width: '100%' }} onPress={onPressLoginHandler}>
        <BigButton
          props={{
            color: '#E69f14',
            borderColor: '#E69f14',
            title: 'Log In',
            fontFamily: 'Poppins_500Medium',
            fontSize: 18,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.alternative}> or </Text>
      <TouchableOpacity style={{ width: '100%' }} onPress={onPressSignUpHandler}>
        <BigButton
          props={{
            color: 'transparent',
            borderColor: '#E69f14',
            title: 'Sign Up',
            fontFamily: 'Poppins_500Medium',
            fontSize: 18,
          }}
        />
      </TouchableOpacity>

      <Text style={styles.alternative}> or </Text>
      <TouchableOpacity onPress={onPressGuestHandler} style={{ height: 48, width: '100%', marginBottom: 276 }}>
        <Text style={styles.guestbtn}> Continue as a guest</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: '#F5F5F5',
  },
  title: {
    marginTop: 128,
    color: '#00205C',
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Poppins_400Regular',
  },
  subtitle: {
    marginTop: 48,
    color: '#00205C',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Poppins_400Regular',
  },
  alternative: {
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#00205C',
  },
  guestbtn: {
    marginTop: 24,
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#00205C',
  },
});

export default WelcomeScreen;
