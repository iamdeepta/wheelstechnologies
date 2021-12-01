import React, { useState, useEffect } from "react";
import "./css/blogDetails.css";
import AppUrl from "../../classes/AppUrl";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const BlogDetails = (props) => {
  //console.log("props", props.match.params.id);
  const [id, setId] = useState(props.match.params.id);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getData();
    getData1();
    getData2();
  }, [id]);

  function prevBlog(id, e) {
    //e.preventDefault();
    console.log("prev");
    setId(id);

    //history.push("/blog/" + id);
    getData();
    getData1();
    getData2();
    window.location.href = "/blog/" + id;
  }

  function nextBlog(id, e) {
    //e.preventDefault();

    setId(id);

    //history.push("/blog/" + id);
    getData();
    getData1();
    getData2();
    window.location.href = "/blog/" + id;
  }

  function getData() {
    axios
      .get(AppUrl.base_url + "blogsectionGetSingle/" + id)
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
      .get(AppUrl.base_url + "blogsectionGetPrev/" + id)
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

  function getData2() {
    axios
      .get(AppUrl.base_url + "blogsectionGetNext/" + id)
      .then(function (response) {
        if (response) {
          setData2(response.data);

          //console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div id="purple_bg"></div>

      <section className="data_table_area" id="blogs_section">
        {data.map((item) => (
          <div key={item.blogsection_id}>
            <div className="container">
              <div
                className="main_title text-center"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <h1 id="our_blogs_text">{item.blogsection_title}</h1>
              </div>
            </div>

            <div id="blog_detail_section">
              <div id="blog_detail_div" className="container">
                <img
                  id="blog_detail_image1"
                  src={AppUrl.image_url + item.blogsection_image1}
                  alt={item.blogsection_title}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />

                <div
                  id="blogs_time_div"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <i className="far fa-clock"></i>
                  <span>{item.blogsection_time} minute read</span>
                </div>

                <div
                  id="blog_detail_first_paragraph"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.blogsection_description1,
                    }}
                  />
                  {/* {item.blogsection_description1} */}
                  {/* </p> */}
                </div>

                <div id="blog_detail_images">
                  <div
                    id="blog_detail_image2_div"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <img
                      id="blog_detail_image2"
                      src={AppUrl.image_url + item.blogsection_image2}
                      alt={item.blogsection_title}
                    />
                  </div>

                  {/* <div
                id="blog_detail_image3_div"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img
                  id="blog_detail_image3"
                  src={
                    AppUrl.image_url +
                    "homesection1/OqP8WytGWNLH9N03HpuzTwsCyt23zkcqH96BaubJ.webp"
                  }
                  alt={
                    AppUrl.image_url +
                    "homesection1/OqP8WytGWNLH9N03HpuzTwsCyt23zkcqH96BaubJ.webp"
                  }
                />
              </div> */}
                </div>

                <div
                  id="blog_detail_second_paragraph"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.blogsection_description2,
                    }}
                  />
                  {/* {item.blogsection_description2} */}
                  {/* </p> */}
                </div>

                <img
                  id="blog_detail_image3_mbl"
                  src={AppUrl.image_url + item.blogsection_image3}
                  alt={item.blogsection_title}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        ))}

        {/* <!-- blogs next and previous buttons --> */}

        <div className="container" id="prev_next_div">
          <div id="prev_next_div_prev">
            {/* if btn enabled */}
            {data1.length > 0 ? (
              <>
                {data1.map((item1) => (
                  <>
                    <span>
                      <button
                        className="btn"
                        name="blogs_prev"
                        id="blogs_prev"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        type="button"
                        onClick={(e) => prevBlog(item1.blogsection_id, e)}
                      >
                        <span>
                          <i
                            className="fas fa-long-arrow-alt-left"
                            id="prev_arrow"
                          ></i>
                        </span>{" "}
                        <span id="prev_text">Previous</span>{" "}
                        <span>
                          <i
                            className="fas fa-long-arrow-alt-left"
                            id="prev_arrow1"
                          ></i>
                        </span>
                      </button>
                    </span>

                    <img
                      className="next_prev_image"
                      src={AppUrl.image_url + item1.blogsection_image1}
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      alt={item1.blogsection_title}
                    />

                    <p
                      id="prev_blogs_title"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      {item1.blogsection_title}
                    </p>
                  </>
                ))}
              </>
            ) : (
              <>
                {/* if btn disabled */}

                <button
                  className="btn"
                  name="blogs_prev"
                  id="blogs_prev_other"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  disabled={true}
                >
                  <span>
                    <i
                      className="fas fa-long-arrow-alt-left"
                      id="prev_arrow_other"
                    ></i>
                  </span>{" "}
                  <span id="prev_text_other">Previous</span>{" "}
                  <span>
                    <i
                      className="fas fa-long-arrow-alt-left"
                      id="prev_arrow1_other"
                    ></i>
                  </span>
                </button>
              </>
            )}
          </div>

          <div id="prev_next_div_next">
            {/* if btn enabled */}
            {data2.length > 0 ? (
              <>
                {data2.map((item2) => (
                  <>
                    <span>
                      <button
                        className="btn"
                        name="blogs_next"
                        id="blogs_next"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        type="button"
                        onClick={() => nextBlog(item2.blogsection_id)}
                      >
                        <span>
                          <i
                            className="fas fa-long-arrow-alt-right"
                            id="next_arrow1"
                          ></i>
                        </span>{" "}
                        <span id="next_text">Next</span>{" "}
                        <span>
                          <i
                            className="fas fa-long-arrow-alt-right"
                            id="next_arrow"
                          ></i>
                        </span>
                      </button>
                    </span>

                    <img
                      className="next_prev_image"
                      src={AppUrl.image_url + item2.blogsection_image1}
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      alt={item2.blogsection_title}
                    />

                    <p
                      id="next_blogs_title"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      {item2.blogsection_title}
                    </p>
                  </>
                ))}
              </>
            ) : (
              <>
                {/* if btn disabled */}
                <button
                  className="btn"
                  name="blogs_next"
                  id="blogs_next_other"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  disabled={true}
                >
                  <span>
                    <i
                      className="fas fa-long-arrow-alt-right"
                      id="next_arrow1_other"
                    ></i>
                  </span>{" "}
                  <span id="next_text_other">Next</span>{" "}
                  <span>
                    <i
                      className="fas fa-long-arrow-alt-right"
                      id="next_arrow_other"
                    ></i>
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(BlogDetails);
