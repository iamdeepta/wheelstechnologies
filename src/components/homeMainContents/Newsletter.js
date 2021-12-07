import React, { useState, useEffect } from "react";
import "./css/newsletter.css";
import { gsap } from "gsap";
import NewsletterSvg from "./NewsletterSvg";
import AppUrl from "../../classes/AppUrl";
import axios from "axios";

const Newsletter = () => {
  const [newsEmail, setNewsEmail] = useState("");

  const [data, setData] = useState([]);
  //const [emailExist, setEmailExist] = useState(false);

  useEffect(() => {
    getData();
  }, [newsEmail]);

  function getData() {
    axios
      .get(AppUrl.base_url + "newsletterGetOne/" + newsEmail)
      .then(function (response) {
        if (response) {
          setData(response.data);
          // setLoader(false);
          //console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //add data
  async function addNewsletter() {
    const formData = new FormData();
    formData.append("newsletter_email", newsEmail);

    let result = await fetch(AppUrl.base_url + "newsletterAdd", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    setNewsEmail("");

    if (result.success) {
      //toast.success(result.success);
    } else {
      console.log(result.error);
    }
  }

  //   data.map((item) =>
  //     item.newsletter_email === newsEmail
  //       ? setEmailExist(true)
  //       : setEmailExist(false)
  //   );

  //gsap code for paper plane button
  document.querySelectorAll(".newsletter_btn").forEach((button) => {
    console.log("ok");
    let getVar = (variable) =>
      getComputedStyle(button).getPropertyValue(variable);

    button.addEventListener("click", (e) => {
      if (!button.classList.contains("active")) {
        button.classList.add("active");

        gsap.to(button, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(button, {
                  "--left-wing-first-y": 0,
                  "--left-wing-second-x": 40,
                  "--left-wing-second-y": 100,
                  "--left-wing-third-x": 0,
                  "--left-wing-third-y": 100,
                  "--left-body-third-x": 40,
                  "--right-wing-first-x": 50,
                  "--right-wing-first-y": 0,
                  "--right-wing-second-x": 60,
                  "--right-wing-second-y": 100,
                  "--right-wing-third-x": 100,
                  "--right-wing-third-y": 100,
                  "--right-body-third-x": 60,
                });
              },
            },
            {
              "--left-wing-third-x": 20,
              "--left-wing-third-y": 90,
              "--left-wing-second-y": 90,
              "--left-body-third-y": 90,
              "--right-wing-third-x": 80,
              "--right-wing-third-y": 90,
              "--right-body-third-y": 90,
              "--right-wing-second-y": 90,
              duration: 0.2,
            },
            {
              "--rotate": 50,
              "--left-wing-third-y": 95,
              "--left-wing-third-x": 27,
              "--right-body-third-x": 45,
              "--right-wing-second-x": 45,
              "--right-wing-third-x": 60,
              "--right-wing-third-y": 83,
              duration: 0.25,
            },
            {
              "--rotate": 55,
              "--plane-x": -8,
              "--plane-y": 24,
              duration: 0.2,
            },
            {
              "--rotate": 40,
              "--plane-x": 45,
              "--plane-y": -180,
              "--plane-opacity": 0,
              duration: 0.3,
              onComplete() {
                setTimeout(() => {
                  button.removeAttribute("style");
                  gsap.fromTo(
                    button,
                    {
                      opacity: 0,
                      y: -8,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        button.classList.remove("active");
                      },
                    }
                  );
                }, 2000);
              },
            },
          ],
        });

        gsap.to(button, {
          keyframes: [
            {
              "--text-opacity": 0,
              "--border-radius": 0,
              "--left-wing-background": getVar("--primary-darkest"),
              "--right-wing-background": getVar("--primary-darkest"),
              duration: 0.1,
            },
            {
              "--left-wing-background": getVar("--primary"),
              "--right-wing-background": getVar("--primary"),
              duration: 0.1,
            },
            {
              "--left-body-background": getVar("--primary-dark"),
              "--right-body-background": getVar("--primary-darkest"),
              duration: 0.4,
            },
            {
              "--success-opacity": 1,
              "--success-scale": 1,
              duration: 0.25,
              delay: 0.25,
            },
          ],
        });
      }
    });
  });

  return (
    <>
      <section className="about__area grey-bg-3 pt-40 pb-120 p-relative newsletter_grey_bg">
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
                <NewsletterSvg />
                {/* <img
                  src={AppUrl.image_url + data.homesection3_image}
                  alt="features images"
                  className="feature_one_image1"
                /> */}
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8">
              <div className="about__content-3 pt-55">
                <div
                  className="section__title-wrapper section__title-wrapper-2 mb-55 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <span className="section__pre-title purple">Newsletter</span>
                  <h2 className="section__title section__title-2">
                    Never miss an opportunity again!
                  </h2>
                  <p>
                    Make sure you get the latest news every week delivered
                    straight to your mailbox!
                  </p>
                </div>
                {/* <a href="/" className="w-btn w-btn-blue w-btn-3 w-btn-1">
                  Contact Us
                </a> */}
                <div className="newsletter_input_div">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="form-control newsletter_input"
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                  />
                  {newsEmail.indexOf(".") > -1 &&
                  newsEmail.indexOf("@") > -1 ? (
                    <>
                      {data.length < 1 ? (
                        <>
                          <button class="newsletter_btn">
                            <span
                              class="default"
                              onClick={() => addNewsletter()}
                            >
                              Send
                            </span>
                            <span class="success">
                              <i className="fa fa-check"></i> Subscribed
                            </span>
                            <div class="left"></div>
                            <div class="right"></div>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            class="newsletter_btn already_subscribed_btn"
                            disabled={true}
                          >
                            <span class="danger">Subscribed!</span>
                            <span class="success">
                              <i className="fa fa-info"></i> Subscribed
                            </span>
                            <div class="left"></div>
                            <div class="right"></div>
                          </button>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <button
                        class="newsletter_btn newsletter_btn_fade"
                        disabled={true}
                      >
                        <span class="default">Send</span>
                        <span class="success">
                          <i className="fa fa-check"></i> Subscribed
                        </span>
                        <div class="left"></div>
                        <div class="right"></div>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
