import React from "react";

export default function Categories() {
  return (
    <div className="container py-5">
      {/* Header with red bar */}
      <div className="d-flex align-items-center mb-3">
        <div className="me-2 red-bar-style"></div>
        <h5 className="header-text mb-0">Categories</h5>
      </div>

      {/* Browse By Category + Arrows */}
      <div className="d-flex justify-content-between align-items-center mb-4 category-header">
        <h2 className="fw-bold mb-0">Browse By Category</h2>
        <div className="d-flex gap-2">
          <button className="btn btn-light border rounded-circle p-2">
            <img src="LeftArrow.svg" alt="Left" width="36" height="36" />
          </button>
          <button className="btn btn-light border rounded-circle p-2">
            <img src="RightArrow.svg" alt="Right" width="36" height="36" />
          </button>
        </div>
      </div>

      {/* Category Cards */}
      <div className="d-flex flex-wrap gap-3">
        <div
          className="border rounded p-4 text-center flex-fill category-card"
          style={{ minWidth: "140px" }}
        >
          <img src="Category-CellPhone.svg" alt="Phones" className="mb-2" />
          <p className="mb-0 category-name">Phones</p>
        </div>
        <div
          className="border rounded p-4 text-center flex-fill category-card"
          style={{ minWidth: "140px" }}
        >
          <img src="Category-Computer.svg" alt="Computers" className="mb-2" />
          <p className="mb-0 category-name">Computers</p>
        </div>
        <div
          className="border rounded p-4 text-center flex-fill category-card "
          style={{ minWidth: "140px" }}
        >
          <img
            src="Category-SmartWatch.svg"
            alt="SmartWatch"
            className="mb-2"
          />
          <p className="mb-0 category-name">SmartWatch</p>
        </div>
        <div
          className="border rounded p-4 text-center flex-fill category-card"
          style={{ minWidth: "140px" }}
        >
          <img src="Category-Camera.svg" alt="Camera" className="mb-2" />
          <p className="mb-0 category-name">Camera</p>
        </div>
        <div
          className="border rounded p-4 text-center flex-fill category-card"
          style={{ minWidth: "140px" }}
        >
          <img src="Category-Headphone.svg" alt="HeadPhones" className="mb-2" />
          <p className="mb-0 category-name">HeadPhones</p>
        </div>
        <div
          className="border rounded p-4 text-center flex-fill category-card"
          style={{ minWidth: "140px" }}
        >
          <img src="Category-Gamepad.svg" alt="Gaming" className="mb-2" />
          <p className="mb-0 category-name">Gaming</p>
        </div>
      </div>
    </div>
  );
}
