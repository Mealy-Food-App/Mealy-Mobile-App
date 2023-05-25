import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name = "WelcomeScreen" component={WelcomeScreen}/>
    </Stack.Navigator>
  )
}

export default StackScreens