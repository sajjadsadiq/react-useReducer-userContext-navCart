import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const {
    state,
  } = useProducts()
  const products = state.products
  console.log(products);
  return <div>
    {
      products.map(product => <ProductCard product={product}/>)
    }
  </div>;
};

export default Home;
