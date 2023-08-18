import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../component/Product";
const Home = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect((e) => {
    async function fetchData() {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      setProduct(response.data.products);
      setLoading(false);
      return response;
    }
    fetchData();
  }, []);
  return (
    <div className="Home">{!loading && <Products product={product} />}</div>
  );
};

export default Home;
