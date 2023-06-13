import { View, Text, TouchableOpacity,StatusBar, Image, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import CustomAlert from '../components/Alert';

const LeftDrawerContent = ({ navigation }) => {
  const {isLoggedIn,userData,logout, status} = useContext(AuthContext);
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  const handleLogout = async() =>{
    logout();
  }

  return (
    <View style = {styles.drawer}>
      <View style={styles.header}>
        <Image style = {styles.profileImage} source={require('../assets/images/user.png')}/>
        {isLoggedIn === true  &&  userData !== null  ? (
          <Text style = {styles.profileName}>{userData.fullName.split(' ')[0].charAt(0).toUpperCase() + userData.fullName.split(' ')[0].slice(1)}</Text>):(
          <Text style = {styles.profileName}>Hello </Text>
        )}
      </View>

      <View style={styles.menu}>
      {!isLoggedIn && status !== '' && <CustomAlert props ={{title:'Logout', message:status}}/>}
          <TouchableOpacity style= {styles.account} onPress={() => navigateToScreen('AccountScreen')}>
            <View style={styles.accountContainer}>
              <Image source={require('../assets/icons/user.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>My Account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.button} onPress={() => navigateToScreen('CartScreen')}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/icons/cartdrawer.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>My Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.button} onPress={() => navigateToScreen('HistoryScreen')}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/icons/historydrawer.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.button} onPress={() => navigateToScreen('SettingsScreen')}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/icons/settings.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.button} onPress={() => navigateToScreen('HelpScreen')}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/icons/help.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>Help</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.button} onPress={() => navigateToScreen('AboutScreen')}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/icons/help.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>About</Text>
            </View>
          </TouchableOpacity>
      </View>
      {isLoggedIn === true  &&  userData !== null  ? (
      <TouchableOpacity style= {styles.buttonLogin} onPress={handleLogout} >
        <Text style ={styles.containerText}>Logout</Text>
      </TouchableOpacity>
      ):(
        <TouchableOpacity style= {styles.buttonLogin} onPress={() => navigateToScreen('LogInScreen')} >
        <Text style ={styles.containerText}>Log In</Text>
        </TouchableOpacity>
      )}



    </View>
  );
}
export default LeftDrawerContent;

const styles = StyleSheet.create({
  drawer:{
    paddingTop: StatusBar.currentHeight,
    height: '100%',
    width:'100%',
    backgroundColor:'#F0C572',
  },
  header:{
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingHorizontal:24,
    paddingVertical:48
  },
  profileName:{
    fontFamily:'Poppins_400Regular',
    fontSize:22,
    lineHeight:33,
    color:'#00205C',
    alignSelf: 'center',
    paddingHorizontal:8
  },
  profileImage:{
    width:60,
    height:60,
    borderRadius:200,
    resizeMode:'contain',
    backgroundColor:'#87CEEB'
  },
  menu:{
    paddingHorizontal:24,
  },
  accountContainer:{
    backgroundColor:'#ffffff',
    padding:8,
    borderRadius:8,
    width:155,
    flexDirection:'row',
    marginBottom:24
  },
  containerIcon:{
    tintColor:'#00205C',
    marginRight:8,
    width: 22,
    height:22,
  },
  buttonContainer:{
    padding:8,
    borderRadius:8,
    width:155,
    flexDirection:'row',
    marginBottom:24
  },
  button:{
    width:155,
  },
  containerIcon:{
    marginRight:8,
    width: 22,
    height:22,
  },
  containerText:{
    fontFamily:'Poppins_500Medium',
    fontSize:16,
    lineHeight:24,
    color:'#00205c'
  },
  buttonLogin:{
    justifyContent:'center',
    width:56,
    height:40,
    marginLeft:40,
    marginTop:120
  }
})




{/* <Drawer.Navigator>
<Drawer.Screen name="AccountScreen" component={AccountScreen} />
<Drawer.Screen name="CartScreen" component={CartScreen} />
<Drawer.Screen namee="HistoryScreen" component={HistoryScreen} />
<Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
<Drawer.Screen name="HelpScreen" component={HelpScreen} />
<Drawer.Screen name="AboutScreen" component={AboutScreen} />
</Drawer.Navigator> */}