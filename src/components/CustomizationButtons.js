import React, { useState } from 'react';
import { View,  StyleSheet,Text, TouchableOpacity } from 'react-native';

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(data[0].value);
  const handlePress = (value) => {
    onSelect(value);
    setUserOption(value)
  }

  return (
    <View style={styles.buttonContainer}>
      {data.map((item) => {
        return (
          <TouchableOpacity onPress={() => {handlePress(item.value)}}>
            <View style={item.value === userOption ? styles.selected : styles.unselected} >
                <Text style={item.value === userOption ? styles.selectedText : styles.unselectedText}> {item.value}</Text>
            </View>
          </TouchableOpacity>            
        )
      })}
    </View>
  );
}
const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:'row',
        overflow:'visible',
        flexWrap:'wrap',
        gap:8,
        marginVertical:16
    },
    unselected:{
        borderColor:'#E69F14',
        borderWidth:1,
        borderRadius:20,
        paddingHorizontal:12,
        paddingVertical:8
    },
    unselectedText:{
        fontFamily:'Montserrat_500Medium',
        fontSize:12,
        lineHeight:14,
        color:'#00205C'
    },
    selected:{
      borderColor:'#E69F14',
      borderWidth:1,
      borderRadius:20,
      paddingHorizontal:12,
      paddingVertical:8,
      backgroundColor:"#E69F14"
    },
    selectedText:{
        fontFamily:'Montserrat_500Medium',
        fontSize:12,
        lineHeight:14,
        color:'#00205C'
    }
})