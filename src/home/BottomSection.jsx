import React from "react";

export default function BottomSection() {
  return (
    <div>
      <div className="row text-center my-5 justify-content-center px-5">
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
