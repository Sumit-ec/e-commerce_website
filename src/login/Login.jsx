import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const validUser = [
  { email: "sumit@gmail.com", password: "sumit123" },
  { email: "vikash@gmail.com", password: "vikash456" },
  { email: "aariz@gmail.com", password: "aariz789" },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const redirect = useNavigate();

  const buttonSubmit = (e) => {
    e.preventDefault();

    let user = validUser.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      const localUser = JSON.parse(localStorage.getItem("user"));
      if (
        localUser &&
        localUser.email === email &&
        localUser.password === password
      ) {
        user = localUser;
      }
    }

    if (user) {
      setLoginError("");
      localStorage.setItem("isLogged", "true");
      redirect("/home");
    } else {
      setLoginError("Invalid email or password. Please try again or sign up.");
    }
  };

  return (
    <div className="mt-3 pb-5 mb-5">
      <div className="row">
        <div className="col-md-8 d-flex justify-content-center justify-content-md-start">
          <div className="text-center text-md-start">
            <img
              src="/sigin-img.svg"
              alt="Sign in illustration"
              className="img-fluid pe-md-5 pt-5 signin-image"
            />
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-center">
          <div className="w-100 p-5">
            <h2 className="mb-3">Log in to Exclusive</h2>
            <p className="mb-4">Enter your details below</p>

            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control input-signin"
                  placeholder="Email or Phone Number"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  value={email}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control input-signin"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              {loginError && (
                <div className="mb-3">
                  <small className="text-danger">{loginError}</small>
                </div>
              )}

              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="submit"
                  className="btn custom-login-btn"
                  onClick={buttonSubmit}
                >
                  Log In
                </button>
                <Link
                  to="/forgot-password"
                  className="text-danger text-decoration-none ms-3"
                >
                  Forget Password?
                </Link>
              </div>

              <div className="pt-3 d-flex">
                <p>Create a new account </p>
                <Link to="/sign-in" className="ms-2 ">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
