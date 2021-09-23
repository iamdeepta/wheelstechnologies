import React from "react";
import Hero from "./Hero.js";
import Services from "./Services.js";
import Features from "./Features.js";
import Faq from "../homeMainContents/Faq";
import Promotion from "../homeMainContents/Promotion";

const AboutMain = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Features />
        <Faq />
        <Promotion />
      </main>
    </>
  );
};

export default AboutMain;
