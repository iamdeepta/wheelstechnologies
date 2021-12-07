import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
//import "./css/featured_on.css";
import { Link } from "react-router-dom";
import "./css/contact.css";

const ContactForm = () => {
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
      <section className="services__area pt-80 mt-0 pb-60 p-relative">
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
            <div className="col-xxl-6 col-lg-6 col-md-7">
              <div
                className="section__title-wrapper mb-70 wow fadeInUp"
                data-wow-delay=".3s"
              >
                {/* <span className="section__pre-title purple">
                  {data1.homesection2_header_category}
                </span> */}
                <h2 className="section__title section__title-2 contact_form_get_in_touch_text">
                  Get in touch
                </h2>
                <p className="contact_form_get_in_touch_des">
                  Top rated construction packages we pleasure rationally
                  encounter consequences interesting who loves or pursue or
                  desires
                </p>

                <div className="contact_form_name_row">
                  <input
                    type="text"
                    className="contact_form_name"
                    placeholder="Your Name*"
                  />
                  <input
                    type="text"
                    className="contact_form_email"
                    placeholder="Your Email*"
                  />
                </div>
                <textarea
                  className="contact_form_message"
                  rows="10"
                  placeholder="Message"
                ></textarea>
                <a
                  href="/contact"
                  className="w-btn w-btn-blue w-btn-6 w-btn-3 mt-3"
                >
                  Send Message
                </a>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-5 col-md-5 contact_form_right_main_div">
              <div
                className="services__more mb-70 text-sm-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="contact_form_right_div">
                  <div className="contact_form_right_office_address_div">
                    <p>Office Address</p>
                    <p>
                      245 Southern Street, Apartment no. 174 Central Twon, New
                      Yourk, USA
                    </p>
                  </div>
                  <div className="contact_form_right_phone_number_div">
                    <p>Phone Number</p>
                    <p>+88018928493</p>
                    <p>+88018928493</p>
                  </div>
                  <div className="contact_form_right_web_address_div">
                    <p>Web Address</p>
                    <p>
                      <a href="https://designhubtechnologies.com">
                        designhubtechnologies.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* <a
                  href="services.html"
                  className="w-btn w-btn-blue w-btn-6 w-btn-3"
                >
                  view all services
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
