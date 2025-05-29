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

      {/* <div className="d-flex justify-content-between align-items-center flex-wrap sub-head-style"> */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2
          className="fw-bold mb-3"
          style={{ paddingLeft: "20px", paddingTop: "10px" }}
        >
          Explore Our Products
        </h2>
        <div className="d-flex gap-2">
          <button className="btn btn-light border rounded-circle p-2">
            <img src="LeftArrow.svg" alt="Left" width="36" height="36" />
          </button>
          <button className="btn btn-light border rounded-circle p-2">
            <img src="RightArrow.svg" alt="Right" width="36" height="36" />
          </button>
        </div>
      </div>
      {/* </div> */}

      {/* Product Cards */}
      <div className="row g-3">
        {/* Card Template */}
        {/* Repeat for each card with its respective content */}
        <div className="col-md-3 padding-card">
          <div className="product-card">
            <div className="image-container position-relative">
              <img
                src="DogFood.svg"
                alt="Dog Food"
                className="product-image w-100"
                style={{ backgroundColor: "#F5F5F5" }}
              />
              <div className="action-icons position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
                <img src="Wishlist.svg" alt="heart" className="icon-img" />
                <img src="View.svg" alt="view" className="icon-img mt-2" />
              </div>
            </div>
            <h6 className="product-title mt-3">Breed Dry Dog Food</h6>
            <div className="price-rating d-flex align-items-center gap-2">
              <span className="text-danger fw-bold">$100</span>
              <img src="ThreeStar.svg" alt="star" className="rating-stars" />
              <span className="text-muted review-count">(35)</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 padding-card">
          <div className="product-card">
            <div className="image-container position-relative">
              <img
                src="DSLR.svg"
                alt="Camera"
                className="product-image w-100"
                style={{ backgroundColor: "#F5F5F5" }}
              />
              <div className="action-icons position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
                <img src="Wishlist.svg" alt="heart" className="icon-img" />
                <img src="View.svg" alt="view" className="icon-img mt-2" />
              </div>
            </div>
            <h6 className="product-title mt-3">CANON EOS DSLR Camera</h6>
            <div className="price-rating d-flex align-items-center gap-2">
              <span className="text-danger fw-bold">$360</span>
              <img src="FourStar.svg" alt="star" className="rating-stars" />
              <span className="text-muted review-count">(95)</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 padding-card">
          <div className="product-card">
            <div className="image-container position-relative">
              <img
                src="Gaminglaptop.svg"
                alt="Laptop"
                className="product-image w-100"
                style={{ backgroundColor: "#F5F5F5" }}
              />
              <div className="action-icons position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
                <img src="Wishlist.svg" alt="heart" className="icon-img" />
                <img src="View.svg" alt="view" className="icon-img mt-2" />
              </div>
            </div>
            <h6 className="product-title mt-3">ASUS FHD Gaming Laptop</h6>
            <div className="price-rating d-flex align-items-center gap-2">
              <span className="text-danger fw-bold">$700</span>
              <img src="Fivestar.svg" alt="star" className="rating-stars" />
              <span className="text-muted review-count">(325)</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 padding-card">
          <div className="product-card">
            <div className="image-container position-relative">
              <img
                src="CurologyProduct.svg"
                alt="Curology"
                className="product-image w-100"
                style={{ backgroundColor: "#F5F5F5" }}
              />
              <div className="action-icons position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
                <img src="Wishlist.svg" alt="heart" className="icon-img" />
                <img src="View.svg" alt="view" className="icon-img mt-2" />
              </div>
            </div>
            <h6 className="product-title mt-3">Curology Product Set</h6>
            <div className="price-rating d-flex align-items-center gap-2">
              <span className="text-danger fw-bold">$500</span>
              <img src="Fivestar.svg" alt="star" className="rating-stars" />
              <span className="text-muted review-count">(145)</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 padding-card">
          <div className="product-card">
            <div className="image-container position-relative">
              <span className="badge new-badge position-absolute top-0 start-0 m-2">
                New
              </span>
              <img
                src="KidCar.svg"
                alt="Kid Car"
                className="product-image w-100"
                style={{ backgroundColor: "#F5F5F5" }}
              />
              <div className="action-icons position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
                <img src="Wishlist.svg" alt="heart" className="icon-img" />
                <img src="View.svg" alt="view" className="icon-img mt-2" />
              </div>
            </div>
            <h6 className="product-title mt-3">Kids Electric Car</h6>
            <div className="price-rating d-flex align-items-center gap-2">
              <span className="text-danger fw-bold">$960</span>
              <img src="Fivestar.svg" alt="star" className="rating-stars" />
              <span className="text-muted review-count">(65)</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 padding-card">
          <div className="product-card">
            <div className="image-container position-relative">
              <img
                src="SoccerShoes.svg"
                alt="Soccer Shoes"
                className="product-image w-100"
                style={{ backgroundColor: "#F5F5F5" }}
              />
              <div className="action-icons position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
                <img src="Wishlist.svg" alt="heart" className="icon-img" />
                <img src="View.svg" alt="view" className="icon-img mt-2" />
              </div>
            </div>
            <h6 className="product-title mt-3">Jr. Zoom Soccer Cleats</h6>
            <div className="price-rating d-flex align-items-center gap-2">
              <span className="text-danger fw-bold">$1160</span>
              <img src="Fivestar.svg" alt="star" className="rating-stars" />
              <span className="text-muted review-count">(65)</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 padding-card">
          <div className="product-card">
            <div className="image-container position-relative">
              <span className="badge new-badge position-absolute top-0 start-0 m-2">
                New
              </span>
              <img
                src="GamePad.svg"
                alt="Gamepad"
                className="product-image w-100"
                style={{ backgroundColor: "#F5F5F5" }}
              />
              <div className="action-icons position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
                <img src="Wishlist.svg" alt="heart" className="icon-img" />
                <img src="View.svg" alt="view" className="icon-img mt-2" />
              </div>
            </div>
            <h6 className="product-title mt-3">GP11 Shooter USB Gamepad</h6>
            <div className="price-rating d-flex align-items-center gap-2">
              <span className="text-danger fw-bold">$660</span>
              <img src="FourHalfStar.svg" alt="star" className="rating-stars" />
              <span className="text-muted review-count">(55)</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 padding-card">
          <div className="product-card">
            <div className="image-container position-relative">
              <img
                src="Jacket.svg"
                alt="Jacket"
                className="product-image w-100"
                style={{ backgroundColor: "#F5F5F5" }}
              />
              <div className="action-icons position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
                <img src="Wishlist.svg" alt="heart" className="icon-img" />
                <img src="View.svg" alt="view" className="icon-img mt-2" />
              </div>
            </div>
            <h6 className="product-title mt-3">Quilted Satin Jacket</h6>
            <div className="price-rating d-flex align-items-center gap-2">
              <span className="text-danger fw-bold">$660</span>
              <img src="FourHalfStar.svg" alt="star" className="rating-stars" />
              <span className="text-muted review-count">(55)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
