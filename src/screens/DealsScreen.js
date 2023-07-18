import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const DealsScreen = () => {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text>DealsScreen</Text>
    </View>
  )
}

export default DealsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
