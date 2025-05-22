import React from "react";
// import "./Banner.css";

export default function Banner() {
  return (
    <div className="container-fluid m-0 bg-black position-relative pb-2">
      <p
        className="text-light text-center mb-0"
        style={{ padding: "12px 135px 12px 0px" }}
      >
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="banner-span fs-6 text-decoration-underline lh-1 text-center ms-2">
          ShopNow
        </span>
      </p>
      <span
        className="position-absolute"
        style={{ top: 0, right: "65px", maxWidth: "78px", maxHeight: "24px" }}
      >
        <select
          name="language"
          id="language"
          className="text-light bg-black border border-0 "
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </span>
    </div>
  );
}
