import React, { createContext, useContext, useEffect, useState } from "react";

// PRODUCT CONTEXT
const RPODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  // Data Fatch API
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // State Data Value
  const value = {
    products,
  };
  return (
    <RPODUCT_CONTEXT.Provider value={value}>
      {children}
    </RPODUCT_CONTEXT.Provider>
  );
};

// Hook - useProducts
export const useProducts = () => {
  const context = useContext(RPODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
