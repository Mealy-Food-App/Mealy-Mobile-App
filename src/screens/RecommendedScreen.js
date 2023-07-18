import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const RecommendedScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text>RecommendedScreen</Text>
    </View>
  );
};

export default RecommendedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0, // Remove the padding here if you want to use the safe area padding only
  },
});
