import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

const FeatureOne = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "homesection3Get")
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
      <section className="about__area grey-bg-3 pt-40 pb-120 p-relative">
        <div className="about__shape-2">
          <img
            className="about-2-circle"
            src="assets/img/about/home-2/about-circle.png"
            alt=""
          />
          <img
            className="about-2-circle-2"
            src="assets/img/about/home-2/about-circle-2.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-8">
              <div
                className="about__thumb-3 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <img
                  src={AppUrl.image_url + data.homesection3_image}
                  alt="features images"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8">
              <div className="about__content-3 pt-55">
                <div
                  className="section__title-wrapper section__title-wrapper-2 mb-55 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <span className="section__pre-title pink">
                    {data.homesection3_category}
                  </span>
                  <h2 className="section__title section__title-2">
                    {data.homesection3_title}
                  </h2>
                  <p>{data.homesection3_description}</p>
                </div>
                <a href="/" className="w-btn w-btn-blue w-btn-3 w-btn-1">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureOne;
