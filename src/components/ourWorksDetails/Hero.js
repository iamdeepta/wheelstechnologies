import React from "react";
import "./css/hero.css";

const Hero = () => {
  return (
    <>
      <div className="">
        <div className="work_details_wave_top">
          <div className="container work_details_hero_text_div">
            <p
              className="work_details_hero_text wow fadeInLeft"
              data-wow-delay=".5s"
            >
              covidsurokkha
            </p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5f55ff"
            fill-opacity="1"
            d="M0,160L1440,0L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Hero;
