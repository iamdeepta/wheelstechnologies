import React from "react";
//import Hero from "./Hero.js";
//import Services from "./Services.js";
import Services from "../homeMainContents/Services.js";
//import Features from "./Features.js";
import Faq from "../homeMainContents/Faq";
//import Promotion from "../homeMainContents/Promotion";
import AboutUsSvg from "./AboutUsSvg.js";
import "./css/about.css";
import FeatureTwo from "../homeMainContents/FeatureTwo.js";
import Testimonial from "../homeMainContents/Testimonial.js";
import Newsletter from "../homeMainContents/Newsletter.js";
import AboutUs from "./AboutUs.js";

const AboutMain = () => {
  return (
    <>
      <div className="grey-bg-3 contact_us_hero_bg"></div>
      <section className="hero__area hero__height-2 p-relative d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-6 col-lg-8">
              <div className="hero__content-2 mt-55">
                <h2 className="hero__title-2 contact_us_title">About Us</h2>
                <p>
                  Pleasure rationally encounter consequences are extremely
                  painful great oppurtunity
                </p>
              </div>
            </div>
            <div className="col-xxl-6 offset-xxl-1 col-xl-6">
              <div className="hero__thumb-2 mt-80">
                <div className="hero__thumb-inner p-relative ml-90">
                  <AboutUsSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureTwo />
      <AboutUs />
      <Services />
      <Testimonial />
      <Faq />
      <Newsletter />

      {/* <main>
        <Hero />
        <Services />
        <Features />
        <Faq />
        <Promotion />
      </main> */}
    </>
  );
};

export default AboutMain;
