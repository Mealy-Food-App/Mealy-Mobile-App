import { StyleSheet, Text, View, ImageBackground, Pressable, Alert } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import ItemHeader from './ItemHeader';
import ItemFooterPrice from './ItemFooterPrice';
import { CartContext } from '../contexts/CartContext';


const RecommendedItem = ({ data, marginLeft, marginRight, onPressItem, onPressAdd }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [total, setTotal] = useState(Number(data.price))
  const [quantity, setQuantity] = useState(1);
  const existingItem = cartItems.find((cartItem) => cartItem.id === data._id);


  const handlePressItem = () => {
    onPressItem?.(data); // Invoke the onPressItem function with the data
  };

  const addProductToCart = async() => {
    if (existingItem){
      setQuantity((existingItem.quantity + 1));
      setTotal((existingItem.quantity + 1) * Number(data.price));
    }
   
    const FoodItem = {
      id: data._id,
      name: data.name,
      itemPrice: Number(data.price),
      total: total, 
      image: data.image[0],
      quantity: quantity, // Set the initial quantity to 1 for a new item
      restaurant: data.restaurant,
      itemDesc: data.description,
      customization: {
        itemSize: 'standard',
        itemSpicy: 'non-spicy',
        itemExtra: 'none',
        itemSoda: 'fanta',
        itemSpecial: '',
      },
    };
    await addToCart(FoodItem);
    Alert.alert(`1 ${data.name} added`);
  }


  return (
    <Pressable style={[styles.recommended, { marginLeft: marginLeft, margin: marginRight }]} onPress={handlePressItem}>
      <View style={styles.ImageBackground}>
        <ImageBackground
          source={{ uri: data.image[0] }}
          height={113}
          width={142}
          style={{
            backgroundColor: 'white',
            resizeMode: 'cover',
            height: 113,
            width: 150,
            borderRadius: 8,
            overflow: 'visible',
          }}
          imageStyle={{ borderRadius: 8 }}
        >
          <ItemHeader data={data} />
          <ItemFooterPrice data={data} />
        </ImageBackground>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTextRestaurant} numberOfLines={1}>{data.restaurant}</Text>
        <Text style={styles.contentTextTitle} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.contentTextDescription} numberOfLines={2}>
          {data.description}
        </Text>
      </View>
      <Pressable
        style={styles.addToCart}
        onPress={addProductToCart}
      >
        <Text style={styles.addText}>Add to Cart</Text>
      </Pressable>
    </Pressable>
  );
};

export default RecommendedItem;

const styles = StyleSheet.create({
  recommended: {
    elevation: 1,
    width: 158,
    height: 242,
    backgroundColor: '#E7EAEE',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  ImageBackground: {
    height: 113,
    width: 142,
    borderRadius: 8,
  },
  content: {
    paddingHorizontal: 8,
  },
  contentTextRestaurant: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
    lineHeight: 18,
    color: 'rgba(0, 32, 92, 0.8)',
  },
  contentTextTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#00205c',
    marginTop:8,
    marginBottom:4

  },
  contentTextDescription: {
    height: 24,
    lineHeight: 12,
    fontSize: 8,
    fontFamily: 'Poppins_400Regular',
    color: 'rgba(0, 32, 92, 0.8)',
    marginBottom: 8,
  },
  addToCart:{
    borderColor: '#E69f14',
    backgroundColor: '#E69f14',
    alignContent: 'center',
    borderRadius:8,
    height:42,
    width: 137,
    paddingVertical:6,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  addText:{
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color:'#00205c',
    textAlign:'center',
  }
});
