import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, TouchableHighlight, StatusBar, ScrollView, Alert, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
import { Formik, yupToFormErrors } from 'formik'
import * as yup from 'yup'
import BigButton from '../components/BigButton'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext'
import CustomAlert from '../components/Alert'
import Spinner from 'react-native-loading-spinner-overlay';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

const COLORS = { primary: '#00205C', btnPrimary: '#E69F14', bgPrimary: '#FFFFFF', }

const ForgotPasswordScreen = () => {
  const onNavigate = useNavigation();
  const { forgotPassword, status } = useContext(AuthContext);
  const [spinner, setSpinner] = useState(false);
  const insets = useSafeAreaInsets();

  const handleForgotPassword = async (values) => {
    setSpinner(true);
    await forgotPassword(values.email);
    setSpinner(false);
  }

  const userInput = {
    width: '100%',
    borderWidth: 2,
    borderColor: '#E69F14',
    borderRadius: 8,
    fontFamily: 'Poppins_400Regular',
    flexDirection: 'row',
    height: 48,
    color: COLORS.primary
  };
  const userInputText = {
    color: COLORS.primary,
    width: 274,
    fontFamily: 'Poppins_400Regular',
    paddingHorizontal: 16,
    paddingVertical: 10,
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
    title: "Continue"
  }
  const invalidButton = {
    color: 'rgba(230, 159, 20, 0.5)',
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14, borderColor: "rgba(230, 159, 20, 0.5)",
    title: "Continue"
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {status !== '' && <CustomAlert props={{ title: 'Forgot Password', message: status }} />}
      <Spinner
        visible={spinner}
        color={COLORS.btnPrimary}
        textStyle={styles.loadingText}
        overlayColor='rgba(0, 6, 20, 0.75)'
      />
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>Kindly enter your account email to reset your password.</Text>
      <Image source={require('../assets/images/amico.png')} style={styles.resetpwdImage} />
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={values => handleForgotPassword(values)}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('Email address is invalid')
            .required('Email address required.'),
        })}
      >
        {({ values, handleChange, setFieldValue, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Email</Text>
            <View style={userInput}>
              <View style={styles.inputIconContainer}>
                <Image source={require('../assets/icons/email.png')} style={inputIcon} />
              </View>
              <TextInput
                value={values.email}
                style={userInputText}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder='BengtPeace24@gmail.com'
              />
            </View>
            {touched.email && errors.email &&
              <Text style={styles.formerror}>{errors.email}</Text>
            }
            <TouchableOpacity disabled={!isValid} style={{ width: '100%', marginTop: 20 }} onPressIn={handleSubmit}>
              <BigButton props={isValid ? validButton : invalidButton} />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: COLORS.bgPrimary,
  },
  resetpwdImage: {
    width: 200,
    height: 200,
    marginTop: 42,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  title: {
    marginTop: 8,
    color: COLORS.primary,
    fontSize: 32,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 48
  },
  subtitle: {
    marginTop: 8,
    color: COLORS.primary,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 18
  },
  formContainer: {
    marginTop: 16,
    maxHeight: 560,
  },
  label: {
    marginBottom: 8,
    color: COLORS.primary,
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    lineHeight: 21,
    marginTop: 22,
  },
  inputIconContainer: {
    paddingVertical: 10,
    paddingLeft: 16
  },
  formerror: {
    color: '#E90808',
  },
});
