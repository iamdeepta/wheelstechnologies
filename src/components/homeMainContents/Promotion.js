import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

const Promotion = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "homesection8Get")
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
      <section className="promotion__area promotion__bg pt-125 pb-125 p-relative">
        <div className="promotion__shape">
          <img
            className="promotion-dot"
            src="assets/img/icon/promotion/pro-dot.png"
            alt=""
          />
          <img
            className="promotion-plus"
            src="assets/img/icon/promotion/pro-plus.png"
            alt=""
          />
          <img
            className="promotion-triangle"
            src="assets/img/icon/promotion/pro-triangle.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div
                className="promotion__content wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h3 className="promotion__title">
                  {data.homesection8_left_title1} <br />{" "}
                  {data.homesection8_left_title2}
                </h3>
                <p>{data.homesection8_left_description}</p>
                <a href="about.html" className="w-btn w-btn-8 w-btn-1-white">
                  read more
                </a>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div
                className="promotion__content pl-70 promotion__right wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h3 className="promotion__title">
                  {data.homesection8_right_title1} <br />{" "}
                  {data.homesection8_right_title2}
                </h3>
                <p>{data.homesection8_right_description}</p>
                <a href="about.html" className="w-btn w-btn-8 w-btn-1-white">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promotion;
