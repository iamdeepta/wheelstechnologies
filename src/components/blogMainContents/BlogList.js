import React, { useState, useEffect } from "react";
import "./css/blogList.css";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "blogsectionGet")
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

  //const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <>
      <div id="blog_card_section">
        <div id="blog_card_section_inside">
          {data.map((item) => {
            return (
              <>
                <Link to={"/blog/" + item.blogsection_id}>
                  <div id="blogs_card_main_div" key={item.blogsection_id}>
                    <div className="card blogs_card">
                      <img
                        className="card-img-top"
                        src={AppUrl.image_url + item.blogsection_image1}
                        alt={item.blogsection_title + " image"}
                      />

                      <div id="blogs_date_div">
                        <span id="blogs_date_text">{item.blogsection_day}</span>
                      </div>

                      <div id="blog_tag_div">
                        <span id="blog_tag_text">{item.blogsection_tag}</span>
                      </div>

                      <div className="card-body" id="blogs_card_body">
                        <h5 className="card-title">{item.blogsection_title}</h5>
                        <p className="card-text">
                          {item.blogsection_description1.substring(0, 150)}
                        </p>
                        <div id="blogs_card_bottom_div">
                          <p id="blogs_category_p">
                            <a id="blogs_category_a" href=".">
                              {item.blogsection_category}
                            </a>
                          </p>

                          <span id="blogs_time_span">
                            <i className="far fa-clock"></i>
                            <span id="blogs_time_text">
                              {item.blogsection_time + " minutes"}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogList;
