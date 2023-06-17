import { StyleSheet, Text, Touchable, StatusBar,View } from 'react-native'
import React ,{useContext} from 'react'
import TripletHeader from '../components/TripletHeader'
import ScreenHeader from '../components/ScreenHeader';
import { CartContext } from '../contexts/CartContext';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import Unauth from '../components/Unauth';


const CartScreen = () => {
  const {isLoggedIn, userData, status,login} = useContext(AuthContext);
  const { cartItems,removeFromCart, clearCart } = useContext(CartContext);
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
    <View style={styles.container}>
        {isLoggedIn ? (
          <>
            <TripletHeader props={{title:'Your Cart'}}/>
            <Text>Cart</Text>
          </>
        ):(
          <>
            <ScreenHeader props={{title:'Cart'}}/>
            <Unauth props={{message: "View your previous session cart items. By logging in you can access items n your cart"}}/>
          </>
        )}
      
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  
})