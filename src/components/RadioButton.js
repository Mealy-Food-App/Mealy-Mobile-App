import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RadioButton = ({ options, selectedOption, onSelect }) => {
  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.radioButton}
          onPress={() => onSelect(option)}
        >

          <Text style= {styles.optionText}>{option}</Text>
          <View style={styles.radioButtonIcon}>
            {selectedOption === option && <View style={styles.radioButtonInner} />}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent:'space-between'
  },
  radioButtonIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#00205C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00205C',
  },
  optionText:{
    fontFamily:'Montserrat_400Regular',
    fontSize:14,
    lineHeight:17.07,
    color:"#00205C"
  }
});

export default RadioButton;
