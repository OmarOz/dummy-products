import { useEffect, useState } from "react";
import axios from "axios";
import "../style/Add.css";
const AddProduct = () => {
  //   const newProduct = [{ title: "tesla" }];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function addProduct(e) {
    e.preventDefault();
    const newProduct = { title, description };
    const response = axios.post(
      "https://dummyjson.com/products/add",
      newProduct
    );
    console.log(response);
    console.log("product added successfully", response);
  }

  return (
    <div className="AddProduct">
      <form onSubmit={addProduct}>
        <label>Product Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Product Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
