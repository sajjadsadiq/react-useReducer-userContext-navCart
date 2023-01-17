import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const { products } = useProducts();
  console.log(products);
  return <div>Home</div>;
};

export default Home;
