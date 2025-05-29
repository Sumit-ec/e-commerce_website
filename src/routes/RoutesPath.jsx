import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Signin from "../signin/Signin";
import Login from "../login/Login";
import Cart from "../cart/Cart";
import WishList from "../wishlist/WishList";

export default function RoutesPath() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}
