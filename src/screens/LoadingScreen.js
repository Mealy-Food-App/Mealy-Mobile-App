import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const LoadingScreen = () => {
  const animation1 = useRef(new Animated.Value(0.5)).current;
  const animation2 = useRef(new Animated.Value(0.5)).current;
  const animation3 = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    startAnimation(animation1);
    startAnimation(animation2, 1000);
    startAnimation(animation3, 2000);
  }, []);

  const startAnimation = (animation, delay = 0) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      { delay: delay }
    ).start();
  };

  const circle1Style = {
    opacity: animation1,
    transform: [
      {
        scale: animation1.interpolate({
          inputRange: [0.5, 1],
          outputRange: [1, 0.7],
        }),
      },
    ],
  };

  const circle2Style = {
    opacity: animation2,
    transform: [
      {
        scale: animation2.interpolate({
          inputRange: [0.5, 1],
          outputRange: [1, 0.5],
        }),
      },
    ],
  };

  const circle3Style = {
    opacity: animation3,
    transform: [
      {
        scale: animation3.interpolate({
          inputRange: [0.5, 1],
          outputRange: [1, 0.5],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle1, circle1Style]} />
      <Animated.View style={[styles.circle2, circle2Style]} />
      <Animated.View style={[styles.circle3, circle3Style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
  },
  circle1: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E69F14',
    margin: 2,
  },
  circle2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#B8B8B8',
    margin: 2,
  },
  circle3: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00205C',
    margin: 2,
  },
});

export default LoadingScreen;
