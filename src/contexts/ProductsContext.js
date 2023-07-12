import React, { createContext, useState, useEffect } from 'react';
import { View,Text } from 'react-native';
import axios from 'axios';

const BASE_URL = 'https://mealy-backend-app.onrender.com/api/mealy';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children, initialData}) => {

  const [products, setProducts] = useState(initialData.products || []);
  const [categories, setCategories] = useState(initialData.categories || []);
  const [restaurants, setRestaurants] = useState(initialData.restaurants || []);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [restaurantsLoaded, setRestaurantsLoaded] = useState(false);

  useEffect(() => {

    if (products.length == 0 || categories.length == 0 || restaurants == 0){
        fetchData();
    }else{
      setCategoriesLoaded(true);
      setProductsLoaded(true);
      setRestaurantsLoaded(true);
    }
  }, []);

  const fetchData = async () => {
    try {
      const [categoriesResponse, productsResponse, restaurantsResponse] = await Promise.all([
        axios.get(`${BASE_URL}/home/categories`),
        axios.get(`${BASE_URL}/product/products`),
        axios.get(`${BASE_URL}/home/list/restaurants`),
      ]);

      setCategories(categoriesResponse.data.data);
      setCategoriesLoaded(true);

      setProducts(productsResponse.data.data);
      setProductsLoaded(true);

      setRestaurants(restaurantsResponse.data.data);
      setRestaurantsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = {
    products,
    productsLoaded,
    categories,
    categoriesLoaded,
    restaurants,
    restaurantsLoaded,
  };
  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
  
};
