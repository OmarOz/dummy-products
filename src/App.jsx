import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/productDetails/:id"
            element={<ProductDetails />}
          />
          <Route exact path="/add" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
