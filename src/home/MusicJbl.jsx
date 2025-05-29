import React from "react";

export default function MusicJbl() {
  return (
    <div className="container py-5 bg-dark text-white rounded responsive-rounded">
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-md-6 mb-4 mb-md-0 ps-4">
          <div className="color-text mb-2">Categories</div>
          <h1 className="display-5 fw-bold mb-4">
            Enhance Your <br /> Music Experience
          </h1>

          {/* Timer Section */}
          <div className="d-flex gap-3 mb-4 flex-wrap">
            <div className="bg-white text-dark rounded-circle d-flex flex-column align-items-center justify-content-center timer-style">
              <div className="counter-text">23</div>
              <div className="counter-time">Hours</div>
            </div>
            <div className="bg-white text-dark rounded-circle d-flex flex-column align-items-center justify-content-center timer-style">
              <div className="counter-text">05</div>
              <div className="counter-time">Days</div>
            </div>
            <div className="bg-white text-dark rounded-circle d-flex flex-column align-items-center justify-content-center timer-style">
              <div className="counter-text">59</div>
              <div className="counter-time">Minutes</div>
            </div>
            <div className="bg-white text-dark rounded-circle d-flex flex-column align-items-center justify-content-center timer-style">
              <div className="counter-text">35</div>
              <div className="counter-time">Seconds</div>
            </div>
          </div>

          <button className="btn button-style px-4 py-2 rounded">
            Buy Now!
          </button>
        </div>

        {/* Image */}
        <div className="col-md-6 text-center">
          <img src="jbl1.svg" alt="JBL Boombox" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
