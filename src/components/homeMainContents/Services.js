import React from "react";

const Services = () => {
  return (
    <>
      <section className="services__area grey-bg-3 pt-120 mt-200 pb-60 p-relative">
        <div className="services__shape-2">
          <img
            className="services-2-circle"
            src="assets/img/icon/services/home-2/services-circle.png"
            alt=""
          />
          <img
            className="services-2-circle-2"
            src="assets/img/icon/services/home-2/services-circle-2.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-4 col-lg-5 col-md-7">
              <div
                className="section__title-wrapper mb-70 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="section__pre-title purple">Service</span>
                <h2 className="section__title section__title-2">
                  Our new features we build great.
                </h2>
              </div>
            </div>
            <div className="col-xxl-8 col-lg-7 col-md-5">
              <div
                className="services__more mb-70 text-sm-end wow fadeInUp"
                data-wow-delay=".5s"
              >
                <a
                  href="services.html"
                  className="w-btn w-btn-blue w-btn-6 w-btn-3"
                >
                  view all features
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="services__inner services__inner-2 hover__active mb-30">
                <div className="services__item-2 transition-3 white-bg ">
                  <div className="services__icon-2">
                    <img
                      src="assets/img/icon/services/home-2/services-1.png"
                      alt=""
                    />
                  </div>
                  <div className="services__content-2">
                    <h3 className="services__title-2">
                      <a href="services-details.html">Development</a>
                    </h3>
                    <p>Absolutely bladdered he blimey guvnor agency. </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="services__inner services__inner-2 hover__active active mb-30">
                <div className="services__item-2 transition-3 white-bg ">
                  <div className="services__icon-2">
                    <img
                      src="assets/img/icon/services/home-2/services-2.png"
                      alt=""
                    />
                  </div>
                  <div className="services__content-2">
                    <h3 className="services__title-2">
                      <a href="services-details.html">Technology</a>
                    </h3>
                    <p>Absolutely bladdered he blimey guvnor agency. </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="services__inner services__inner-2 hover__active mb-30">
                <div className="services__item-2  transition-3 white-bg">
                  <div className="services__icon-2">
                    <img
                      src="assets/img/icon/services/home-2/services-3.png"
                      alt=""
                    />
                  </div>
                  <div className="services__content-2">
                    <h3 className="services__title-2">
                      <a href="services-details.html">OptimalSort</a>
                    </h3>
                    <p>Absolutely bladdered he blimey guvnor agency. </p>
                  </div>
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
