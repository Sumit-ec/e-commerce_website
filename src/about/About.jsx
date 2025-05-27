import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container-fluid my-5 px-0">
      <nav aria-label="breadcrumb" className="ps-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About
          </li>
        </ol>
      </nav>

      <div className="row align-items-center mt-4 g-0">
        <div className="col-md-6 ps-5 text-container">
          <h1 className="head-text mb-4">Our Story</h1>
          <p className="head-body">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands, serving 3 million
            customers across the region.
          </p>
          <p className="head-body">
            Exclusive offers more than 1 million products and is growing
            rapidly. We provide a diverse assortment across categories ranging
            from consumer electronics to everyday essentials.
          </p>
        </div>
        <div className="col-md-6 p-0">
          <img
            src="About-Side-Image.svg"
            alt="Shopping Experience"
            className="img-fluid w-100 img-screen"
          />
        </div>
      </div>

      <div className="row text-center mt-5 justify-content-center mx-5">
        <div className="col-md-3 mb-4 card-size">
          <div className="about-card p-4 border border-primary">
            <img src="Services_1.svg" alt="Sellers" className="mb-3" />
            <h4 className="about-number">10.5k</h4>
            <p className="about-label">Sellers active our site</p>
          </div>
        </div>

        <div className="col-md-3 mb-4 card-size">
          <div className="about-card p-4 highlighted-card bg-danger text-white">
            <img src="Services_2.svg" alt="Monthly Sale" className="mb-3" />
            <h4 className="about-number">33k</h4>
            <p className="about-label">Monthly Product Sale</p>
          </div>
        </div>

        <div className="col-md-3 mb-4 card-size">
          <div className="about-card p-4 border border-primary">
            <img src="Services_3.svg" alt="Customers" className="mb-3" />
            <h4 className="about-number">45.5k</h4>
            <p className="about-label">Customer active in our site</p>
          </div>
        </div>

        <div className="col-md-3 mb-4 card-size">
          <div className="about-card p-4 border border-primary">
            <img src="Services_4.svg" alt="Annual Sale" className="mb-3" />
            <h4 className="about-number">25k</h4>
            <p className="about-label">Annual gross sale in our site</p>
          </div>
        </div>
      </div>

      <div className="row mt-5 justify-content-center mx-5 text-center">
        <div className="col-md-4 mb-5">
          <img
            src="Tome-Cruise.svg"
            alt="Tom Cruise"
            className="img-fluid mb-3"
          />
          <h5 className="founder-details">Tom Cruise</h5>
          <p className="founder-position">Founder & Chairman</p>
          <div className="d-flex justify-content-center gap-3">
            <img src="Icon-Twitter.svg" alt="Twitter" />
            <img src="icon-instagram.svg" alt="Instagram" />
            <img src="Icon-Linkedin.svg" alt="LinkedIn" />
          </div>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="Emma-Watson.svg"
            alt="Emma Watson"
            className="img-fluid mb-3"
          />
          <h5 className="founder-details">Emma Watson</h5>
          <p className="founder-position">Managing Director</p>
          <div className="d-flex justify-content-center gap-3">
            <img src="Icon-Twitter.svg" alt="Twitter" />
            <img src="icon-instagram.svg" alt="Instagram" />
            <img src="Icon-Linkedin.svg" alt="LinkedIn" />
          </div>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="Will-Smith.svg"
            alt="Will Smith"
            className="img-fluid mb-3"
          />
          <h5 className="founder-details">Will Smith</h5>
          <p className="founder-position">Product Designer</p>
          <div className="d-flex justify-content-center gap-3">
            <img src="Icon-Twitter.svg" alt="Twitter" />
            <img src="icon-instagram.svg" alt="Instagram" />
            <img src="Icon-Linkedin.svg" alt="LinkedIn" />
          </div>
        </div>
      </div>

      <div
        className="row text-center my-5 justify-content-center px-5"
        style={{ margin: "90px" }}
      >
        <div className="col-md-4 mb-4">
          <img
            src="About-Services-1.svg"
            alt="Free Delivery"
            className="mb-3"
          />
          <h6 className="bottom-section">FREE AND FAST DELIVERY</h6>
          <p className="text-bottom">Free delivery for all orders over $140</p>
        </div>

        <div className="col-md-4 mb-4">
          <img
            src="About-Services-2.svg"
            alt="Customer Service"
            className="mb-3"
          />
          <h6 className="bottom-section">24/7 CUSTOMER SERVICE</h6>
          <p className="text-bottom">Friendly 24/7 customer support</p>
        </div>

        <div className="col-md-4 mb-4">
          <img
            src="About-Services-3.svg"
            alt="Money Back Guarantee"
            className="mb-3"
          />
          <h6 className="bottom-section ">MONEY BACK GUARANTEE</h6>
          <p className="text-bottom">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}
