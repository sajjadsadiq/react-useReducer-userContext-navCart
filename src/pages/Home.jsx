import React from "react";
import { useProducts } from "../App";

const Home = () => {
  const { products } = useProducts();
  console.log(products);

  return <div>Home</div>;
};

export default Home;
