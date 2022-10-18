import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
//import "./css/featured_on.css";
import { Link } from "react-router-dom";
import "./css/contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

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

  async function sendMessage(e) {
    e.preventDefault();
    setLoader(true);

    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    let result = await fetch(AppUrl.base_url + "sendMessage", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setName("");
      setEmail("");
      setMessage("");
      setLoader(false);
    } else {
      toast.error(result.error);
      setLoader(false);
    }
  }

  return (
    <>
      <ToastContainer />
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
                  Working with globally recognised brands has enabled us to have
                  offices in multiple locations across the globe.
                </p>

                <div className="contact_form_name_row">
                  <input
                    type="text"
                    className="contact_form_name"
                    placeholder="Your Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    className="contact_form_email"
                    placeholder="Your Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <textarea
                  className="contact_form_message"
                  rows="10"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {loader ? (
                  <>
                    <div className="spinner-border text-primary"></div>
                  </>
                ) : (
                  <>
                    <a
                      href="!#"
                      className="w-btn w-btn-blue w-btn-6 w-btn-3 mt-3"
                      onClick={(e) => sendMessage(e)}
                    >
                      Send Message
                    </a>
                  </>
                )}
              </div>
            </div>
            <div className="col-xxl-5 col-lg-5 col-md-5 contact_form_right_main_div">
              <div
                className="services__more mb-70 text-sm-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="contact_form_right_div">
                  <div className="contact_form_right_office_address_div">
                    <p>Head Office</p>
                    <p>House#424, Road#07, DOHS Baridhara, Dhaka, Bangladesh</p>
                    <p>+88-02-8411765</p>
                  </div>
                  <div className="contact_form_right_phone_number_div">
                    <p>German Office</p>
                    <p>Stellwerk, str.48, 85386 Moosburg, Germany</p>
                    <p>+4915783801162</p>
                    {/* <p>+88018928493</p> */}
                  </div>
                  <div className="contact_form_right_web_address_div">
                    <p>New York Office</p>
                    <p>50th West 34th st suite 7C10 New York NY 10001</p>
                    <p>+14049964957</p>
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
