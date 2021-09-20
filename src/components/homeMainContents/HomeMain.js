import React, { useRef } from "react";
import Hero from "./Hero.js";
import Services from "./Services.js";
import FeatureOne from "./FeatureOne.js";
import FeatureTwo from "./FeatureTwo.js";
import Contact from "./Contact.js";
import Team from "./Team.js";
import Faq from "./Faq.js";
import Blog from "./Blog.js";
import Promotion from "./Promotion.js";
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

            <Contact />

            <Team />
            <Faq />
            <Blog />
            <Promotion />
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default HomeMain;
