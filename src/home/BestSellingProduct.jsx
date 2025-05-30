import React from "react";

export default function BestSelling() {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center flex-wrap head-style">
        <div className="d-flex align-items-center">
          <div className="me-2 red-bar-style"></div>
          <div>
            <p className="header-text mb-0">This Month</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center flex-wrap sub-head-style">
        <h2
          className="fw-bold mb-0"
          style={{ paddingLeft: "20px", paddingTop: "10px" }}
        >
          Best Selling Products
        </h2>
        <button className="btn btn-danger mt-3 mt-md-0 rounded ms-3 view-button">
          View All
        </button>
      </div>

      {/* Product Cards */}
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-3 padding-card">
          <div className="product-card position-relative">
            <img
              src="Coat.svg"
              alt="The north coat"
              className="w-100 p-3"
              style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}
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
            <h6 className="mt-3 card-info">The north coat</h6>
            <p className="text-danger fw-bold mb-1">
              $260{" "}
              <span className="text-muted text-decoration-line-through">
                $360
              </span>
            </p>
            <div className="text-warning">
              <img src="Fivestar.svg" alt="star" />
              <span className="text-muted">(65)</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 padding-card">
          <div className="product-card position-relative">
            <img
              src="Bag.svg"
              alt="Gucci duffle bag"
              className="w-100 p-3"
              style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}
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
            <h6 className="mt-3 card-info">Gucci duffle bag</h6>
            <p className="text-danger fw-bold mb-1">
              $960{" "}
              <span className="text-muted text-decoration-line-through">
                $1160
              </span>
            </p>
            <div className="text-warning">
              <img src="FourHalfStar.svg" alt="star" />
              <span className="text-muted">(65)</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 padding-card">
          <div className="product-card position-relative">
            <img
              src="CPU-Cooler.svg"
              alt="RGB liquid CPU Cooler"
              className="w-100 p-3"
              style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}
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
            <h6 className="mt-3 card-info">RGB liquid CPU Cooler</h6>
            <p className="text-danger fw-bold mb-1">
              $160{" "}
              <span className="text-muted text-decoration-line-through">
                $170
              </span>
            </p>
            <div className="text-warning">
              <img src="FourHalfStar.svg" alt="star" />
              <span className="text-muted">(65)</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 padding-card">
          <div className="product-card position-relative">
            <img
              src="BookShelf.svg"
              alt="Small BookSelf"
              className="w-100 p-3"
              style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}
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
            <h6 className="mt-3 card-info">Small BookSelf</h6>
            <p className="text-danger fw-bold mb-1">$360</p>
            <div className="text-warning">
              <img src="Fivestar.svg" alt="star" />
              <span className="text-muted">(65)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
