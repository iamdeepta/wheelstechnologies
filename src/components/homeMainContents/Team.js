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
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      autoplay: true,
    };
  } else {
    settings = {
      // dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear",
      autoplay: true,
    };
  }

  return (
    <>
      <section className="team__area grey-bg-3 pt-120 pb-195 overflow-y-visible p-relative our_works_section_mbl">
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
          <div className="row align-items-end our_works_header_row_mbl">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-8 our_works_header_left_mbl">
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
            <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-5 col-sm-4 our_works_header_right_mbl">
              <div className="team__more text-sm-end mb-70">
                <Link to="/our-concerns" className="w-btn w-btn-blue w-btn-7">
                  View all{" "}
                </Link>
              </div>
            </div>
          </div>

          <Slider {...settings}>
            {/* {data1.map((item, index) => ( */}
            {/* <div className="card-wrapper" key={item.homesection6_main_id}> */}

            <div className="card-wrapper">
              <a href="https://bazaarface.com" target={"__blank"}>
                <div className="cards">
                  <div className="card-image">
                    <img
                      //src={AppUrl.image_url + item.homesection6_main_image}
                      src={"/images/bazaarface_logo.png"}
                      alt={"work_image"}
                      className="team_image"
                    />

                    <h4 className="team_title">Bazaarface</h4>
                    <p className="team_para">
                      An online platform where buyer and seller can buy or sell
                      from both local and international markets
                    </p>

                    <a
                      href="https://bazaarface.com"
                      target={"__blank"}
                      className="team_read_more"
                    >
                      VIEW
                      <Link className="read_more_btn_link" to="#">
                        <button className="btn btn-danger read_more_btn"></button>
                      </Link>
                    </a>

                    <div className="color_bg"></div>
                    <img
                      src={"/images/bazaarface.PNG"}
                      alt={"work_image"}
                      className="team_image_main"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="card-wrapper">
              <a href="https://letobd.com" target={"__blank"}>
                <div className="cards">
                  <div className="card-image">
                    <img
                      //src={AppUrl.image_url + item.homesection6_main_image}
                      src={"/images/leto_logo1.webp"}
                      alt={"work_image"}
                      className="team_image"
                    />

                    <h4 className="team_title">L'ETO</h4>
                    <p className="team_para">
                      Online shop for mouth watering desserts made with love.
                    </p>

                    <a
                      href="https://letobd.com"
                      target={"__blank"}
                      className="team_read_more"
                    >
                      VIEW
                      <Link className="read_more_btn_link" to="#">
                        <button className="btn btn-danger read_more_btn"></button>
                      </Link>
                    </a>

                    <div className="color_bg"></div>
                    <img
                      src={"/images/letobd.PNG"}
                      alt={"work_image"}
                      className="team_image_main"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="card-wrapper">
              <a href="https://moishibd.com" target={"__blank"}>
                <div className="cards">
                  <div className="card-image">
                    <img
                      //src={AppUrl.image_url + item.homesection6_main_image}
                      src={"/images/moishi_logo1.png"}
                      alt={"work_image"}
                      className="team_image"
                    />

                    <h4 className="team_title">Moishi</h4>
                    <p className="team_para">
                      Authentic Japanese mochi icecream and other sweets like
                      cake, baklava, smoothie etc. ordering application.
                    </p>

                    <a
                      href="https://moishibd.com"
                      target={"__blank"}
                      className="team_read_more"
                    >
                      VIEW
                      <Link className="read_more_btn_link" to="#">
                        <button className="btn btn-danger read_more_btn"></button>
                      </Link>
                    </a>

                    <div className="color_bg"></div>
                    <img
                      src={"/images/moishibd.PNG"}
                      alt={"work_image"}
                      className="team_image_main"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="card-wrapper">
              <a href="http://www.kwgroup-bd.com" target={"__blank"}>
                <div className="cards">
                  <div className="card-image">
                    <img
                      //src={AppUrl.image_url + item.homesection6_main_image}
                      src={"/images/kw_logo.png"}
                      alt={"work_image"}
                      className="team_image"
                    />

                    <h4 className="team_title">KW Group</h4>
                    <p className="team_para">
                      A global leader in apparel manufacturing and outsourcing.
                    </p>

                    <a
                      href="http://www.kwgroup-bd.com"
                      target={"__blank"}
                      className="team_read_more"
                    >
                      VIEW
                      <Link className="read_more_btn_link" to="#">
                        <button className="btn btn-danger read_more_btn"></button>
                      </Link>
                    </a>

                    <div className="color_bg"></div>
                    <img
                      src={"/images/kwgroup.PNG"}
                      alt={"work_image"}
                      className="team_image_main"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="card-wrapper">
              <a href="https://icinemabd.com/register" target={"__blank"}>
                <div className="cards">
                  <div className="card-image">
                    <img
                      //src={AppUrl.image_url + item.homesection6_main_image}
                      src={"/images/icinema_logo.webp"}
                      alt={"work_image"}
                      className="team_image"
                    />

                    <h4 className="team_title">Icinema</h4>
                    <p className="team_para">
                      An online streaming platform where user can enjoy watching
                      movies, series and listening to music.
                    </p>

                    <a
                      href="https://icinemabd.com/register"
                      target={"__blank"}
                      className="team_read_more"
                    >
                      VIEW
                      <Link className="read_more_btn_link" to="#">
                        <button className="btn btn-danger read_more_btn"></button>
                      </Link>
                    </a>

                    <div className="color_bg"></div>
                    <img
                      src={"/images/icinema.PNG"}
                      alt={"work_image"}
                      className="team_image_main"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="card-wrapper">
              <a href="https://bosphorusbd.com" target={"__blank"}>
                <div className="cards">
                  <div className="card-image">
                    <img
                      //src={AppUrl.image_url + item.homesection6_main_image}
                      src={"/images/bosphorus_logo.webp"}
                      alt={"work_image"}
                      className="team_image"
                    />

                    <h4 className="team_title">Bosphorus</h4>
                    <p className="team_para">
                      A responsive web application for the Bosphorus restaurant
                      where people can order their desired foods online.
                    </p>

                    <a
                      href="https://bosphorusbd.com"
                      target={"__blank"}
                      className="team_read_more"
                    >
                      VIEW
                      <Link className="read_more_btn_link" to="#">
                        <button className="btn btn-danger read_more_btn"></button>
                      </Link>
                    </a>

                    <div className="color_bg"></div>
                    <img
                      src={"/images/bosphorus_big.webp"}
                      alt={"work_image"}
                      className="team_image_main"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="card-wrapper">
              <a href="https://designhubtechnologies.com" target={"__blank"}>
                <div className="cards">
                  <div className="card-image">
                    <img
                      //src={AppUrl.image_url + item.homesection6_main_image}
                      src={"/images/designhub_logo.png"}
                      alt={"work_image"}
                      className="team_image"
                      style={{ width: "220px" }}
                    />

                    <h4 className="team_title">Designhub Technologies</h4>
                    <p className="team_para">
                      A responsive web application for digital agency company's
                      portfolio.
                    </p>

                    <a
                      href="https://designhubtechnologies.com"
                      target={"__blank"}
                      className="team_read_more"
                    >
                      VIEW
                      <Link className="read_more_btn_link" to="#">
                        <button className="btn btn-danger read_more_btn"></button>
                      </Link>
                    </a>

                    <div className="color_bg"></div>
                    <img
                      src={"/images/designhub.PNG"}
                      alt={"work_image"}
                      className="team_image_main"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="card-wrapper">
              <a href="https://covidsurokkha.com" target={"__blank"}>
                <div className="cards">
                  <div className="card-image">
                    <img
                      //src={AppUrl.image_url + item.homesection6_main_image}
                      src={"/images/covidsurokkha_logo.webp"}
                      alt={"work_image"}
                      className="team_image"
                    />

                    <h4 className="team_title">covidsurokkha</h4>
                    <p className="team_para">
                      A covid related informative web appliction which was built
                      for the wellbeing of people all over Bangladesh.
                    </p>

                    <a
                      href="https://covidsurokkha.com"
                      target={"__blank"}
                      className="team_read_more"
                    >
                      VIEW
                      <Link className="read_more_btn_link" to="#">
                        <button className="btn btn-danger read_more_btn"></button>
                      </Link>
                    </a>

                    <div className="color_bg"></div>
                    <img
                      src={"/images/covidsurokkha.PNG"}
                      alt={"work_image"}
                      className="team_image_main"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="card-wrapper">
              <a href="http://www.ronyrezaul.com" target={"__blank"}>
                <div className="cards">
                  <div className="card-image">
                    <img
                      //src={AppUrl.image_url + item.homesection6_main_image}
                      src={"/images/ronyrezaul_logo.webp"}
                      alt={"work_image"}
                      className="team_image"
                    />

                    <h4 className="team_title">Rony Rezaul</h4>
                    <p className="team_para">
                      Represents fashion photoshoot conducted by photographer
                      Rony Rezaul.
                    </p>

                    <a
                      href="http://www.ronyrezaul.com"
                      target={"__blank"}
                      className="team_read_more"
                    >
                      VIEW
                      <Link className="read_more_btn_link" to="#">
                        <button className="btn btn-danger read_more_btn"></button>
                      </Link>
                    </a>

                    <div className="color_bg"></div>
                    <img
                      src={"/images/ronyrezaul.webp"}
                      alt={"work_image"}
                      className="team_image_main"
                    />
                  </div>
                </div>
              </a>
            </div>
            {/* ))} */}
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
