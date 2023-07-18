import React, { useState, useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, StatusBar, Text, Image, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import BigButton from '../components/BigButton'
import * as yup from 'yup'
import { Formik, yupToFormErrors } from 'formik'
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../contexts/AuthContext'
import CustomAlert from '../components/Alert';
import OTPInputView from '../components/OTPInputView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const COLORS = { primary: '#00205C', btnPrimary: '#E69F14', bgPrimary: '#F5F5F5' }


const ConfirmTokenScreen = () => {
  const { confirmToken, status, } = useContext(AuthContext);
  const onNavigate = useNavigation();
  const [spinner, setSpinner] = useState(false)
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let intervalId;

    if (resendDisabled) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [resendDisabled]);

  const handleConfirmToken = async (token) => {
    setSpinner(true);
    console.log(token)
    await confirmToken(token)
    setSpinner(false);
  }
  const handleResend = () => {
    // Perform email resend logic here
    setResendDisabled(true);
    setCountdown(30);
    // Start countdown timer
    setTimeout(() => {
      setResendDisabled(false);
    }, 30000);
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

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* {status !== '' && <CustomAlert props ={{title:'Forgot Password', message:status}}/>} */}
      <Spinner
        visible={spinner}
        color={COLORS.btnPrimary}
        overlayColor='rgba(0, 6, 20, 0.75)'
      />
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>Kindly enter the confirmation code sent to your email.</Text>
      <Image source={require('../assets/images/amico.png')} style={styles.resetpwdImage} />
      <Formik
        initialValues={{
          otpCode: ''
        }}
        onSubmit={values => handleConfirmToken(values.otpCode)}
        validationSchema={yup.object().shape({
          otpCode: yup
            .string()
            .length(5, 'OTP code must be 5 digits')
            .required('Enter verfication code')
        })}
      >
        {({ values, handleChange, setFieldValue, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Confirmation Code</Text>
            <View style={styles.userInput}>
              <OTPInputView
                value={values.otpCode}
                pinCount={5}
                otpCode={values.otpCode}
                handleChange={handleChange('otpCode')}
                onBlur={() => setFieldTouched('otpCode')}
              />
            </View>
            {touched.otpCode && errors.otpCode &&
              <Text style={styles.formerror} >{errors.otpCode}</Text>
            }
            <TouchableOpacity disabled={!isValid} style={{ width: '100%', marginTop: 40 }} onPressIn={handleSubmit}>
              <BigButton props={isValid ? validButton : invalidButton} />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableHighlight onPress={handleResend} disabled={resendDisabled}>
          {resendDisabled ? <Text> Resend Code in {countdown} seconds</Text> : <Text> Resend Code</Text>}
        </TouchableHighlight>
      </View>

    </View>
  );
};

export default ConfirmTokenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: COLORS.bgPrimary,
  },
  textInputsContainer: {
    flexDirection: 'row',
    gap: 24
  },
  resetpwdImage: {
    width: 150,
    height: 150,
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
  input: {
    width: 40,
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#00205C',
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    fontSize: 28,
    lineHeight: 42,
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
});
