import { StyleSheet, StatusBar, View, Image, Text, TextInput, TouchableOpacity,FlatList, TouchableWithoutFeedback } from 'react-native';
import React, { useContext, useState, useRef } from 'react';
import TripletHeader from '../components/TripletHeader';
import ScreenHeader from '../components/ScreenHeader';
import { CartContext } from '../contexts/CartContext';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import Unauth from '../components/Unauth';
import Empty from '../components/Empty';
import { SwipeListView } from 'react-native-swipe-list-view';
import CartItem from '../components/CartItem';
import TotalPrice from '../components/TotalPrice';
import { Formik, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import { Pressable } from 'react-native';
import CartRadioButtons from '../components/CartRadioButtons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LocationContext } from '../contexts/LocationContext';
const COLORS = { primary: '#00205C', btnPrimary: '#E69F14', bgPrimary: '#F5F5F5' }


const CartScreen = () => {
  const { isLoggedIn, userData, status, login } = useContext(AuthContext);
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [selectedOption, setSelectedOption] = useState('Home Delivery');
  const  {userAddress } = useContext(LocationContext);
  const flatListRef = useRef(null)

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const onNavigate = useNavigation();
  const handleDeleteItem = (itemId) => {
    removeFromCart(itemId);
  };
  const userInput = {
    width: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 8,
    fontFamily: 'Poppins_400Regular',
    flexDirection: 'row',
    height: 48,
    marginVertical: 16,
  };
  const userInputText = {
    width: '80%',
    fontFamily: 'Poppins_400Regular',
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: COLORS.primary,
  };
  const codeButton = {
    position: 'absolute',
    top: -1,
    right: -1,
    height: 48,
    width: 80,
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: 'center',
  };
  const codeButtonText = {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
  };

  const insets = useSafeAreaInsets();

  return (
    <>
      {isLoggedIn ? (
        cartItems.length == 0 ? (
          <View style={[styles.otherContainer, { paddingTop: insets.top }]}>
            <ScreenHeader props={{ title: 'Cart' }} />
            <Empty props={{ message: "Looks like you haven't added anything to your cart yet" }} />
          </View>
        ) : (
        <>
          <View style={[styles.header,{ paddingTop:insets.top}]} >
            <TripletHeader props={{ title: 'Your Cart' }} />
          </View>

          <FlatList
            ref={flatListRef} 
            style={styles.container}
            data={
            [
              {key: 'cart'},
              { key: 'coupon' },
              { key: 'delivery' },
              { key: 'totalPrice' },
            ]}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              if (item.key === 'cart'){
                return (
                  <View style={[{backgroundColor:'rgba(0, 32, 92, 0.9)'}]} >
                  <SwipeListView
                    data={cartItems}
                    scrollToOverflowEnabled ={true}
                    disableRightSwipe={true}
                    rightOpenValue={-105}
                    useFlatList={true}
                    style={{
                      elevation:3,
                      paddingTop: 2,
                      paddingBottom:8,
                      height: 400,
                      backgroundColor: '#ffffff',
                      borderBottomRightRadius:12,
                      borderBottomLeftRadius: 12,
                      borderTopRightRadius:12,
                      borderTopLeftRadius: 12,
                      paddingHorizontal: 8,
                      marginHorizontal: 8,
                      marginBottom:32,
                      marginTop:8

                    }}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => {
                      return <CartItem OrderItem={item} key = {index}/>;
                    }}
                    renderHiddenItem={(data, rowMap) => (
                      <View style={styles.hiddenDelete}>
                          <TouchableOpacity onPressIn={() => handleDeleteItem(data.item.id)}>
                            <Image source={require('../assets/icons/delete.png')} style={styles.hiddenDeleteIcon} />
                          </TouchableOpacity>
                        </View>
                        )}
                  />
              </View>
                )
              }else if (item.key === 'coupon') {
                return (
                  <View style={styles.coupon}>
                    <Formik
                      initialValues={{
                        code: '',
                      }}
                      onSubmit={(values) => handleCoupon(values)}
                      validationSchema={yup.object().shape({
                        code: yup.string().required('Enter coupon code'),
                      })}
                    >
                      {({ values, handleChange, setFieldValue, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <View>
                          <View style={userInput}>
                            <TextInput
                              value={values.code}
                              style={userInputText}
                              onChangeText={handleChange('code')}
                              placeholder="Enter coupon code"
                            />
                            <Pressable style={codeButton}>
                              <Text style={codeButtonText}>Apply</Text>
                            </Pressable>
                          </View>
                        </View>
                      )}
                    </Formik>
                  </View>
                );
              } else if (item.key === 'delivery') {
                return (
                  <View style={styles.delivery}>
                    <Text style={styles.sectiontitle}>Delivery Option</Text>
                    <CartRadioButtons options={['Home Delivery', 'Pick up']} selectedOption={selectedOption} onSelect={handleSelectOption} />
                    <View style={styles.location}>
                      <View style={styles.locationHolder}>
                        <Text style={styles.locationBig}>Nairobi</Text>
                        <Text style={styles.locationSmall}>{userData.deliveryAddress ? userData.deliveryAddress : userAddress}</Text>
                      </View>
                      <Pressable>
                        <Text style={styles.changeadd}>Change Address</Text>
                      </Pressable>
                    </View>
                  </View>
                );
              } else if (item.key === 'totalPrice') {
                return <TotalPrice />;
              }
              return null;
            }}
            keyExtractor={(item) => item.key}
          />
          </>
        )
      ) : (
        <View style={[styles.otherContainer, { paddingTop: insets.top }]}>
          <ScreenHeader props={{ title: 'Cart' }} />
          <Unauth props={{ message: "View your previous session cart items. By logging in you can access items in your cart" }} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding:0,
    marginTop:StatusBar.currentHeight + 40 ,
  },
  header: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  otherContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    flex: 1,
  },
  paddingContainer: {
    paddingHorizontal: 24,
  },
  hiddenDelete: {
    borderRadius: 12,
    backgroundColor: '#FFEBEB',
    width: '95%',
    height: 100,
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: 8,
  },
  hiddenDeleteIcon: {
    tintColor: 'red',
    width: 20,
    height: 30,
    position: 'absolute',
    right: 25,
    top: 30,
  },
  coupon: {
    elevation:1,
    marginTop: -20,
    marginBottom: 8,
    marginHorizontal: 8,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  delivery: {
    marginVertical: 8,
    marginHorizontal: 8,
    height: 200,
    backgroundColor: '#FAC660',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  sectiontitle: {
    fontFamily: 'Montserrat_700Bold',
    color: COLORS.primary,
    fontSize: 16,
    lineHeight: 19.5,
  },
  location: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 60,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  locationHolder: {
    justifyContent: 'space-between',
    height: 40,
  },
  locationBig: {
    fontFamily: 'Montserrat_600SemiBold',
    color: COLORS.primary,
    fontSize: 16,
    lineHeight: 16.5,
  },
  locationSmall: {
    fontFamily: 'Montserrat_400Regular',
    color: COLORS.primary,
    fontSize: 13,
    lineHeight: 16.5,
  },
  changeadd: {
    fontFamily: 'Montserrat_600SemiBold',
    color: COLORS.btnPrimary,
    fontSize: 13,
    lineHeight: 16.5,
  },
});

export default CartScreen;







// import { StyleSheet, StatusBar, View, Image, Text, TextInput, TouchableOpacity,FlatList, TouchableWithoutFeedback } from 'react-native';
// import React, { useContext, useState, useRef } from 'react';
// import TripletHeader from '../components/TripletHeader';
// import ScreenHeader from '../components/ScreenHeader';
// import { CartContext } from '../contexts/CartContext';
// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../contexts/AuthContext';
// import Unauth from '../components/Unauth';
// import Empty from '../components/Empty';
// import { SwipeListView } from 'react-native-swipe-list-view';
// import CartItem from '../components/CartItem';
// import TotalPrice from '../components/TotalPrice';
// import { Formik, yupToFormErrors } from 'formik';
// import * as yup from 'yup';
// import { Pressable } from 'react-native';
// import CartRadioButtons from '../components/CartRadioButtons';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { LocationContext } from '../contexts/LocationContext';
// const COLORS = { primary: '#00205C', btnPrimary: '#E69F14', bgPrimary: '#F5F5F5' }


// const CartScreen = () => {
//   const { isLoggedIn, userData, status, login } = useContext(AuthContext);
//   const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
//   const [selectedOption, setSelectedOption] = useState('Home Delivery');
//   const  {userAddress } = useContext(LocationContext);
//   const flatListRef = useRef(null)

//   const handleEndReached = () => {
//     // When the end of the SwipeListView is reached, scroll the FlatList
//     flatListRef.current.scrollToIndex({
//       animated: true,
//       index: 1, // Index of the item you want to scroll to in the FlatList
//     });
//   };

//   const handleSelectOption = (option) => {
//     setSelectedOption(option);
//   };

//   const onNavigate = useNavigation();
//   const onPressShop = () => {
//     onNavigate.navigate('Main');
//   };
//   const handleClearCart = () => {
//     clearCart();
//   };
//   const handleDeleteItem = (itemId) => {
//     removeFromCart(itemId);
//   };
//   const userInput = {
//     width: '100%',
//     backgroundColor: '#ffffff',
//     borderWidth: 1,
//     borderColor: '#d6d6d6',
//     borderRadius: 8,
//     fontFamily: 'Poppins_400Regular',
//     flexDirection: 'row',
//     height: 48,
//     marginVertical: 16,
//   };
//   const userInputText = {
//     width: '80%',
//     fontFamily: 'Poppins_400Regular',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     color: COLORS.primary,
//   };
//   const codeButton = {
//     position: 'absolute',
//     top: -1,
//     right: -1,
//     height: 48,
//     width: 80,
//     backgroundColor: COLORS.primary,
//     borderBottomRightRadius: 8,
//     borderTopRightRadius: 8,
//     justifyContent: 'center',
//   };
//   const codeButtonText = {
//     color: 'white',
//     textAlign: 'center',
//     fontFamily: 'Poppins_400Regular',
//   };

//   const insets = useSafeAreaInsets();

//   return (
//     <>
//       {isLoggedIn ? (
//         cartItems.length == 0 ? (
//           <View style={[styles.otherContainer, { paddingTop: insets.top }]}>
//             <ScreenHeader props={{ title: 'Cart' }} />
//             <Empty props={{ message: "Looks like you haven't added anything to your cart yet" }} />
//           </View>
//         ) : (
//         <>
//           <View style={[styles.header,{ paddingTop:insets.top}]} >
//             <TripletHeader props={{ title: 'Your Cart' }} />
//           </View>
//           <View style={[styles.container, {backgroundColor:'rgba(0, 32, 92, 0.9)'}]} >
//                     <SwipeListView
//                       data={cartItems}
//                       scrollToOverflowEnabled ={true}
//                       disableRightSwipe={true}
//                       rightOpenValue={-105}
//                       useFlatList={true}
//                       onEndReached={handleEndReached} 
//                       style={{
//                         elevation:3,
//                         paddingTop: 2,
//                         paddingBottom:8,
//                         height: 400,
//                         backgroundColor: '#ffffff',
//                         borderBottomRightRadius:12,
//                         borderBottomLeftRadius: 12,
//                         borderTopRightRadius:12,
//                         borderTopLeftRadius: 12,
//                         paddingHorizontal: 8,
//                         marginHorizontal: 8,
//                         marginBottom:32,
//                         marginTop:8

//                       }}
//                       keyExtractor={(item) => item.id.toString()}
//                       renderItem={({ item, index }) => {
//                         return <CartItem OrderItem={item} key = {index}/>;
//                       }}
//                       renderHiddenItem={(data, rowMap) => (
//                         <View style={styles.hiddenDelete}>
//                             <TouchableOpacity onPressIn={() => handleDeleteItem(data.item.id)}>
//                               <Image source={require('../assets/icons/delete.png')} style={styles.hiddenDeleteIcon} />
//                             </TouchableOpacity>
//                           </View>
//                           )}
//                     />
//                 </View>
//           <FlatList
//             ref={flatListRef} 
//             style={{marginTop:-24}}
//             data={
//             [
//               {key: 'cart'},
//               { key: 'coupon' },
//               { key: 'delivery' },
//               { key: 'totalPrice' },
//             ]}
//             showsVerticalScrollIndicator={false}
//             renderItem={({ item }) => {
//               if (item.key === 'cart'){
//                 return null;
//               }else if (item.key === 'coupon') {
//                 return (
//                   <View style={styles.coupon}>
//                     <Formik
//                       initialValues={{
//                         code: '',
//                       }}
//                       onSubmit={(values) => handleCoupon(values)}
//                       validationSchema={yup.object().shape({
//                         code: yup.string().required('Enter coupon code'),
//                       })}
//                     >
//                       {({ values, handleChange, setFieldValue, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
//                         <View>
//                           <View style={userInput}>
//                             <TextInput
//                               value={values.code}
//                               style={userInputText}
//                               onChangeText={handleChange('code')}
//                               placeholder="Enter coupon code"
//                             />
//                             <Pressable style={codeButton}>
//                               <Text style={codeButtonText}>Apply</Text>
//                             </Pressable>
//                           </View>
//                         </View>
//                       )}
//                     </Formik>
//                   </View>
//                 );
//               } else if (item.key === 'delivery') {
//                 return (
//                   <View style={styles.delivery}>
//                     <Text style={styles.sectiontitle}>Delivery Option</Text>
//                     <CartRadioButtons options={['Home Delivery', 'Pick up']} selectedOption={selectedOption} onSelect={handleSelectOption} />
//                     <View style={styles.location}>
//                       <View style={styles.locationHolder}>
//                         <Text style={styles.locationBig}>Nairobi</Text>
//                         <Text style={styles.locationSmall}>{userData.deliveryAddress ? userData.deliveryAddress : userAddress}</Text>
//                       </View>
//                       <Pressable>
//                         <Text style={styles.changeadd}>Change Address</Text>
//                       </Pressable>
//                     </View>
//                   </View>
//                 );
//               } else if (item.key === 'totalPrice') {
//                 return <TotalPrice />;
//               }
//               return null;
//             }}
//             keyExtractor={(item) => item.key}
//           />
//           </>
//         )
//       ) : (
//         <View style={[styles.otherContainer, { paddingTop: insets.top }]}>
//           <ScreenHeader props={{ title: 'Cart' }} />
//           <Unauth props={{ message: "View your previous session cart items. By logging in you can access items in your cart" }} />
//         </View>
//       )}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     backgroundColor: '#ffffff',
//     padding:0,
//     marginTop:StatusBar.currentHeight + 40,
//   },
//   header: {
//     position:'absolute',
//     top:0,
//     left:0,
//     right:0,
//     paddingHorizontal: 24,
//     backgroundColor: '#ffffff',
//   },
//   otherContainer: {
//     width: '100%',
//     backgroundColor: '#ffffff',
//     paddingHorizontal: 24,
//     flex: 1,
//   },
//   paddingContainer: {
//     paddingHorizontal: 24,
//   },
//   hiddenDelete: {
//     borderRadius: 12,
//     backgroundColor: '#FFEBEB',
//     width: '95%',
//     height: 100,
//     flexDirection: 'column',
//     textAlign: 'center',
//     marginTop: 8,
//   },
//   hiddenDeleteIcon: {
//     tintColor: 'red',
//     width: 20,
//     height: 30,
//     position: 'absolute',
//     right: 25,
//     top: 30,
//   },
//   coupon: {
//     elevation:1,
//     marginTop: 4,
//     marginBottom: 8,
//     marginHorizontal: 8,
//     height: 100,
//     borderRadius: 10,
//     backgroundColor: '#ebebeb',
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     justifyContent: 'center',
//   },
//   delivery: {
//     marginVertical: 8,
//     marginHorizontal: 8,
//     height: 200,
//     backgroundColor: '#FAC660',
//     borderRadius: 10,
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     justifyContent: 'space-between',
//   },
//   sectiontitle: {
//     fontFamily: 'Montserrat_700Bold',
//     color: COLORS.primary,
//     fontSize: 16,
//     lineHeight: 19.5,
//   },
//   location: {
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     height: 60,
//     borderRadius: 6,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     alignItems: 'center',
//   },
//   locationHolder: {
//     justifyContent: 'space-between',
//     height: 40,
//   },
//   locationBig: {
//     fontFamily: 'Montserrat_600SemiBold',
//     color: COLORS.primary,
//     fontSize: 16,
//     lineHeight: 16.5,
//   },
//   locationSmall: {
//     fontFamily: 'Montserrat_400Regular',
//     color: COLORS.primary,
//     fontSize: 13,
//     lineHeight: 16.5,
//   },
//   changeadd: {
//     fontFamily: 'Montserrat_600SemiBold',
//     color: COLORS.btnPrimary,
//     fontSize: 13,
//     lineHeight: 16.5,
//   },
// });

// export default CartScreen;
