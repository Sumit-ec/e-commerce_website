import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="container py-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb top-nav">
          <li className="breadcrumb-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact
          </li>
        </ol>
      </nav>

      <div className="row mt-5">
        <div className="col-md-4 mb-4 contact-container">
          <div className="mb-4 detail-contact">
            <div className="d-flex align-items-start mb-2">
              <img
                src="icons-phone.svg"
                alt="Phone Icon"
                width="40px"
                className="me-2 mt-1"
              />
              <h5 className="call-us mt-3">Call To Us</h5>
            </div>
            <p className="call-details">
              We are available 24/7, 7 days a week.
            </p>
            <p className="call-details">Phone: +8801611112222</p>
          </div>

          <div>
            <div className="d-flex align-items-start mb-2">
              <img
                src="icons-mail.svg"
                alt="Mail Icon"
                width="40"
                className="me-2 mt-1"
              />
              <h5 className="call-details mt-3">Write To Us</h5>
            </div>
            <p className="call-details">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="call-details">Emails:customer@exclusive.com</p>
            <p className="call-details">Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="col-md-8">
          <form>
            <div className="row mb-3 d-flex justify-content-between">
              <div className="col-md-12 col-lg-3 mb-2">
                <input
                  type="text"
                  className="form-control color-bg"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="col-md-12 col-lg-3 mb-2">
                <input
                  type="email"
                  className="form-control color-bg"
                  placeholder="Your Email *"
                  required
                />
              </div>
              <div className="col-md-12 col-lg-3 mb-2">
                <input
                  type="tel"
                  className="form-control color-bg"
                  placeholder="Your Phone *"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <textarea
                className="form-control color-bg"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-danger px-4 button-submit"
              style={{ borderRadius: "4px" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
