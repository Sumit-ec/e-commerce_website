import React from "react";

export default function OurProduct() {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center flex-wrap head-style">
        <div className="d-flex align-items-center">
          <div className="me-2 red-bar-style"></div>
          <div>
            <p className="header-text mb-0">Our Products</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center flex-wrap sub-head-style">
        <h2
          className="fw-bold mb-0"
          style={{ paddingLeft: "20px", paddingTop: "10px" }}
        >
          Explore Our Products
        </h2>
      </div>

      {/* Product Cards */}
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-3 padding-card">
          <div className="product-card position-relative">
            <img
              src="DogFood.svg"
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
            <h6 className="mt-3 card-info">Breed Dry Dog Food</h6>
            <p className="text-danger fw-bold mb-1">$100</p>
            <div className="text-warning">
              <img src="ThreeStar.svg" alt="star" />
              <span className="text-muted">(35)</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 padding-card">
          <div className="product-card position-relative">
            <img
              src="DSLR.svg"
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
            <h6 className="mt-3 card-info">CANON EOS DSLR Camera</h6>
            <p className="text-danger fw-bold mb-1">$360</p>
            <div className="text-warning">
              <img src="FourStar.svg" alt="star" />
              <span className="text-muted">(95)</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 padding-card">
          <div className="product-card position-relative">
            <img
              src="Gaminglaptop.svg"
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
            <h6 className="mt-3 card-info">ASUS FHD Gaming Laptop</h6>
            <p className="text-danger fw-bold mb-1">$700</p>
            <div className="text-warning">
              <img src="Fivestar.svg" alt="star" />
              <span className="text-muted">(325)</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 padding-card">
          <div className="product-card position-relative">
            <img
              src="CurologyProduct.svg"
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
            <h6 className="mt-3 card-info">Curology Product Set </h6>
            <p className="text-danger fw-bold mb-1">$500</p>
            <div className="text-warning">
              <img src="Fivestar.svg" alt="star" />
              <span className="text-muted">(145)</span>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Card 5 */}
          <div className="col-md-3 padding-card">
            <div className="product-card position-relative">
              <span className="badge position-absolute top-0 start-0 m-2 new-item">
                <p className="new-text">New</p>
              </span>
              <img
                src="KidCar.svg"
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
              <h6 className="mt-3 card-info">Kids Electric Car</h6>
              <p className="text-danger fw-bold mb-1">$960</p>
              <div className="text-warning">
                <img src="Fivestar.svg" alt="star" />
                <span className="text-muted">(65)</span>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-3 padding-card">
            <div className="product-card position-relative">
              <img
                src="SoccerShoes.svg"
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
              <h6 className="mt-3 card-info">Jr. Zoom Soccer Cleats</h6>
              <p className="text-danger fw-bold mb-1">$1160</p>
              <div className="text-warning">
                <img src="Fivestar.svg" alt="star" />
                <span className="text-muted">(65)</span>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="col-md-3 padding-card">
            <div className="product-card position-relative">
              <span className="badge position-absolute top-0 start-0 m-2 new-item ">
                <p className="new-text">New</p>
              </span>
              <img
                src="GamePad.svg"
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
              <h6 className="mt-3 card-info">GP11 Shooter USB Gamepad</h6>
              <p className="text-danger fw-bold mb-1">$660</p>
              <div className="text-warning">
                <img src="FourHalfStar.svg" alt="star" />
                <span className="text-muted">(55)</span>
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="col-md-3 padding-card">
            <div className="product-card position-relative">
              <img
                src="Jacket.svg"
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
              <h6 className="mt-3 card-info">Quilted Satin Jacket</h6>
              <div className="text-warning">
                <p className="text-danger fw-bold mb-1">$660</p>
                <img src="FourHalfStar.svg" alt="star" />
                <span className="text-muted">(55)</span>
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
    </div>
  );
}
