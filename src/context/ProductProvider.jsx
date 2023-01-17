import React, { Children, createContext, useEffect, useState } from "react";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const value = { products };
  return <PRODUCT_CONTEXT.provider value={value}>{Children}</PRODUCT_CONTEXT.provider>;
};

export default ProductProvider;
