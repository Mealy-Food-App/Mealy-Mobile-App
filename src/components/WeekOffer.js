import { StyleSheet,Dimensions, Text, View, ImageBackground  } from 'react-native'
import React from 'react'
import ItemHeader from './ItemHeader';
import ItemFooter from './ItemFooter';
import { BlurView } from 'expo-blur';

const width = Dimensions.get('window').width -48;
const WeekOffer = ({ data}) => {
  console.log(data);
  return (
    <View style={styles.meal}>
      <Text style = {styles.title}>Meal of the week</Text>
      <View style={styles.mealContent}>  
        <ImageBackground source={{ uri: data.image[0]}}
          resizeMode ={'cover'}
          borderRadius={8}
          style={{width:width, flex: 1, height:224, borderRadius: 8,}}
        >
          <BlurView
            style={{ flex: 1, backgroundColor: '#f5f5f5' }}
            tint="light"
            intensity={55}
          />
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
        elevation:5,
        marginTop:8,
        width:'100%',
        height:264
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
      marginVertical:8,
      position:'relative',
      height:224,
      width:width,
      padding:0
    },
    contentText:{
      position:'absolute',
      top:70,
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