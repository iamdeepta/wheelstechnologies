import React from "react";
import Hero from "./Hero.js";
import Services from "./Services.js";
import FeatureOne from "./FeatureOne.js";
import FeatureTwo from "./FeatureTwo.js";
import Contact from "./Contact.js";
import Team from "./Team.js";
import Faq from "./Faq.js";
import Blog from "./Blog.js";
import Promotion from "./Promotion.js";

const HomeMain = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <FeatureOne />
        <FeatureTwo />
        <Contact />
        <Team />
        <Faq />
        <Blog />
        <Promotion />
      </main>
    </>
  );
};

export default HomeMain;
