import React from "react";

export default function FlashSale() {
  return (
    <div className="container py-5 line-bttn">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div
          className="d-flex align-items-center gap-3"
          style={{ paddingLeft: "20px" }}
        >
          <div className="align-items-center">
            <div className="red-bar-style"></div>
          </div>
          <h5 className="header-text mb-0">Today’s</h5>
        </div>
      </div>

      {/* Flash Sale with counter */}
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <h2
          className="fw-bold mb-0"
          style={{ paddingLeft: "20px", paddingTop: "10px" }}
        >
          Flash Sales
        </h2>
        <div className="d-flex gap-3 mt-3 mt-md-0 ms-3 me-3">
          <div className="text-center">
            <small className="text-muted">Days</small>
            <h5 className="mb-0 fw-bold">03</h5>
          </div>
          <div className="text-center">
            <small className="text-muted">Hours</small>
            <h5 className="mb-0 fw-bold">23</h5>
          </div>
          <div className="text-center">
            <small className="text-muted">Minutes</small>
            <h5 className="mb-0 fw-bold">19</h5>
          </div>
          <div className="text-center">
            <small className="text-muted">Seconds</small>
            <h5 className="mb-0 fw-bold">56</h5>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="row g-4">
        {/* Product 1 */}
        <div className="col-md-3 padding-card">
          <div className="card position-relative h-100">
            <span className="badge bg-danger position-absolute top-0 start-0 m-2">
              -40%
            </span>
            <img
              src="Controller.svg"
              className="card-img-top"
              alt="HAVIT HV-G92 Gamepad"
              style={{ backgroundColor: "#F5F5F5" }}
            />
            <div className="position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
              <img
                src="Wishlist.svg"
                alt="heart"
                style={{ position: "relative", top: "2px", width: "20px" }}
              />
              <img
                src="View.svg"
                alt="eye"
                style={{ position: "relative", top: "4px", width: "20px" }}
              />
            </div>
            <div className="card-body">
              <p className="card-title card-info">HAVIT HV-G92 Gamepad</p>
              <p className="card-text text-danger fw-bold mb-0">
                $120{" "}
                <span className="text-muted text-decoration-line-through">
                  $160
                </span>
              </p>
              <div className="text-warning">
                <img src="Fivestar.svg" alt="star" />
                <span className="text-muted">(65)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2 (Modified with button inside image area) */}
        <div className="col-md-3 padding-card">
          <div className="card position-relative h-100">
            <span className="badge bg-danger position-absolute top-0 start-0 m-2">
              -35%
            </span>
            {/* Image and button wrapper */}
            <div
              className="position-relative"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <img
                src="Keyboard.svg"
                className="card-img-top"
                alt="AK-900 Wired Keyboard"
              />
              <div className="position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
                <img
                  src="Wishlist.svg"
                  alt="heart"
                  style={{ position: "relative", top: "2px", width: "20px" }}
                />
                <img
                  src="View.svg"
                  alt="eye"
                  style={{ position: "relative", top: "4px", width: "20px" }}
                />
              </div>

              <button
                className="btn btn-dark btn-sm position-absolute w-100 start-50 translate-middle-x"
                style={{ bottom: "10px" }}
              >
                Add to Cart
              </button>
            </div>

            <div className="card-body">
              <h6 className="card-title card-info">AK-900 Wired Keyboard</h6>
              <p className="card-text text-danger fw-bold mb-0">
                $960{" "}
                <span className="text-muted text-decoration-line-through">
                  $1160
                </span>
              </p>
              <div className="text-warning">
                <img src="FourStar.svg" alt="star" />
                <span className="text-muted">(65)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="col-md-3 padding-card">
          <div className="card position-relative h-100">
            <span className="badge bg-danger position-absolute top-0 start-0 m-2">
              -30%
            </span>
            <img
              src="Monitor.svg"
              className="card-img-top"
              alt="IPS LCD Gaming Monitor"
              style={{ backgroundColor: "#F5F5F5" }}
            />
            <div className="position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
              <img
                src="Wishlist.svg"
                alt="heart"
                style={{ position: "relative", top: "2px", width: "20px" }}
              />
              <img
                src="View.svg"
                alt="eye"
                style={{ position: "relative", top: "4px", width: "20px" }}
              />
            </div>

            <div className="card-body ">
              <h6 className="card-title card-info">IPS LCD Gaming Monitor</h6>
              <p className="card-text text-danger fw-bold mb-0">
                $370{" "}
                <span className="text-muted text-decoration-line-through">
                  $400
                </span>
              </p>
              <div className="text-warning">
                <img src="Fivestar.svg" alt="star" />
                <span className="text-muted">(65)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="col-md-3 padding-card">
          <div className="card position-relative h-100">
            <span className="badge bg-danger position-absolute top-0 start-0 m-2">
              -25%
            </span>
            <img
              src="Chair.svg"
              className="card-img-top"
              alt="S-Series Comfort Chair"
              style={{ backgroundColor: "#F5F5F5" }}
            />
            <div className="position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
              <img
                src="Wishlist.svg"
                alt="heart"
                style={{ position: "relative", top: "2px", width: "20px" }}
              />
              <img
                src="View.svg"
                alt="eye"
                style={{ position: "relative", top: "4px", width: "20px" }}
              />
            </div>

            <div className="card-body">
              <h6 className="card-title card-info">S-Series Comfort Chair</h6>
              <p className="card-text text-danger fw-bold mb-0">
                $375{" "}
                <span className="text-muted text-decoration-line-through">
                  $400
                </span>
              </p>
              <div className="text-warning">
                <img src="FourHalfStar.svg" alt="star" />
                <span className="text-muted">(65)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View All Products Button */}
      <div className="text-center mt-3">
        <button className="btn btn-danger px-4 py-2 rounded view-button">
          View All Products
        </button>
      </div>
    </div>
  );
}
