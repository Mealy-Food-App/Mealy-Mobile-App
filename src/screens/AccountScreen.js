import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React, {useContext} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import Unauth from '../components/Unauth';

const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#FFFFFF', }

import LeftNavHeader from '../components/LeftNavHeader'

const AccountScreen = () => {
  const {isLoggedIn, userData, status,login} = useContext(AuthContext);

  const onNavigate = useNavigation();
  const handlePress = (screenName) =>{
      onNavigate.navigate(screenName)
  }
  return (
    <View> 
      {isLoggedIn ? (
        <View style={styles.container}>
          <LeftNavHeader props={{title:''}}/>
          <View style={styles.avatarText}>
            <Image source={require('../assets/images/user.png')} style={styles.avatar}/>
            <Text style={styles.pagetitle}>My Account</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={(screenName)=>handlePress(screenName='ProfileScreen')}>
                <View style={styles.button}>
                    <Image source={require("../assets/icons/user.png")} style={styles.unauthIcon} />
                    <Text style= {styles.buttontitle}> Profile Details</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={(screenName)=>handlePress(screenName='NotificationScreen')}>
                <View style={styles.button}>
                    <Image source={require("../assets/icons/notification2.png")} style={styles.unauthIcon}/>
                    <Text style= {styles.buttontitle}> Notifications </Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={(screenName)=>handlePress(screenName='PreferenceScreen')}>
                <View style={styles.button}>
                    <Image source={require("../assets/icons/bowl.png")} style={styles.unauthIcon} />
                    <Text style= {styles.buttontitle}> Dietary Preference</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={(screenName)=>handlePress(screenName='RecommendationScreen')}>
                <View style={styles.button}>
                    <Image source={require("../assets/icons/location.png")} style={styles.unauthIcon} />
                    <Text style= {styles.buttontitle}>Recommended for you</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={(screenName)=>handlePress(screenName='DealsScreen')}>
                <View style={styles.button}>
                    <Image source={require("../assets/icons/lov.png")} style={styles.unauthIcon}/>
                    <Text style= {styles.buttontitle}> Deals for you </Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={(screenName)=>handlePress(screenName='ChatScreen')}>
                <View style={styles.button}>
                    <Image source={require("../assets/icons/chat.png")} style={styles.unauthIcon}/>
                    <Text style= {styles.buttontitle}> Live Chat</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={(screenName)=>handlePress(screenName='PaymentScreen')}>
                <View style={styles.button}>
                    <Image source={require("../assets/icons/payment.png")} style={styles.unauthIcon}/>
                    <Text style= {styles.buttontitle}> Payment Information</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={(screenName)=>handlePress(screenName='SettingsScreen')}>
                <View style={styles.button}>
                    <Image source={require("../assets/icons/setting.png")} style={styles.unauthIcon}/>
                    <Text style= {styles.buttontitle}> Settings</Text>
                </View>
          </TouchableOpacity>
        </View>
      ):(
        <View style={styles.othercontainer}> 
          <LeftNavHeader props={{title:''}}/>
          <Unauth props={{message: "View your account details. By logging in you can access your account details"}}/>
        </View>
      )}
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container:{
    height:"100%",
    width:"100%",
    
    paddingHorizontal:24,
  },
  othercontainer:{
    height:"100%",
    width:"100%",
    
    paddingHorizontal:24,
    backgroundColor:"#ffffff",
  },
  avatarText:{
    justifyContent:'flex-start',
    flexDirection:'row',
    gap:16
  },
  avatar:{
    width:32,
    height:32,
    borderRadius:32
  },
  pagetitle:{
    fontFamily:'Poppins_500Medium',
    fontSize:16,
    lineHeight:32,
    color:"#00205C"
  },
  button:{
    borderRadius:8,
    borderWidth:1,
    borderColor:'#E69F14',
    flexDirection:"row",
    width:'100%',
    height:40,
    justifyContent:'flex-start',
    
},
buttonContainer:{
    marginTop:30,
    borderRadius:8,
    width:'100%',
    height:40,
},
unauthIcon:{
    width:24,
    height:24,
    resizeMode:'contain',
    alignSelf:'center',
    marginLeft:8,
    tintColor:'#00205C'
},
buttontitle:{
    color:COLORS.primary,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 18,
    alignSelf:'center',
    marginLeft:12
}
})