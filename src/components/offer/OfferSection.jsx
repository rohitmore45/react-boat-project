import React, { useState } from "react";
import styles from "./OfferSection.module.css";

export default function OfferSection() {
  let [hour, setHour] = useState(new Date().getHours());
  setInterval(() => {
    setHour(new Date().getHours());
  }, 1000);

  let [minute, setMinute] = useState(new Date().getMinutes());
  setInterval(() => {
    setMinute(new Date().getMinutes());
  }, 1000);

  let [second, setSecond] = useState(new Date().getSeconds());
  setInterval(() => {
    setSecond(new Date().getSeconds());
  }, 1000);

  return (
    <>
      <div className="container-fluid mt-2">
        <div className={`mb-3 ms-3 ${styles.title}`}>
          <span>Today's </span>
          <span className="fw-bold">Offe</span>
          <span className={` ${styles.spanBorder} fw-bold`}>rs</span>
        </div>

        <div className="mx-4">
          <div
            className={`${styles.offerImg} rounded-4 d-flex align-items-center justify-content-center text-white`}
          >
            <div>
              <span className={`${styles.time}`}>Ending In </span>
              <span className={`${styles.timeHms}`}>{hour}</span>
              <span className={`${styles.time}`}>Hours</span>
              <span className={`${styles.colon}`}>:</span>
              <span className={`${styles.timeHms}`}>{minute}</span>
              <span className={`${styles.time}`}>Mins</span>
              <span className={`${styles.colon}`}>:</span>
              <span className={`${styles.timeHms}`}>{second}</span>
              <span className={`${styles.time}`}>Sec</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
