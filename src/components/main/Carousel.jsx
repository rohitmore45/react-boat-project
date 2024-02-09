import React from "react";
import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.webp";
import img4 from "./images/img4.webp";
import img5 from "./images/img5.webp";

export default function Carousel() {
  return (
    <>
      {/* <div
        id="carouselExampleIndicators"
        classNameName="carousel slide"
        data-bs-ride="carousel"
      >
        <div classNameName="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            classNameName="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div classNameName="carousel-inner">
          <div classNameName="carousel-item active " data-bs-interval="1000">
            <img src={img1} classNameName="d-block w-100" alt="..." height={650} />
          </div>
          <div classNameName="carousel-item" data-bs-interval="1000">
            <img src={img2} classNameName="d-block w-100" alt="..." height={650} />
          </div>
          <div classNameName="carousel-item" data-bs-interval="1000">
            <img src={img3} classNameName="d-block w-100" alt="..." height={650} />
          </div>
          <div classNameName="carousel-item" data-bs-interval="1000">
            <img src={img4} classNameName="d-block w-100" alt="..." height={650} />
          </div>
          <div classNameName="carousel-item" data-bs-interval="1000">
            <img src={img5} classNameName="d-block w-100" alt="..." height={650} />
          </div>
        </div>
        <button
          classNameName="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            classNameName="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span classNameName="visually-hidden">Previous</span>
        </button>
        <button
          classNameName="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            classNameName="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span classNameName="visually-hidden">Next</span>
        </button>
      </div> */}

      <div
        className="carousel slide"
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
            <img
              src={img5}
              style={{ height: 650 }}
              classNameName="w-100 d-block"
            />
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
