import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

const Features = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    getData();
    getData1();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "aboutsection2Get")
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
      .get(AppUrl.base_url + "aboutsection2MainGet")
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
      <section className="about__area pb-45 pt-45 p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-9 order-last order-lg-first">
              <div className="about__wrapper about__wrapper-2 mb-20">
                <div
                  className="section__title-wrapper mb-25 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h2 className="section__title">{data.aboutsection2_title}</h2>
                  <p>{data.aboutsection2_description}</p>
                </div>
                <ul className="wow fadeInUp" data-wow-delay=".5s">
                  {data1.map((item, index) => (
                    <li key={item.aboutsection2_main_id}>
                      {item.aboutsection2_main_title}
                    </li>
                  ))}
                  {/* <li>Intergate With Popular Softwares item</li>
                  <li>Instantly Create Your Crowdfunding Platform</li> */}
                </ul>
                <a href="contact.html" className="w-btn w-btn-3 w-btn-1">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6 wow fadeInRight"
              data-wow-delay=".7s"
            >
              <div className="about__thumb-wrapper-2 ml-40 p-relative m-img">
                <img
                  src={AppUrl.image_url + data.aboutsection2_image}
                  alt={data.aboutsection2_title + " image"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
