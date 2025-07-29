import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductsPage from './pages/Product';    // <-- Be sure this name matches your actual file/component!
import CategoryPage from './pages/Category';    // <-- Same here
import ProductPage from './pages/Product';      // <-- and here
import CartPage from './pages/Cart';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

export const CartContext = React.createContext();

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />

        <Route path="*" element={<h2>404 - Not found</h2>} />
      </Routes>
    </CartContext.Provider>
  );
}
