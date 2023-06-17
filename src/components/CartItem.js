import { View, Image, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { React,useState, useCallback, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ children, props}) =>{
    const {decreaseQuantity} = useContext(CartContext);
    const {increaseQuantity} = useContext(CartContext);
    const {removeFromCart} = useContext(CartContext);

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
                    <Image source={OrderItem.image}   style={styles.itemImage}/>
                </View>
                <View style = {{ display: 'flex', flex:0.5, flexDirection:'column', height:96, alignSelf:'center',justifyContent:"space-between"}}>
                    <Text style={styles.OrderItemTitle}>Fried Rice</Text>
                    <Text style={styles.Price}>N800</Text>
                    <Text style={OrderItemDetails}>Prepared with Unsalted butter and fresh vegetables</Text>
                </View>

                <View style={{justifyContent:"space-between", alignContent:'center', flex:0.2}}>
                        <View>
                            <Text>4.7</Text>
                        </View>
                        <View style= {{width:64, height:40, borderRadius:8, display:'flex', flexDirection:"row", justifyContent:'space-between'}}>
                                <TouchableOpacity onPress={handleDecrease} style={increaseContainer}>
                                    <Image
                                        source={require('../assets/icons/subtract.png')}
                                        style={styles.increase}
                                    />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 14, fontWeight: "700" , marginHorizontal:4}}>1</Text>
                                <TouchableOpacity onPress={handleIncrease} style={increaseContainer}>                  
                                    <Image
                                        source={require('../assets/icons/add.png')}
                                        style={styles.increase}
                                    />
                                </TouchableOpacity>
                        </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default CartItem;

const styles = StyleSheet.create({
    item:{
        backgroundColor: "#F0F0F0",
        marginTop: 4,
        marginBottom: 0,
        padding: 8,
        borderRadius: 10,
        width:"100%",
        height: 112,
        flexDirection:'row'
    },
    itemContainer:{
        width:"100%",
        height: 112,
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
        borderRadius: 8 }
})

