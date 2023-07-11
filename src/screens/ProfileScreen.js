import { StyleSheet, Text, View, Image, StatusBar, TextInput  } from 'react-native'
import React, {useContext, useState, useEffect, useRef} from 'react'
import LeftNavHeader from '../components/LeftNavHeader'
import { AuthContext } from '../contexts/AuthContext'
import { Pressable } from 'react-native'

const ProfileScreen = () => {
    const { isLoggedIn, userData, status } = useContext(AuthContext);
    console.log(userData);
    const [isPhoneEditable, setPhoneIsEditable] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(userData.phone ? userData.phone : 'Not Set');
    const inputPhoneRef = useRef(null);

    const handleEditPhonePress = () => {
        setPhoneIsEditable(true);
    };

    return (
    <View style={styles.container}>
        <LeftNavHeader props={{title:'Profile'}}/>
        <Image source={require('../assets/images/user.png')} style={styles.avatar}/>
        <Text style={styles.avatarText}>{userData.fullName}</Text>
        <Text style={styles.profileEmail}>{userData.email}</Text>


        <View style={styles.profileDetails}>
            <Text style = {styles.profileTitle}>Phone Number</Text>            
                <View style={styles.profileContentContainer}>
                {!(userData.address)? (
                          <TextInput
                          ref={inputPhoneRef}
                          value={phoneNumber}
                          onChangeText={setPhoneNumber}
                          editable={isPhoneEditable}
                          style={styles.profileContent}
                          caretHidden={!isPhoneEditable} // Hide the cursor when not editable
                          caretColor="#00205c" // Set the color of the cursor
                        />
                    ):(
                        <Text style = {styles.profileContent}>fsfsff</Text>
                    )}
                    {!isPhoneEditable ? 
                    <Pressable onPress={handleEditPhonePress}>
                        <View style={styles.edit}>
                        <Text style={styles.editText}>Edit</Text>
                        <Image source={require("../assets/icons/edit.png")} style={styles.editIcon}/>
                        </View>
                    </Pressable>
                    :
                    <Pressable onPress={handleEditPhonePress}>
                        <View style={styles.save}>
                        <Text style={styles.saveText}>Save</Text>
                        </View>
                    </Pressable>

                    }
                </View>

        </View>
        <View style={styles.profileDetails}>
            <Text style = {styles.profileTitle}>Address</Text>            
                <View style={styles.profileContentContainer}>
                {!(userData.address)?(
                    <Text style = {styles.profileContent}>0 Addresses</Text>
                    ):(
                        <Text style = {styles.profileContent}>fsfsff</Text>
                    )}
                    <Pressable onPress={handleEditPhonePress}>
                        <View style={styles.edit}>
                        <Text style={styles.editText}>Edit</Text>
                        <Image source={require("../assets/icons/edit.png")} style={styles.editIcon}/>
                        </View>
                    </Pressable>
                </View>

        </View>
        <View style={styles.profileDetails}>
            <Text style = {styles.profileTitle}>Payment Info</Text>
            <View style={styles.profileContentContainer}>
                {!(userData.address)?(
                    <Text style = {styles.profileContent}>0 Cards</Text>
                    ):(
                        <Text style = {styles.profileContent}>fsfsff</Text>
                    )}
                    <Pressable onPress={handleEditPhonePress}>
                        <View style={styles.edit}>
                        <Text style={styles.editText}>Edit</Text>
                        <Image source={require("../assets/icons/edit.png")} style={styles.editIcon}/>
                        </View>
                    </Pressable>
                </View>
        </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        paddingTop:StatusBar.currentHeight,
        paddingHorizontal:24,
    },
    avatar:{
        marginTop:16,
        width:80,
        height:80,
        borderRadius:100,
        alignSelf:'center'
    },
    avatarText:{
        fontFamily:'Poppins_600SemiBold',
        fontSize:28,
        lineHeight:42,
        color:"#00205C",
        textAlign:'center',
        marginVertical:18,
    },
    profileEmail:{
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:16,
        color:"rgba(0, 32, 92, 0.6)",
        textAlign:'center',
    }, 
    profileDetails:{
        height:96,
        padding:16,
        justifyContent:'space-between',
        marginVertical:16,
        elevation:2,
        borderRadius:8,
        backgroundColor:"white"
    },
    profileTitle:{
        fontFamily:'Poppins_500Medium',
        fontSize:18,
        lineHeight:32,
        color:"rgba(0, 32, 92, 0.9)",
    },

    profileContent:{
        fontFamily:'Poppins_400Regular',
        fontSize:16,
        lineHeight:18,
        color:"rgba(0, 32, 92, 0.6)",
        alignSelf:'flex-end',
        
    }, 
    profileContentContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:0.5,
        paddingVertical:4,
        borderColor:"rgba(0, 32, 92, 0.6)",
    },
    edit:{
        borderColor:"rgba(0, 32, 92, 0.3)",
        borderWidth:1,
        paddingHorizontal:8,
        height:28,
        width:56,
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:8,
        flexDirection:'row'
    },
    editText:{
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:16,
        color:"rgba(0, 32, 92, 0.6)",
        alignSelf:'center'
    },
    save:{
        borderColor:"#E69f14",
        borderWidth:1,
        paddingHorizontal:8,
        height:28,
        width:56,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        flexDirection:'row',
        backgroundColor:'#E69f14'
    },
    saveText:{
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:16,
        color:"#00205c",
        alignSelf:'center'
    },
    editIcon:{
        height:14,
        width:14,
        marginLeft:6,
        tintColor:"rgba(0, 32, 92, 0.6)",
        alignSelf:'flex-end',
        marginBottom:8
    }
})