import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Formik } from 'formik';

const AddressFormPopup = ({ isVisible, onClose, onSubmit }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Address</Text>
        <Formik
          initialValues={{
            address: '',
            unitFloor: '',
            houseNoOffice: '',
          }}
          onSubmit={(values) => {
            onSubmit(values);
            onClose();
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Address"
                value={values.address}
                onChangeText={handleChange('address')}
              />
              <TextInput
                style={styles.input}
                placeholder="Unit/Floor"
                value={values.unitFloor}
                onChangeText={handleChange('unitFloor')}
              />
              <TextInput
                style={styles.input}
                placeholder="House No/Office"
                value={values.houseNoOffice}
                onChangeText={handleChange('houseNoOffice')}
              />
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onClose}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#E69F14',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddressFormPopup;
