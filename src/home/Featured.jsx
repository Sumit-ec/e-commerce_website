import React from "react";

export default function Featured() {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div
          className="d-flex align-items-center gap-3"
          style={{ paddingLeft: "20px" }}
        >
          <div className="align-items-center">
            <div
              className="bg-danger"
              style={{ width: "20px", height: "40px", borderRadius: "4px" }}
            ></div>
          </div>
          <h5 className="mb-0">Featured</h5>
        </div>
      </div>

      {/* Subheader */}
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <h2
          className="fw-bold mb-0"
          style={{ paddingLeft: "20px", paddingTop: "10px" }}
        >
          New Arrival
        </h2>
      </div>

      {/* Two-Column Layout */}
      <div className="row mt-4 g-4">
        {/* Left - Big PlayStation Card */}
        <div
          className="col-md-6"
          style={{ paddingRight: "15px", height: "600px" }}
        >
          <div className="card text-white bg-dark border-0 rounded overflow-hidden h-100">
            <img
              src="PSImage.svg"
              className="card-img"
              alt="PlayStation 5"
              style={{ objectFit: "cover", height: "100%" }}
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
              <h5 className="card-title ms-2">PlayStation 5</h5>
              <p className="card-text ms-2">
                Black and White version of the PS5 <br />
                coming out on sale.
              </p>
              <button
                href="#"
                className="btn btn-sm position-absolute bottom-0 start-1 text-decoration-underline"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - 3 Cards in 2 Rows */}
        <div
          className="col-md-6 d-flex flex-column gap-3"
          style={{ height: "600px" }}
        >
          <div
            className="card text-white bg-dark border-0 rounded overflow-hidden w-100"
            style={{ height: "48%" }}
          >
            <img
              src="Women.svg"
              className="card-img"
              alt="Women's Collections"
              style={{ objectFit: "cover", height: "100%" }}
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
              <h5 className="card-title ms-2">Women’s Collections</h5>
              <p className="card-text ms-2">
                Featured woman collections that <br />
                give you another vibe.
              </p>
              <button
                href="#"
                className="btn btn-sm position-absolute bottom-0 start-1 text-decoration-underline"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Bottom Row - Two Half-Width Cards */}
          <div
            className="d-flex gap-3"
            style={{ height: "48%", marginTop: "20px" }}
          >
            <div className="card text-white bg-dark border-0 rounded overflow-hidden w-50">
              <img
                src="Speaker.svg"
                className="card-img"
                alt="Speakers"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
                <h6 className="card-title ms-2">Speakers</h6>
                <p className="card-text ms-2">Amazon wireless speakers</p>
                <button
                  href="#"
                  className="btn btn-sm position-absolute bottom-0 start-1 text-decoration-underline"
                >
                  Shop Now
                </button>
              </div>
            </div>

            {/* Perfume Card */}
            <div className="card text-white bg-dark border-0 rounded overflow-hidden w-50">
              <img
                src="Perfume.svg"
                className="card-img"
                alt="Perfume"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
                <h6 className="card-title ms-2">Perfume</h6>
                <p className="card-text ms-2">GUCCI INTENSE OUD EDP</p>
                <button
                  href="#"
                  className="btn btn-sm position-absolute bottom-0 start-1 text-decoration-underline"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
