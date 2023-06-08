import { StyleSheet, Text, View, ImageBackground  } from 'react-native'
import React from 'react'
import ItemHeader from './ItemHeader';
import ItemFooter from './ItemFooter';

const WeekOffer = ({data}) => {
    console.log(data.image);
  return (
    <View style={styles.meal}>
      <Text style = {styles.title}>Meal of the week</Text>
      <View style={styles.mealContent}>  
        <ImageBackground source={data.image}
          style={{height: 224, width:327, borderRadius: 8,}}
          resizeMode='cover'
        >
          <ItemHeader data={data}/> 
          <View style={styles.contentText}>
            <Text style={styles.contentTextTitle}>{data.name}</Text>
            <Text style={styles.contentTextPrice}>#{data.price}</Text>
          </View>
          <ItemFooter data={data}/>

        </ImageBackground> 
      </View>
    </View>
  )
}

export default WeekOffer

const styles = StyleSheet.create({
    meal:{
        marginTop:32,
        height:264,
        alignItems:'center',
    },
    title:{
        textAlign:'center',
        fontFamily:'Poppins_500Medium',
        fontSize:16,
        color:'#00205c',
        lineHeight:24,
        marginBottom:8
    },
    mealContent:{
      marginVertical:8
    },
    contentText:{
      position:'absolute',
      top:88,
      alignSelf:'center',
    },
    contentTextTitle:{      
      textAlign:'center',
      fontFamily:'Poppins_400Regular',
      fontSize:32,
      color:'#00205C',
      lineHeight:48
    },
    contentTextPrice:{
      textAlign:'center',
      fontFamily:'Poppins_400Regular',
      fontSize:24,
      color:'#00205C',
      lineHeight:36
    }
})