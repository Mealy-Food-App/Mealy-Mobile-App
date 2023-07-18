import { StyleSheet, Text, View, Image, TextInput, StatusBar, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import RadioButton from '../components/CustomizationButtons';
import { Pressable } from 'react-native';
import BigButton from '../components/BigButton';
import { CartContext } from '../contexts/CartContext';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const imageWidth = Dimensions.get("screen").width;
const size = [
  { value: 'Standard' },
  { value: 'Big' },
  { value: 'Family' },
];
const spicy = [
  { value: 'Spicy' },
  { value: 'Non-Spicy' },
];
const extra = [
  { value: 'Onions' },
  { value: 'Ham' },
  { value: 'Mozzarella' },
  { value: 'Mushrooms' },
]
const sodaFlavor = [
  { value: 'Fanta' },
  { value: 'Coke' },
  { value: 'Passion' },
];
const ProductDetailScreen = () => {
  const insets = useSafeAreaInsets()
  const onNavigate = useNavigation();
  const route = useRoute();
  item = route.params.productDetails
  console.log(item.id);
  const { addToCart, cartItems } = useContext(CartContext);

  //Show or fide accordion items
  const [sizeShown, setSizeShown] = useState(false);
  const [spicyShown, setSpicyShown] = useState(false);
  const [extrasShown, setExtrasShown] = useState(false);
  const [sodaShown, setSodaShown] = useState(false);
  const [specialShown, setSpecialShown] = useState(false);

  //Read more or less
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"

  //Add to cart
  const existingItem = cartItems.find((cartItem) => cartItem.id === item._id);
  const [showBottom, setShowBottom] = useState(false)
  const [price, setPrice] = useState(Number(item.price));
  const [quantity, setQuantity] = useState((existingItem !== undefined ? existingItem.quantity : 0));
  const [isValid, setIsValid] = useState(false);
  const [foodSize, setFoodSize] = useState(size[0].value);
  const [foodSpicy, setFoodSpicy] = useState(spicy[0].value);
  const [foodExtra, setFoodExtra] = useState(extra[0].value);
  const [foodSoda, setFoodSoda] = useState(spicy[0].value);
  const [foodSpecial, setFoodSpecial] = useState(null);

  // const handlePressSize = (value) =>{

  // }

  const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
  }

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  const handleSize = () => {
    setSizeShown(!sizeShown);
  }
  const handleSpicy = () => {
    setSpicyShown(!spicyShown)
  }
  const handleExtras = () => {
    setExtrasShown(!extrasShown)
  }
  const handleSoda = () => {
    setSodaShown(!sodaShown)
  }
  const handleSpecial = () => {
    setSpecialShown(!specialShown)
  }

  const addQuantity = () => {
    if ((quantity + 1) > 0) {
      setIsValid(true)
    }
    setQuantity((quantity + 1));
    setShowBottom(true)
  }
  const reduceQuantity = () => {
    if ((quantity - 1) < 1) {
      setShowBottom(false)
      setIsValid(false)
    }
    if (quantity > 0)
      setQuantity((quantity - 1));

  };

  useEffect(() => {
    setPrice((quantity * item.price))
  });

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };
  const enableShowBottom = () => {
    useEffect(() => {
      if (quantity > 0) {
        setIsValid(true)
        setShowBottom(true)
      }
    })

  }

  const validButton = { color: '#E69f14', borderColor: "#E69f14", title: `Add ${quantity} to Cart . N${price.toLocaleString()}`, fontFamily: "Poppins_500Medium", fontSize: 18 }
  const invalidButton = { color: 'rgba(230, 159, 20, 0.5)', borderColor: "rgba(230, 159, 20, 0.5)", title: `Add to Cart`, fontFamily: "Poppins_500Medium", fontSize: 18 }


  const handleAddToCart = () => {
    const FoodItem = {
      id: item._id,
      name: item.name,
      itemPrice: Number(item.price),
      total: price,
      image: item.image[0],
      quantity: quantity,
      restaurant: 'Froyo Restaurant',
      itemDesc: item.description,
      customization: {
        itemSize: foodSize,
        itemSpicy: foodSpicy,
        itemExtra: foodExtra,
        itemSoda: foodSoda,
        itemSpecial: foodSpecial,
      }
    }
    addToCart(FoodItem);
    onNavigate.navigate('CartScreen');
  }
  console.log(item)
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={400}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            enableShowBottom
          }
        }}
      >
        <Image
          source={{ uri: item.image[0] }}
          resizeMode="cover"
          style={{ height: 280, width: imageWidth, borderBottomLeftRadius: 26, borderBottomRightRadius: 26 }}
        />
        {/* <FoodDetailsHeaderContent/> */}
        <View style={{ paddingHorizontal: 24 }}>
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
          <View style={styles.descriptionContainerf}>
            <Text style={styles.title}>Customize your Meal</Text>
            <View style={styles.accordion}>
              <View style={styles.accordHeader}>
                <Text style={styles.titleCustomize}>Size</Text>
                <Pressable style={styles.arrowsContainer} onPress={handleSize}>
                  {sizeShown === false ?
                    <Image source={require('../assets/icons/arrowdown.png')} style={styles.arrows} /> :
                    <Image source={require('../assets/icons/arrowup.png')} style={styles.arrows} />}
                </Pressable>
              </View>
              {sizeShown && <RadioButton data={size} />}
            </View>
            <View style={styles.accordion}>
              <View style={styles.accordHeader}>
                <Text style={styles.titleCustomize}>Spicy or non-spicy</Text>
                <Pressable style={styles.arrowsContainer} onPress={handleSpicy}>
                  {spicyShown === false ?
                    <Image source={require('../assets/icons/arrowdown.png')} style={styles.arrows} /> :
                    <Image source={require('../assets/icons/arrowup.png')} style={styles.arrows} />}
                </Pressable>
              </View>
              {spicyShown && <RadioButton data={spicy} />}
            </View>
            <View style={styles.accordion}>
              <View style={styles.accordHeader}>
                <Text style={styles.titleCustomize}>Extras</Text>
                <Pressable style={styles.arrowsContainer} onPress={handleExtras}>
                  {extrasShown === false ?
                    <Image source={require('../assets/icons/arrowdown.png')} style={styles.arrows} /> :
                    <Image source={require('../assets/icons/arrowup.png')} style={styles.arrows} />}
                </Pressable>
              </View>
              {extrasShown && <RadioButton data={extra} />}
            </View>
            <View style={styles.accordion}>
              <View style={styles.accordHeader}>
                <Text style={styles.titleCustomize}>Choose your soda flavour</Text>
                <Pressable style={styles.arrowsContainer} onPress={handleSoda}>
                  {sodaShown === false ?
                    <Image source={require('../assets/icons/arrowdown.png')} style={styles.arrows} /> :
                    <Image source={require('../assets/icons/arrowup.png')} style={styles.arrows} />}
                </Pressable>
              </View>
              {sodaShown && <RadioButton data={sodaFlavor} />}
            </View>
            <View style={styles.accordion}>
              <View style={styles.accordHeader}>
                <Text style={styles.titleCustomize}>Special instructions</Text>
                <Pressable style={styles.arrowsContainer} onPress={handleSpecial}>
                  {specialShown === false ?
                    <Image source={require('../assets/icons/arrowdown.png')} style={styles.arrows} /> :
                    <Image source={require('../assets/icons/arrowup.png')} style={styles.arrows} />}
                </Pressable>
              </View>
              {specialShown && <TextInput
                style={styles.specialInstructions}
                multiline={true}
                numberOfLines={4}
                // onChangeText={(text) => this.setState({text})}
                // value
              />}
            </View>
          </View>

        </View>

      </ScrollView>
      {showBottom === true && <View style={styles.BottomContainer}>
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
        <TouchableOpacity onPressIn={handleAddToCart}>
          <BigButton
            props={isValid ? validButton : invalidButton}
          />
        </TouchableOpacity>
      </View>}
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F6F6F6',
  },
  details: {
    marginTop: 24,
    width: "100%",
    justifyContent: 'center',
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 32,
    alignItems: 'center'
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
    marginBottom: 32
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
  accordion: {
    marginBottom: 8
  },
  accordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#ebebeb',
    paddingLeft: 8,
    alignItems: 'center',
    borderRadius: 4,
  },
  arrows: {
    width: 18,
    height: 18,
    tintColor: "#00205C"
  },
  arrowsContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    padding: 8
  },
  BottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: "#575B5B",
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  add: {
    width: 30,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6
  }
})
