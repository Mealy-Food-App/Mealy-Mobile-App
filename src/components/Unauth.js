import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#FFFFFF', }



const Unauth = ({props}) => {
    const onNavigate = useNavigation();
    const handlePress = () =>{
        onNavigate.navigate('LogInScreen')
    }
  return (
    <View style={styles.container}>
        <Image source ={require('../assets/images/unauth.png')} style={styles.unauthImage}/>
        <Text style= {styles.subtitle}>{props.message}</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
            <View style={styles.button}>
                <Image source={require("../assets/icons/emailauth.png")} style={styles.unauthIcon}/>
                <Text style= {styles.buttontitle}> Login with Email</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
            <View style={styles.button}>
                <Image source={require("../assets/icons/fb.png")} style={styles.unauthIcon} onPress={handlePress}/>
                <Text style= {styles.buttontitle}> Login with Facebook</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
            <View style={styles.button}>
                <Image source={require("../assets/icons/google.png")} style={styles.unauthIcon} onPress={handlePress}/>
                <Text style= {styles.buttontitle}> Login with Google</Text>
            </View>
        </TouchableOpacity>


    </View>
  )
}

export default Unauth

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff",
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
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        lineHeight:18,
        textAlign:'center'
    },
    unauthImage:{
        width:200,
        height:200,
        marginTop: 42,
        alignSelf:'center',
        resizeMode:'contain' 
    },
    button:{
        borderRadius:8,
        borderWidth:1,
        borderColor:'rgba(0, 32, 92, 0.25)',
        flexDirection:"row",
        width:'100%',
        height:48,
    },
    buttonContainer:{
        marginTop:40,
        borderRadius:8,
        width:'100%',
        height:48,
    },
    unauthIcon:{
        width:24,
        height:24,
        resizeMode:'contain',
        position:'absolute',
        top:12,
        left:16,
        tintColor:"#E69F14"
    },
    buttontitle:{
        color:COLORS.primary,
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 18,
        alignSelf:'center',
        position:'absolute',
        top:12,
        right:100
    }
})