import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
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
            <h2 className="mb-3">Create an account</h2>
            <p className="mb-4">Enter your details below</p>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control input-signin"
                  placeholder="Name"
                />
              </div>
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
              <button type="submit" className="btn btn-danger w-100 mt-2 mb-1">
                Create Account
              </button>

              <button
                type="button"
                className="btn mt-3 w-100 d-flex align-items-center justify-content-center signup-button"
              >
                <img
                  src="/Icon-Google.svg"
                  alt="Google"
                  width="20"
                  className="me-2"
                />
                Sign up with Google
              </button>

              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link to={"/login"} className="login-button">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
