import React from "react";
import Hero from "./Hero.js";
import Services from "../homeMainContents/Services";
import Features from "./Features.js";
import FreeTrial from "./FreeTrial.js";
import Testimonial from "../homeMainContents/Testimonial.js";
import Faq from "../homeMainContents/Faq.js";
import Newsletter from "../homeMainContents/Newsletter.js";
import ServicesSvg from "./ServicesSvg.js";
import "./css/ourservice.css";
import ServiceSvg from "./ServiceSvg.js";

const ServicesMain = () => {
  return (
    <>
      {/* <div className="grey-bg-3 contact_us_hero_bg"></div> */}
      {/* <section className="hero__area hero__height-2 p-relative d-flex align-items-center"> */}
      <section className="hero__area p-relative d-flex align-items-center pt-150 services_section">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-6 col-lg-8">
              <div className="hero__content-2 mt-55">
                <h2 className="hero__title-2 contact_us_title">Our Services</h2>
                <p>
                  We create award-winning websites, cutting-edge mobile
                  applications and top notch motion video and graphics.
                </p>
              </div>
            </div>
            <div className="col-xxl-6 offset-xxl-1 col-xl-6">
              <div className="hero__thumb-2 mt-80">
                <div className="hero__thumb-inner p-relative ml-90">
                  {/* <ServicesSvg /> */}
                  <ServiceSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Testimonial />
      <Faq />
      <FreeTrial />
      <Newsletter />
      {/* <main>
        <Hero />
        <Services />
        <Features />
        <FreeTrial />
      </main> */}
    </>
  );
};

export default ServicesMain;
