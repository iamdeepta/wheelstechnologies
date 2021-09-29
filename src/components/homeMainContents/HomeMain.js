import React, { useRef } from "react";
import Hero from "./Hero.js";
import Services from "./Services.js";
import FeatureOne from "./FeatureOne.js";
import FeatureTwo from "./FeatureTwo.js";
import FreeTrial from "../servicesMainContents/FreeTrial";
//import Contact from "./Contact.js";
import Team from "./Team.js";
//import Faq from "./Faq.js";
//import Blog from "./Blog.js";
import Promotion from "./Promotion.js";
import Testimonial from "./Testimonial.js";
import useIsVisible from "../../customHooks/useIsVisible.js";

const HomeMain = () => {
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);

  return (
    <>
      <main>
        <Hero />
        <div ref={elemRef}>
          <Services />
        </div>

        {isVisible ? (
          <>
            <FeatureOne />
            <FeatureTwo />

            {/* <Contact /> */}
            <FreeTrial />

            <Team />
            {/* <Faq />
            <Blog /> */}
            <Promotion />
            <Testimonial />
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default HomeMain;
