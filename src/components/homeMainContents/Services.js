import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import "./css/featured_on.css";
import "./css/services.css";

const Services = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    getData();
    getData1();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "homesection2Get3")
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
      .get(AppUrl.base_url + "homesection2HeaderGet")
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
      <div class="featured_on_floating_purple"></div>

      <a href="https://fb.watch/7HlRBH38Tm/">
        <div class="featured_on_floating_white">
          <div class="featured_on_floating_content">
            <p className="featured_on_text">Featured On</p>
            <img
              className="featured_on_image"
              src="images/prothom-alo-logo.webp"
              alt="featured on logo"
            />
          </div>
        </div>
      </a>
      <section className="services__area grey-bg-3 pt-80 mt-100 pb-60 p-relative">
        <div className="services__shape-2">
          <img
            className="services-2-circle"
            src="assets/img/icon/services/home-2/services-circle.png"
            alt=""
          />
          <img
            className="services-2-circle-2"
            src="assets/img/icon/services/home-2/services-circle-2.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-4 col-lg-5 col-md-7">
              <div
                className="section__title-wrapper mb-70 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="section__pre-title purple">
                  {data1.homesection2_header_category}
                </span>
                <h2 className="section__title section__title-2">
                  {data1.homesection2_header_title}
                </h2>
              </div>
            </div>
            <div className="col-xxl-8 col-lg-7 col-md-5">
              <div
                className="services__more mb-70 text-sm-end wow fadeInUp"
                data-wow-delay=".5s"
              >
                <a
                  href="services.html"
                  className="w-btn w-btn-blue w-btn-6 w-btn-3"
                >
                  view all services
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((item, index) => (
              <div
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={"." + index * 1.5}
              >
                <div
                  className={
                    index === 0
                      ? "services__inner services__inner-2 hover__active active mb-30"
                      : "services__inner services__inner-2 hover__active mb-30"
                  }
                >
                  <div className="services__item-2 transition-3 white-bg ">
                    <div className="services__icon-2">
                      <img
                        src={AppUrl.image_url + item.homesection2_image}
                        alt={item.homsection2_title + " image"}
                      />
                    </div>
                    <div className="services__content-2">
                      <h3 className="services__title-2">
                        <a href="services-details.html">
                          {item.homesection2_title}
                        </a>
                      </h3>
                      <p>{item.homesection2_description}</p>
                    </div>

                    <a href=".">
                      <span className="services_read_more_btn">
                        <span className="read_more_btn_text">Read More</span>
                        <span className="services_read_more_arrow">
                          <i className="far fa-arrow-right"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="services__inner services__inner-2 hover__active active mb-30">
                <div className="services__item-2 transition-3 white-bg ">
                  <div className="services__icon-2">
                    <img
                      src="assets/img/icon/services/home-2/services-2.png"
                      alt=""
                    />
                  </div>
                  <div className="services__content-2">
                    <h3 className="services__title-2">
                      <a href="services-details.html">Technology</a>
                    </h3>
                    <p>Absolutely bladdered he blimey guvnor agency. </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="services__inner services__inner-2 hover__active mb-30">
                <div className="services__item-2  transition-3 white-bg">
                  <div className="services__icon-2">
                    <img
                      src="assets/img/icon/services/home-2/services-3.png"
                      alt=""
                    />
                  </div>
                  <div className="services__content-2">
                    <h3 className="services__title-2">
                      <a href="services-details.html">OptimalSort</a>
                    </h3>
                    <p>Absolutely bladdered he blimey guvnor agency. </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
