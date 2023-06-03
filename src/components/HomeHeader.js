import { StyleSheet,Text, TextInput, View, Image, TouchableOpacity, TouchableHighlight, ScrollView,Alert, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#F5F5F5', }


export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerIconContainer}>
        <Image source = {require('../assets/icons/profile.png')} style = {styles.headerIcons}/>
      </TouchableOpacity>
      <View style= {styles.rightNav}>
        <TouchableOpacity style={styles.headerIconContainer}>
                <Image source = {require('../assets/icons/like_profile.png')} style={[styles.headerIcons, styles.like]}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIconContainer}>
            <Image source = {require('../assets/icons/notification_profile.png')} style = {{width:30,height:30,resizeMode:'contain',tintColor:COLORS.primary}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        marginTop:8,
        width: '100%',
        height:32,
        backgroundColor:COLORS.bgPrimary,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerIconContainer:{
        padding:3,
        width:38,
        height:38
    },
    rightNav:{
        width:78,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    headerIcons:{
        width:32,
        height:32,
        resizeMode:'contain'
    },
    like: {
        borderWidth:2,
        borderColor: '#FFEBE6',
        borderRadius:16
    },

})