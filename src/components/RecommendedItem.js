import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SmallButton from './SmallButton'
import ItemHeader from './ItemHeader'
import ItemFooterPrice from './ItemFooterPrice'

const RecommendedItem = ({data, marginLeft, marginRight, onPressItem, children}) => {
    console.log(data);
    return (
    <Pressable style={[styles.recommended,{marginLeft: marginLeft,margin: marginRight,}]} onPress={onPressItem}>
        <View style={styles.ImageBackground}>
        <ImageBackground source={require('../assets/images/chicken.png')}
        style ={{
            resizeMode:'cover',
            height:113,
            width:142,
            borderRadius:8,
            position:'absolute',
            overflow:'visible'
        }}
        imageStyle={{borderRadius:8}}
        >
          <ItemHeader data={data}/> 
          <ItemFooterPrice data = {data}/>
        </ImageBackground>        
        </View>
        <View style={styles.content}>
            <Text style={styles.contentTextRestaurant}>{data.restaurant}</Text>
            <Text style={styles.contentTextTitle}>{data.name}</Text>
            <Text style={styles.contentTextDescription} numberOfLines={2}>{data.description}</Text>

        </View>
        <TouchableOpacity style={{width:'100%',borderRadius:8, alignItems:'center',justifyContent:'center',height:38, backgroundColor:"rgba(0, 0, 0, 0.009)"}}>
                <SmallButton props={{borderColor:'#E69f14',color:'#E69f14', title: "Add to Cart", fontFamily: "Poppins_500Medium", fontSize:14 }}/>
        </TouchableOpacity>

    </Pressable>
  )
}

export default RecommendedItem

const styles = StyleSheet.create({
    recommended:{
        width:158,
        height:230,
        backgroundColor:'#F5f5f5',
        borderRadius:8,
        paddingVertical:4,
        paddingHorizontal:8
    },
    ImageBackground:{
        height:113,
        width:142,
        borderRadius:8,
    },
    content:{
        paddingHorizontal:8,
    },
    contentTextRestaurant:{
        fontFamily:'Poppins_400Regular',
        fontSize:10,
        lineHeight:18,
        color:'rgba(0, 32, 92, 0.8)'
    },
    contentTextTitle:{
        fontFamily:'Poppins_500Medium',
        fontSize:14,
        lineHeight:21,
        color:'#00205c',
        marginTop:8
    },
    contentTextDescription:{
        height:24,
        lineHeight:12,
        fontSize:8,
        fontFamily:'Poppins_400Regular',
        color:'rgba(0, 32, 92, 0.8)',
        marginBottom:8
    }
})