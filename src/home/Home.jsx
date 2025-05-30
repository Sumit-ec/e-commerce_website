import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./SwiperStyle.css";

import FlashSale from "./FlashSale";
import Categories from "./Categories";
import BestSellingProduct from "./BestSellingProduct";
import MusicJbl from "./MusicJbl";
import OurProduct from "./OurProduct";
import Featured from "./Featured";
import BottomSection from "./BottomSection";

export default function Home() {
  return (
    <div className="container-fluid home-container">
      <div className="d-lg-none mb-3 ms-4 mt-3">
        <button
          className="button-menu"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar"
        >
          ☰ Menu
        </button>
      </div>

      {/* Offcanvas sidebar menu */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSidebarLabel">
            Categories
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list text-decoration-none">
            <li className="list-item list-item-arrow">Woman's Fashion</li>
            <li className="list-item list-item-arrow">Men's Fashion</li>
            <li className="list-item">Electronics</li>
            <li className="list-item">Home & Lifestyle</li>
            <li className="list-item">Medicine</li>
            <li className="list-item">Sports & Outdoor</li>
            <li className="list-item">Baby's & Toys</li>
            <li className="list-item">Groceries & Pets</li>
            <li className="list-item">Health & Beauty</li>
          </ul>
        </div>
      </div>

      <div className="row align-items-stretch large-div">
        {/* Sidebar for large screens only */}
        <div className="col-lg-3 d-none d-lg-block sidebar bar-line">
          <ul className="list text-decoration-none">
            <li className="list-item list-item-arrow">Woman's Fashion</li>
            <li className="list-item list-item-arrow">Men's Fashion</li>
            <li className="list-item">Electronics</li>
            <li className="list-item">Home & Lifestyle</li>
            <li className="list-item">Medicine</li>
            <li className="list-item">Sports & Outdoor</li>
            <li className="list-item">Baby's & Toys</li>
            <li className="list-item">Groceries & Pets</li>
            <li className="list-item">Health & Beauty</li>
          </ul>
        </div>

        {/* Main Banner */}
        <div className="col-12 col-lg-9 d-flex main-banner">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper w-100"
          >
            <SwiperSlide>
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100 side-banner banner-slide p-3 p-sm-5">
                {/* Text Section */}
                <div
                  className="text-white text-center text-sm-start mb-4 mb-sm-0"
                  style={{ flex: 1, maxWidth: "500px" }}
                >
                  <div className="d-flex align-items-center justify-content-center justify-content-sm-start mb-3 top-text">
                    <img
                      src="AppleLogo.svg"
                      alt="Apple Logo"
                      style={{ width: "40px", height: "49px" }}
                    />
                    <h5 className="mb-0 text-white-50 ms-3 iphone-14">
                      iPhone 14 Series
                    </h5>
                  </div>
                  <h2 className="text-iphone">
                    Up to 10% <br />
                    off Voucher
                  </h2>
                  <button className="iphone-shop-button mt-4 text-decoration-underline d-inline-flex align-items-center gap-2">
                    Shop Now
                    {/* <img
                      src="icons arrow-right.svg"
                      alt="arrow"
                      width="20px"
                      height="20px"
                    /> */}
                  </button>
                </div>

                {/* Image Section */}
                <div
                  className="d-flex justify-content-center justify-content-sm-end w-100"
                  style={{
                    flex: 1,
                    maxWidth: "400px",
                    width: "100%",
                  }}
                >
                  <img
                    src="iphone-image.svg"
                    alt="iPhone"
                    style={{
                      maxHeight: "300px",
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100 side-banner banner-slide p-3 p-sm-5">
                {/* Text Section */}
                <div
                  className="text-white text-center text-sm-start mb-4 mb-sm-0"
                  style={{ flex: 1, maxWidth: "500px" }}
                >
                  <div className="d-flex align-items-center justify-content-center justify-content-sm-start mb-3 top-text">
                    <img
                      src="AppleLogo.svg"
                      alt="Apple Logo"
                      style={{ width: "40px", height: "49px" }}
                    />
                    <h5 className="mb-0 text-white-50 ms-3 iphone-14">
                      iPhone 14 Series
                    </h5>
                  </div>
                  <h2 className="text-iphone">
                    Up to 10% <br />
                    off Voucher
                  </h2>
                  <button className="iphone-shop-button mt-4 text-decoration-underline">
                    Shop Now
                  </button>
                </div>

                {/* Image Section */}
                <div
                  className="d-flex justify-content-center justify-content-sm-end w-100"
                  style={{
                    flex: 1,
                    maxWidth: "400px",
                    width: "100%",
                  }}
                >
                  <img
                    src="iphone-image.svg"
                    alt="iPhone"
                    style={{
                      maxHeight: "300px",
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100 side-banner banner-slide p-3 p-sm-5">
                {/* Text Section */}
                <div
                  className="text-white text-center text-sm-start mb-4 mb-sm-0"
                  style={{ flex: 1, maxWidth: "500px" }}
                >
                  <div className="d-flex align-items-center justify-content-center justify-content-sm-start mb-3 top-text">
                    <img
                      src="AppleLogo.svg"
                      alt="Apple Logo"
                      style={{ width: "40px", height: "49px" }}
                    />
                    <h5 className="mb-0 text-white-50 ms-3 iphone-14">
                      iPhone 14 Series
                    </h5>
                  </div>
                  <h2 className="text-iphone">
                    Up to 10% <br />
                    off Voucher
                  </h2>
                  <button className="iphone-shop-button mt-4 text-decoration-underline">
                    Shop Now
                  </button>
                </div>

                {/* Image Section */}
                <div
                  className="d-flex justify-content-center justify-content-sm-end w-100"
                  style={{
                    flex: 1,
                    maxWidth: "400px",
                    width: "100%",
                  }}
                >
                  <img
                    src="iphone-image.svg"
                    alt="iPhone"
                    style={{
                      maxHeight: "300px",
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100 side-banner banner-slide p-3 p-sm-5">
                {/* Text Section */}
                <div
                  className="text-white text-center text-sm-start mb-4 mb-sm-0"
                  style={{ flex: 1, maxWidth: "500px" }}
                >
                  <div className="d-flex align-items-center justify-content-center justify-content-sm-start mb-3 top-text">
                    <img
                      src="AppleLogo.svg"
                      alt="Apple Logo"
                      style={{ width: "40px", height: "49px" }}
                    />
                    <h5 className="mb-0 text-white-50 ms-3 iphone-14">
                      iPhone 14 Series
                    </h5>
                  </div>
                  <h2 className="text-iphone">
                    Up to 10% <br />
                    off Voucher
                  </h2>
                  <button className="iphone-shop-button mt-4 text-decoration-underline">
                    Shop Now
                  </button>
                </div>

                {/* Image Section */}
                <div
                  className="d-flex justify-content-center justify-content-sm-end w-100"
                  style={{
                    flex: 1,
                    maxWidth: "400px",
                    width: "100%",
                  }}
                >
                  <img
                    src="iphone-image.svg"
                    alt="iPhone"
                    style={{
                      maxHeight: "300px",
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100 side-banner banner-slide p-3 p-sm-5">
                {/* Text Section */}
                <div
                  className="text-white text-center text-sm-start mb-4 mb-sm-0"
                  style={{ flex: 1, maxWidth: "500px" }}
                >
                  <div className="d-flex align-items-center justify-content-center justify-content-sm-start mb-3 top-text">
                    <img
                      src="AppleLogo.svg"
                      alt="Apple Logo"
                      style={{ width: "40px", height: "49px" }}
                    />
                    <h5 className="mb-0 text-white-50 ms-3 iphone-14">
                      iPhone 14 Series
                    </h5>
                  </div>
                  <h2 className="text-iphone">
                    Up to 10% <br />
                    off Voucher
                  </h2>
                  <button className="iphone-shop-button mt-4 text-decoration-underline">
                    Shop Now
                  </button>
                </div>

                {/* Image Section */}
                <div
                  className="d-flex justify-content-center justify-content-sm-end w-100"
                  style={{
                    flex: 1,
                    maxWidth: "400px",
                    width: "100%",
                  }}
                >
                  <img
                    src="iphone-image.svg"
                    alt="iPhone"
                    style={{
                      maxHeight: "300px",
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <FlashSale />
      <Categories />
      <BestSellingProduct />
      <MusicJbl />
      <OurProduct />
      <Featured />
      <BottomSection />
    </div>
  );
}
