import { View, Text, Image,Dimensions,StyleSheet  } from 'react-native'
import React, { useEffect, useState } from 'react'

const width =Dimensions.get("screen").width;
const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#F5F5F5' }
const slides =[
  {
      id: 0,
      image: require('../assets/images/onboarding1.png'),
      title: 'Customize Your Meal',
      subtitle:'Customize your order from the best local restaurants with ease.'
  },
  {
      id: 1,
      image: require('../assets/images/onboarding2.png'),
      title: 'Easy Payment',
      subtitle:'Experience secured, swift and stress free payment method and process.'
  },
  {
      id: 2,
      image: require('../assets/images/onboarding3.png'),
      title: 'Track Your Delivery',
      subtitle:'Sit back and relax while we take care of the rest. Track your order in real time from preparation to delivery.'
  }
]

const Indicators= ({item}) =>{
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  useEffect(()=>{
    setCurrentSlideIndex(item.id);
  }, [item])
  return(
    <View
      style={{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:30,
      }}>
          {slides.map((i,index) => (
            <Image 
              key={index}
              source={require('../assets/icons/indicator.png')}
              style={[
                styles.indicator,
                currentSlideIndex === index &&{
                  tintColor:COLORS.primary
                }
              ]}/>
          ))}
      </View>
  );
}


const OnboardingSlide = ({item}) => {
  return (
    <View style={{width:width,alignItems:'center', flexDirection:'column'}}>
        <Image source = {item.image} style ={{height:'60%', width: width,resizeMode:'contain'}}/>    
        <Indicators item ={item}/>
        <Text style ={styles.title}  >{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  )
}
const styles= StyleSheet.create({
    title:{
        color:COLORS.primary,
        fontSize:24,
        fontFamily:'Poppins_700Bold',
        marginBottom:12,
        textAlign:'center',
        maxWidth:width * 0.75,
        lineHeight:36
    },
    subtitle:{
      color:COLORS.primary,
      fontSize:14,
      fontFamily:'Poppins_400Regular',
      marginVertical:12,
      width:width * 0.9,
      maxWidth:width * 0.9,
      textAlign:'center',
      lineHeight:21,
    },
    indicator:{
      marginHorizontal:4,
      width:8,
      height:8,
    }
})

export default OnboardingSlide;
