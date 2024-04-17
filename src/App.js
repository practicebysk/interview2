import logo from "./logo.svg";
import "./App.css";
import Product from "./Products/Product";
import { Route, Routes } from "react-router-dom";
import BuyProduct from "./Products/BuyProduct";
import Registration from "./Auth/Registration";
import { useEffect } from "react";
import Login from "./Auth/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
        <Route path="/buyProductList" element={<BuyProduct />} />
      </Routes>
    </div>
  );
}

export default App;
