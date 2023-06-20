import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TopDealItem = ({ data, marginLeft, marginRight, onPressItem, backgroundColor }) => {
  return (
    <View style={[styles.topDeal, { marginLeft: marginLeft, marginRight: marginRight, backgroundColor:backgroundColor }]}>
      <View style={styles.textContent}>
        <Text style={styles.textContent1}>{data.gift}</Text>
        <View style={styles.textContent2}>
          <Text style={styles.restaurant}>{data.restaurant}</Text>
          <Text style={styles.offerType}>{data.offerType}</Text>
        </View>
      </View>
      <View style={styles.imageContent}>
        <Image source={data.image} style={{ width: 86, height: 94, borderRadius: 10, resizeMode: 'cover' }} />
      </View>
    </View>
  );
};

export default TopDealItem;

const styles = StyleSheet.create({
  topDeal: {
    width: 214,
    height: 112,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 9,
  },
  textContent: {
    height: 94,
    width: 128,
    flexDirection: 'column',
    flex: 1,
  },
  imageContent: {
    width: 86,
    height: 94,
    flexDirection: 'column',
  },
  textContent1: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#00205C',
    flex: 0.5,
  },
  textContent2: {
    flex: 0.5,
    justifyContent: 'space-between',
  },
  restaurant: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 18,
    color: 'rgba(0, 32, 92, 0.8)',
  },
  offerType: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 21,
    color: 'rgba(0, 32, 92, 0.8)',
  },
});