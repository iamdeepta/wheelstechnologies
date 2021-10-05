import React from "react";
import "./css/hero.css";

const Hero = () => {
  return (
    <>
      <div>
        <div className="work_details_wave_top">
          <div className="container work_details_hero_text_div">
            <p className="work_details_hero_text">covidsurokkha</p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,160L1440,0L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Hero;
