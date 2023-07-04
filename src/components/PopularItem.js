import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React from 'react'
import StarRating, { StarRatingDisplay } from 'react-native-star-rating-widget';
import ItemHeader from './ItemHeader';

const PopularItem = ({data, marginLeft, marginRight, onPressItem, children}) => {
    console.log(data);
  return (
    <View style={[styles.popular,{marginLeft: marginLeft,margin: marginRight,}]}>
        <View style={styles.ImageBackground}>
        <ImageBackground source={require('../assets/images/burger.png')}
        style ={{
            resizeMode:'cover',
            height:120,
            width:218,
            borderRadius:10,
            position:'absolute',
            overflow:'visible',
            left:-9,
            top:-9
        }}
        imageStyle={{borderRadius:10}}
        >
          <ItemHeader data={data}/> 
        </ImageBackground>
        
        </View>
        <View style={styles.contentText}>
            <Text style={styles.contentTextTitle} numberOfLines={1}>{data.name}</Text>
            <Text style={styles.contentTextSpecialty} numberOfLines={1}>{data.specialty}</Text>
        </View>
        <StarRatingDisplay rating={data.rating} color={'#00205c'} starSize={16} enableHalfStar={true} />

        <View style={styles.contentFooter}>
            <View style={styles.small}>
                <Image source={require('../assets/icons/location.png')} style={styles.smallIcon}/>
                <Text style={styles.smallText}>{data.distance}Km</Text>
            </View>
            <View style={styles.small}>
                <Image source={require('../assets/icons/clock.png')} style={styles.smallIcon}/>
                <Text style={styles.smallText}>{data.estimatedDeliveryTime}</Text>
            </View>
        </View>
    </View>
  )
}

export default PopularItem

const styles = StyleSheet.create({
    popular:{
        elevation:1,
        backgroundColor:'#E7EAEE',
        borderRadius:10,
        width:219,
        height:238,
        padding:10
    },
    ImageBackground:{
        height:100,
        width:199,
        borderRadius:8,
    },
    contentText:{
        marginVertical:12,
    },
    contentTextTitle:{
        fontFamily:'Poppins_500Medium',
        fontSize:16,
        lineHeight:24,
        color:"#00205c",
        marginBottom:4
    },
    contentTextSpecialty:{
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:21,
        color:"rgba(0, 32, 92, 0.8)",
    },
    contentFooter:{
        marginVertical:8,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    small:{
        marginRight:8,
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
        fontSize:12,
        lineHeight:18,
        color:"#00205c"
    }

    
})