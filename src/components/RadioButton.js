import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const RadioButton = ({ data, onSelect }) => {
  const [userOption, setUserOption] = useState('');
  useEffect(() => {
    const defaultOption = data.find(option => option.value.priceOption === 0);
    if (defaultOption) {
      onSelect(defaultOption.value);
      handleSelect(defaultOption.value);
    }
  }, []);
  const handleSelect = (value) => {
    const defaultOption = data.find(option => option.value.priceOption === 0);
    if (defaultOption) {
      if (value != userOption && value != defaultOption.value)
      {
        onSelect(value);
        setUserOption(value)
      } else {
        onSelect(defaultOption.value);
        setUserOption(defaultOption.value)
      }
    }else {
      if (value != userOption)
      {
        onSelect(value);
        setUserOption(value)
      } else {
        onSelect('');
        setUserOption('')
      }
    }

  }
  return (
    <View>
      {data.map((option) => (
        <TouchableOpacity
          key={option.value._id}
          style={styles.radioButton}
          onPress={() => handleSelect(option.value)}
        >
          <View style={styles.opt}>
            <Text style= {styles.optionText}>{option.value.nameOption}</Text>
            <Text style= {styles.optionPrice}>{option.value.priceOption}</Text>
          </View>
          <View style={styles.radioButtonIcon}>
            {userOption._id === option.value._id &&
              <View style={styles.radioButtonInner}/> 
            }
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: 10,
    marginHorizontal:8
  },
  radioButtonIcon: {
    width: 22,
    height: 22,
    borderRadius:11,
    borderWidth:2,
    borderColor:"#00205c",
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButtonInner: {
    width: 14,
    height: 14,
    borderRadius:8,
    tintColor:"#00205c",
    backgroundColor:'#00205c'
  },
  radioButtonInneradd: {
    width: 14,
    height: 14,
    borderRadius:8,
    tintColor:"transparent",
    backgroundColor:'#ffffff'
  },
  opt:{
    width:'50%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  optionText:{
    textAlign:'left',
    justifyContent:'flex-start',
    fontFamily:'Montserrat_500Medium',
    fontSize:12,
    lineHeight:14,
    color:"#E69F14",
    
  },
  optionPrice:{
    fontFamily:'Montserrat_500Medium',
    justifyContent:'flex-start',
    fontSize:12,
    lineHeight:14,
    color:"#00205C",
    marginLeft:40
  }
});

export default RadioButton;
