import { Pressable, StyleSheet, Text, View ,Dimensions, Image} from 'react-native'
import React, { useContext, useState} from 'react'
import SmallButton from './SmallButton'
import { CartContext } from '../contexts/CartContext';


const itemWidth= Dimensions.get('screen').width - 48
const FoodProductItem = ({data, marginTop, marginBottom, onPressItem}) => {
    const { addToCart, cartItems } = useContext(CartContext);
    const [total, setTotal] = useState(Number(data.price))
    const [quantity, setQuantity] = useState(1);
    const existingItem = cartItems.find((cartItem) => cartItem.id === data._id);
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
        quantity: 1, // Set the initial quantity to 1 for a new item
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
    };
    
  return (
    <Pressable style={[styles.item, {marginBottom:marginBottom, marginTop:marginTop}]} onPress={onPressItem}>
        <Image style={styles.itemContentImage} source={{ uri: data.image[0]}} />
        <View style={styles.itemContentText}>
            <View style={{gap:8}}>
            <Text style={styles.productName} numberOfLines={1}>
                {data.name}
            </Text>
            <Text style={styles.productPrice} numberOfLines={1}>
                N{Number(data.price).toLocaleString()}
            </Text>
            </View>
            <Text style={styles.productDescription} numberOfLines={3}>
                {data.description}
            </Text>
        </View>
        <View style={styles.itemButtonRatings}>
            <View style={styles.ratings}>
                <Image source={require('../assets/icons/star.png')} style={styles.star}/>
                <Text style={styles.ratingtext}>4.4</Text>
            </View>
            <Pressable style={styles.button} onPressIn={addProductToCart}>
                <SmallButton props={{borderColor:'#E69f14',color:'#E69f14', title: "Add to cart", fontFamily: "Poppins_500Medium", fontSize:14, width:96}}/>
            </Pressable>
        </View>
    </Pressable>
  )
}

export default FoodProductItem

const styles = StyleSheet.create({
    item:{
        width:itemWidth,
        height:114,
        gap:8,
        padding:8,
        flexDirection:'row',
        justifyContent:'space-between',
        gap:24,
        borderRadius:8,
        backgroundColor:'#ebebeb'
    },
    itemContentImage:{
        width:itemWidth/4,
        height:64,
        borderRadius:8,
        alignSelf:'center',
        resizeMode:'contain',
        borderRadius:8
    },
    itemContentText:{
        width:itemWidth/3,
        gap:8,
        paddingVertical:8
    },
    itemButtonRatings:{
        width:itemWidth/5,
        justifyContent:'space-between',

    },
    productName:{
        fontFamily:'Poppins_500Medium',
        color:'#00205c',
        fontSize:14,
        lineHeight:21,
        justifyContent:'flex-start'
    },
    productPrice:{
        fontFamily:'Poppins_500Medium',
        color:'#00205c',
        fontSize:12,
        lineHeight:18,
        justifyContent:'flex-start'
    },
    productDescription:{
        fontFamily:'Poppins_400Regular',
        fontSize:8,
        lineHeight:12,
        justifyContent:'flex-start',
        color:'#00205c',
        width: itemWidth/4

    },
    ratings:{
        width:38,
        paddingVertical:8,
        justifyContent:'space-between',
        flexDirection:'row',
        alignSelf:'flex-end'
    },
    star:{
        height:14,
        width:14,
        tintColor:'#00205C'
    },
    ratingtext:{
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:21,
        color:'#00205C',
    },
    button:{
        alignSelf:'flex-end',
        width:96,
        height:40
    }
})