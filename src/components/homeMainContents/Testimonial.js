import React from "react";
import "./css/testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  let settings1;
  if (window.innerWidth <= 460) {
    settings1 = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      autoplay: true,
    };
  } else {
    settings1 = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      autoplay: true,
    };
  }

  return (
    <>
      <div className="container testimonial_main_div">
        <div className="testimonial_left_div">
          <p className="testimonial_left_para">Testimonials</p>
          <h1 className="testimonial_left_text">
            What They Say About Our Company
          </h1>
        </div>
        <div className="testimonial_right_div">
          <div className="testimonial_bg"></div>
          <div className="testimonial_slider_div">
            <Slider {...settings1} className="slider_main">
              <div className="testimonial_card">
                <img
                  src="assets/img/team/home-2/team-1.jpg"
                  alt="client 1"
                  className="testimonial_image"
                />
                <p className="testimonial_message">
                  I am so happy my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence that I neglect my talents.
                  Thank You.
                </p>
                <p className="testimonial_client_name">Deepta Barua</p>
                <p className="testimonial_designation">Software Engineer</p>
              </div>
              <div className="testimonial_card">
                <img
                  src="assets/img/team/home-2/team-1.jpg"
                  alt="client 1"
                  className="testimonial_image"
                />
                <p className="testimonial_message">
                  I am so happy my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence that I neglect my talents.
                  Thank You.
                </p>
                <p className="testimonial_client_name">Deepta Barua</p>
                <p className="testimonial_designation">Software Engineer</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
