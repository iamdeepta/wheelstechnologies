import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import "./css/free_trial.css";

const FreeTrial = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [input, setInput] = useState("");
  const [seo_input_error, setSeoInputError] = useState(false);

  const [seo_total_score, setSeoTotalScore] = useState("");

  const seo_start_loading = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getSeoDataTest();
  });

  function getSeoDataTest() {
    fetch(
      // "https://seo-analysis.p.rapidapi.com/seocheck_multiple3.1.php?api-call=1&external=1&keyword=covidsurokkha&url=https%3A%2F%2Fcovidsurokkha.com",
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://restabook.kwst.net/light/index4.html",
      {
        method: "GET",
        // headers: {
        //   "x-rapidapi-host": "seo-analysis.p.rapidapi.com",
        //   "x-rapidapi-key":
        //     "f810671fb5msh3c219e1dc3a3725p1965c7jsn84d272eb4e57",
        // },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getSeoData() {
    fetch(
      // "https://seo-analysis.p.rapidapi.com/seocheck_multiple3.1.php?api-call=1&external=1&keyword=covidsurokkha&url=https%3A%2F%2Fcovidsurokkha.com",
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" + input,
      {
        method: "GET",
        // headers: {
        //   "x-rapidapi-host": "seo-analysis.p.rapidapi.com",
        //   "x-rapidapi-key":
        //     "f810671fb5msh3c219e1dc3a3725p1965c7jsn84d272eb4e57",
        // },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(
        //   data.lighthouseResult["categories"].performance.score * 100
        // );
        setSeoTotalScore(
          data.lighthouseResult["categories"].performance.score * 100
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

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

  function check_now() {
    if (input === "") {
      setSeoInputError(true);
    } else {
      getSeoData();

      seo_start_loading.current.style.display = "block";
      setSeoInputError(false);
    }
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
                  {seo_input_error === true ? (
                    <>
                      <div className="seo_input_error">
                        Please enter url first
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className="cta__form mb-25 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  {/* <form action="#"> */}
                  <input
                    type="email"
                    placeholder="Enter Your Website's URL"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button type="submit" onClick={() => check_now()}>
                    Check Now
                  </button>
                  {/* </form> */}
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
                {input !== "" ? (
                  <>
                    <div className="seo_main_div">
                      <h4 className="seo_url_text">URL: {input}</h4>
                      {seo_total_score === "" ? (
                        <>
                          <div
                            className="seo_start_loading"
                            ref={seo_start_loading}
                          ></div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                ) : (
                  ""
                )}
                {seo_total_score !== "" ? (
                  seo_total_score !== null ? (
                    <>
                      <div
                        className={
                          seo_total_score < 90
                            ? seo_total_score < 50
                              ? "seo_total_score_circle_red"
                              : "seo_total_score_circle_orange"
                            : "seo_total_score_circle_green"
                        }
                      >
                        <div className="seo_total_score_circle_green_text">
                          {seo_total_score + "%"}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="no_seo_score_found">
                      No SEO Score Idetified, Sorry!
                    </div>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrial;
