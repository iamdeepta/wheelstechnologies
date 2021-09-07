import React from "react";

const Faq = () => {
  return (
    <>
      <section className="faq__area pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="faq__wrapper wow fadeInUp" data-wow-delay=".3s">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What to do if you can’t access ?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Looking to start an online store and you're not sure
                          where to begin? I'll guide will help you to navigate
                          Would you like to boost your Twitter profile.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How to start an online store in 2021 ?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Looking to start an online store and you're not sure
                          where to begin? I'll guide will help you to navigate
                          Would you like to boost your Twitter profile.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-none">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed pb-0 "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How to change font size in wordPress ?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Looking to start an online store and you're not sure
                          where to begin? I'll guide will help you to navigate
                          Would you like to boost your Twitter profile.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
              <div className="faq__content">
                <div
                  className="section__title-wrapper section__title-wrapper-2 mb-35 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <h2 className="section__title section__title-2">
                    Loved and trusted by over 40k+ users!
                  </h2>
                  <p>
                    Over the last few years, podcasts have become a huge deal.
                    They’ve taken on a growing role.
                  </p>
                </div>
                <div className="faq__counter wow fadeInUp" data-wow-delay=".7s">
                  <ul>
                    <li>
                      <h3 className="pink">
                        <span className="counter">876</span>
                      </h3>
                      <p>Happy Clients</p>
                    </li>
                    <li>
                      <h3 className="blue">
                        <span className="counter">156</span>
                      </h3>
                      <p>Projects</p>
                    </li>
                    <li>
                      <h3 className="yellow">
                        <span className="counter">430</span>
                      </h3>
                      <p>Trusted Users</p>
                    </li>
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

export default Faq;
