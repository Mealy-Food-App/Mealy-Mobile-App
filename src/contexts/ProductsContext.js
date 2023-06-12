import React, { createContext, useState } from 'react';

// Create the initial state of the product catalog
const initialProductCatalog = [];

// Create the ProductContext
export const ProductsContext = createContext();

// Create the ProductProvider component
export const ProductsProvider = ({ children }) => {
  // Define the state for the product catalog
  const [productCatalog, setProductCatalog] = useState(initialProductCatalog);

  // Create a function to update the product catalog
  const updateProductCatalog = (newCatalog) => {
    setProductCatalog(newCatalog);
  };

  // Create the context value
  const contextValue = {
    productCatalog,
    updateProductCatalog,
  };

  // Provide the context value to the children components
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};