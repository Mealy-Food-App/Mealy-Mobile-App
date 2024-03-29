import { StyleSheet, Text, View, Image, TextInput,KeyboardAvoidingView, Pressable } from 'react-native';
import React, { useContext, useState, useRef } from 'react';
import AccountHeader from '../components/AccountHeader';
import { AuthContext } from '../contexts/AuthContext';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const { isLoggedIn, userData, status, updateUser } = useContext(AuthContext);

  const [isPhoneEditable, setPhoneIsEditable] = useState(false);
  const [isNameEditable, setNameIsEditable] = useState(false);
  const [isAddressEditable, setAddressIsEditable] = useState(false);
  const inputPhoneRef = useRef(null);
  const inputNameRef = useRef(null);
  const inputAddressRef = useRef(null);

  // Make fields editable
  const handleEditPhonePress = () => {
    setPhoneIsEditable(true);
  };
  const handleEditNamePress = () => {
    setNameIsEditable(true);
  };
  const handleEditAddressPress = () => {
    setAddressIsEditable(true);
  };

  // Update user
  const handleSavePhonePress = async (value) => {
    console.log(value)
    await updateUser(value);
    setPhoneIsEditable(false);
  };
  const handleSaveNamePress = async (value) => {
    await updateUser(value);
    setNameIsEditable(false);
  };
  const handleSaveAddressPress = async (value) => {
    console.log(value);
    await updateUser(value);
    setAddressIsEditable(false);
  };

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <AccountHeader props={{ title: 'Profile' }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle = {styles.inner} showsVerticalScrollIndicator = {false}>
          <Image source={require('../assets/images/user.png')} style={styles.avatar} />
            <Formik
              initialValues={{
                fullName: userData.fullName,
              }}
              onSubmit={handleSaveNamePress}
              validationSchema={yup.object().shape({
                fullName: yup.string(),
              })}
            >
              {({ values, handleChange, handleSubmit, isValid }) => (
                  <View style={styles.NameInputSave}>
                    <View>
                      <TextInput
                        ref={inputNameRef}
                        value={values.fullName}
                        onChangeText={handleChange('fullName')}
                        editable={isNameEditable}
                        style={isNameEditable ? styles.avatarTextEditable : styles.avatarText}
                        caretColor="#00205c"
                      />
                    </View>
                    <>
                      {!isNameEditable ? (
                        <Pressable onPress={handleEditNamePress} style={styles.editName}>
                          <Image source={require('../assets/icons/edit.png')} style={styles.editNameIcon} />
                        </Pressable>
                      ) : (
                        <Pressable onPress={handleSubmit} disabled={!isValid}>
                          <View style={!isValid ? styles.inValidSaveName : styles.saveName}>
                            <Text style={styles.saveText}>Save</Text>
                          </View>
                        </Pressable>
                      )}
                    </>
                  </View>
              )}
            </Formik>
          <Text style={styles.profileEmail}>{userData.email}</Text>

          <View style={styles.profileDetails}>
            <Text style={styles.profileTitle}>Phone Number</Text>
            <Formik
              initialValues={{
                phoneNumber: userData.phoneNumber || 'Not set',
              }}
              onSubmit={handleSavePhonePress}
              validationSchema={yup.object().shape({
                phoneNumber: yup.string().matches(/^\d{10}$/, 'Please enter a valid 10-digit phone number'),
              })}
            >
              {({ values, handleChange, handleSubmit, isValid }) => (
                <KeyboardAvoidingView 
                  style={{ flex: 1 }}
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                  <View style={styles.profileContentContainer}>
                    <View style={styles.InputSave}>
                      <View style={styles.inputContainer}>
                        <TextInput
                          ref={inputPhoneRef}
                          value={values.phoneNumber}
                          onChangeText={handleChange('phoneNumber')}
                          editable={isPhoneEditable}
                          style={styles.profileContent}
                          caretColor="#00205c"
                          placeholder='0700000000'
                        />
                      </View>
                      <>
                        {!isPhoneEditable ? (
                          <Pressable onPress={handleEditPhonePress}>
                            <View style={styles.edit}>
                              <Text style={styles.editText}>Edit</Text>
                              <Image source={require('../assets/icons/edit.png')} style={styles.editIcon} />
                            </View>
                          </Pressable>
                        ) : (
                          <Pressable onPress={handleSubmit} disabled={!isValid}>
                            <View style={!isValid ? styles.inValidSave : styles.save}>
                              <Text style={styles.saveText}>Save</Text>
                            </View>
                          </Pressable>
                        )}
                      </>
                    </View>
                  </View>
                </KeyboardAvoidingView>
              )}
            </Formik>
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.profileTitle}>Delivery Address</Text>
            <Formik
              initialValues={{
                deliveryAddress: userData.deliveryAddress || 'Not set',
              }}
              onSubmit={handleSaveAddressPress}
              validationSchema={yup.object().shape({
                deliveryAddress: yup.string(),
              })}
            >
              {({ values, handleChange, handleSubmit, isValid }) => (
                <View style={styles.profileContentContainer}>
                  <View style={styles.InputSave}>
                    <View style={styles.inputContainer}>
                      <TextInput
                        ref={inputAddressRef}
                        value={values.deliveryAddress}
                        onChangeText={handleChange('deliveryAddress')}
                        editable={isAddressEditable}
                        style={styles.profileContent}
                        caretColor="#00205c"
                        placeholder='location address, Apt./offce/floor'
                      />
                    </View>
                    <>
                      {!isAddressEditable ? (
                        <Pressable onPress={handleEditAddressPress}>
                          <View style={styles.edit}>
                            <Text style={styles.editText}>Edit</Text>
                            <Image source={require('../assets/icons/edit.png')} style={styles.editIcon} />
                          </View>
                        </Pressable>
                      ) : (
                        <Pressable onPress={handleSubmit} disabled={!isValid}>
                          <View style={!isValid ? styles.inValidSave : styles.save}>
                            <Text style={styles.saveText}>Save</Text>
                          </View>
                        </Pressable>
                      )}
                    </>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 24,
  },
  inner:{
    paddingVertical: 8,
  },
  avatar: {
    marginTop: 16,
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',
  },
  avatarText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 28,
    lineHeight: 42,
    color: '#00205C',
    textAlign: 'center',
    marginVertical: 18,
  },
  avatarTextEditable: {
    paddingVertical: 4,
    paddingHorizontal:16,
    borderWidth: 1,
    borderRadius:8,
    flex:0.8,
    borderColor: 'rgba(0, 32, 92, 0.3)',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    lineHeight: 42,
    color: '#00205C',
    textAlign: 'center',
    marginVertical: 18,
    marginRight:16,
    backgroundColor:"#fff"
  },
  profileEmail: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 16,
    color: 'rgba(0, 32, 92, 0.6)',
    textAlign: 'center',
  },
  profileDetails: {
    height: 104,
    padding: 16,
    justifyContent: 'center',
    marginVertical: 16,
    elevation: 2,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  profileTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    lineHeight: 32,
    color: 'rgba(0, 32, 92, 0.9)',
  },
  profileContent: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 18,
    color: 'rgba(0, 32, 92, 0.6)',
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0, 32, 92, 0.025)',
    marginRight: 4,
    flex: 0.8,
    width: 220,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  profileContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputSave: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    width: '100%',
    borderColor: 'rgba(0, 32, 92, 0.6)',
    paddingVertical: 4,
    height: 50,
  },
  NameInputSave: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderColor: 'rgba(0, 32, 92, 0.6)',
  },
  edit: {
    borderColor: 'rgba(0, 32, 92, 0.3)',
    borderWidth: 1,
    paddingHorizontal: 8,
    height: 28,
    width: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    flexDirection: 'row',
  },
  editName: {
    borderColor: 'rgba(0, 32, 92, 0.3)',
    borderWidth: 1,
    padding: 8,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    alignSelf: 'center',
    marginLeft: 8,
  },
  editNameIcon: {
    height: 14,
    width: 14,
    tintColor: 'rgba(0, 32, 92, 0.6)',
    alignSelf: 'center',
  },
  editIcon: {
    height: 14,
    width: 14,
    marginLeft: 6,
    tintColor: 'rgba(0, 32, 92, 0.6)',
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
  editText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 16,
    color: 'rgba(0, 32, 92, 0.6)',
    alignSelf: 'center',
  },
  inValidSave: {
    borderColor: '#F8E2B4',
    borderWidth: 1,
    paddingHorizontal: 8,
    height: 28,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: '#F8E2B4',
  },
  save: {
    borderColor: '#E69f14',
    borderWidth: 1,
    paddingHorizontal: 8,
    height: 28,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: '#E69f14',
  },
  inValidSaveName: {
    borderColor: '#F8E2B4',
    borderWidth: 1,
    paddingHorizontal: 8,
    height: 28,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: '#F8E2B4',
  },
  saveName: {
    borderColor: '#E69f14',
    borderWidth: 1,
    paddingHorizontal: 8,
    height: 28,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: '#E69f14',
  },
  saveText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 16,
    color: '#00205c',
    alignSelf: 'center',
  },
  formerror: {
    color: '#E90808',
    alignSelf: 'flex-start',
  },
});
