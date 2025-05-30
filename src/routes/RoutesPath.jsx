import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Signin from "../signin/Signin";
import Login from "../login/Login";
import Cart from "../cart/Cart";
import WishList from "../wishlist/WishList";
import ProtectRoutePaths from "./ProtectRoutePaths";

export default function RoutesPath() {
  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectRoutePaths>
              <Home />
            </ProtectRoutePaths>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectRoutePaths>
              <About />{" "}
            </ProtectRoutePaths>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectRoutePaths>
              <Contact />{" "}
            </ProtectRoutePaths>
          }
        />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <ProtectRoutePaths>
              <Cart />{" "}
            </ProtectRoutePaths>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectRoutePaths>
              <WishList />
            </ProtectRoutePaths>
          }
        />
      </Routes>
    </div>
  );
}
