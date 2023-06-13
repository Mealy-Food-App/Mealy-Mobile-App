import React,  { useRef } from 'react'
import { View, StyleSheet, StatusBar, Text,Image, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';

const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#F5F5F5', }

const OTPInputView = ({ pinCount, otpCode, handleChange }) => {
  const inputRefs = useRef([]);

  const focusNextInput = (index) => {
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const focusPreviousInput = (index) => {
    if (inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handleCodeChange = (code, index) => {
    const updatedCode = [...otpCode];
    updatedCode[index] = code;
    handleChange(updatedCode.join(''));

    if (code === '' && index > 0) {
      focusPreviousInput(index);
    } else {
      focusNextInput(index);
    }
  };
  return (
    <View style={styles.textInputsContainer}>
      {Array.from({ length: pinCount }).map((_, index) => (
        <TextInput
          key={index}
          style={styles.input}
          maxLength={1}
          keyboardType="number-pad"
          value={otpCode[index] || ''}
          onChangeText={(code) => handleCodeChange(code, index)}
          autoFocus={index === 0}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </View>
  );
};
export default OTPInputView
const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      paddingHorizontal:24,
      width: '100%',
      backgroundColor:COLORS.bgPrimary,
    },
    textInputsContainer:{
      flexDirection:'row',
      gap:24
    },
    resetpwdImage:{
      width:150,
      height:150,
      marginTop: 42,
      alignSelf:'center',
      resizeMode:'contain'
    },
    title:{
      marginTop: 8,
      color:COLORS.primary,
      fontSize: 32,
      fontFamily: 'Poppins_400Regular',
      lineHeight: 48
  },
  input: {
    width: 40,
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor:'#00205C',
    textAlign: 'center',
    fontFamily:'Poppins_400Regular', 
    fontSize:28,
    lineHeight:42,
  },
  subtitle:{
      marginTop: 8,
      color:COLORS.primary,
      fontSize: 12,
      fontFamily: 'Poppins_400Regular',
      lineHeight:18
  },
  formContainer:{
    marginTop:16,
    maxHeight: 560,
  
  },
  label:{
    marginBottom: 8,
    color:COLORS.primary,
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    lineHeight:21,
    marginTop:22,
  },
  inputIconContainer:{
    paddingVertical:10,
    paddingLeft:16
  },
  formerror:{
    color:'#E90808',
  },
  borderStyleBase: {
      width: 30,
      height: 45
  },
  borderStyleHighLighted: {
      borderColor: "#00205C",
  },
  underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
      borderColor: "#00205C",
  },
})