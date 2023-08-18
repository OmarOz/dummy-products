import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect((e) => {
    async function getDetails() {
      const response = await axios.get("https://dummyjson.com/products/" + id);
      console.log(response.data);
      setProduct(response.data);
      setLoading(false);
    }
    getDetails();
  }, []);
  return (
    <div className="ProductDetails">
      {!loading && (
        <div className="product">
          <img src={product.thumbnail} />
          <div className="title">{product.title}</div>
          <div className="description">{product.description}</div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
