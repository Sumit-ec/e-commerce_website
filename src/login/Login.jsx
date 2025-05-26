import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mt-3 pb-5 mb-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-8 d-flex justify-content-center justify-content-md-start">
          <div className="text-center text-md-start">
            <img
              src="/sigin-img.svg"
              alt="Sign in illustration"
              className="img-fluid pe-md-5 pt-5 signin-image"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="col-md-4 d-flex align-items-center">
          <div className="w-100 p-5">
            <h2 className="mb-3">Login to Exclusive</h2>
            <p className="mb-4">Enter your details below</p>

            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control input-signin"
                  placeholder="Email or Phone Number"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control input-signin"
                  placeholder="Password"
                />
              </div>

              {/* Button Row: Log In and Forget Password */}
              <div className="d-flex justify-content-between align-items-center">
                <button type="submit" className="btn custom-login-btn">
                  Log In
                </button>
                <Link
                  to="/forgot-password"
                  className="text-danger text-decoration-none ms-3"
                >
                  Forget Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
