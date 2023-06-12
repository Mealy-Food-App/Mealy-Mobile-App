import {View, StyleSheet, Button, Alert} from 'react-native';

const CustomAlert = ({props}) =>
Alert.alert("props.title", props.message, [
  {text: 'OK', onPress: () => console.log('OK Pressed')},
]);
export default CustomAlert