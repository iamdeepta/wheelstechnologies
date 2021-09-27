import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/team.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

const Team = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    getData();
    getData1();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "homesection6Get")
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

  function getData1() {
    axios
      .get(AppUrl.base_url + "homesection6MainGet")
      .then(function (response) {
        if (response) {
          setData1(response.data);

          //console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  let settings;
  if (window.innerWidth <= 460) {
    settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
    };
  } else {
    settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear",
    };
  }

  return (
    <>
      <section className="team__area grey-bg-3 pt-120 pb-195 overflow-y-visible p-relative">
        <div className="team__shape">
          <img
            className="team-dot"
            src="assets/img/icon/team/home-2/team-dot.png"
            alt=""
          />
          <img
            className="team-triangle"
            src="assets/img/icon/team/home-2/team-triangle.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-8">
              <div
                className="section__title-wrapper mb-70 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="section__pre-title blue">
                  {data.homesection6_category}
                </span>
                <h2 className="section__title section__title-2">
                  {data.homesection6_title}
                </h2>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-5 col-sm-4">
              <div className="team__more text-sm-end mb-70">
                <a href="team.html" className="w-btn w-btn-blue w-btn-7">
                  View all{" "}
                </a>
              </div>
            </div>
          </div>

          <Slider {...settings}>
            {data1.map((item, index) => (
              <div className="card-wrapper" key={item.homesection6_main_id}>
                <div className="cards">
                  <div className="card-image">
                    <img
                      src={AppUrl.image_url + item.homesection6_main_image}
                      alt={item.homesection6_main_title + " image"}
                      className="team_image"
                    />

                    <h4 className="team_title">
                      {item.homesection6_main_title}
                    </h4>
                    <p className="team_para">
                      {item.homesection6_main_description}
                    </p>

                    <Link to="#" className="team_read_more">
                      READ MORE
                    </Link>

                    <Link className="read_more_btn_link" to="#">
                      <button className="btn btn-success read_more_btn"></button>
                    </Link>

                    <div className="color_bg"></div>
                    <img
                      src={AppUrl.image_url + item.homesection6_main_image1}
                      alt={item.homesection6_main_title + " image"}
                      className="team_image_main"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="card-wrapper">
              <div className="cards">
                <div className="card-image">
                  <img
                    src="assets/img/icon/services/home-2/services-2.png"
                    alt="image1"
                    className="team_image"
                  />

                  <h4 className="team_title">Digital Marketing</h4>
                  <p className="team_para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa perferendis iusto quia molestias
                  </p>

                  <Link to="#" className="team_read_more">
                    READ MORE
                  </Link>

                  <Link className="read_more_btn_link" to="#">
                    <button className="btn btn-success read_more_btn"></button>
                  </Link>

                  <div className="color_bg"></div>
                </div>
              </div>
            </div> */}

            {/* <div className="card-wrapper">
              <div className="cards">
                <div className="card-image">
                  <img
                    src="assets/img/icon/services/home-2/services-2.png"
                    alt="image1"
                    className="team_image"
                  />

                  <h4 className="team_title">Digital Marketing</h4>
                  <p className="team_para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa perferendis iusto quia molestias
                  </p>

                  <Link to="#" className="team_read_more">
                    READ MORE
                  </Link>

                  <Link className="read_more_btn_link" to="#">
                    <button className="btn btn-success read_more_btn"></button>
                  </Link>

                  <div className="color_bg"></div>
                </div>
              </div>
            </div> */}

            {/* <div className="card-wrapper">
              <div className="cards">
                <div className="card-image">
                  <img
                    src="assets/img/icon/services/home-2/services-2.png"
                    alt="image1"
                    className="team_image"
                  />

                  <h4 className="team_title">Digital Marketing</h4>
                  <p className="team_para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa perferendis iusto quia molestias
                  </p>

                  <Link to="#" className="team_read_more">
                    READ MORE
                  </Link>

                  <Link className="read_more_btn_link" to="#">
                    <button className="btn btn-success read_more_btn"></button>
                  </Link>

                  <div className="color_bg"></div>
                </div>
              </div>
            </div> */}

            {/* <div className="card-wrapper">
              <div className="cards">
                <div className="card-image">
                  <img
                    src="assets/img/icon/services/home-2/services-2.png"
                    alt="image1"
                    className="team_image"
                  />

                  <h4 className="team_title">Digital Marketing</h4>
                  <p className="team_para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa perferendis iusto quia molestias
                  </p>

                  <Link to="#" className="team_read_more">
                    READ MORE
                  </Link>

                  <Link className="read_more_btn_link" to="#">
                    <button className="btn btn-success read_more_btn"></button>
                  </Link>

                  <div className="color_bg"></div>
                </div>
              </div>
            </div> */}
          </Slider>

          {/* <div className="row">
            <div className="col-xxl-12">
              <div
                className="team__slider owl-carousel wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="team__item">
                  <div className="team__thumb w-img p-relative mb-20 fix">
                    <img src="assets/img/team/home-2/team-1.jpg" alt="" />

                    <div className="team__social">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__content">
                    <h3 className="team__title">
                      <a href="team-details.html">Habib Hemel</a>
                    </h3>
                    <span className="team__position">UI UX Designer</span>
                  </div>
                </div>
                <div className="team__item">
                  <div className="team__thumb w-img p-relative mb-20 fix">
                    <img src="assets/img/team/home-2/team-2.jpg" alt="" />

                    <div className="team__social">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__content">
                    <h3 className="team__title">
                      <a href="team-details.html">Nathaneal Down</a>
                    </h3>
                    <span className="team__position">Developer</span>
                  </div>
                </div>
                <div className="team__item">
                  <div className="team__thumb w-img p-relative mb-20 fix">
                    <img src="assets/img/team/home-2/team-3.jpg" alt="" />

                    <div className="team__social">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__content">
                    <h3 className="team__title">
                      <a href="team-details.html">Russell Sprout</a>
                    </h3>
                    <span className="team__position">Supporter</span>
                  </div>
                </div>
                <div className="team__item">
                  <div className="team__thumb w-img p-relative mb-20 fix">
                    <img src="assets/img/team/home-2/team-4.jpg" alt="" />

                    <div className="team__social">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__content">
                    <h3 className="team__title">
                      <a href="team-details.html">Parsley Montana</a>
                    </h3>
                    <span className="team__position">Supporter</span>
                  </div>
                </div>
                <div className="team__item">
                  <div className="team__thumb w-img p-relative mb-20 fix">
                    <img src="assets/img/team/home-2/team-5.jpg" alt="" />

                    <div className="team__social">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__content">
                    <h3 className="team__title">
                      <a href="team-details.html">Illian Decap</a>
                    </h3>
                    <span className="team__position">Envato Customer</span>
                  </div>
                </div>
                <div className="team__item">
                  <div className="team__thumb w-img p-relative mb-20 fix">
                    <img src="assets/img/team/home-2/team-6.jpg" alt="" />

                    <div className="team__social">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__content">
                    <h3 className="team__title">
                      <a href="team-details.html">Jonas John</a>
                    </h3>
                    <span className="team__position">Creator</span>
                  </div>
                </div>
                <div className="team__item">
                  <div className="team__thumb w-img p-relative mb-20 fix">
                    <img src="assets/img/team/home-2/team-7.jpg" alt="" />

                    <div className="team__social">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__content">
                    <h3 className="team__title">
                      <a href="team-details.html">Darly Devid</a>
                    </h3>
                    <span className="team__position">Digital Marketor</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Team;
