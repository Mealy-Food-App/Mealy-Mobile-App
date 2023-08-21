import { StyleSheet, Text, View, Image, StatusBar, Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Pressable } from 'react-native'
import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import ScreenHeader from '../components/ScreenHeader';
import BigButton from '../components/BigButton';
import { CartContext } from '../contexts/CartContext';
import { ProductsContext } from '../contexts/ProductsContext';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AccordionComponent from '../components/AccordionComponent';

const imageWidth = Dimensions.get("screen").width;
const OfferDetailScreen = () => {
  const insets = useSafeAreaInsets()
  const [headerBackground, setHeaderBackground] = useState('rgba(255, 255, 255, 0.3)')
  const onNavigate = useNavigation();
  const route = useRoute();
  item = route.params.productDetails
  const mealCustomization = item.mealCustomizations;
  console.log("mealCustomization:", mealCustomization);
  const { addToCart, cartItems } = useContext(CartContext);
  //Read more or less
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"

  //Add to cart
  const existingItem = cartItems.find((cartItem) => cartItem.id === item._id);
  const [totalPrice, setTotalPrice] = useState(Number(item.price));
  const [quantity, setQuantity] = useState(1)
  const [productTotal, setProductTotal] = useState(Number(item.price)) 
  const [selectedOptions, setSelectedOptions] = useState([]);
  const {restaurants} = useContext(ProductsContext);

  const handleOpenRestaurant = () => {
    const foundRestaurant =  restaurants.find(restaurant => restaurant.name === item.restaurant);
    onNavigate.navigate('RestaurantScreen', {
      restaurant: foundRestaurant,
    });
  };

  const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
  }

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);
  const addQuantity = () => {
    setQuantity((quantity + 1));
  }
  const reduceQuantity = () => {
    if (quantity > 1)
      setQuantity((quantity - 1));

  };

  useEffect(() => {
    setProductTotal((quantity * totalPrice))
  });

  useEffect(() => {
    const total_options = () => {
      let sum = 0;
      for (const key in selectedOptions)
      {
        if (selectedOptions.hasOwnProperty(key)) {
          if (selectedOptions[key].priceOption)
          {
            sum += selectedOptions[key].priceOption;
          }
        }
      }   
      return (sum)
    }
    total = Number(item.price) + total_options();
    setTotalPrice(total)
  })

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

  const validButton = { color: '#E69f14', borderColor: "#E69f14", title: `Add ${quantity} to Cart . N${productTotal.toLocaleString()}`, fontFamily: "Poppins_500Medium", fontSize: 18 }


  const handleAddToCart = () => {
    const FoodItem = {
      id: item._id,
      name: item.name,
      itemPrice: Number(item.price),
      total: productTotal,
      image: item.image[0],
      quantity: quantity,
      restaurant: item.restaurant,
      itemDesc: item.description,
      customization: selectedOptions
    }
    addToCart(FoodItem);
    onNavigate.navigate('CartScreen');
  }
  return (
    <View style={styles.container}>
      <View style={[styles.header, {backgroundColor:headerBackground}]}>
        <ScreenHeader props={{ title: '' }} />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={400}
        onScroll= {handleScroll}
      >
        <Image
          source={{ uri: item.image[0] }}
          resizeMode="cover"
          style={{ height: 320,width:imageWidth, top:-(insets.top), paddingHorizontal:24,borderBottomLeftRadius: 26, borderBottomRightRadius: 26 }}
        />
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#00205C', paddingHorizontal:2, paddingVertical:4, borderRadius:8, width:64, position:'absolute', top: 240, left:16}}>
        <Image
          source={require('../assets/icons/offer.png')}
          resizeMode="cover"
          style={{ height: 40,width:60}}
        />
        </View>
        <View style = {{marginBottom:60, marginTop:-24}}>
            <Pressable style={styles.detailsRest} onPress ={handleOpenRestaurant}>
              <Text style={[styles.restName, {textAlign:'center'}]}>
                {item.restaurant}
              </Text>
            </Pressable>
          <View style={styles.details}>
            <View style={styles.detailsHeader}>
              <Text style={styles.itemName}>
                {item.name}
              </Text>
              <Text style={styles.itemPrice}>
                N{Number(item.price).toLocaleString()}
              </Text>
            </View>
            <View style={styles.detailsHeader}>
              <View style={styles.ratingContainer}>
                <StarRatingDisplay style={styles.ratings} rating={4.7} color={'#00205c'} starSize={13} enableHalfStar={true} />
                <Text style={styles.ratingsText}>4.7 (1273)</Text>
              </View>
              <View style={styles.cartShortcut}>
                <TouchableOpacity
                  style={styles.add}
                  onPressIn={reduceQuantity}>
                  <Image
                    source={require('../assets/icons/minus.png')}
                    style={styles.cartShortcutIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.cartShortcutText}>{quantity}</Text>
                <TouchableOpacity
                  style={styles.add}
                  onPressIn={addQuantity}>
                  <Image
                    source={require('../assets/icons/plus.png')}
                    style={styles.cartShortcutIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>Description</Text>
            <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 3}
              ellipsizeMode='clip'
              style={styles.description}
            >
              {item.description}
            </Text>
            {
              lengthMore ?
                <Text
                  onPress={toggleNumberOfLines}
                  style={styles.readMore}>
                  {textShown ? 'Read less' : 'Read more...'}
                </Text>
                : null
            }
          </View>
          <View style={styles.descriptionContainer}>
          {mealCustomization && mealCustomization.length != 0  &&
            <>
            <Text style={styles.title}>Customize your Meal</Text>
            
            <AccordionComponent 
              data={mealCustomization}
              selectedOptions = {selectedOptions} 
              setSelectedOptions = {setSelectedOptions}
            />
            </>}
          </View>

        </View>

      </ScrollView>
        <View style={styles.fixedbtn}>
          <TouchableOpacity onPressIn={handleAddToCart}>
            <BigButton
              props={ validButton}
            />
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default OfferDetailScreen

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
  
  details: { 
    justifyContent: 'center',
    paddingHorizontal:24,    
  },
  detailsRest: {
    marginVertical:8,
    marginHorizontal:'auto',
    alignSelf:'center',
    width:160,
    justifyContent: 'center',
    alignContent:'center',
    paddingHorizontal:24,
    paddingVertical:8,
    backgroundColor:"#00205c",
    opacity:0.9,
    borderRadius:16
  },
  restName: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    lineHeight: 19.5,
    color: '#fff',
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 32,
    alignItems: 'center',
    marginBottom:16
  },
  itemName: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    lineHeight: 19.5,
    color: '#00205C',
    width: '60%'
  },
  itemPrice: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    lineHeight: 19.5,
    color: '#00205C',
    alignContent: 'flex-end'
  },

  cartShortcut: {
    width: 80,
    flexDirection: 'row',
    backgroundColor: '#d6d6d6',
    height: 38,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartShortcutIcon: {
    width: 20,
    height: 20,
    tintColor: '#00205C',
  },
  cartShortcutText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: "#00205C",
    lineHeight: 30,
    marginHorizontal: 4
  },
  ratings: {
    left: -6
  },
  ratingsText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    lineHeight: 17,
    color: '#00205C',
  },
  ratingContainer: {
    width: '60%',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  descriptionContainer: {
    marginTop: 16,
    marginBottom: 32,
    paddingHorizontal:24,
  },
  descriptionContainerf: {
    marginTop: 16,
    marginBottom: 180
  },
  title: {
    marginBottom: 8,
    fontFamily: "Poppins_500Medium",
    color: "#00205C",
    fontSize: 15,
    lineHeight: 17
  },
  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 18,
    color: "#00205C",
    textAlign: 'justify'
  },
  readMore: {
    color: '#002266',
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
    position: 'absolute',
    bottom: -20,
    right: 0,
    paddingHorizontal:24
  },
  titleCustomize: {
    marginBottom: 8,
    fontFamily: "Montserrat_500Medium",
    color: "#00205C",
    fontSize: 14,
    lineHeight: 16
  },
  specialInstructions: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E69F14",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    lineHeight: 16,
    padding: 16,
    height: 100,
    color: "#00205C",
    marginVertical: 16
  },
  fixedbtn:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 10,
    marginHorizontal: 16,
  },
  // BottomContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   width: '100%',
  //   backgroundColor:"#ffffff",
  //   paddingHorizontal: 24,
  // },
  add: {
    width: 30,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6
  }
})
