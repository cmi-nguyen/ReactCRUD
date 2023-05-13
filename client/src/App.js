import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import UserPage from "./pages/user";
import ProductPage from "./pages/product";
import ProductDetail from "./pages/productDetail";
import ProductAddPage from "./pages/productAdd";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/add-product" element={<ProductAddPage />}></Route>
        <Route path="/product/:productID" element={<ProductDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
