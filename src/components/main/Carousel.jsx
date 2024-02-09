import React from "react";
import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.webp";
import img4 from "./images/img4.webp";
import img5 from "./images/img5.webp";

export default function Carousel() {
  return (
    <>
      <div
        className="carousel slide mt-5"
        // data-bs-theme="dark"
        data-bs-ride="carousel"
        id="banners"
        style={{ cursor: "pointer" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={img1} style={{ height: 650 }} className="w-100 d-block" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img2} style={{ height: 650 }} className="w-100 d-block" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img3} style={{ height: 650 }} className="w-100 d-block" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img4} style={{ height: 650 }} className="w-100 d-block" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img5} style={{ height: 650 }} className="w-100 d-block" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#banners"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#banners"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
        <div className="carousel-indicators">
          <button
            className="active"
            data-bs-slide-to="0"
            data-bs-target="#banners"
          ></button>
          <button data-bs-slide-to="1" data-bs-target="#banners"></button>
          <button data-bs-slide-to="2" data-bs-target="#banners"></button>
          <button data-bs-slide-to="3" data-bs-target="#banners"></button>
          <button data-bs-slide-to="4" data-bs-target="#banners"></button>
        </div>
      </div>
    </>
  );
}
