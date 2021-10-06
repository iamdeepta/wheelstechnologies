import React, { useState, useEffect } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import "./css/free_trial.css";
//import ReactDOM from "react-dom";

const FreeTrial = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [input, setInput] = useState("");
  const [seo_input_error, setSeoInputError] = useState(false);

  const [seo_total_score, setSeoTotalScore] = useState("");
  const [fcp, setFcp] = useState("");
  const [si, setSi] = useState("");
  const [lcp, setLcp] = useState("");
  const [tbt, setTbt] = useState("");
  const [cls, setCls] = useState("");
  const [tti, setTti] = useState("");
  const [duplicate_js_title, setDuplicateJsTitle] = useState("");
  //const [duplicate_js_details, setDuplicateJsDetails] = useState([]);
  const [long_task, setLongTask] = useState("");
  //const [long_task_details, setLongTaskDetails] = useState([]);

  const [seo_progressbar, setSeoProgressBar] = useState(false);
  const [seo_content, setSeoContent] = useState(false);

  //const [progressbar_percentage, setProgressBarPercentage] = useState(0);

  const [active_progressbar, setActiveProgressbar] = useState(false);

  //const progress_bar_class = document.querySelector(".progress-bar");

  //let progress_bar_id = document.getElementById("progress_bar_id");

  //const progress_style = useRef(null);

  //const seo_start_loading = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   progress_style.current.width = `${progressbar_percentage}%`;
  //   setProgressBarPercentage(progressbar_percentage);
  // }, [progressbar_percentage]);

  // useEffect(() => {
  //   getSeoDataTest();
  // }, []);

  // function getSeoDataTest() {
  //   axios({
  //     url: "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://covidsurokkha.com",
  //     onDownloadProgress(progressEvent) {

  //     },
  //   })
  //     .then(function (response) {
  //       if (response) {
  //         console.log(
  //           response.data.lighthouseResult["categories"].performance.score * 100
  //         );
  //         console.log(response.data);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  function getSeoData() {
    //let progress = progressbar_percentage;
    axios({
      url:
        "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" +
        input,
      onDownloadProgress(progressEvent) {
        //progress = Math.round(progressEvent.loaded / (60 * 60));
        //setProgressBarPercentage(progress);
        //console.log(progress);
        // documentStyles.setProperty("--progress", `${progress}%`);
      },
    })
      .then(function (response) {
        if (response) {
          // console.log(
          //   response.data.lighthouseResult["categories"].performance.score * 100
          // );
          setSeoTotalScore(
            response.data.lighthouseResult["categories"].performance.score * 100
          );
          setFcp(
            response.data.lighthouseResult["audits"]["first-contentful-paint"]
              .displayValue
          );

          setSi(
            response.data.lighthouseResult["audits"]["speed-index"].displayValue
          );
          setLcp(
            response.data.lighthouseResult["audits"]["largest-contentful-paint"]
              .displayValue
          );
          setTbt(
            response.data.lighthouseResult["audits"]["total-blocking-time"]
              .displayValue
          );
          setCls(
            response.data.lighthouseResult["audits"]["cumulative-layout-shift"]
              .displayValue
          );
          setTti(
            response.data.lighthouseResult["audits"]["interactive"].displayValue
          );
          setDuplicateJsTitle(
            response.data.lighthouseResult["audits"]["duplicated-javascript"]
              .title
          );
          // setDuplicateJsDetails(
          //   response.data.lighthouseResult["audits"]["duplicated-javascript"]
          //     .details.items
          // );
          setLongTask(
            response.data.lighthouseResult["audits"]["long-tasks"].title
          );
          // setLongTaskDetails(
          //   response.data.lighthouseResult["audits"]["long-tasks"].details.items
          // );
          setSeoContent(true);
          setSeoProgressBar(false);
          //setProgressBarPercentage(0);
          setActiveProgressbar(false);
          // ReactDOM.findDOMNode(progress_bar_id).classList.add(
          //   "progress_bar_inactive"
          // );
          // ReactDOM.findDOMNode(progress_bar_id).classList.remove(
          //   "progress_bar_active"
          // );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //previously done without axios

  // function getSeoData() {
  //   fetch(
  //     // "https://seo-analysis.p.rapidapi.com/seocheck_multiple3.1.php?api-call=1&external=1&keyword=covidsurokkha&url=https%3A%2F%2Fcovidsurokkha.com",
  //     "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" + input,
  //     {
  //       method: "GET"
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {

  //       setSeoTotalScore(
  //         data.lighthouseResult["categories"].performance.score * 100
  //       );
  //       setSeoContent(true);
  //       setSeoProgressBar(false);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

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
    setSeoTotalScore("");
    //progress_bar_class.classList.remove("progress_bar_inactive");
    if (input === "" || input.substring(0, 4) !== "http") {
      setSeoInputError(true);
    } else {
      // ReactDOM.findDOMNode(progress_bar_id).classList.add(
      //   "progress_bar_active"
      // );
      // ReactDOM.findDOMNode(progress_bar_id).classList.remove(
      //   "progress_bar_inactive"
      // );
      setActiveProgressbar(true);
      setSeoContent(false);
      setSeoProgressBar(true);
      setTimeout(() => {});
      getSeoData();

      //seo_start_loading.current.style.display = "block";
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
                        Please enter correct url (starts with http:// or
                        https://)
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
                          {/* <div
                            className="seo_start_loading"
                            ref={seo_start_loading}
                          ></div> */}
                          {seo_progressbar ? (
                            <>
                              <div class="progress">
                                <div
                                  id="progress_bar_id"
                                  class={
                                    active_progressbar
                                      ? "progress-bar progress-bar-striped progress-bar-animated progress_bar_active"
                                      : "progress-bar progress-bar-striped progress-bar-animated progress_bar_inactive"
                                  }
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  {/* <span className="progressbar_label">
                                    {progressbar_percentage + "%"}
                                  </span> */}
                                </div>
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      ) : (
                        <>
                          {seo_content ? (
                            <>
                              {seo_total_score !== null ? (
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

                                  <div className="primary_reports">
                                    <h4 className="summary_text">Summary</h4>
                                    <div className="primary_reports1">
                                      <table className="table primary_reports1_table">
                                        <tr>
                                          <td>
                                            <i className="fas fa-square"></i>
                                            First Contentful Paint
                                          </td>
                                          <td>{fcp}</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <i className="fas fa-square"></i>
                                            Speed Index
                                          </td>
                                          <td>{si}</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <i className="fas fa-square"></i>
                                            Largest Contentful Paint
                                          </td>
                                          <td>{lcp}</td>
                                        </tr>
                                      </table>

                                      <table className="table primary_reports1_table">
                                        <tr>
                                          <td>
                                            <i className="fas fa-square"></i>
                                            Time To Interactive
                                          </td>
                                          <td>{tti}</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <i className="fas fa-square"></i>
                                            Total Blocking Time
                                          </td>
                                          <td>{tbt}</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <i className="fas fa-square"></i>
                                            Cumulative Layout Shift
                                          </td>
                                          <td>{cls}</td>
                                        </tr>
                                      </table>
                                      {/* <div className="first_contentful_paint_div">
                                        <p className="fcp_text">
                                          First Contentful Paint
                                        </p>
                                        <p className="fcp_value">{fcp}</p>
                                      </div> */}
                                    </div>

                                    <h4 className="opportunity_text">
                                      Opportunities
                                    </h4>
                                    <div
                                      className="accordion"
                                      id="accordionExample"
                                    >
                                      <div className="accordion-item">
                                        <h2
                                          className="accordion-header"
                                          id="headingOne"
                                        >
                                          <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                          >
                                            {duplicate_js_title}
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseOne"
                                          className="accordion-collapse collapse show"
                                          aria-labelledby="headingOne"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <p>Not applicable</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="accordion-item">
                                        <h2
                                          className="accordion-header"
                                          id="headingTwo"
                                        >
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                          >
                                            {long_task}
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseTwo"
                                          className="accordion-collapse collapse"
                                          aria-labelledby="headingTwo"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <p>Not applicable</p>
                                          </div>
                                        </div>
                                      </div>
                                      {/* <div className="accordion-item">
                                        <h2
                                          className="accordion-header"
                                          id="headingThree"
                                        >
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                          >
                                            Accordion Item #3
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
                                              It is shown by default, until the
                                              collapse plugin adds the
                                              appropriate classNamees that we
                                              use to style each element. These
                                              classNamees control the overall
                                              appearance, as well as the showing
                                              and hiding via CSS transitions.
                                              You can modify any of this with
                                              custom CSS or overriding our
                                              default variables. It's also worth
                                              noting that just about any HTML
                                              can go within the though the
                                              transition does limit overflow.
                                            </p>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <div className="no_seo_score_found">
                                  No SEO Score Idetified, Sorry!
                                </div>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  ""
                )}

                {/* <div class="progress">
                  <div
                    class={
                      input !== ""
                        ? "progress-bar progress-bar-striped progress-bar-animated progress_bar_active"
                        : "progress-bar progress-bar-striped progress-bar-animated progress_bar_inactive"
                    }
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    
                  </div>
                </div> */}

                {/* <div
                  className={
                    seo_total_score < 90
                      ? seo_total_score < 50
                        ? "seo_total_score_circle_green"
                        : "seo_total_score_circle_green"
                      : "seo_total_score_circle_green"
                  }
                >
                  <div className="seo_total_score_circle_green_text">
                    {seo_total_score + "%"}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrial;
