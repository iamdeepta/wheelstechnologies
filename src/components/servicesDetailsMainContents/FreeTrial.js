import React from "react";

const FreeTrial = () => {
  return (
    <>
      <section className="cta__area blue-bg-10 pt-140 pb-130 p-relative fix z-index-1">
        <div className="cta__shape">
          <img
            className="cta-4-shape"
            src="assets/img/cta/home-4/cta-shape.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2">
              <div className="cta__content-4 text-center">
                <div
                  className="section__title-wrapper section__title-wrapper-4 section__title-white text-center mb-45 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h2 className="section__title section__title-4">
                    Our Free Trial for 14-days Today
                  </h2>
                  <p>
                    Get the word out and sell more with sleek email messages
                    that.
                  </p>
                </div>
                <div
                  className="cta__form mb-25 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <form action="#">
                    <input type="email" placeholder="Enter Your Email" />
                    <button type="submit">Start Free Trial</button>
                  </form>
                </div>
                <div
                  className="cta__features wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <ul>
                    <li>Product support</li>
                    <li>Free trial</li>
                    <li>Connect Customer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrial;
