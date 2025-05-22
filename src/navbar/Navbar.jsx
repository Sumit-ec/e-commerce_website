import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container-fluid border-bottom py-3 px-4 bg-white">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <p className="fw-bold fs-1 ms-5 mt-4">Exclusive</p>

        <div className="d-flex gap-4 mt-3 align-items-center">
          <Link
            className="text-decoration-none text-dark fw-bolder fs-5"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="text-decoration-none text-dark fw-bolder fs-5"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-decoration-none text-dark fw-bolder fs-5"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-decoration-none text-dark fw-bolder fs-5"
            to="/sign-in"
          >
            Sign In
          </Link>
        </div>

        <div className="d-flex align-items-center mt-3">
          <div className="input-group" style={{ maxWidth: "250px" }}>
            <input
              type="text"
              className="form-control"
              style={{ backgroundColor: "#F5F5F5" }}
              placeholder="What are you looking for?"
            />
            <span className="input-group-text bg-white border-start-0">
              <span className="material-icons">search</span>
            </span>
          </div>
          {/* <Link to="/wishlist" className="text-decoration-none text-dark">
            <span className="material-icons"></span>
          </Link>
          <Link to="/cart" className="text-decoration-none text-dark">
            <span className="material-icons"></span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
