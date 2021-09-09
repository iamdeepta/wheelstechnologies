import React from "react";
import Hero from "./Hero.js";
import Services from "./Services.js";
import Features from "./Features.js";
import Faq from "./Faq.js";
import Promotion from "./Promotion.js";

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
