import { StyleSheet, Text, View,Image, Pressable, Dimensions} from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width - 48;
const ItemFooter = ({data}) => {
  return (
    <View style={styles.ItemFooter}>
        <Pressable style= {styles.ItemFooterButton1}>
            <Text style= {styles.ItemFooterText}>Mr. Biggs</Text>
        </Pressable>
        <Pressable style= {styles.ItemFooterButton2}>
            <Image source = {require('../assets/icons/item_desc.png')} style= {styles.ItemFooterIcon}/>
        </Pressable>      
    </View>
  )
}

export default ItemFooter

const styles = StyleSheet.create({
    ItemFooter:{
        width:width,
        flexDirection:'row',
        justifyContent:'space-between',
        position:'absolute',
        bottom:11,
        right:0

    },
    ItemFooterButton1:{
        backgroundColor:'#00205c',
        borderRadius:8,
        paddingHorizontal:16,
        paddingVertical:8
    },
    ItemFooterText:{
        fontFamily:'Poppins_500Medium',
        color: '#FFFFFF',
        fontSize:16,
        lineHeight:22
    },
    ItemFooterButton2:{
        backgroundColor:'#00205c',
        borderRadius:200,
        padding:10,
        width:44,
        height:44,
        position:'absolute',
        bottom:-10,
        right:0,
        justifyContent:'center',
        flexDirection:'row'
    },
    ItemFooterIcon:{
        width:20,
        height:20,
        resizeMode:'contain',
        alignSelf:'center',
        tintColor:'#ffffff'

    }
})