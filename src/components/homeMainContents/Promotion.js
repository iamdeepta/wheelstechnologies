import React from "react";

const Promotion = () => {
  return (
    <>
      <section className="promotion__area promotion__bg pt-125 pb-125 p-relative">
        <div className="promotion__shape">
          <img
            className="promotion-dot"
            src="assets/img/icon/promotion/pro-dot.png"
            alt=""
          />
          <img
            className="promotion-plus"
            src="assets/img/icon/promotion/pro-plus.png"
            alt=""
          />
          <img
            className="promotion-triangle"
            src="assets/img/icon/promotion/pro-triangle.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div
                className="promotion__content wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h3 className="promotion__title">
                  Product goals? <br /> Let's make them happen.
                </h3>
                <p>They’ve taken on a growing role Over the last few year.</p>
                <a href="about.html" className="w-btn w-btn-8 w-btn-1-white">
                  read more
                </a>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div
                className="promotion__content pl-70 promotion__right wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h3 className="promotion__title">
                  Looking for enterprise <br /> solution.
                </h3>
                <p>They’ve taken on a growing role Over the last few year.</p>
                <a href="about.html" className="w-btn w-btn-8 w-btn-1-white">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promotion;
