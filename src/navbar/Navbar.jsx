import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 mt-3">
      <div className="container-fluid d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
        <div className="d-flex w-100 w-md-50 justify-content-between align-items-center mb-2 mb-lg-0">
          <NavLink className="navbar-brand fw-bold fs-4 text-nav" to="/">
            Exclusive
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse w-100" id="navbarNav">
          <div className="d-flex flex-column flex-lg-row w-100 justify-content-between align-items-start align-items-lg-center">
            <div className="d-flex flex-column flex-lg-row gap-4 mt-3 mt-lg-0">
              <NavLink
                className={({ isActive }) =>
                  `nav-item text-decoration-none text-dark fs-5 ${
                    isActive ? "active-link" : ""
                  }`
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-item text-decoration-none text-dark fs-5 ${
                    isActive ? "active-link" : ""
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-item text-decoration-none text-dark fs-5 ${
                    isActive ? "active-link" : ""
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-item text-decoration-none text-dark fs-5 ${
                    isActive ? "active-link" : ""
                  }`
                }
                to="/sign-in"
              >
                Sign In
              </NavLink>
            </div>

            <div className="mt-3 mt-lg-0">
              <div className="input-group" style={{ maxWidth: "243px" }}>
                <input
                  type="text"
                  className="form-control nav-item"
                  style={{ backgroundColor: "#F5F5F5", border: "none" }}
                  placeholder="What are you looking for?"
                />
                <span className="input-group-text border-0">
                  <img
                    src="/search_img.svg"
                    alt="Search"
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
