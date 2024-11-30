import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark/src/bootstrap-dark.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./components/ContextReducer.jsx";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup.jsx";
import MyOrder from "./screens/MyOrder.jsx";

const App = () => {
  return (
    <>
      <CartProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myOrder" element={<MyOrder />} />
          </Routes>
        </div>
        <Toaster />
      </CartProvider>
    </>
  );
};

export default App;
