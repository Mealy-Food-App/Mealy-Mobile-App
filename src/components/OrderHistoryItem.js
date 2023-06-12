import { Pressable, StyleSheet, Text, View ,Dimensions, Image} from 'react-native'
import React from 'react'
import SmallButton from './SmallButton'

const itemWidth= Dimensions.get('screen').width - 48
const OrderHistoryItem = ({data, marginTop, marginBottom}) => {
  return (
    <View style={[styles.item, {marginBottom:marginBottom, marginTop:marginTop}]}>
      <View style={styles.itemContent}>
        <Image style={styles.itemContentImage} source={data.image}/>
        <View style={styles.itemContentText}>
            <Text style={styles.orderName}>
                {data.name}
            </Text>
            <Text style={styles.orderID}>
                OrderID:&nbsp;{data.id}
            </Text>
            <Text style={[data.status ==='D' ?  {color:'#077D13'} : data.status ==='P' ? {color:'#00205C'}: {color:'#5C0000'},styles.status]}>
                {data.status_desc}
            </Text>
            <Text style={styles.datetime}>
                {data.deliveredTime}
            </Text>
        </View>
        <Pressable style={styles.itemContentView}>
            <Image style={styles.itemViewIcon} source={require('../assets/icons/view-order.png')}/>
        </Pressable>
      </View>
      <View style={styles.itemButton}>
        <SmallButton props={{borderColor:'#E69f14',color:'#E69f14', title: "Re-order", fontFamily: "Poppins_500Medium", fontSize:14, width:84}}/>
      </View>
    </View>
  )
}

export default OrderHistoryItem

const styles = StyleSheet.create({
    item:{
        width:itemWidth,
        height:144,
        gap:8,
    },
    itemContent:{
        justifyContent:'space-between',
        width:itemWidth,
        gap:22,
        flexDirection:'row',
    },
    itemButton:{
        paddingTop:4,
        flexDirection:'row',
        alignContent:'flex-end',
        justifyContent:'flex-end',
        width: itemWidth,
    },
    itemContentImage:{
        width:98,
        height:88,
        borderRadius:8,
        alignSelf:'center'
    },
    itemContentText:{
        gap:5
    },
    itemContentView:{
        justifyContent:'flex-end'
    },
    itemViewIcon:{
        width:10,
        height:16,
        margin:8,
        top:'-40%',
        right:8,
    
    },
    orderName:{
        fontFamily:'Poppins_500Medium',
        color:'#00205c',
        fontSize:12,
        lineHeight:32
    },
    orderID:{
        fontFamily:'Poppins_400Regular',
        color:'#00205c',
        fontSize:12,
        lineHeight:24
    },
    status:{
        fontFamily:'Poppins_400Regular',
        fontSize:12,
        lineHeight:21
    },
    datetime:{
        fontFamily:'Poppins_400Regular',
        color:'#00205c',
        fontSize:10,
        lineHeight:18  
    }
})