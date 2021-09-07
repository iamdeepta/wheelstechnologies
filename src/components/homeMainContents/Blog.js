import React from "react";

const Blog = () => {
  return (
    <>
      <section className="blog__area pt-30 pb-140 p-relative">
        <div className="blog__shape">
          <img
            className="blog-dot"
            src="assets/img/icon/blog/home-2/blog-dot.png"
            alt=""
          />
          <img
            className="blog-triangle"
            src="assets/img/icon/blog/home-2/blog-triangle.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1">
              <div
                className="section__title-wrapper section__title-wrapper-2 text-center mb-50 wow fadeInUp section-padding section-padding-2"
                data-wow-delay=".3s"
              >
                <h2 className="section__title section__title-2">
                  Compare our wetLand software to blog news alytics
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="blog__item white-bg mb-30">
                <div className="blog__thumb fix w-img">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/home-2/blog-1.jpg" alt="" />
                  </a>
                </div>
                <div className="blog__content pt-20">
                  <div className="blog__meta mb-10">
                    <span className="date">August 27, 2020</span>
                    <span className="tag">
                      <a href="index.html">Development</a>
                    </span>
                  </div>
                  <h3 className="blog__title">
                    <a href="blog-details.html">
                      Modern black fonts use in web design.
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="blog__item white-bg mb-30">
                <div className="blog__thumb fix w-img">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/home-2/blog-2.jpg" alt="" />
                  </a>
                </div>
                <div className="blog__content pt-20">
                  <div className="blog__meta mb-10">
                    <span className="date">August 22, 2020</span>
                    <span className="tag">
                      <a href="index.html">News</a>
                    </span>
                  </div>
                  <h3 className="blog__title">
                    <a href="blog-details.html">
                      What to Know When Developing a Streaming App.
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="blog__item white-bg mb-30">
                <div className="blog__thumb fix w-img">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/home-2/blog-3.jpg" alt="" />
                  </a>
                </div>
                <div className="blog__content pt-20">
                  <div className="blog__meta mb-10">
                    <span className="date">August 15, 2020</span>
                    <span className="tag">
                      <a href="index.html">Design</a>
                    </span>
                  </div>
                  <h3 className="blog__title">
                    <a href="blog-details.html">
                      20 of the Best Free Resources For App Developers.
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12 wow fadeInUp" data-wow-delay=".9s">
              <div className="blog__more text-center mt-40">
                <a href="blog.html" className="w-btn w-btn-blue w-btn-6">
                  View all Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
