import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#FFFFFF', }



const Empty = ({props}) => {
    const onNavigate = useNavigation();
    const handlePress = () =>{
        onNavigate.navigate('Home')
    }
  return (
    <View style={styles.container}>
        <Image source ={require('../assets/images/empty_cart.png')} style={styles.unauthImage}/>
        <Text style = {styles.whoops}>Whoops... Nothing in here!</Text>
        <Text style= {styles.subtitle}>{props.message}</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
            <View style={styles.button}>
                <Text style= {styles.buttontitle}>Go to catalogue</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Empty

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
    whoops:{
        marginTop: 8,
        color:COLORS.primary,
        fontSize: 22,
        fontFamily: 'Poppins_700Bold',
        lineHeight: 28,
        textAlign:'center',
        marginBottom:20
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
        backgroundColor:'#F2C469',
        borderColor:'#F2C469',
        flexDirection:"row",
        width:'100%',
        height:48,
        justifyContent:'center'
    },
    buttonContainer:{
        marginTop:50,
        borderRadius:8,
        marginHorizontal:48,
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
        textAlign:'center'
    }
})