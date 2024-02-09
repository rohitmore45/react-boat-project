import React from "react";
import styles from "./HeroSection1.module.css";
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";
import chatIcon from "./videos/Chat-Icon.avif";

export default function HeroSection1() {
  let videoArr = [video1, video2, video3, video4];
  return (
    <>
      <div className={`container-fluid mt-4  ${styles.title} `}>
        <div className="mb-3 ms-3 ">
          <span>Explore </span>
          <span className="h4 fw-bolder">Bestselle</span>
          <span className={`h4 ${styles.spanBorder} fw-bolder`}>rs</span>
        </div>

        <div className=" d-flex justify-content-evenly ">
          {videoArr.map((video, ind) => {
            return (
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
                <source src={video} type="video/mp4"></source>
              </video>
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
