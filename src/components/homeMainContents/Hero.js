import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import Typewriter from "typewriter-effect";
import "./css/hero.css";

const Hero = () => {
  const [data, setData] = useState([]);
  //const i = ["hello", "world", "main seo"];
  const [data1, setData1] = useState([]);

  useEffect(() => {
    getData();
    getData1();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "homesection1Get")
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
      .get(AppUrl.base_url + "homesection1MainGet")
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

  return (
    <>
      <section className="hero__area hero__height-2 p-relative d-flex align-items-center">
        <div className="hero__shape-2">
          <img
            className="hero-2-dot"
            src="assets/img/icon/hero/home-2/hero-2-dot.png"
            alt="hero-2-dot"
          />
          <img
            className="hero-2-dot-2"
            src="assets/img/icon/hero/home-2/hero-2-dot-2.png"
            alt="hero-2-dot-2"
          />
          <img
            className="hero-2-flower"
            src="assets/img/icon/hero/home-2/hero-2-flower.png"
            alt="hero-2-flower"
          />
          <img
            className="hero-2-triangle"
            src="assets/img/icon/hero/home-2/hero-2-triangle.png"
            alt="hero-2-triangle"
          />
          <img
            className="hero-2-triangle-2"
            src="assets/img/icon/hero/home-2/hero-2-triangle-2.png"
            alt="hero-2-triangle-2"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-6 col-lg-8">
              <div className="hero__content-2 mt-55">
                <span className="hero__pre-title">
                  {data.homesection1_category}
                </span>
                <h2 className="hero__title-2 hero_title">
                  {data.homesection1_title}{" "}
                  <Typewriter
                    options={{
                      strings: data1.map(
                        (item, index) => item.homesection1_main_title
                      ),
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      deleteSpeed: 60,
                    }}
                  />
                </h2>
                <p>{data.homesection1_description}</p>
                <a
                  href="about.html"
                  className="w-btn w-btn-blue w-btn-7 w-btn-6"
                >
                  Contact Us{" "}
                </a>

                <div className="hero__client mt-60">
                  <ul>
                    <li>
                      <img
                        src="images/covidsurokkha1.png"
                        alt="covidsurokkha logo"
                        className="covidsurokkha_logo"
                      />
                    </li>
                    <li>
                      <img
                        src="images/ronylogo.png"
                        alt="ronyrezaul logo"
                        className="ronyrezaul_logo"
                      />
                    </li>
                    <li>
                      <img
                        src="images/cryptogenies1.PNG"
                        alt="cryptogenies logo"
                        className="cryptogenies_logo"
                      />
                    </li>
                    <li>
                      <img
                        src="images/shoesbyenvy.PNG"
                        alt="shoes by envy logo"
                        className="shoesbyenvy_logo"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 offset-xxl-1 col-xl-6">
              <div className="hero__thumb-2 mt-80">
                <div className="hero__thumb-inner p-relative ml-90">
                  <img
                    className="hero-2-thumb hero_image1"
                    src={AppUrl.image_url + data.homesection1_image1}
                    alt="hero-2-thumb"
                  />
                  {/* <img
                    className="hero-2-girl"
                    src="assets/img/hero/home-2/hero-2-girl.png"
                    alt=""
                  /> */}
                  <img
                    className="hero-2-thumb-sm hero_image2"
                    src={AppUrl.image_url + data.homesection1_image2}
                    alt="hero-2-thumb-sm"
                  />
                  <img
                    className="hero-2-thumb-sm-2 hero_image3"
                    src={AppUrl.image_url + data.homesection1_image3}
                    alt="hero-2-thumb-sm-2"
                  />
                  <img
                    className="hero-2-thumb-sm-3 hero_image4"
                    src={AppUrl.image_url + data.homesection1_image4}
                    alt="hero-2-thumb-sm-3"
                  />
                  <img
                    className="hero-2-circle"
                    src="assets/img/hero/home-2/hero-2-circle.png"
                    alt="hero-2-circle"
                  />
                  <img
                    className="hero-2-circle-2"
                    src="assets/img/hero/home-2/hero-2-circle-2.png"
                    alt="hero-2-circle-2"
                  />
                  <img
                    className="hero-2-leaf"
                    src="assets/img/hero/home-2/hero-2-leaf.png"
                    alt="hero-2-leaf"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
