import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const LeftDrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style = {styles.drawer}>
      <View style={styles.header}>
        <Image style = {styles.profileImage} source={require('../assets/images/user.png')}/>
        <Text style = {styles.profileName}> Fawz</Text>
      </View>

      <View style={styles.menu}>
          <TouchableOpacity style= {styles.account} onPress={() => navigateToScreen('AccountScreen')}>
            <View style={styles.accountContainer}>
              <Image source={require('../assets/icons/user.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>My Account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.button} onPress={() => navigateToScreen('AccountScreen')}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/icons/cartdrawer.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>My Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.button} onPress={() => navigateToScreen('AccountScreen')}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/icons/historydrawer.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.button} onPress={() => navigateToScreen('AccountScreen')}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/icons/settings.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.button} onPress={() => navigateToScreen('AccountScreen')}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/icons/help.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>Help</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.button} onPress={() => navigateToScreen('AccountScreen')}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/icons/help.png')} style ={styles.containerIcon}/>
              <Text style ={styles.containerText}>About</Text>
            </View>
          </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style ={styles.containerText}>Login</Text>
      </TouchableOpacity>


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