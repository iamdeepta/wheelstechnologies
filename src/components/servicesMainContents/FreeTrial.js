import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

const FreeTrial = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "servicesection2Get")
      .then(function (response) {
        if (response) {
          setData(response.data);
          //console.log(response.data.servicesection2_list.split(","));
          setData1(response.data.servicesection2_list.split(","));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <section className="cta__area blue-bg-10 pt-140 pb-130 p-relative fix z-index-1">
        <div className="cta__shape">
          <img
            className="cta-4-shape"
            src="assets/img/cta/home-4/cta-shape.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2">
              <div className="cta__content-4 text-center">
                <div
                  className="section__title-wrapper section__title-wrapper-4 section__title-white text-center mb-45 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h2 className="section__title section__title-4">
                    {data.servicesection2_title}
                  </h2>
                  <p>{data.servicesection2_description}</p>
                </div>
                <div
                  className="cta__form mb-25 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <form action="#">
                    <input type="email" placeholder="Enter Your Email" />
                    <button type="submit">Start Free Trial</button>
                  </form>
                </div>
                <div
                  className="cta__features wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <ul>
                    {data1.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                    {/* <li>Product support</li>
                    <li>Free trial</li>
                    <li>Connect Customer</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrial;
