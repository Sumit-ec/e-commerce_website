import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section text-white pt-5 pb-4 ps-3">
      <div className="container text-md-left">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-4 fw-bold">Exclusive</h5>
            <p>
              <strong>Subscribe</strong>
            </p>
            Get 10% off your first order
            <div className="form-footer d-flex align-items-center subscribe-form mt-3 input-group">
              <input
                type="email"
                className="form-control custom-email-input"
                style={{ background: "transparent", color: "white" }}
                placeholder="Enter your email"
              />
              <button className="btn p-2 ms-2 input-group-text" type="submit">
                <img src="/icon-send.png" alt="Send" />
              </button>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-4 fw-bold">Support</h5>
            <p>
              111 Bijoy Sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </p>
            <p>Email: exclusive@gmail.com</p>
            <p>Phone: +88015-88888-9999</p>
          </div>

          <div className="col-md-2 col-sm-6 mb-4">
            <h5 className="mb-4 fw-bold">Account</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  My Account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Login / Register
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Cart
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Wishlist
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 col-sm-6 mb-4">
            <h5 className="mb-4 fw-bold">Quick Link</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Terms Of Use
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 col-sm-6 mb-4">
            <h5 className="mb-4 fw-bold">Download App</h5>
            <p className="download-para">Save $3 with App New User Only</p>
            <div className="d-flex flex-column flex-sm-row align-items-center">
              <div className="me-sm-3 mb-3 mb-sm-0">
                <img src="/Qrcode 1.svg" alt="QR Code" className="img-fluid" />
              </div>
              <div className="footer-logo text-center text-sm-start">
                <img
                  src="/google_store.svg"
                  alt="Google Play"
                  className="mb-2 img-fluid"
                />
                <img
                  src="/download-appstore.svg"
                  alt="App Store"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="footer-text">
            <p className="bottom-text mb-0 text-center">
              <img src="Group.svg" alt="group" className="pe-2" />
              Copyright Rimel 2022. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
