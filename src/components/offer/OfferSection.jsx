import React, { useEffect, useState } from "react";
import styles from "./OfferSection.module.css";

export default function OfferSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval =
      (() => {
        setTime(new Date());
      },
      1000);
    return () => clearInterval(interval);
  }, []);

  console.log(time.toLocaleTimeString());

  return (
    <>
      <div className="container-fluid mt-2">
        <div className={`mb-3 ms-3 ${styles.title}`}>
          <span>Today's </span>
          <span className="fw-bold">Offe</span>
          <span className={` ${styles.spanBorder} fw-bold`}>rs</span>
        </div>

        <div className="mx-4">
          <div className={`${styles.offerImg} rounded-4`}>
            <h1 className="text-white ms-5 ms-5">
              {time.toLocaleTimeString()}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
