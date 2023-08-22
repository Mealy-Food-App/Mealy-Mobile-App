import { Button, StyleSheet, StatusBar, Text, TextInput, View, Image, TouchableOpacity, TouchableHighlight, ScrollView, Alert, Pressable, ToastAndroid } from 'react-native'
import React, { useState, useContext } from 'react'
import { Formik, yupToFormErrors } from 'formik'
import * as yup from 'yup'
import AsyncStorage from '@react-native-async-storage/async-storage';

import BigButton from '../components/BigButton'
import Checkbox from 'expo-checkbox';
import Spinner from 'react-native-loading-spinner-overlay';
import CustomAlert from '../components/Alert';


import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const COLORS = { primary: '#00205C', btnPrimary: '#E69F14', bgPrimary: '#F5F5F5' }


const SignUpScreen = () => {
  const insets = useSafeAreaInsets();
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const [spinner, setSpinner] = useState(false)
  const onNavigate = useNavigation();
  const { isLoggedIn, register, userData, status } = useContext(AuthContext);

  const handleRegistration = async (values) => {
    setSpinner(true);
    await register(values.username, values.email, values.password);
    setSpinner(false);
  }

  const onPressSignInHandler = () => {
    onNavigate.navigate('LogInScreen')
  };
  const userInput = {
    width: '100%',
    borderWidth: 2,
    borderColor: '#E69F14',
    borderRadius: 8,
    fontFamily: 'Poppins_400Regular',
    flexDirection: 'row',
    height: 48
  };
  const userInputText = {
    width: 274,
    fontFamily: 'Poppins_400Regular',
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: COLORS.primary


  };

  const inputIcon = {
    width: 21,
    height: 22,
    resizeMode: 'contain'
  };
  const validButton = {
    color: COLORS.btnPrimary,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14, borderColor: "rgba(230, 159, 20, 0.5)",
    title: "Sign Up"
  }
  const invalidButton = {
    color: 'rgba(230, 159, 20, 0.5)',
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  }

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [isChecked, setIsChecked] = useState(false)

  const managePasswordVisiblity = () => {
    setPasswordVisibility(!passwordVisibility)
  };
  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
      {status !== '' && <CustomAlert props={{ title: 'Sign In', message: status }} />}
      <Spinner
        visible={spinner}
        color={COLORS.btnPrimary}
        textStyle={styles.loadingText}
        overlayColor='rgba(0, 6, 20, 0.75)'
      />
            <Text style={styles.title}>Sign Up</Text>
      <Text style= {styles.subtitle}>Kindly provide the following details to create an account.</Text>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          agree: false,
        }}
        onSubmit={(values, {resetForm}) => {
          handleRegistration(values)
          // resetForm(
          //   values.username = '',
          //   values.email ='',
          //   values.password = '',
          //   values.agree = false
          // )
        }}
        validationSchema={yup.object().shape({
          username: yup
            .string()
            .required('Full name required.'),
          email: yup
            .string()
            .email('Email address is invalid')
            .required('Email address required.'),
          password: yup
            .string()
            .matches(PWD_REGEX,
            "Password must contain one uppercase, one lowercase, one number, one special case character")
            .min(8, 'Password less than 8 characters.')
            .required('Password is required.'),
          agree: yup
            .boolean()
            .oneOf([true],  'You must accept the terms and conditions')
        })}
      >
        {({ values, handleChange,setFieldValue, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style = {styles.formContainer}>
            <Text style= {styles.label}>Full Name</Text>
            <View style = {userInput}>
                <View style={styles.inputIconContainer}>
                  <Image source={require('../assets/icons/name.png')} style={inputIcon}/>
                </View>
                <TextInput
                  value = {values.username}
                  style = {userInputText}
                  onChangeText={handleChange('username')}
                  onBlur={() => setFieldTouched('username')}
                  placeholder='Bengt Peace'
                  />
              </View>

              {touched.username && errors.username &&
                <Text style = {styles.formerror}>{errors.username}</Text>
              }
              <Text style= {styles.label}>Email</Text>
              <View style = {userInput}>
                <View style={styles.inputIconContainer}>
                  <Image source={require('../assets/icons/email.png')} style={inputIcon}/>
                </View>
                <TextInput
                  value = {values.email}
                  style = {userInputText}
                  onChangeText={handleChange('email')}
                  onBlur = {() => setFieldTouched('email')}
                  placeholder='BengtPeace24@gmail.com'
                />
              </View>

              {touched.email && errors.email &&
                <Text style = {styles.formerror}>{errors.email}</Text>
              }
              <Text style= {styles.label}>Password</Text>
              <View style = {userInput} >
                <View style={styles.inputIconContainer}>
                  <Image source ={require('../assets/icons/pwd.png')} style={inputIcon}/>
                </View>
                <TextInput
                  value = {values.password}
                  style = {userInputText}
                  onChangeText={handleChange('password')}
                  placeholder='. . . . . .'
                  onBlur={() => setFieldTouched('password')}
                  secureTextEntry ={passwordVisibility}
                />
                <TouchableOpacity style={{position:'absolute', top: 12, right:16, height:40}} onPressIn= {managePasswordVisiblity}>
                  <Image source = {passwordVisibility ? require('../assets/icons/openeye.png') : require('../assets/icons/eye-off.png')} style={{width: 18, height:18, tintColor: COLORS.primary}}/>
                </TouchableOpacity>
              </View>

              {touched.password && errors.password &&
                <Text style ={styles.formerror} >{errors.password}</Text>
              }
              <View style={styles.checkboxContainer} >
                <Checkbox
                          style={styles.checkbox}
                          value={values.agree}
                          onBlur={() => setFieldTouched('agree')}
                          onValueChange={(value) => setFieldValue('agree', value)}
                          color={isChecked ? COLORS.primary : COLORS.primary}
                />
                <View style={styles.checkboxTextView}>
                    <Text numberOfLines ={2} style={styles.checkboxText }>
                      By clicking on this you have agreed to the 
                    </Text>
                    <View style={{flexDirection:'row'}}>
                      <Pressable>
                      <Text style ={styles.checkboxLink}>Terms and Conditions</Text>
                      </Pressable>
                      <Text style={styles.checkboxLinkand}>
                        &nbsp;
                        and
                        &nbsp;
                      </Text>
                      <Pressable >
                        <Text style ={styles.checkboxLink}>Privacy Policy.</Text>
                      </Pressable>
                    </View>
                </View>
              </View>
              {touched.agree && errors.agree &&
                <Text style = {styles.formerror}>{errors.agree}</Text>
              }

              <TouchableOpacity disabled = {!isValid} style = {{width:'100%'}} onPressIn={handleSubmit}>
                <BigButton props={isValid ? validButton : invalidButton} />
              </TouchableOpacity>
            </View>
        )}

      </Formik>
      <View style={styles.horizontalDivider}>
        <View style={styles.horizontal}></View>
        <Text style={styles.horizontalText}>or</Text>
        <View style= {styles.horizontal}></View>
      </View>
      <View style = {styles.footerBox}>
        <Text style={styles.footerText}>Continue Using</Text>
        <View style = {styles.authSocial}>
          <TouchableOpacity style= {styles.authSocialImage}>
              <Image style={{width:48, height: 48}} source={require('../assets/icons/fb.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.authSocialImage}>
            <Image style={{width:48, height: 48}} source={require('../assets/icons/google.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center', marginBottom:40}}>
          <Text style = {styles.footerText} >
            Already have an Account?
          </Text>
          <TouchableHighlight onPressIn={onPressSignInHandler} >
            <Text style = {styles.footerTextBold}>
                &nbsp;
               Sign In
            </Text>
            </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: COLORS.bgPrimary,
  },
  title:{
      marginTop: 8,
      color:COLORS.primary,
      fontSize: 32,
      fontFamily: 'Poppins_400Regular',
      lineHeight: 48
  },
  loadingText:{
    color:COLORS.btnPrimary,
    fontFamily: 'Poppins_400Regular',
    fontSize:18,
    textAlign:'justify',
    lineHeight:20
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
    marginTop:16
  },
  userInput:{
    paddingHorizontal:10,
    borderWidth:2,
    borderColor:COLORS.btnPrimary,
    height: 40,
  },
  inputIconContainer:{
    paddingVertical:10,
    paddingLeft:16
  },
  formerror:{
    color:'#E90808',
  },
  horizontalDivider:{
    flexDirection:'row',
    width: '100%',
    paddingHorizontal:2
  },
  horizontalText:{
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color:COLORS.primary,
    paddingHorizontal:9,
    width: '16%',
    textAlign:'center'
  },
  horizontal:{
    justifySelf:'center',
    alignSelf:'center',
    width: '41.5%',
    height: 1,
    backgroundColor:COLORS.primary,
  },
  checkboxContainer:{
    width: '100%',
    marginTop:16,
    marginBottom:8,
    flexDirection: 'row'
  },
  checkboxTextView:{
    width: 280,
    paddingLeft:8,
  },
  checkboxText:{
    textDecorationLine: "none",
    color:COLORS.primary,
    fontFamily: 'Poppins_400Regular',
    fontSize:12,
    textAlign:'justify',
    lineHeight:18
  },
  checkboxLinkand:{
    textDecorationLine: "none",
    color:COLORS.primary,
    fontFamily: 'Poppins_400Regular',
    fontSize:12,
    textAlign:'auto',
    lineHeight:24
  },
  checkboxLink:{
    lineHeight:24,
    fontFamily: 'Poppins_500Medium',
    fontSize:12,
    textDecorationStyle:'solid',
    textDecorationLine:'underline',
    color:COLORS.primary,
  },
  checkboxTextError:{
    textDecorationLine: "none",
    width: 280,
    paddingHorizontal:8,
    color:'red',
    fontFamily: 'Poppins_400Regular',
    fontSize:12,

  },
  checkbox: {
    margin: 8,
  },
  footerBox:{
    marginTop:24,
    marginBottom:8
  },
  footerText:{
    lineHeight:24,
    fontFamily:'Poppins_400Regular',
    fontSize:16,
    color:COLORS.primary,
    textAlign:'center'
  },
  authSocial:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:16,
    width:'100%',
    paddingVertical:12,
    paddingHorizontal:86,
    marginBottom:8,
  },
  footerTextBold:{
    lineHeight:24,
    fontFamily:'Poppins_500Medium',
    fontSize:16,
    color:COLORS.primary,
    textAlign:'center',
  },
})