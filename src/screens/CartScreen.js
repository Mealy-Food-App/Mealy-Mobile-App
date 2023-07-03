import { StyleSheet,StatusBar, ScrollView,View, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React ,{useContext} from 'react'
import TripletHeader from '../components/TripletHeader'
import ScreenHeader from '../components/ScreenHeader';
import { CartContext } from '../contexts/CartContext';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import Unauth from '../components/Unauth';
import Empty from '../components/Empty';
import { SwipeListView } from 'react-native-swipe-list-view';
import CartItem from '../components/CartItem';
import DeliveryOption from '../components/DeliveryOption';
import TotalPrice from '../components/TotalPrice'

const CartScreen = () => {
  const {isLoggedIn, userData, status,login} = useContext(AuthContext);
  const { cartItems,removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  // const [cartItemsTotalZero, setCartItemsTotalZero] = useState(false);

  const onNavigate = useNavigation();
  const onPressShop = () => {
    onNavigate.navigate("Main");
  };
  const handleClearCart = () => {
    clearCart();
  };
  const handleDeleteItem =(itemId) => {
    removeFromCart(itemId);
  };

  
  return (
    <>
        {isLoggedIn ? 
          cartItems.length == 0 ?
            (
              <View style= {styles.otherContainer}>
                <ScreenHeader props={{title:'Cart'}}/>
                <Empty props={{message: "Looks like you haven't added anything to your cart yet"}}/>

              </View>
            )
          :
            (
              <View style={styles.container}>
                <View style={styles.paddingContainer}>
                  <TripletHeader props={{title:'Your Cart'}}/>
                </View>
                <SwipeListView
                data= {cartItems}
                showsVerticalScrollIndicator={true}
                disableRightSwipe={true}
                rightOpenValue={-75}
                style={{
                  minHeight:250,
                  maxHeight:'40%',
                  backgroundColor:'#ffffff',
                  marginHorizontal: 4,
                  borderBottomRightRadius: 12,
                  borderBottomLeftRadius:12,
                  paddingHorizontal:8,
                  marginHorizontal:8,
                }}
                vertical
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => {
                  return(
                    <CartItem
                      OrderItem={item}
                      />
                  );
                }}
                renderHiddenItem={(data, rowMap) =>(
                  <View 
                    style ={styles.hiddenDelete}>
                    <TouchableOpacity onPressIn={() => handleDeleteItem(data.item.id) }>
                        <Image source={require('../assets/icons/deleteall.png')}
                            style={styles.hiddenDeleteIcon}
                        />
                    </TouchableOpacity>
                </View>
                )}
                />
                {/* <DeliveryOption/> */}
                <TotalPrice/>
              </View>
            )
        :(
          <View style = {styles.otherContainer}>
            <ScreenHeader props={{title:'Cart'}}/>
            <Unauth props={{message: "View your previous session cart items. By logging in you can access items in your cart"}}/>
          </View>
        )}
        </>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flex: 1,
    width: '100%',
    backgroundColor: '#F5f5f5',
  },
  otherContainer:{
    paddingTop: 16,
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal:24
  },
  paddingContainer:{
    paddingHorizontal:24
  },
  hiddenDelete:{
    borderRadius: 12,         
    backgroundColor: "red",
    width:'99%',
    height:100,
    flexDirection: "column",
    textAlign:'center',
    marginTop: 8,
  },
  hiddenDeleteIcon:{
    width:20,
    height:30,
    position:'absolute',
    right:25,
    top:30,
    tintColor:'white'
  }
  
})