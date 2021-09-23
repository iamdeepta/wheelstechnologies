import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "blogsectionGet")
      .then(function (response) {
        if (response) {
          setData(response.data);

          //console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
                <h2 className="section__title section__title-2">Blogs</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((item, index) => (
              <div
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={"." + (index + 1) * 1.5 + "s"}
                key={item.blogsection_id}
              >
                <div className="blog__item white-bg mb-30">
                  <div className="blog__thumb fix w-img">
                    <a href="blog-details.html">
                      <img
                        src={AppUrl.image_url + item.blogsection_image1}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="blog__content pt-20">
                    <div className="blog__meta mb-10">
                      <span className="date">
                        {item.blogsection_day + ", " + item.blogsection_year}
                      </span>
                      <span className="tag">
                        <a href="index.html">{item.blogsection_tag}</a>
                      </span>
                    </div>
                    <h3 className="blog__title">
                      <a href="blog-details.html">{item.blogsection_title}</a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}

            {/* <div
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
            </div> */}
            {/* <div
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
            </div> */}
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
