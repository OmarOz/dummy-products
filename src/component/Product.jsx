import React from "react";
import { Link } from "react-router-dom";
import "../style/Product.css";

const Products = ({ product }) => {
  return (
    <div className="Products">
      {product.map((e) => (
        <div className="product-preview">
          <Link to={`productDetails/${e.id}`}>
            <div className="image">
              <img src={e.thumbnail} />
            </div>
            <div className="title">{e.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
