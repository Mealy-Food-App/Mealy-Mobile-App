import { StyleSheet,StatusBar, FlatList,View, Image, Text,TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React ,{useContext, useState, useEffect} from 'react'
import TripletHeader from '../components/TripletHeader'
import ScreenHeader from '../components/ScreenHeader';
import { CartContext } from '../contexts/CartContext';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import Unauth from '../components/Unauth';
import Empty from '../components/Empty';
import { SwipeListView } from 'react-native-swipe-list-view';
import CartItem from '../components/CartItem';
import TotalPrice from '../components/TotalPrice'
import { Formik, yupToFormErrors } from 'formik'
import * as yup from 'yup'
import { Pressable } from 'react-native';
import RadioButton from '../components/RadioButton';
import { ScrollView } from 'react-native-gesture-handler';

const COLORS ={primary:'#00205C', btnPrimary:'#E69F14', bgPrimary:'#F5F5F5', }

const CartScreen = () => {

  const {isLoggedIn, userData, status,login} = useContext(AuthContext);
  const { cartItems,removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [selectedOption, setSelectedOption] = useState('Home Delivery');

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
  

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
  const userInput = {
    elevation:0.2,
    width:'100%',
    backgroundColor:'#F3F6F7',
    borderWidth:1,
    borderColor:'#ebebeb',
    borderRadius: 8,
    fontFamily:'Poppins_400Regular',
    flexDirection: 'row',
    height:48,
    marginVertical:16,
  };
  const userInputText = {
    width:'80%',
    fontFamily:'Poppins_400Regular',    
    paddingHorizontal: 16,
    paddingVertical:10,
    color:COLORS.primary
  };
  const codeButton ={
    position:'absolute',
    top:-1,
    right:-1,
    height:48,
    width:80,
    backgroundColor:COLORS.primary,
    borderBottomRightRadius:8,
    borderTopRightRadius:8,
    justifyContent:'center'
  };
  const codeButtonText ={
    color:'white',
    textAlign:'center',
    fontFamily:"Poppins_400Regular"
  }
  const renderStickyHeader = () => (
    <View style={styles.header}>
    <TripletHeader props={{ title: 'Your Cart' }} />
  </View>
  );


  
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
              <FlatList
                style={styles.container}
                data={[{ key: 'header' }, { key: 'swipeListView' },{key:'coupon'},{ key: 'delivery' }, { key: 'totalPrice' }]}
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
                ListHeaderComponent={renderStickyHeader}
                renderItem={({ item }) => {
                  if (item.key === 'header') {
                    return null;
                  } else if (item.key === 'swipeListView') {
                    return (
                      <View>
                          <SwipeListView
                            data={cartItems}
                            showsVerticalScrollIndicator={true}
                            disableRightSwipe={true}
                            rightOpenValue={-75}
                            scrollEnabled={true}
                            style={{
                              elevation: 1,
                              top:-(StatusBar.currentHeight),
                              paddingVertical:8,
                              height: 360,
                              backgroundColor: '#ffffff',
                              borderRadius: 12,
                              paddingHorizontal: 8,
                              marginHorizontal: 8,
                              overflow:'scroll'
                            }}
                            vertical
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item, index }) => {
                              return <CartItem OrderItem={item} />;
                            }}
                            renderHiddenItem={(data, rowMap) => (
                              <View style={styles.hiddenDelete}>
                                <TouchableOpacity onPressIn={() => handleDeleteItem(data.item.id)}>
                                  <Image
                                    source={require('../assets/icons/delete.png')}
                                    style={styles.hiddenDeleteIcon}
                                  />
                                </TouchableOpacity>
                              </View>
                            )}
                          />
                      </View>
                    );
                  }else if (item.key === 'coupon'){
                    return (
                      <View style={styles.coupon}>
                        <Formik
                            initialValues={{
                              code: '',
                            }}
                            onSubmit={values => handleCoupon(values)}
                            validationSchema={yup.object().shape({
                              code: yup
                                .string()
                                .required('Enter coupon code')
                            })}
                          >
                            {({ values, handleChange,setFieldValue, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                                <View>
                                <View style ={userInput}>
                                    <TextInput
                                      value = {values.code}
                                      style = {userInputText}
                                      onChangeText={handleChange('code')}
                                      placeholder='Enter coupon code'
                                    />
                                    <Pressable style={codeButton}>
                                      <Text style ={codeButtonText}>Apply</Text>
                                    </Pressable>
                                  </View>
                              </View>
                            )}
                          </Formik>
                      </View>
                    )                  
                  } else if (item.key === 'delivery'){
                    return<View style={styles.delivery}>
                            <Text style={styles.sectiontitle}>Delivery Option</Text>
                            <RadioButton
                              options={[ 'Home Delivery','Pick up',]}
                              selectedOption={selectedOption}
                              onSelect={handleSelectOption}
                            />
                            <View style = {styles.location}>
                              <View style ={styles.locationHolder}>
                                <Text style={styles.locationBig}>Nairobi</Text>
                                <Text style={styles.locationSmall}>1336 Pluto, Cyber Arm</Text>
                              </View>
                              <Pressable>
                                <Text style={styles.changeadd}>
                                  Change Address
                                </Text>
                              </Pressable>
                            </View>

                          </View>
                  }
                   else if (item.key === 'totalPrice') {
                    return <TotalPrice />;
                  }
                  return null;
                }}
                keyExtractor={(item) => item.key}
              />
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
    paddingTop: StatusBar.currentHeight,
    top:0,
    width: '100%',
    backgroundColor: '#F5f5f5',
  },
  header:{
    height:80,
    paddingHorizontal:24,
    backgroundColor:'#F5f5f5',
    paddingVertical:StatusBar.currentHeight,
    top:-(StatusBar.currentHeight)
  },
  otherContainer:{
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal:24,
    flex:1,
  },
  paddingContainer:{
    paddingHorizontal:24
  },
  hiddenDelete:{
    borderRadius: 12,         
    backgroundColor: "#FFEBEB",
    width:'99%',
    height:100,
    flexDirection: "column",
    textAlign:'center',
    marginTop: 8,
  },
  hiddenDeleteIcon:{
    tintColor:'red',
    width:20,
    height:30,
    position:'absolute',
    right:25,
    top:30,
  },
  coupon:{
    marginTop:-16,
    marginBottom:8,
    marginHorizontal:8,
    height:100,
    borderRadius:10,
    backgroundColor: '#ffffff',
    paddingHorizontal:16,
    paddingVertical:16,
    justifyContent:'center',
    elevation: 1

  },
  delivery:{
    elevation: 1,
    marginVertical:8,
    marginHorizontal:8,
    height:200,
    backgroundColor: '#FAC660',
    borderRadius:10,
    paddingHorizontal:16,
    paddingVertical:16,
    justifyContent:'space-between'
  },
  sectiontitle:{
    fontFamily:'Montserrat_700Bold',
    color:COLORS.primary,
    fontSize:16,
    lineHeight:19.5,
  },
  location:{
    elevation:4,
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor:"#ffffff",
    height:60,
    borderRadius:6,
    paddingVertical:8,
    paddingHorizontal:16,
    alignItems:'center',
  },
  locationHolder:{
    justifyContent:'space-between',
    height:40,
  },
  locationBig:{
    fontFamily:'Montserrat_600SemiBold',
    color:COLORS.primary,
    fontSize:16,
    lineHeight:16.5,
  },
  locationSmall:{
    fontFamily:'Montserrat_400Regular',
    color:COLORS.primary,
    fontSize:13,
    lineHeight:16.5,
  },
  changeadd:{
    fontFamily:'Montserrat_600SemiBold',
    color:COLORS.btnPrimary,
    fontSize:13,
    lineHeight:16.5,
  }
  
})