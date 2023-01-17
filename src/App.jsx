import React, { createContext, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";

const PRODUCT_CONTEXT = createContext();

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const value = { products };

  return (
    <div style={{ padding: "40px 100px" }}>
      <PRODUCT_CONTEXT.Provider value={value}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </PRODUCT_CONTEXT.Provider>
    </div>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default App;
