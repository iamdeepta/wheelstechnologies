import React from "react";

const FeatureTwo = () => {
  return (
    <>
      <section className="features__area pt-135 pb-120 p-relative">
        <div className="features__shape-2">
          <img
            className="features-2-dot"
            src="assets/img/icon/features/home-2/features-dot.png"
            alt=""
          />
          <img
            className="features-2-dot-2"
            src="assets/img/icon/features/home-2/features-dot-2.png"
            alt=""
          />
          <img
            className="features-2-dot-3"
            src="assets/img/icon/features/home-2/features-dot-3.png"
            alt=""
          />
          <img
            className="features-2-triangle-1"
            src="assets/img/icon/features/home-2/features-triangle-1.png"
            alt=""
          />
          <img
            className="features-2-triangle-2"
            src="assets/img/icon/features/home-2/features-triangle-2.png"
            alt=""
          />
          <img
            className="features-2-triangle-3"
            src="assets/img/icon/features/home-2/features-triangle-3.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
              <div
                className="section__title-wrapper section__title-wrapper-2 text-center mb-75 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="section__pre-title purple">Features</span>
                <h2 className="section__title section__title-2">
                  We work together to create beautiful product.
                </h2>
                <p>Starkers pardon you knees up is Elizabeth geeza Why.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 offset-xxl-1 col-xl-3 col-lg-4 col-md-4">
              <div className="features__tab">
                <ul className="nav nav-tabs" id="feaTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link pink-bg"
                      id="sync-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#sync"
                      type="button"
                      role="tab"
                      aria-controls="sync"
                      aria-selected="true"
                    >
                      {" "}
                      <i className="icon_document_alt"></i> Seamless Sync
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link blue-bg active"
                      id="security-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#security"
                      type="button"
                      role="tab"
                      aria-controls="security"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="icon_book_alt"></i> Super security
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link yellow-bg"
                      id="multitask-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#multitask"
                      type="button"
                      role="tab"
                      aria-controls="multitask"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="icon_flowchart"></i> Multitask
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 offset-xxl-1 col-xl-7 offset-xl-1 col-lg-8 col-md-8">
              <div className="features__tab-content">
                <div className="tab-content" id="feaTabContent">
                  <div
                    className="tab-pane fade"
                    id="sync"
                    role="tabpanel"
                    aria-labelledby="sync-tab"
                  >
                    <div className="features__thumb">
                      <div className="features__thumb-inner">
                        <img
                          className="fea-thumb"
                          src="assets/img/features/home-2/fea-thumb-2.jpg"
                          alt=""
                        />
                        <img
                          className="fea-sm"
                          src="assets/img/features/home-2/fea-sm.jpg"
                          alt=""
                        />
                        <img
                          className="fea-sm-2"
                          src="assets/img/features/home-2/fea-sm-2.jpg"
                          alt=""
                        />
                        <img
                          className="fea-2-shape"
                          src="assets/img/icon/features/home-2/features-shape.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="security"
                    role="tabpanel"
                    aria-labelledby="security-tab"
                  >
                    <div className="features__thumb">
                      <div className="features__thumb-inner">
                        <img
                          className="fea-thumb"
                          src="assets/img/features/home-2/fea-thumb.jpg"
                          alt=""
                        />
                        <img
                          className="fea-sm"
                          src="assets/img/features/home-2/fea-sm.jpg"
                          alt=""
                        />
                        <img
                          className="fea-sm-2"
                          src="assets/img/features/home-2/fea-sm-2.jpg"
                          alt=""
                        />
                        <img
                          className="fea-2-shape"
                          src="assets/img/icon/features/home-2/features-shape.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="multitask"
                    role="tabpanel"
                    aria-labelledby="multitask-tab"
                  >
                    <div className="features__thumb">
                      <div className="features__thumb-inner">
                        <img
                          className="fea-thumb"
                          src="assets/img/features/home-2/fea-thumb-3.jpg"
                          alt=""
                        />
                        <img
                          className="fea-sm"
                          src="assets/img/features/home-2/fea-sm.jpg"
                          alt=""
                        />
                        <img
                          className="fea-sm-2"
                          src="assets/img/features/home-2/fea-sm-2.jpg"
                          alt=""
                        />
                        <img
                          className="fea-2-shape"
                          src="assets/img/icon/features/home-2/features-shape.png"
                          alt=""
                        />
                      </div>
                    </div>
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

export default FeatureTwo;
