import React from "react";
import "./css/featured_on.css";
import HeroClients from "./HeroClients";

const FeaturedOn = () => {
  return (
    <>
      <div class="featured_on_floating_purple"></div>

      <a href="https://fb.watch/7HlRBH38Tm/">
        <div class="featured_on_floating_white">
          <div class="featured_on_floating_content">
            <p className="featured_on_text">Featured On</p>
            <img
              className="featured_on_image"
              src="images/prothom-alo-logo.webp"
              alt="featured on logo"
            />
          </div>
        </div>
      </a>

      {/* <HeroClients /> */}
    </>
  );
};

export default FeaturedOn;
