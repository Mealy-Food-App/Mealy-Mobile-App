import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PreferenceScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text>PreferenceScreen</Text>
    </View>
  )
}

export default PreferenceScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
