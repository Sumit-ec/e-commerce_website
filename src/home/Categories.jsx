import React from "react";

export default function Categories() {
  return (
    <div className="container py-5">
      {/* Header with red bar */}
      <div className="d-flex align-items-center mb-3">
        <div className="me-2 red-bar-style"></div>
        <h5 className="header-text mb-0">Categories</h5>
      </div>
      <h2 className="fw-bold mb-4">Browse By Category</h2>

      {/* Category Cards */}
      <div className="d-flex flex-wrap gap-3">
        <div
          className="border rounded p-4 text-center flex-fill category-card"
          style={{ minWidth: "140px" }}
        >
          <img src="Category-CellPhone.svg" alt="Phones" className="mb-2" />
          <p className="mb-0 fw-medium">Phones</p>
        </div>
        <div
          className="border rounded p-4 text-center flex-fill category-card"
          style={{ minWidth: "140px" }}
        >
          <img src="Category-Computer.svg" alt="Computers" className="mb-2" />
          <p className="mb-0 fw-medium">Computers</p>
        </div>
        <div
          className="border rounded p-4 text-center flex-fill category-card"
          style={{ minWidth: "140px" }}
        >
          <img
            src="Category-SmartWatch.svg"
            alt="SmartWatch"
            className="mb-2"
          />
          <p className="mb-0 fw-medium">SmartWatch</p>
        </div>
        <div
          className="border rounded p-4 text-center flex-fill category-card"
          style={{ minWidth: "140px" }}
        >
          <img src="Category-Camera.svg" alt="Camera" className="mb-2" />
          <p className="mb-0 fw-medium">Camera</p>
        </div>
        <div
          className="border rounded p-4 text-center flex-fill category-card"
          style={{ minWidth: "140px" }}
        >
          <img src="Category-Headphone.svg" alt="HeadPhones" className="mb-2" />
          <p className="mb-0 fw-medium">HeadPhones</p>
        </div>
        <div
          className="border rounded p-4 text-center flex-fill category-card"
          style={{ minWidth: "140px" }}
        >
          <img src="Category-Gamepad.svg" alt="Gaming" className="mb-2" />
          <p className="mb-0 fw-medium">Gaming</p>
        </div>
      </div>
    </div>
  );
}
