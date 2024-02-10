import React from "react";
import styles from "./HeroSection2.module.css";
import img1 from "./images/heroimg1.webp";
import img2 from "./images/heroimg2.webp";
import img3 from "./images/heroimg3.webp";
import img4 from "./images/heroimg4.webp";
import img5 from "./images/heroimg5.webp";
import img6 from "./images/heroimg6.webp";
import img7 from "./images/heroimg7.webp";
import img8 from "./images/heroimg8.webp";

export default function HeroSection2() {
  let cardDetails = [
    {
      img: img1,
      name: "Nirvana Ion",
      price: "2,299",
      currentPrice: "7,990",
      discount: "71",
      stars: "5.0",
      review: "62",
      battery: "120 Hours Playback",
    },
    {
      img: img2,
      name: "Airdopes 131",
      price: "899",
      currentPrice: "2,990",
      discount: "70",
      stars: "4.8",
      review: "1339",
      battery: "60 Hours Playback",
    },
    {
      img: img3,
      name: "Airdopes 161",
      price: "999",
      currentPrice: "2,490",
      discount: "70",
      stars: "4.9",
      review: "56",
      battery: "40 Hours Playback",
    },
    {
      img: img4,
      name: "Rockerz 235 V2",
      price: "999",
      currentPrice: "2,990",
      discount: "67",
      stars: "4.8",
      review: "1074",
      battery: "8 Hours Playback",
    },
    {
      img: img5,
      name: "Nirvana lon ANC",
      price: "2,779",
      currentPrice: "9,999",
      discount: "72",
      stars: "4.9",
      review: "156",
      battery: "Noise Cancellation",
    },
    {
      img: img6,
      name: "Airdopes 131 PRO",
      price: "999",
      currentPrice: "2,990",
      discount: "67",
      stars: "4.9",
      review: "177",
      battery: "45 Hours Playback",
    },
    {
      img: img7,
      name: "Wave Flex Connect 161",
      price: "1,499",
      currentPrice: "7,990",
      discount: "81",
      stars: "4.8",
      review: "1356",
      battery: "BT Calling",
    },
    {
      img: img8,
      name: "Airdopes 141",
      price: "1,299",
      currentPrice: "4,490",
      discount: "71",
      stars: "4.9",
      review: "657",
      battery: "42 Hours Playback",
    },
  ];

  return (
    <>
      <div className="container-fluid mt-4 w-100">
        <div className="d-flex justify-content-evenly flex-wrap">
          {cardDetails.map((cardObj, ind) => {
            return (
              <div className="mb-4" key={ind}>
                <div
                  className={` ${styles.img} rounded-top-3`}
                  style={{ backgroundImage: `url(${cardObj.img})` }}
                  alt="Card image cap"
                />

                <div
                  className={`border border-top-0 rounded-bottom-3 p-2 ${styles.cardBody}`}
                >
                  <div className="position-relative">
                    <div
                      className={`rounded rounded-2 text-center ${styles.battery}
                    position-absolute`}
                    >
                      <span className="m-auto">{cardObj.battery}</span>
                    </div>
                  </div>
                  <div className={`${styles.cardStyle} mt-2`}>
                    {cardObj.name}
                  </div>
                  <span className={`${styles.cardPrice}`}>
                    ₹{cardObj.price}
                  </span>
                  <span className={`${styles.cardCurrPrice} ms-1`}>
                    <strike>₹{cardObj.currentPrice}</strike>
                  </span>
                  <span className={`${styles.cardDiscount} ms-1`}>
                    {cardObj.discount}% off
                  </span>
                  <div className={`${styles.cardStars} ms-1`}>
                    <span>⭐{cardObj.stars} |</span>
                    <span className="ms-1">{cardObj.review} Reviews</span>
                    <button
                      className={`btn btn-dark btn-sm rounded rounded-3 ${styles.cardBtn}`}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
