import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import "./css/blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "blogsectionGet3")
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
      <section className="blog__area pt-90 pb-140 p-relative">
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
        <div id="blog_card_section blog_card_section_home">
          <div id="blog_card_section_inside">
            {data.map((item) => {
              return (
                <>
                  <Link to={"/blog/" + item.blogsection_id}>
                    <div id="blogs_card_main_div" key={item.blogsection_id}>
                      <div className="card blogs_card">
                        <img
                          className="card-img-top"
                          src={AppUrl.image_url + item.blogsection_image1}
                          alt={item.blogsection_title + " image"}
                        />

                        <div id="blogs_date_div">
                          <span id="blogs_date_text">
                            {item.blogsection_day}
                          </span>
                        </div>

                        <div id="blog_tag_div">
                          <span id="blog_tag_text">{item.blogsection_tag}</span>
                        </div>

                        <div className="card-body" id="blogs_card_body">
                          <h5 className="card-title">
                            {item.blogsection_title}
                          </h5>
                          <p className="card-text">
                            {item.blogsection_description1.substring(0, 150)}
                          </p>
                          <div id="blogs_card_bottom_div">
                            <p id="blogs_category_p">
                              <a id="blogs_category_a" href=".">
                                {item.blogsection_category}
                              </a>
                            </p>

                            <span id="blogs_time_span">
                              <i className="far fa-clock"></i>
                              <span id="blogs_time_text">
                                {item.blogsection_time + " minutes"}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
          <div className="row">
            <div className="col-xxl-12 wow fadeInUp" data-wow-delay=".9s">
              <div className="blog__more text-center mt-40">
                <Link to="/blog" className="w-btn w-btn-blue w-btn-6">
                  View all Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="blog__shape">
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
                    <Link to={"/blog/" + item.blogsection_id}>
                      <img
                        src={AppUrl.image_url + item.blogsection_image1}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="blog__content pt-20">
                    <div className="blog__meta mb-10">
                      <span className="date">
                        {item.blogsection_day + ", " + item.blogsection_year}
                      </span>
                      <span className="tag">
                        <Link to={"/blog/" + item.blogsection_id}>
                          {item.blogsection_tag}
                        </Link>
                      </span>
                    </div>
                    <h3 className="blog__title">
                      <Link to={"/blog/" + item.blogsection_id}>
                        {item.blogsection_title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}

          </div>
          <div className="row">
            <div className="col-xxl-12 wow fadeInUp" data-wow-delay=".9s">
              <div className="blog__more text-center mt-40">
                <Link to="/blog" className="w-btn w-btn-blue w-btn-6">
                  View all Blog
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Blog;
