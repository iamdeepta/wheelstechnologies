import React from "react";

const Services = () => {
  return (
    <>
      <section className="services__area pt-110 pb-45">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div
                className="section__title-wrapper section__title-wrapper-4 text-center mb-65 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h2 className="section__title section__title-4 section__title-4-p-2">
                  Marketing Strategy Service.
                </h2>
                <p>
                  Get the word out and sell more with sleek email messages that.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="services__item-4 white-bg mb-30">
                <div className="services__thumb-4 text-center d-flex align-items-end justify-content-center">
                  <img src="assets/img/services/home-4/services-1.png" alt="" />
                </div>
                <div className="services__content-4">
                  <h3 className="services__title-4">
                    <a href="services-details.html">
                      Finish routine tasks automatically
                    </a>
                  </h3>
                  <p>
                    I smashing, hanky panky chap plastered show off show off
                    pick your nose plastered.
                  </p>
                  <a href="services-details.html" className="link-btn">
                    Chat Platfrom <i className="arrow_right"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="services__item-4 white-bg mb-30">
                <div className="services__thumb-4 text-center d-flex align-items-end justify-content-center">
                  <img src="assets/img/services/home-4/services-2.png" alt="" />
                </div>
                <div className="services__content-4">
                  <h3 className="services__title-4">
                    <a href="services-details.html">
                      Start workflows from any app
                    </a>
                  </h3>
                  <p>
                    I smashing, hanky panky chap plastered show off show off
                    pick your nose plastered.
                  </p>
                  <a href="services-details.html" className="link-btn">
                    Chat Platfrom <i className="arrow_right"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
