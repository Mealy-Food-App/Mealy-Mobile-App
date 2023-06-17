import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';


const BASE_URL= 'https://mealy-backend-app.onrender.com/api/mealy'
// Create the initial state of the products catalog
const initialProducts = [];
const initialCategories = [];
const initialProductRestaurants = [];
const initialOffers = [];

// Create the ProductContext
export const ProductsContext = createContext();

// Create the ProductProvider component
export const ProductsProvider = ({ children }) => {
  // Define the state for the product catalog
  const [products, setProducts] = useState(initialProducts);
  const [categories, setCategories] = useState(initialCategories);

  useEffect(() => {
    getCategories();
  }, []);
  // Create a function to update the product catalog
  const getCategories = async () => {
    const res = await axios.get(`${BASE_URL}/home/categories`);
    setCategories(res.data.data);
  }

  // Create the context value
  const contextValue = {
    // products,
    categories,
    // restaurants,
    // mealOftheday,
    getCategories,
  };

  // Provide the context value to the children components
  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};