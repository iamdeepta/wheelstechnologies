import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

const Contact = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "homesection5Get")
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
      <section className="cta__area pt-145 pb-140 p-relative">
        <div className="cta__shape-2">
          <img
            className="cta-2-circle-2"
            src="assets/img/cta/home-2/cta-circle-2.png"
            alt=""
          />
          <img
            className="cta-2-circle-3"
            src="assets/img/cta/home-2/cta-circle-3.png"
            alt=""
          />
          <img
            className="cta-2-dot"
            src="assets/img/cta/home-2/cta-dot.png"
            alt=""
          />
        </div>
        <div className="container">
          <div
            className="cta__inner-2 gradient-blue-2 p-relative fix wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="cta__shape-2">
              <img
                className="cta-2-circle"
                src="assets/img/cta/home-2/cta-circle.png"
                alt=""
              />
              <img
                className="cta-2-shape"
                src="assets/img/cta/home-2/cta-shape.png"
                alt=""
              />
            </div>
            <div className="row align-items-center">
              <div className="col-xxl-7 col-xl-8 col-lg-10 col-md-9">
                <div className="cta__content-2">
                  <h3 className="cta__title cta__title-2">
                    {/* Effects to use in your <br /> creative web design projects{" "} */}
                    {data.homesection5_title}
                  </h3>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-4 col-lg-2 col-md-3">
                <div className="cta__btn text-md-end">
                  <a
                    href="contact.html"
                    className="w-btn w-btn-white w-btn-white-2"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
