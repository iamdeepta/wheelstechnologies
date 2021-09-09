import React from "react";

const Features = () => {
  return (
    <>
      <section className="about__area pb-45 pt-45 p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-9 order-last order-lg-first">
              <div className="about__wrapper about__wrapper-2 mb-20">
                <div
                  className="section__title-wrapper mb-25 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h2 className="section__title">
                    Awesome Prototyping Tool for UI/UX.
                  </h2>
                  <p>
                    Starkers pardon you knees up is Elizabeth geeza Why, quain
                    standard guvnor gosh cras brilliant.
                  </p>
                </div>
                <ul className="wow fadeInUp" data-wow-delay=".5s">
                  <li>Intergate With Popular Softwares item</li>
                  <li>Instantly Create Your Crowdfunding Platform</li>
                </ul>
                <a href="contact.html" className="w-btn w-btn-3 w-btn-1">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6 wow fadeInRight"
              data-wow-delay=".7s"
            >
              <div className="about__thumb-wrapper-2 ml-40 p-relative m-img">
                <img src="assets/img/about/about-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
