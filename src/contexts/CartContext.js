// CartContext.js
import React, { createContext, useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCart = [];

  const [cartItems, setCartItems] = useState(initialCart);
  const getTotalPrice =()=>{
    let tempPrice = 0;
    if (cartItems.length > 0){      
      for(let i = 0; i <= cartItems.length - 1; i++){
          tempPrice += cartItems[i].total ;
      }      
    }
    return (tempPrice);
  }
  const [finalTotal, setFinalTotal] = useState(getTotalPrice());
  useEffect(() => {
    setFinalTotal(getTotalPrice());
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: item.quantity,total: (item.total) };
        }
        return cartItem;
      });
      setCartItems(updatedItems);
    } else {
      // If the item is new, add it to the cart 
      setCartItems([...cartItems, item]);
    }   
    
  };

  const increaseQuantity =(item)=> {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1, total: (cartItem.total += cartItem.itemPrice)};
        }
        return cartItem;
      });
      setCartItems(updatedItems); 
    }
  }
  const decreaseQuantity =(item)=> {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          if (cartItem.quantity >= 2){
            return { ...cartItem, quantity: cartItem.quantity - 1 ,total: (cartItem.total -= cartItem.itemPrice)};
          }           
        }
        return cartItem;
      });
      setCartItems(updatedItems);  
    }
  }
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    setCartItems(updatedCartItems); 
  };


  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        finalTotal,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
