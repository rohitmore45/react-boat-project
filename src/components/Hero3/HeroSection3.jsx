import React from "react";
import styles from "./HeroSection3.module.css";
import img1 from "./images/hero3img1.webp";
import img2 from "./images/hero3img2.webp";
import img3 from "./images/hero3img3.webp";
import img4 from "./images/hero3img4.webp";
import img5 from "./images/hero3img5.webp";

export default function HeroSection3() {
  let heroDetailes = [
    { img: img1, title: "For Entertainment" },
    { img: img2, title: "For Fitness" },
    { img: img3, title: "For Parties" },
    { img: img4, title: "For Work" },
    { img: img5, title: "For Audiophiles" },
  ];
  
  return (
    <>
      <div className="container-fluid mt-5 w-100 ">
        <div className={`ms-3 ${styles.title}`}>
          <span>Shop by </span>
          <span className="fw-bold">LifeSty</span>
          <span className={`fw-bold ${styles.spanBorder}`}>le</span>
        </div>
        <div className="d-flex justify-content-evenly">
          {heroDetailes.map((hero, ind) => {
            return (
              <>
                <div className={`${styles.heroCard} mb-5 text-center`}>
                  <div>
                    <img src={hero.img} className={`${styles.heroImg}`} />
                  </div>
                  <div className={`${styles.heroTitle} pt-2`}>
                    <div>{hero.title}</div>
                    <div>
                      <button className={`btn btn-link ${styles.heroLink}`}>
                        View All
                        <span className="bi bi-arrow-right-circle ms-1"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
