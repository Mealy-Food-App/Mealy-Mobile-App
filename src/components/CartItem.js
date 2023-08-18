import { View, Image, Text, Pressable, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { React,useState, useCallback, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ OrderItem, children, props}) =>{
    const {decreaseQuantity} = useContext(CartContext);
    const {increaseQuantity} = useContext(CartContext);

    const handleDecrease = () => {
        const FoodItem = {
            id: OrderItem.id
        }
        decreaseQuantity(FoodItem);
    }
    const handleIncrease = () => {
        const FoodItem = {
            id: OrderItem.id
        }
        increaseQuantity(FoodItem);
    }

    
    return(
        <TouchableWithoutFeedback style={styles.itemContainer}>
            <View
                style={styles.item}>
                <View style={styles.itemImageContainer}>
                    <Image source={{ uri: OrderItem.image}}   style={styles.itemImage}/>
                </View>
                <View style = {{ display: 'flex', flex:0.4, flexDirection:'column', paddingHorizontal:12,height:70, alignSelf:'center',justifyContent:"space-between"}}>
                    <Text style={styles.OrderItemTitle}>{OrderItem.name}</Text>
                    <Text style={styles.OrderItemPrice}>{OrderItem.restaurant}</Text>
                    <Text style={styles.OrderItemDetails} numberOfLines={2}>{OrderItem.itemDesc}</Text>
                </View>

                <View style={styles.cartTotal}>
                        <Text style={styles.OrderItemPrice}>{OrderItem.total}</Text>
                        <View style= {styles.cartShortcut}> 
                            <Pressable
                                    style ={styles.add}
                                    onPressIn = {handleDecrease}>                  
                                <Image
                                    source={require('../assets/icons/minus.png')}
                                    style={styles.cartShortcutIcon}
                                />
                            </Pressable>
                            <Text style={styles.cartShortcutText}>{OrderItem.quantity}</Text>
                            <Pressable 
                                style ={styles.add}
                                onPressIn = {handleIncrease}>
                            <Image
                                source={require('../assets/icons/plus.png')}
                                style={styles.cartShortcutIcon}
                            />
                            </Pressable>
                        </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default CartItem;

const styles = StyleSheet.create({
    item:{
        backgroundColor: "#F5f5f5",
        marginTop: 8,
        marginBottom: 6,
        padding: 8,
        borderRadius: 10,
        width:"100%",
        height: 100,
        flexDirection:'row'
    },
    itemContainer:{
        width:"100%",
        height: 100,
        borderRadius: 10,
    },
    increase:{
        width:14,
        height:14,
        tintColor:'#ffffff',
    },
    increaseContainer:{
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#00205C',
        width:32,
        height:32
    },
    itemImageContainer:{
        flex:0.25,
        textAlign:'center',
        height:'100%',
        marginLeft:4,
        justifyContent:'space-around'
    },
    itemImage:{ 
        width: 64,
        height: 64,
        borderRadius: 8
    },
    OrderItemTitle:{
        fontFamily:"Poppins_400Regular",
        color:'#00205C',
        fontSize:14,
        lineHeight:21
    },
    OrderItemPrice:{
        fontFamily:"Poppins_400Regular",
        color:'#00205C',
        fontSize:12,
        lineHeight:18 
    },
    OrderItemDetails:{
        fontFamily:"Poppins_400Regular",
        color:'#00205C',
        fontSize:8,
        lineHeight:12 
    },
    cartTotal:{
        justifyContent:"space-between",
        alignItems:'flex-end',
        flex:0.35,
    },






    
    cartShortcut:{
        width:72,
        flexDirection:'row',
        backgroundColor:'#d6d6d6',
        height:38,
        borderRadius:8,
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'flex-end'
    },
    cartShortcutIcon:{
        width:20,
        height:20,
        tintColor:'#00205C',
    },
    cartShortcutText:{
        fontSize: 14,
        fontFamily:'Poppins_500Medium',
        color:"#00205C",
        lineHeight:30,
        marginHorizontal:4
    },
    add:{
        width:30,
        height:32,
        alignItems:'center',
        justifyContent:'center', 
        padding:6
    }
})

