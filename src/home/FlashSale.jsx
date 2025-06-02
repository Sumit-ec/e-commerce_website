import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/Reducer/ProductSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FlashSale() {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);

  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobilePage, setMobilePage] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMobilePage(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const renderCard = (product) => (
    <div className="card position-relative h-100">
      <span className="badge bg-danger position-absolute top-0 start-0 m-2">
        -35%
      </span>
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{
          backgroundColor: "#F5F5F5",
          height: "200px",
          objectFit: "contain",
        }}
      />
      <div className="position-absolute top-0 end-0 p-2 d-flex flex-column align-items-end">
        <img src="Wishlist.svg" alt="heart" style={{ width: "20px" }} />
        <img src="View.svg" alt="eye" style={{ width: "20px" }} />
      </div>
      <div className="card-body">
        <h6 className="card-title card-info">{product.title}</h6>
        <p className="card-text text-danger fw-bold mb-0">
          ${product.price.toFixed(2)}
          <span className=" ms-2 text-muted text-decoration-line-through">
            ${product.price.toFixed(2)}
          </span>
        </p>
        <div className="text-warning">
          <img src="Fivestar.svg" alt="star" />
          <span className="text-muted">({product.rating?.count || 0})</span>
        </div>
      </div>
    </div>
  );

  const totalPages = Math.ceil(products.length / 4);

  return (
    <div className="container py-5 line-bttn">
      {/* Header */}
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

      {/* Title, Countdown, Arrows */}
      <div className="d-flex justify-content-between align-items-center flex-wrap px-3 py-2">
        <h2 className="fw-bold mb-0">Flash Sales</h2>

        <div className="d-flex gap-3 align-items-center">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
            <div className="text-center" key={label}>
              <small className="text-muted">{label}</small>
              <h5 className="mb-0 fw-bold">{["03", "23", "19", "56"][idx]}</h5>
            </div>
          ))}
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn-light border rounded-circle p-2"
            onClick={() => {
              if (!isMobile) {
                sliderRef.current?.slickPrev();
              } else {
                setMobilePage((prev) =>
                  prev === 0 ? totalPages - 1 : prev - 1
                );
              }
            }}
          >
            <img src="LeftArrow.svg" alt="Left" width="36px" height="36px" />
          </button>
          <button
            className="btn btn-light border rounded-circle p-2"
            onClick={() => {
              if (!isMobile) {
                sliderRef.current?.slickNext();
              } else {
                setMobilePage((prev) => (prev + 1) % totalPages);
              }
            }}
          >
            <img src="RightArrow.svg" alt="Right" width="36px" height="36px" />
          </button>
        </div>
      </div>

      {/* Product List */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          {!isMobile ? (
            <Slider ref={sliderRef} {...sliderSettings}>
              {products.slice(0, 10).map((product) => (
                <div key={product.id} className="padding-card px-2">
                  {renderCard(product)}
                </div>
              ))}
            </Slider>
          ) : (
            <div className="row">
              {products
                .slice(mobilePage * 4, mobilePage * 4 + 4)
                .map((product) => (
                  <div key={product.id} className="col-12 mb-4">
                    {renderCard(product)}
                  </div>
                ))}
            </div>
          )}
        </>
      )}

      {/* View All Button */}
      <div className="text-center mt-3">
        <button className="btn btn-danger px-4 py-2 rounded view-button">
          View All Products
        </button>
      </div>
    </div>
  );
}
