import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import "./SwiperStyle.css";
import FlashSale from "./FlashSale";
import Categories from "./Categories";
import BestSellingProduct from "./BestSellingProduct";
import MusicJbl from "./MusicJbl";
import OurProduct from "./OurProduct";
import Featured from "./Featured";

export default function Home() {
  return (
    <div className="container-fluid home-container">
      <div className="row align-items-stretch" style={{ minHeight: "400px" }}>
        {/* Sidebar */}
        <div className=" col-3 sidebar bar-line">
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
        <div className=" col-9 d-flex main-banner">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <img src="Iphone_img.jpg" alt="Iphone image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Iphone_img.jpg" alt="Iphone image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Iphone_img.jpg" alt="Iphone image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Iphone_img.jpg" alt="Iphone image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Iphone_img.jpg" alt="Iphone image" />
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
    </div>
  );
}
