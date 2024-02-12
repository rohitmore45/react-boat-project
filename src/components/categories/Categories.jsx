import React from "react";
import styles from "./Categories.module.css";
import catImg1 from "./images/smallimg1.webp";
import catImg2 from "./images/smallimg2.png";
import catImg3 from "./images/smallimg3.webp";
import catImg4 from "./images/smallimg4.webp";
import catImg5 from "./images/smallimg5.webp";
import catImg6 from "./images/smallimg6.webp";
import catImg7 from "./images/smallimg7.webp";
import catImg8 from "./images/smallimg8.webp";
import catImg9 from "./images/smallimg9.png";
import catImg10 from "./images/smallimg10.avif";
import catImg11 from "./images/smallimg11.webp";
import catImg12 from "./images/smallimg12.webp";

export default function Categories() {
  let categoriesDetails = [
    { img: catImg1, title: "True Wireless Airbuds" },
    { img: catImg2, title: "Neckbands" },
    { img: catImg3, title: "SmartWatches" },
    { img: catImg4, title: "Wireless Headphones" },
    { img: catImg5, title: "Wireless Speakers" },
    { img: catImg6, title: "Wired Headphones" },
    { img: catImg7, title: "Wired Earphones" },
    { img: catImg8, title: "Soundbar" },
    { img: catImg9, title: "Gaming Headphones" },
    { img: catImg10, title: "Party Speakers" },
    { img: catImg11, title: "Trimmers" },
    { img: catImg12, title: "Chargers" },
  ];
  return (
    <>
      <div className="container-fluid mt-2 ">
        <div className={`${styles.title} mb-4 ms-3 `}>
          <span>Shop by </span>
          <span className="fw-bold">Categori</span>
          <span className={`fw-bold ${styles.spanBorder}`}>es</span>
        </div>
        <div className="d-flex justify-content-evenly">
          {categoriesDetails.map((category, ind) => {
            return (
              <div key={ind} className={`text-center ${styles.categorySize}`}>
                <img src={category.img} />
                <p className={`mt-2 ${styles.categoryHeading}`}>
                  {category.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
