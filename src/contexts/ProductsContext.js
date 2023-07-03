import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';


const BASE_URL= 'https://mealy-backend-app.onrender.com/api/mealy'

// Create the ProductContext
export const ProductsContext = createContext();

// Create the ProductProvider component
export const ProductsProvider = ({ children }) => {
  // Create the initial state of the products catalog
  const initialProducts = [];
  const initialCategories = [];
  const initialRestaurants = [];
  const initialOffers = [];

  // Define the state for the products
  const [products, setProducts] = useState(initialProducts);
  const [categories, setCategories] = useState(initialCategories);
  const [restaurants, setRestaurants] = useState(initialRestaurants)
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [restaurantsLoaded, setRestaurantsLoaded] = useState(false);


  useEffect(() => {
    getCategories();
    getProducts();
    getRestaurants();
  }, []);

  // Create a function to update the products
  const getCategories = async () => {
    const res = await axios.get(`${BASE_URL}/home/categories`);
    setCategories(res.data.data);
    setCategoriesLoaded(true);
  }
  const getProducts = async () => {
    const res = await axios.get(`${BASE_URL}/product/products`);
    setProducts(res.data.data);
    setProductsLoaded(true);
  }
  const getRestaurants = async () => {
    const res = await axios.get(`${BASE_URL}/home/list/restaurants`);
    console.log(res.data.data[0])
    setRestaurants(res.data.data);
    setRestaurantsLoaded(true);
    
  }

  // Create the context value
  
  const contextValue = {
    products,
    productsLoaded,
    categories,
    categoriesLoaded,
    restaurants,
    restaurantsLoaded,

    // restaurants,
    // mealOftheday,
    getRestaurants,
    getCategories,
    getProducts
  };

  // Provide the context value to the children components
  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};