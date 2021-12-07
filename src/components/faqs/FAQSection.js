import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import "./css/faqs.css";

const FAQSection = () => {
  //const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    //getData();
    getData1();
  }, []);

  function getData1() {
    axios
      .get(AppUrl.base_url + "homesection7MainGet")
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
      <section className="faq__area pt-50 pb-70">
        <div className="container">
          <div className="row">
            {/* <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
              <div className="faq__content">
                <div
                    className="section__title-wrapper section__title-wrapper-2 mb-35 wow fadeInUp"
                    data-wow-delay=".5s"
                    
                  >
                    <h2 className="section__title section__title-2">
                      {data.homesection7_title}
                    </h2>
                    <p>{data.homesection7_description}</p>
                  </div>
                <div
                    className="faq__counter wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <ul>
                      <li>
                        <h3 className="pink">
                          {isVisible && (
                            <>
                              <span className="counter">
                                <CountUp
                                  end={data.homesection7_number1}
                                  duration={3}
                                />
                                {""}+
                              </span>
                            </>
                          )}
                        </h3>
                        <p>{data.homesection7_number1_title}</p>
                      </li>
                      <li>
                        <h3 className="blue">
                          {isVisible && (
                            <>
                              <span className="counter">
                                <CountUp
                                  end={data.homesection7_number2}
                                  duration={3}
                                />
                                {""}+
                              </span>
                            </>
                          )}
                        </h3>
                        <p>{data.homesection7_number2_title}</p>
                      </li>
                      <li>
                        <h3 className="yellow">
                          {isVisible && (
                            <>
                              <span className="counter">
                                <CountUp
                                  end={data.homesection7_number3}
                                  duration={1}
                                />
                                {""}+
                              </span>
                            </>
                          )}
                        </h3>
                        <p>{data.homesection7_number3_title}</p>
                      </li>
                    </ul>
                  </div>
              </div>
            </div> */}

            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className=" wow fadeInUp" data-wow-delay=".3s">
                <div className="accordion" id="accordionExample">
                  {data1.map((item, index) => (
                    <div
                      className="accordion-item"
                      key={item.homesection7_main_id}
                    >
                      <h2
                        className="accordion-header"
                        id={"heading" + item.homesection7_main_id}
                      >
                        <button
                          className={
                            index === 0
                              ? "accordion-button"
                              : "accordion-button collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={
                            "#collapse" + item.homesection7_main_id
                          }
                          aria-expanded="true"
                          aria-controls={
                            "#collapse" + item.homesection7_main_id
                          }
                        >
                          Q: {item.homesection7_main_title}
                        </button>
                      </h2>
                      <div
                        id={"collapse" + item.homesection7_main_id}
                        className={
                          index === 0
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        aria-labelledby={"heading" + item.homesection7_main_id}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{item.homesection7_main_description}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How to start an online store in 2021 ?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Looking to start an online store and you're not sure
                          where to begin? I'll guide will help you to navigate
                          Would you like to boost your Twitter profile.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-none">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed pb-0 "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How to change font size in wordPress ?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Looking to start an online store and you're not sure
                          where to begin? I'll guide will help you to navigate
                          Would you like to boost your Twitter profile.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
