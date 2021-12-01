import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import ServiceSvg from "./ServiceSvg";
import "./css/details.css";

const Details = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    getData();
    getData1();
    getData2();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "servicesdetailssection2Get")
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
      .get(AppUrl.base_url + "servicesdetailssection2MainGet")
      .then(function (response) {
        if (response) {
          setData1(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getData2() {
    axios
      .get(AppUrl.base_url + "servicesdetailssection1Get")
      .then(function (response) {
        if (response) {
          setData2(response.data);
          setData3(response.data.servicesdetailssection1_list.split(","));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <section className="services__details pt-115 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 order-last order-lg-first">
              <div className="services__sidebar mr-50">
                <div
                  className="services__widget grey-bg-20 mb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="services__widget-title">
                    <h4>{data.servicesdetailssection2_title}</h4>
                  </div>
                  <div className="services__widget-content">
                    <div className="services__link">
                      <ul>
                        {data1.map((item, index) => (
                          <li key={item.servicesdetailssection_main_id}>
                            <a href="services-details.html">
                              {item.servicesdetailssection2_main_title}
                            </a>
                          </li>
                        ))}
                        {/* <li>
                          <a href="services-details.html">Market Analysis</a>
                        </li>
                        <li>
                          <a href="services-details.html"> Great Tests</a>
                        </li>
                        <li>
                          <a href="services-details.html">Optimal Choice</a>
                        </li>
                        <li>
                          <a href="services-details.html">SEO Optimized</a>
                        </li>
                        <li>
                          <a href="services-details.html">Task Consulting</a>
                        </li>
                        <li>
                          <a href="services-details.html">Great Advices</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="services__widget grey-bg-20 mb-40 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="services__widget-title">
                    <h4>Subscribe Now</h4>
                  </div>
                  <div className="services__widget-content">
                    <div className="services__form">
                      <form action="#">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <button className="w-btn w-100">Subscribe Now</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="services__action grey-bg-20 mb-15 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <a href=".">
                    <i className="fal fa-download"></i>Download docs
                  </a>
                </div>
                <div
                  className="services__action grey-bg-20 mb-15 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <a href=".">
                    <i className="fal fa-file-pdf"></i>Characteristics
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="services__text">
                <h3 className="wow fadeInUp" data-wow-delay=".2s">
                  {data2.servicesdetailssection1_title1}
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  {data2.servicesdetailssection1_description1}{" "}
                </p>
              </div>
              <div
                className="services__img mb-45 w-img wow fadeInUp"
                data-wow-delay=".6s"
              >
                {/* <img
                  src={AppUrl.image_url + data2.servicesdetailssection1_image}
                  alt={data2.servicesdetailssection1_title1 + " image"}
                /> */}
                <ServiceSvg />
              </div>
              <div className="services__text">
                <h3 className="wow fadeInUp" data-wow-delay=".2s">
                  {data2.servicesdetailssection1_title2}
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  {data2.servicesdetailssection1_description2}{" "}
                  {/* <span>
                    {" "}
                    <a href="about.html">Charles I don't want no agro</a>
                  </span> */}
                  {/* . Why gormless loo he lost his bottle wellies cup of tea
                  pardon me lost the plot naff what a plonker, lurgy show off
                  show off pick your nose and blow off super knackered smashing
                  blower morish my lady, bodge codswallop bits and bobs bobby
                  arse get stuffed mate down the pub mush. Eaton lavatory on
                  your bike mate loo bugger all mate nancy boy me old mucker he
                  legged it, twit vagabond pardon me cockup gormless buggered
                  wellies, A bit of how's your father bum bag codswallop bleeder
                  cracking goal absolutely bladdered. */}
                </p>
              </div>
              <div className="services__list mb-40">
                <ul>
                  {data3.map((item, index) => (
                    <li
                      key={index}
                      className="wow fadeInUp"
                      data-wow-delay={"." + (index + 1) * 1.3 + "s"}
                    >
                      {item}
                    </li>
                  ))}
                  {/* <li className="wow fadeInUp" data-wow-delay=".2s">
                    Set up in minutes
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".3s">
                    Save time with Automations
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    Visualize work with Views
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    Customer support
                  </li> */}
                </ul>
              </div>
              <div className="services__text">
                <h4 className="wow fadeInUp" data-wow-delay=".6s">
                  {data2.servicesdetailssection1_title3}
                </h4>
                <p className="wow fadeInUp" data-wow-delay=".8s">
                  {data2.servicesdetailssection1_description3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
