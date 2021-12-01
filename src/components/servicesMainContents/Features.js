import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import "./css/features.css";

const Features = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    getData();
    getData1();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "servicesection1Get")
      .then(function (response) {
        if (response) {
          setData(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getData1() {
    axios
      .get(AppUrl.base_url + "servicesection1MainGet")
      .then(function (response) {
        if (response) {
          setData1(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <section className="features__area pt-110 pb-70 p-relative overflow-y-visible">
        <div className="circle-animation features">
          <span></span>
        </div>
        <div className="features__shape">
          <img
            className="features-circle-1"
            src="assets/img/icon/features/home-1/circle-1.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div
                className="section__title-wrapper mb-65 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h2 className="section__title">{data.servicesection1_title}</h2>
                <p>{data.servicesection1_description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {data1.map((item, index) => (
              <>
                <div
                  className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                  key={item.servicesection1_main_id}
                >
                  <div
                    className="features__item mb-30 wow fadeInUp"
                    data-wow-delay={"." + (index + 1) * 1.5 + "s"}
                  >
                    <div className="features__icon mb-35">
                      {index === 0 && (
                        <>
                          <span className="gradient-pink">
                            <i className="far fa-heart-rate"></i>
                            {/* <img
                          className="service_icon"
                          src={
                            AppUrl.image_url + item.servicesection1_main_image
                          }
                          alt={item.servicesection1_main_title + " image"}
                        /> */}
                          </span>
                        </>
                      )}

                      {index === 1 && (
                        <>
                          <span className="gradient-blue">
                            <i className="fal fa-chart-pie-alt"></i>
                            {/* <img
                          className="service_icon"
                          src={
                            AppUrl.image_url + item.servicesection1_main_image
                          }
                          alt={item.servicesection1_main_title + " image"}
                        /> */}
                          </span>
                        </>
                      )}

                      {index === 2 && (
                        <>
                          <span className="gradient-yellow">
                            <i className="fal fa-tag"></i>
                            {/* <img
                          className="service_icon"
                          src={
                            AppUrl.image_url + item.servicesection1_main_image
                          }
                          alt={item.servicesection1_main_title + " image"}
                        /> */}
                          </span>
                        </>
                      )}

                      {index === 3 && (
                        <>
                          <span className="gradient-purple">
                            <i className="fal fa-layer-group"></i>
                            {/* <img
                          className="service_icon"
                          src={
                            AppUrl.image_url + item.servicesection1_main_image
                          }
                          alt={item.servicesection1_main_title + " image"}
                        /> */}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="features__title">
                      {item.servicesection1_main_title}
                    </h3>
                    <div className="features__list">
                      <ul>
                        {/* {data2.map((item1, index1) => ( */}
                        {item.servicesection1_main_description
                          .split(",")
                          .map((item1, index1) => (
                            <li key={index1}>{item1}</li>
                          ))}

                        {/* ))} */}
                        {/* <li>Secure Access</li>
                      <li>Connectivity</li>
                      <li>Engagement</li>
                      <li>Secure Access</li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ))}

            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div
                className="features__item mb-30 wow fadeInUp pl-15"
                data-wow-delay=".5s"
              >
                <div className="features__icon mb-35">
                  <span className="gradient-blue">
                    <i className="fal fa-chart-pie-alt"></i>
                  </span>
                </div>
                <h3 className="features__title">Scheduled Reports</h3>
                <div className="features__list">
                  <ul>
                    <li>Publish anywhere </li>
                    <li>Influencer</li>
                    <li>Content Creation</li>
                    <li>Prepare your brand</li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div
                className="features__item mb-30 wow fadeInUp pl-45"
                data-wow-delay=".7s"
              >
                <div className="features__icon mb-35">
                  <span className="gradient-yellow">
                    <i className="fal fa-tag"></i>
                  </span>
                </div>
                <h3 className="features__title">Compliance Controls</h3>
                <div className="features__list">
                  <ul>
                    <li>Animations</li>
                    <li>3D Viewer</li>
                    <li>Creation</li>
                    <li>Packaging Designer </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 d-lg-flex justify-content-end">
              <div
                className="features__item mb-30 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="features__icon mb-35">
                  <span className="gradient-purple">
                    <i className="fal fa-layer-group"></i>
                  </span>
                </div>
                <h3 className="features__title">Authentication</h3>
                <div className="features__list">
                  <ul>
                    <li>Print Templates</li>
                    <li>Mockups</li>
                    <li>Statement</li>
                    <li>Recruitment</li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
