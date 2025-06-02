import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="container py-4 " style={{ marginBottom: "80px" }}>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb top-nav">
          <li className="breadcrumb-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Cart
          </li>
        </ol>
      </nav>

      {/* Cart Table */}
      <div className="table-responsive">
        <table
          className="table align-middle mt-5"
          style={{ borderCollapse: "separate", borderSpacing: "0 20px" }}
        >
          <thead>
            <tr>
              <td scope="col table-head-text">Product</td>
              <td scope="col table-head-text">Price</td>
              <td scope="col table-head-text">Quantity</td>
              <td scope="col table-head-text">Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {/* Item 1 */}
            <tr>
              <td>
                <div
                  className="position-relative d-inline-block"
                  style={{ width: "60px", height: "60px" }}
                >
                  <button
                    className="btn btn-link p-0 position-absolute top-0 start-0"
                    style={{ zIndex: 2 }}
                  >
                    <img
                      src="icon-cancel.svg"
                      alt="Remove"
                      width="16"
                      height="16"
                    />
                  </button>
                  <img
                    src="Monitor-Cart-Small.svg"
                    alt="LCD Monitor"
                    width="60"
                    height="60"
                  />
                </div>
                <span className="ms-3">LCD Monitor</span>
              </td>
              <td>$650</td>
              <td>
                <select className="form-select w-auto">
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                </select>
              </td>
              <td>$650</td>
            </tr>

            {/* Item 2 */}
            <tr>
              <td className="d-flex align-items-center gap-3">
                <img
                  src="Gamepad-Cart-Small.svg"
                  alt="H1 Gamepad"
                  width="60"
                  height="60"
                />
                <span>H1 Gamepad</span>
              </td>
              <td>$550</td>
              <td>
                <select className="form-select w-auto">
                  <option value="1">01</option>
                  <option value="2" selected>
                    02
                  </option>
                  <option value="3">03</option>
                </select>
              </td>
              <td>$1100</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons Row */}
      <div className="d-flex justify-content-between flex-wrap my-4 gap-3">
        <button className="return-shop-button">Return To Shop</button>
        <button className="return-shop-button">Update Cart</button>
      </div>

      {/* Coupon and Cart Summary */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column flex-sm-row align-items-stretch gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Coupon Code"
              style={{ maxWidth: "300px" }}
            />
            <button
              className="return-shop-button"
              style={{
                whiteSpace: "nowrap",
                height: "100%",
                padding: "0.5rem 1rem",
                backgroundColor: "#DB4444",
                color: "#FFFFFF",
              }}
            >
              Apply Coupon
            </button>
          </div>
        </div>

        <div
          className="col-md-6"
          style={{
            border: "1.5px solid #000",
            width: "470px",
          }}
        >
          <div className="border p-4">
            <h5 className="mb-4">Cart Total</h5>
            <div className="d-flex justify-content-between mb-2 border-bottom">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="d-flex justify-content-between mb-2 border-bottom">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total:</span>
              <span>$1750</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                className="return-shop-button"
                style={{
                  backgroundColor: "#DB4444",
                  color: "#FFFFFF",
                  padding: "12px 32px", // adjust padding as needed
                  border: "none",
                  borderRadius: "6px",
                }}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
