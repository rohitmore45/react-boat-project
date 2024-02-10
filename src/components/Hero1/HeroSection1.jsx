import React from "react";
import styles from "./HeroSection1.module.css";
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";
import chatIcon from "./videos/Chat-Icon.avif";

export default function HeroSection1() {
  let videoArr = [
    { vid: video1, name: "SmartWatches" },
    { vid: video2, name: "Wireless Earbuds" },
    { vid: video3, name: "Neckbands" },
    { vid: video4, name: "Headphones" },
  ];
  return (
    <>
      <div className={`container-fluid mt-4   `}>
        <div className={`mb-3 ms-3 ${styles.title}`}>
          <span>Explore </span>
          <span className="fw-bold">Bestselle</span>
          <span className={` ${styles.spanBorder} fw-bold`}>rs</span>
        </div>

        <div className=" d-flex justify-content-evenly ">
          {videoArr.map((arrObj, ind) => {
            return (
              <div>
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  height={320}
                  width={320}
                  key={ind}
                  className="rounded-3"
                >
                  <source src={arrObj.vid} type="video/mp4"></source>
                </video>
                <p className={`text-center fw-bold ${styles.videoTitle} `}>
                  {arrObj.name}
                </p>
              </div>
            );
          })}
        </div>

        <div className="position-fixed end-0 bottom-0 mb-4 me-2">
          <img
            src={chatIcon}
            alt="MsgMe"
            className={`rounded rounded-circle ${styles.chatIcon} `}
          />
        </div>
      </div>
    </>
  );
}
