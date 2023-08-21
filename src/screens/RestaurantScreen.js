import { StyleSheet, Text, View, Image, StatusBar, Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Pressable } from 'react-native'
import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import ScreenHeader from '../components/ScreenHeader';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FoodProductItem from '../components/FoodProductItem';
import { ProductsContext } from '../contexts/ProductsContext';

const imageWidth = Dimensions.get("screen").width;

const RestaurantScreen = () => {
    const [headerBackground, setHeaderBackground] = useState('rgba(255, 255, 255, 0.3)')

    const insets = useSafeAreaInsets()
    const onNavigate = useNavigation();
    const route = useRoute();
    restaurant = route.params.restaurant
    const { products } = useContext(ProductsContext);
    const filteredProducts = products.filter(product => restaurant.products.includes(product._id));
    const handleScroll = (event) => {
        const scrollOffsetY = event.nativeEvent.contentOffset.y;
    
        // You can adjust the threshold value as needed
        const threshold = 200;
    
        if (scrollOffsetY > threshold) {
          setHeaderBackground('#f5f5f5');
        } else {
          setHeaderBackground('rgba(255, 255, 255, 0.3)');
        }
    };
    const onNavigateToItem = (product) => {
        onNavigate.navigate('ProductDetailScreen', {
          productDetails: product,
        });
      };
  return (
    <View style={styles.container}>
    <View style={[styles.header,{backgroundColor:headerBackground}]}>
      <ScreenHeader props={{ title: '' }} />
    </View>
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={400}
      onScroll= {handleScroll}
    >
      <Image
        source={{ uri: restaurant.image}}
        resizeMode="cover"
        style={{ height: 360,width:imageWidth, paddingHorizontal:24,borderBottomLeftRadius: 26, borderBottomRightRadius: 26 }}
      />
      <View style={styles.resthead}>
        <Text style={styles.restname}>{restaurant.name}</Text>
        <Text style={styles.restspec}>{restaurant.specialty}</Text>
        <Text style={styles.restopen}>Open 8am to 9pm</Text>
        <View style={styles.morerest}>
            <StarRatingDisplay style={styles.rating} rating={restaurant.rating} color={'#00205c'} starSize={20} enableHalfStar={true} />
            <View style={styles.blue}>
                <Image source={require('../assets/icons/location.png')} style={styles.smallIcon}/>
                <Text style={styles.smallText}>{restaurant.distance}Km</Text>
            </View>
            <View style={styles.blue}>
                <Image source={require('../assets/icons/clock.png')} style={styles.smallIcon}/>
                <Text style={styles.smallText}>{restaurant.estimatedDeliveryTime} Min</Text>
            </View>
        </View>
      </View>
      <View style={styles.products}>
        <View style={styles.toggle}>
            <Pressable style={styles.pillActive}>
                <Text style={styles.toggleLabelActive}>
                    Non Veggie
                </Text>
            </Pressable>
            <Pressable style={styles.pill}>
                <Text style={styles.toggleLabel}>
                    Veggie
                </Text>
            </Pressable>
        </View>
        {filteredProducts.map(product => (
                <FoodProductItem 
                    marginTop={8} 
                    marginBottom={8} 
                    data={product} onPressItem={() => onNavigateToItem(product)} 
                    key ={product._id} 
                />
            )
            )}
        </View>

    </ScrollView>
    <Pressable style={styles.supportContainer}>
        <Image source={require('../assets/icons/rest_help.png')} style={styles.support}/>
    </Pressable>
  </View>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F6F6F6',
      },
      header:{
        paddingTop:StatusBar.currentHeight,
        position:'absolute',
        zIndex:999,
        paddingHorizontal:24,
        width:imageWidth,
      },
      resthead:{
        backgroundColor:'#fff',
        marginHorizontal:32,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:-80,
        paddingVertical:8,
        gap:6,
        elevation:0.5
      },
      restname:{
        fontFamily:"Poppins_400Regular",
        fontSize:22,
        lineHeight:33,
        color:'#00205c',
        textAlign:'center'
      },
      restspec:{
        fontFamily:"Poppins_500Medium",
        fontSize:14,
        lineHeight:21,
        color:'rgba(0, 32, 92, 0.5)',
        textAlign:'center'
      },
      restopen:{
        fontFamily:"Poppins_400Regular",
        fontSize:14,
        lineHeight:21,
        color:'#00205c',
        textAlign:'center'
      },
      morerest:{
        alignItems:'center',
        marginVertical:8,
        flexDirection:'row',
        justifyContent:'space-between',
        gap:8
      },
      rating:{
        display:'flex'
      },
      blue:{
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:"#00205C",
        borderRadius:8,
        padding:4,
        gap:1
      },
      smallIcon:{
        tintColor:'#fff',
        width:14,
        height:14
      },
      smallText:{
        fontFamily:"Poppins_400Regular",
        fontSize:10,
        lineHeight:16,
        color:"#f5f5f5"
      },
      toggle:{
        flexDirection:'row',
        marginTop:16,
        alignContent:'center',
        justifyContent:'center',
        width:216,
        alignSelf:'center',
        marginBottom:24
      },
      pill:{
        borderRadius:24,
        paddingHorizontal:6,
        paddingVertical:10,
        backgroundColor:'rgba(0, 32, 92, 0.1)',
        width:128,
        paddingLeft:32,
        alignContent:'center',
        marginLeft:-32
      },
      pillActive:{
        elevation:5,
        borderRadius:24,
        paddingHorizontal:6,
        paddingVertical:10,
        backgroundColor:'#00205C',
        width:128,
        alignContent:'center',
      },
      toggleLabel:{
        color:'#00205c',
        textAlign:'center',
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:21
      },
      toggleLabelActive:{
        color:'#f5f5f5',
        textAlign:'center',
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:21
      },
      products:{
        marginBottom:64,
        paddingHorizontal:24,
        alignContent:'center'
      },
      supportContainer:{
        width:48,
        height:48,
        backgroundColor:'#00205c',
        borderRadius:24,
        position:'absolute',
        bottom:10,
        right:24,
        alignItems:'center',
        justifyContent:'center'
      },
      support:{
        width:24,
        height:24,
        tintColor:'#fff',

      }
})
