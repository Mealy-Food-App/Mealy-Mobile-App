import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const ScreenHeader = ({props}) => {
  const onNavigate = useNavigation();
  
  const onNavigationHome = () => {
    onNavigate.navigate("Home");
}
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.arrowLeftContainer} onPress={() => onNavigationHome()}>
        <Image source={require('../assets/icons/arrow-left.png')} style={styles.arrowLeft}/>
      </TouchableOpacity>
      <Text style={styles.headerText}>
        {props.title}
      </Text>
    </View>
  )
}

export default ScreenHeader

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        gap:25,
        height:42,
        marginVertical:16,
    },
    arrowLeft:{
        width:24,
        height:24,
        borderRadius:24,
    },
    arrowLeftContainer:{
      width:48,
      alignContent:'center',
      justifyContent:'center'
    },
    headerText:{
        fontFamily:'Poppins_400Regular',
        fontSize:28,
        lineHeight:42,
        color:'#00205C',
    }
})