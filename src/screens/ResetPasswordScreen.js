import { StyleSheet,StatusBar, Text, TextInput, View, Button, Image, TouchableOpacity, TouchableHighlight, ScrollView,Alert, Pressable, ToastAndroid} from 'react-native'
import React, { useState, useContext } from 'react'
import { Formik, yupToFormErrors } from 'formik'
import * as yup from 'yup'
import BigButton from '../components/BigButton'
import Checkbox from 'expo-checkbox';
import Spinner from 'react-native-loading-spinner-overlay';
import CustomAlert from '../components/Alert'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigation } from '@react-navigation/native';


const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#F5F5F5', }


export default ResetPasswordScreen = () => {
  const onNavigate = useNavigation();
  const {status,resetPassword} = useContext(AuthContext);
  const [spinner, setSpinner] = useState(false)
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


  const handleResetPassword= async (values) => {
    setSpinner(true);
    await resetPassword(values.email, values.password, values.confirmPassword) ;
    setSpinner(false);
  }


  const userInput = {
    width:'100%',
    borderWidth: 2,
    borderColor: '#E69F14',
    borderRadius: 8,
    fontFamily:'Poppins_400Regular',
    flexDirection: 'row',
    height:48,
  };
  const userInputText = {
    width:274,
    fontFamily:'Poppins_400Regular',    
    paddingHorizontal: 16,
    paddingVertical:10,
    color:COLORS.primary
  };

  const inputIcon = {
    width:21,
    height:22,
    resizeMode:'contain'
  };
  const validButton ={
    color:COLORS.btnPrimary,
    fontFamily: "Poppins_600SemiBold",
    fontSize:14 ,borderColor:"rgba(230, 159, 20, 0.5)",
    title: "Reset Password"
  }
  const invalidButton ={
    color:'rgba(230, 159, 20, 0.5)',
    fontFamily: "Poppins_600SemiBold",
    fontSize:14 ,borderColor:"rgba(230, 159, 20, 0.5)",
    title: "Reset Password"
  }
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const managePasswordVisiblity = () => {
    setPasswordVisibility(!passwordVisibility)
  };
  return (
    <ScrollView style={styles.container}>
    {status !== '' && <CustomAlert props ={{title:'Reset Password', message:status}}/>}
    {/* {s ? (
      <>
        <Text>Welcome, {userData?.fullName}!</Text>
      </>
    ) :( */}
      <>
      <Spinner
        visible={spinner}
        color ={COLORS.btnPrimary}
        textStyle={styles.loadingText}
        overlayColor ='rgba(0, 6, 20, 0.75)'
      />
      <Text style={styles.title}>Enter New Password</Text>
      <Text style= {styles.subtitle}>Kindly provide a new secure password for your account.</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword:'',
        }}
        onSubmit={values => handleResetPassword(values)}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('Email address is invalid')
            .required('Email address required.'),
          password: yup
            .string()
            .required('Password is required.')
            .min(8, 'Your password is too short.')
            .matches(PWD_REGEX,
            "Password must contain one uppercase, one lowercase, one number, one special case character"),
          confirmPassword:yup
            .string()
            .required('Please retype your password.')
            .oneOf([yup.ref('password')], 'Passwords must match')
        })}
      >
         {({ values, handleChange,setFieldValue, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <View style = {styles.formContainer}>
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
              
              <Text style= {styles.label}>New Password</Text>
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
                <TouchableOpacity style={{position:'absolute', top: 12, left: 276, height:40}} onPressIn= {managePasswordVisiblity}>
                  <Image source = {passwordVisibility ? require('../assets/icons/openeye.png') : require('../assets/icons/eye-off.png')} style={{width: 18, height:18, tintColor: COLORS.primary}}/>
                </TouchableOpacity>
              </View>

              {touched.password && errors.password &&
                <Text style ={styles.formerror} >{errors.password}</Text>
              }
              <Text style= {styles.label}> Confirm New Password</Text>
              <View style = {userInput} >
                <View style={styles.inputIconContainer}>
                  <Image source ={require('../assets/icons/pwd.png')} style={inputIcon}/>
                </View>
                <TextInput
                  value = {values.confirmPassword}
                  style = {userInputText}
                  onChangeText={handleChange('confirmPassword')}
                  placeholder='. . . . . .'
                  onBlur={() => setFieldTouched('confirmPassword')}
                  secureTextEntry ={passwordVisibility}
                />
                <TouchableOpacity style={{position:'absolute', top: 12, left: 276, height:40}} onPressIn= {managePasswordVisiblity}>
                  <Image source = {passwordVisibility ? require('../assets/icons/openeye.png') : require('../assets/icons/eye-off.png')} style={{width: 18, height:18, tintColor: COLORS.primary}}/>
                </TouchableOpacity>
              </View>

              {touched.password && errors.password &&
                <Text style ={styles.formerror} >{errors.password}</Text>
              }                           
              <TouchableOpacity disabled = {!isValid} style = {{width:'100%', marginTop:40}} onPressIn={handleSubmit}>
                <BigButton props={isValid ? validButton : invalidButton} />
              </TouchableOpacity>
            </View>
         )}
      </Formik>
    </>
    {/* )} */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingHorizontal:24,
    width: '100%',
    backgroundColor:COLORS.bgPrimary,
  },
  title:{
      marginTop: 8,
      color:COLORS.primary,
      fontSize: 32,
      fontFamily: 'Poppins_400Regular',
      lineHeight: 48
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
    marginTop:8,
    flexDirection: 'row'
  },
  checkboxTextView:{
    width: 280,
    paddingLeft:8,
  },
  checkboxText:{
    textDecorationLine: "none",
    color:COLORS.primary,
    fontFamily: 'Montserrat_400Regular',
    fontSize:12,
    textAlign:'justify',
    lineHeight:20,
  },
  forgotPasswordContainer:{
    width: '100%',
    flexDirection:'row',
    justifyContent:'flex-end',
    marginVertical:2.5,
  },
  forgotPassword: {
    marginRight:0,
    paddingRight:0,
    height:20,
  },
  forgotPasswordText:{
    fontFamily:'Montserrat_400Regular',
    fontSize:12,
    lineHeight:20,
    textAlign:'right',
    color:COLORS.primary,
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