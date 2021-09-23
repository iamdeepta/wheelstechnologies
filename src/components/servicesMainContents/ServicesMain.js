import React from "react";
import Hero from "./Hero.js";
import Services from "../homeMainContents/Services";
import Features from "./Features.js";
import FreeTrial from "./FreeTrial.js";

const ServicesMain = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Features />
        <FreeTrial />
      </main>
    </>
  );
};

export default ServicesMain;
