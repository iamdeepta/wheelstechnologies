import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

const Services = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    getData();
    getData1();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "aboutsection1Get")
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
      .get(AppUrl.base_url + "aboutsection1MainGet")
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
      <section className="services__area pt-110 pb-45">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div
                className="section__title-wrapper section__title-wrapper-4 text-center mb-65 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h2 className="section__title section__title-4 section__title-4-p-2">
                  {data.aboutsection1_title}
                </h2>
                <p>{data.aboutsection1_description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {data1.map((item, index) => (
              <div
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={"." + (index + 1) * 1.5 + "s"}
              >
                <div className="services__item-4 white-bg mb-30">
                  <div className="services__thumb-4 text-center d-flex align-items-end justify-content-center">
                    <img
                      src={AppUrl.image_url + item.aboutsection1_main_image}
                      alt=""
                    />
                  </div>
                  <div className="services__content-4">
                    <h3 className="services__title-4">
                      <a href="services-details.html">
                        {item.aboutsection1_main_title}
                      </a>
                    </h3>
                    <p>{item.aboutsection1_main_description}</p>
                    <a href="services-details.html" className="link-btn">
                      Chat Platfrom <i className="arrow_right"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="services__item-4 white-bg mb-30">
                <div className="services__thumb-4 text-center d-flex align-items-end justify-content-center">
                  <img src="assets/img/services/home-4/services-2.png" alt="" />
                </div>
                <div className="services__content-4">
                  <h3 className="services__title-4">
                    <a href="services-details.html">
                      Start workflows from any app
                    </a>
                  </h3>
                  <p>
                    I smashing, hanky panky chap plastered show off show off
                    pick your nose plastered.
                  </p>
                  <a href="services-details.html" className="link-btn">
                    Chat Platfrom <i className="arrow_right"></i>{" "}
                  </a>
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
