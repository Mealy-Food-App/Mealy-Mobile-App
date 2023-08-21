import { Pressable, StyleSheet, Text, View ,Dimensions, Image} from 'react-native'
import React, { useContext, useState} from 'react'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

const itemWidth= Dimensions.get('screen').width - 48
const RestaurantItem = ({data, marginTop, marginBottom, onPressItem}) => {    
  return (
    <Pressable style={[styles.item, {marginBottom:marginBottom, marginTop:marginTop}]} onPress={onPressItem}>
        <Image style ={styles.itemContentImage} source={{ uri: data.image}}/>
        <View style={styles.itemContentText}>
            <View style={{gap:8}}>
            <Text style={styles.productName} numberOfLines={1}>
                {data.name}
            </Text>
            <Text style={styles.productPrice} numberOfLines={1}>
                {data.specialty}
            </Text>
            </View>
            <View style={styles.productDescription}>
                <StarRatingDisplay style={{marginLeft:-4}} rating={data.rating} color={'#00205c'} starSize={16} enableHalfStar={true}/>
            </View>
        </View>
        <View style={styles.itemButtonRatings}>
            <View style={styles.ratings}>
                <Image source={require('../assets/icons/favorite.png')} style={styles.star}/>
            </View>
            <View style={styles.contentFooter}>
                <View style={styles.small}>
                    <Image source={require('../assets/icons/location.png')} style={styles.smallIcon}/>
                    <Text style={styles.smallText}>{data.distance}Km</Text>
                </View>
                <View style={styles.small2}>
                    <Image source={require('../assets/icons/clock.png')} style={styles.smallIcon}/>
                    <Text style={styles.smallText}>{data.estimatedDeliveryTime} Min</Text>
                </View>
            </View>
        </View>
    </Pressable>
  )
}

export default RestaurantItem

const styles = StyleSheet.create({
    item:{
        width:itemWidth,
        height:114,
        gap:8,
        padding:8,
        flexDirection:'row',
        justifyContent:'space-between',
        gap:24,
        borderRadius:8,
        backgroundColor:'#ebebeb'
    },
    itemContentImage:{
        width:itemWidth/4,
        height:64,
        borderRadius:8,
        alignSelf:'center',
        resizeMode:'contain',
        borderRadius:8
    },
    itemContentText:{
        width:itemWidth/3,
        gap:8,
        paddingVertical:8,
        justifyContent:'space-between'
    },
    itemButtonRatings:{
        width:itemWidth/5,
        justifyContent:'space-between'
    },
    productName:{
        fontFamily:'Poppins_500Medium',
        color:'#00205c',
        fontSize:14,
        lineHeight:21,
        justifyContent:'flex-start'
    },
    productPrice:{
        fontFamily:'Poppins_500Medium',
        color:'#00205c',
        fontSize:12,
        lineHeight:18,
        justifyContent:'flex-start'
    },
    productDescription:{
        fontFamily:'Poppins_400Regular',
        fontSize:8,
        lineHeight:12,
        justifyContent:'flex-start',
        color:'#00205c',
        width: itemWidth/4

    },
    ratings:{
        width:38,
        paddingVertical:8,
        justifyContent:'space-between',
        flexDirection:'row',
        alignSelf:'flex-end'
    },
    star:{
        height:24,
        width:24,
    },
    contentFooter:{
        width:56,
        bottom:8,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    small2:{
        marginRight:-12,
        backgroundColor:'#E9C782',
        borderRadius:8,
        paddingVertical:2,
        paddingHorizontal:4,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    small:{
        marginLeft:4,
        backgroundColor:'#E9C782',
        borderRadius:8,
        paddingVertical:2,
        paddingHorizontal:4,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    smallIcon:{
        width:11,
        height:11,
        alignSelf:'center'
    },
    smallText:{
        textAlign:'center',
        fontFamily:'Poppins_400Regular',
        fontSize:8,
        lineHeight:12,
        color:"#00205c"
    }
})