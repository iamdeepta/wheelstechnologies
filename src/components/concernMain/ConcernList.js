import React, { useState, useEffect } from "react";
import "./css/concernList.css";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import { Link } from "react-router-dom";

const ConcernList = () => {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   function getData() {
  //     axios
  //       .get(AppUrl.base_url + "blogsectionGet")
  //       .then(function (response) {
  //         if (response) {
  //           setData(response.data);
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }

  //const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <>
      <div id="blog_card_section">
        <div id="blog_card_section_inside">
          <a href={"https://bazaarface.com"} target={"__blank"}>
            <div id="blogs_card_main_div">
              <div className="card blogs_card">
                <img
                  className="card-img-top"
                  src={"/images/bazaarface.PNG"}
                  alt={"bazaarface"}
                />

                <div id="blogs_date_div">
                  <span id="blogs_date_text">{"2022"}</span>
                </div>

                <div id="blog_tag_div">
                  <span id="blog_tag_text">{"Website"}</span>
                </div>

                <div className="card-body" id="blogs_card_body">
                  <h5 className="card-title">{"Bazaarface"}</h5>
                  <p className="card-text">
                    {
                      "An online platform where buyer and seller can buy or sell from both local and international markets"
                    }
                  </p>
                  <div id="blogs_card_bottom_div">
                    <p id="blogs_category_p">
                      <a id="blogs_category_a" href=".">
                        {"Website"}
                      </a>
                    </p>

                    {/* <span id="blogs_time_span">
                      <i className="far fa-clock"></i>
                      <span id="blogs_time_text">
                        {item.blogsection_time + " minutes"}
                      </span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href={"https://letobd.com"} target={"__blank"}>
            <div id="blogs_card_main_div">
              <div className="card blogs_card">
                <img
                  className="card-img-top"
                  src={"/images/letobd.PNG"}
                  alt={"bazaarface"}
                />

                <div id="blogs_date_div">
                  <span id="blogs_date_text">{"2022"}</span>
                </div>

                <div id="blog_tag_div">
                  <span id="blog_tag_text">{"Website"}</span>
                </div>

                <div className="card-body" id="blogs_card_body">
                  <h5 className="card-title">{"L'ETO"}</h5>
                  <p className="card-text">
                    {"Online shop for mouth watering desserts made with love."}
                  </p>
                  <div id="blogs_card_bottom_div">
                    <p id="blogs_category_p">
                      <a id="blogs_category_a" href=".">
                        {"Website"}
                      </a>
                    </p>

                    {/* <span id="blogs_time_span">
                      <i className="far fa-clock"></i>
                      <span id="blogs_time_text">
                        {item.blogsection_time + " minutes"}
                      </span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href={"https://moishibd.com"} target={"__blank"}>
            <div id="blogs_card_main_div">
              <div className="card blogs_card">
                <img
                  className="card-img-top"
                  src={"/images/moishibd.PNG"}
                  alt={"bazaarface"}
                />

                <div id="blogs_date_div">
                  <span id="blogs_date_text">{"2022"}</span>
                </div>

                <div id="blog_tag_div">
                  <span id="blog_tag_text">{"Website"}</span>
                </div>

                <div className="card-body" id="blogs_card_body">
                  <h5 className="card-title">{"Moishi"}</h5>
                  <p className="card-text">
                    {
                      "Authentic Japanese mochi icecream and other sweets like cake, baklava, smoothie etc. ordering application."
                    }
                  </p>
                  <div id="blogs_card_bottom_div">
                    <p id="blogs_category_p">
                      <a id="blogs_category_a" href=".">
                        {"Website"}
                      </a>
                    </p>

                    {/* <span id="blogs_time_span">
                      <i className="far fa-clock"></i>
                      <span id="blogs_time_text">
                        {item.blogsection_time + " minutes"}
                      </span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href={"http://www.kwgroup-bd.com"} target={"__blank"}>
            <div id="blogs_card_main_div">
              <div className="card blogs_card">
                <img
                  className="card-img-top"
                  src={"/images/kwgroup.PNG"}
                  alt={"bazaarface"}
                />

                <div id="blogs_date_div">
                  <span id="blogs_date_text">{"2022"}</span>
                </div>

                <div id="blog_tag_div">
                  <span id="blog_tag_text">{"Website"}</span>
                </div>

                <div className="card-body" id="blogs_card_body">
                  <h5 className="card-title">{"KW Group"}</h5>
                  <p className="card-text">
                    {
                      "A global leader in apparel manufacturing and outsourcing."
                    }
                  </p>
                  <div id="blogs_card_bottom_div">
                    <p id="blogs_category_p">
                      <a id="blogs_category_a" href=".">
                        {"Website"}
                      </a>
                    </p>

                    {/* <span id="blogs_time_span">
                      <i className="far fa-clock"></i>
                      <span id="blogs_time_text">
                        {item.blogsection_time + " minutes"}
                      </span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href={"https://icinemabd.com"} target={"__blank"}>
            <div id="blogs_card_main_div">
              <div className="card blogs_card">
                <img
                  className="card-img-top"
                  src={"/images/icinema.PNG"}
                  alt={"bazaarface"}
                />

                <div id="blogs_date_div">
                  <span id="blogs_date_text">{"2021"}</span>
                </div>

                <div id="blog_tag_div">
                  <span id="blog_tag_text">{"Website"}</span>
                </div>

                <div className="card-body" id="blogs_card_body">
                  <h5 className="card-title">{"Icinema"}</h5>
                  <p className="card-text">
                    {
                      "An online streaming platform where user can enjoy watching movies, series and listening to music."
                    }
                  </p>
                  <div id="blogs_card_bottom_div">
                    <p id="blogs_category_p">
                      <a id="blogs_category_a" href=".">
                        {"Website"}
                      </a>
                    </p>

                    {/* <span id="blogs_time_span">
                      <i className="far fa-clock"></i>
                      <span id="blogs_time_text">
                        {item.blogsection_time + " minutes"}
                      </span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href={"https://bosphorusbd.com"} target={"__blank"}>
            <div id="blogs_card_main_div">
              <div className="card blogs_card">
                <img
                  className="card-img-top"
                  src={"/images/bosphorus_big.webp"}
                  alt={"bazaarface"}
                />

                <div id="blogs_date_div">
                  <span id="blogs_date_text">{"2021"}</span>
                </div>

                <div id="blog_tag_div">
                  <span id="blog_tag_text">{"Website"}</span>
                </div>

                <div className="card-body" id="blogs_card_body">
                  <h5 className="card-title">{"Bosphorus"}</h5>
                  <p className="card-text">
                    {
                      "A responsive web app for the Bosphorus restaurant where people can order their desired foods online."
                    }
                  </p>
                  <div id="blogs_card_bottom_div">
                    <p id="blogs_category_p">
                      <a id="blogs_category_a" href=".">
                        {"Website"}
                      </a>
                    </p>

                    {/* <span id="blogs_time_span">
                      <i className="far fa-clock"></i>
                      <span id="blogs_time_text">
                        {item.blogsection_time + " minutes"}
                      </span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href={"https://designhubtechnologies.com"} target={"__blank"}>
            <div id="blogs_card_main_div">
              <div className="card blogs_card">
                <img
                  className="card-img-top"
                  src={"/images/designhub.PNG"}
                  alt={"bazaarface"}
                />

                <div id="blogs_date_div">
                  <span id="blogs_date_text">{"2021"}</span>
                </div>

                <div id="blog_tag_div">
                  <span id="blog_tag_text">{"Website"}</span>
                </div>

                <div className="card-body" id="blogs_card_body">
                  <h5 className="card-title">{"Designhub Technologies"}</h5>
                  <p className="card-text">
                    {
                      "A responsive web application for digital agency company's portfolio."
                    }
                  </p>
                  <div id="blogs_card_bottom_div">
                    <p id="blogs_category_p">
                      <a id="blogs_category_a" href=".">
                        {"Website"}
                      </a>
                    </p>

                    {/* <span id="blogs_time_span">
                      <i className="far fa-clock"></i>
                      <span id="blogs_time_text">
                        {item.blogsection_time + " minutes"}
                      </span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href={"https://covidsurokkha.com"} target={"__blank"}>
            <div id="blogs_card_main_div">
              <div className="card blogs_card">
                <img
                  className="card-img-top"
                  src={"/images/covidsurokkha.PNG"}
                  alt={"bazaarface"}
                />

                <div id="blogs_date_div">
                  <span id="blogs_date_text">{"2021"}</span>
                </div>

                <div id="blog_tag_div">
                  <span id="blog_tag_text">{"Website"}</span>
                </div>

                <div className="card-body" id="blogs_card_body">
                  <h5 className="card-title">{"covidsurokkha"}</h5>
                  <p className="card-text">
                    {
                      "A covid related informative web appliction which was built for the wellbeing of people all over Bangladesh."
                    }
                  </p>
                  <div id="blogs_card_bottom_div">
                    <p id="blogs_category_p">
                      <a id="blogs_category_a" href=".">
                        {"Website"}
                      </a>
                    </p>

                    {/* <span id="blogs_time_span">
                      <i className="far fa-clock"></i>
                      <span id="blogs_time_text">
                        {item.blogsection_time + " minutes"}
                      </span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href={"http://www.ronyrezaul.com"} target={"__blank"}>
            <div id="blogs_card_main_div">
              <div className="card blogs_card">
                <img
                  className="card-img-top"
                  src={"/images/ronyrezaul.webp"}
                  alt={"bazaarface"}
                />

                <div id="blogs_date_div">
                  <span id="blogs_date_text">{"2021"}</span>
                </div>

                <div id="blog_tag_div">
                  <span id="blog_tag_text">{"Website"}</span>
                </div>

                <div className="card-body" id="blogs_card_body">
                  <h5 className="card-title">{"Rony Rezaul"}</h5>
                  <p className="card-text">
                    {
                      "Represents fashion photoshoot conducted by photographer Rony Rezaul."
                    }
                  </p>
                  <div id="blogs_card_bottom_div">
                    <p id="blogs_category_p">
                      <a id="blogs_category_a" href=".">
                        {"Website"}
                      </a>
                    </p>

                    {/* <span id="blogs_time_span">
                      <i className="far fa-clock"></i>
                      <span id="blogs_time_text">
                        {item.blogsection_time + " minutes"}
                      </span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ConcernList;
