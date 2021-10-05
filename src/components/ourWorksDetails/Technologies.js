import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./css/technologies.css";

const Technologies = () => {
  let settings;
  if (window.innerWidth <= 460) {
    settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      autoplay: true,
    };
  } else {
    settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear",
      autoplay: true,
    };
  }

  return (
    <>
      <section className="cta__area blue-bg-10 pt-100 pb-80 p-relative fix z-index-1 work_details_tech_section">
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
                  <h2 className="section__title section__title-4 work_details_tech_header_text">
                    Technologies Used
                  </h2>
                  <Slider {...settings} className="works_details_tech_slider">
                    <div className="works_details_tech_content_div">
                      <div className="works_details_tech_content">
                        <i className="fab fa-php works_details_tech_icon"></i>
                        <p className="works_details_tech_text">PHP</p>
                      </div>
                    </div>
                    <div className="works_details_tech_content_div">
                      <div className="works_details_tech_content">
                        <i className="fab fa-laravel works_details_tech_icon"></i>
                        <p className="works_details_tech_text">Laravel</p>
                      </div>
                    </div>
                    <div className="works_details_tech_content_div">
                      <div className="works_details_tech_content">
                        <i className="fab fa-react works_details_tech_icon"></i>
                        <p className="works_details_tech_text">React</p>
                      </div>
                    </div>
                    <div className="works_details_tech_content_div">
                      <div className="works_details_tech_content">
                        <i className="fab fa-js works_details_tech_icon"></i>
                        <p className="works_details_tech_text">Javascript</p>
                      </div>
                    </div>
                    <div className="works_details_tech_content_div">
                      <div className="works_details_tech_content">
                        <i className="fas fa-database works_details_tech_icon"></i>
                        <p className="works_details_tech_text">MySQL</p>
                      </div>
                    </div>
                    <div className="works_details_tech_content_div">
                      <div className="works_details_tech_content">
                        <i className="fas fa-camera works_details_tech_icon"></i>
                        <p className="works_details_tech_text">Photoshop</p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
