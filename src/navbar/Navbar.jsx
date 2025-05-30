import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const isAuthenticated = localStorage.getItem("isLogged") === "true";
  const hideIconsOnPaths = ["/sign-in", "/login"];
  const shouldHideIcons = hideIconsOnPaths.includes(location.pathname);

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    setShowDropdown(false);
    window.location.href = "/sign-in";
  };

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
              {!shouldHideIcons && (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-item text-decoration-none text-dark ${
                        isActive ? "active-link" : ""
                      }`
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-item text-decoration-none text-dark ${
                        isActive ? "active-link" : ""
                      }`
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-item text-decoration-none text-dark ${
                        isActive ? "active-link" : ""
                      }`
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </>
              )}
            </div>

            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              {/* Search bar */}
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

              {!shouldHideIcons && (
                <>
                  <NavLink to="/wishlist">
                    <img
                      src="WishlistImg.svg"
                      alt="Wishlist"
                      style={{ width: "32px", height: "32px" }}
                    />
                  </NavLink>

                  <NavLink to="/cart">
                    <img
                      src="CartImg.svg"
                      alt="Cart"
                      style={{ width: "32px", height: "32px" }}
                    />
                  </NavLink>

                  {isAuthenticated && (
                    <div style={{ position: "relative" }}>
                      <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src="user.svg"
                          alt="My Account"
                          style={{ width: "32px", height: "32px" }}
                        />
                      </button>

                      {showDropdown && (
                        <ul
                          style={{
                            position: "absolute",
                            top: "40px",
                            right: 0,
                            listStyle: "none",
                            margin: 0,
                            padding: "10px",
                            backgroundColor: "white",
                            border: "1px solid #ddd",
                            borderRadius: "5px",
                            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                            zIndex: 1000,
                          }}
                        >
                          <li>
                            <button
                              onClick={handleLogout}
                              style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "5px 10px",
                                width: "100%",
                                textAlign: "left",
                              }}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
