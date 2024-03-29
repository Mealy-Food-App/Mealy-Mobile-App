import { StyleSheet,Dimensions, Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

const windowWidth = Dimensions.get('window').width;
const featuredItemWidth = (windowWidth - 64) / 2;
const FeaturedItem = ({data, marginLeft, marginRight, onPressItem, children}) => {
  return (
    <Pressable style={[styles.featured,{marginLeft: marginLeft,margin: marginRight,}]} onPress={onPressItem}>
        <View style={styles.ImageBackground}>
        <ImageBackground source={{ uri: data.image}} 
        style ={{
            resizeMode:'cover',
            height:116,
            width:featuredItemWidth - 9,
            borderRadius:8,
            position:'absolute',
            overflow:'visible'
        }}
        imageStyle={{borderRadius:8}}
        >
        <View style={styles.contentFooter}>
            <View style={styles.small}>
                <Image source={require('../assets/icons/location.png')} style={styles.smallIcon}/>
                <Text style={styles.smallText}>{data.distance}Km</Text>
            </View>
            <View style={styles.small}>
                <Image source={require('../assets/icons/clock.png')} style={styles.smallIcon}/>
                <Text style={styles.smallText}>{data.estimatedDeliveryTime} Min</Text>
            </View>
        </View>
        </ImageBackground>
        
        </View>
        <View style={styles.contentText}>
            <Text style={styles.contentTextTitle} numberOfLines={1}>{data.name}</Text>
            <Text style={styles.contentTextSpecialty} numberOfLines={1}>{data.specialty}</Text>
        </View>
        <StarRatingDisplay style={{position:'absolute', left:0, bottom:12}}rating={data.rating} color={'#00205c'} starSize={13} enableHalfStar={true}/>
    </Pressable>
  )
}

export default FeaturedItem

const styles = StyleSheet.create({
    featured:{
        elevation:1,
        backgroundColor:'#E7EAEE',
        borderRadius:8,
        width:featuredItemWidth ,
        height:197,
        marginBottom:16,
        paddingVertical:4,
        paddingHorizontal:4
    },
    ImageBackground:{
        width:featuredItemWidth - 12,
        height:116,
        borderRadius:8,
    },
    contentText:{
        marginTop:5,
        marginBottom:10
    },
    contentTextTitle:{
        fontFamily:'Poppins_500Medium',
        fontSize:14,
        lineHeight:21,
        color:"#00205c",
    },
    contentTextSpecialty:{
        fontFamily:'Poppins_400Regular',
        fontSize:12,
        lineHeight:18,
        color:"rgba(0, 32, 92, 0.8)",
    },
    contentFooter:{
        width:56,
        bottom:4,
        right:-2,
        position:'absolute',
        flexDirection:'row',
        justifyContent:'flex-end'
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
        fontSize:8,
        lineHeight:12,
        color:"#00205c"
    }
})