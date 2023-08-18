import { View, Image, Text,StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { CartContext } from '../contexts/CartContext';
import React, { useContext, useState } from 'react';


const TotalPrice = () => {
    const {finalTotal} = useContext(CartContext);
    const discount = () =>{
        if (finalTotal !== 0){
            return (finalTotal / 98).toFixed(2);
        }
        else{
            return (0).toFixed(2);
        } 
    };
    const delivery = () =>{
        if (finalTotal !== 0){
            return (700).toFixed(2);
        }
        else{
            return (0).toFixed(2);
        }
    }
    const totalAmt = () =>{
        if (finalTotal !== 0){
            let tempDisc = discount();
            let tempDel = delivery();
            let tempTot = finalTotal - Number(tempDisc) + Number(tempDel);
            return (tempTot.toFixed(2));
        }else{
            return (0).toFixed(2);
        }
    }
    return(
        <View style= {{
            backgroundColor: '#ebebeb',
            height:320,
            borderRadius:12,
            marginTop: 20,
            marginBottom:50,
            marginHorizontal: 10,
            paddingVertical:16,
            paddingHorizontal:8
        }}>
            <View style={{flex:0.4}}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Total Items Price</Text>
                    <Text style={styles.tableCell2}>N{(finalTotal).toFixed(2)}</Text>                    
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Delivery</Text>
                    <Text style={styles.tableCell2}>N{delivery()}</Text>  
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Coupon Discount</Text>
                    <Text style={styles.tableCell2}>N0.00</Text>  
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Discount</Text>
                    <Text style={styles.tableCell2}>- N{discount()}</Text>  
                </View>

            </View>
            <View style={{flex:0.6,marginHorizontal:8, }}>
                <View style={styles.tableRow}> 
                    <Text style={styles.total}>Total</Text>
                    <Text style={styles.total2}>{totalAmt()}</Text>  
                </View>
                <View>
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor:'#E69F14',
                            borderRadius: 12,
                            alignText:'center',
                            paddingVertical:16,
                            justifyContent:'center',
                            width: '100%',
                            marginVertical:16                   
                        }}>
                            <Text style={{color:'#00205C', textAlign:'center',fontSize:16, fontFamily:"Montserrat_400Regular" }}>Check Out</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor:'#ffffff',
                            borderWidth:1,
                            borderColor:'#E69F14',
                            borderRadius: 12,
                            alignText:'center',
                            paddingVertical:16,
                            justifyContent:'center',
                            width: '100%',                   
                        }}>
                            <Text style={{color:'#00205C', textAlign:'center',fontSize:16, fontFamily:"Montserrat_400Regular" }}>Schedule Order</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};
export default TotalPrice;

const styles = StyleSheet.create({
    tableCell:{
        fontFamily:'Montserrat_400Regular',
        fontSize:12,
        lineHeight:15,
        color:'#00205C',
        width: '50%',
        paddingHorizontal:8

    },
    total:{
        fontFamily:'Montserrat_600SemiBold',
        lineHeight:17,
        fontSize:14,
        color:'#00205C',
        width: '50%',
        paddingHorizontal:0

    },
    total2:{
        fontFamily:'Montserrat_600SemiBold',
        fontSize:18,
        color:'#00205C',
        width: '50%',
        paddingHorizontal:8,
        textAlign:'right'

    },
    tableCell2:{
        fontFamily:'Montserrat_400Regular',
        fontSize:12,
        lineHeight:15,
        color:'#00205C',
        width: '50%',
        paddingHorizontal:8,
        textAlign:'right'


    },
    tableRow:{
        flexDirection: 'row',
        paddingVertical: 4,
        flex:1 

     }
   });
