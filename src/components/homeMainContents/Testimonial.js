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
                  One of the pioneering companies offering modern cloud based
                  solutions to its clients. I am very satisfied with their
                  services.
                </p>
                <p className="testimonial_client_name">Farhan Shakil Ahmed </p>
                <p className="testimonial_designation">CEO, Covidsurokkha</p>
              </div>
              <div className="testimonial_card">
                <img
                  src="assets/img/team/home-2/team-1.jpg"
                  alt="client 1"
                  className="testimonial_image"
                />
                <p className="testimonial_message">
                  Katex Entertainment maintains the International standards
                  whenever they are involved in any tech based work.
                </p>
                <p className="testimonial_client_name">Aktaruzzaman Khan</p>
                <p className="testimonial_designation">
                  Head of Marketing, ShoesByEnvy
                </p>
              </div>
              <div className="testimonial_card">
                <img
                  src="assets/img/team/home-2/team-1.jpg"
                  alt="client 1"
                  className="testimonial_image"
                />
                <p className="testimonial_message">
                  Even after our contract period ended, I could easily reach out
                  to the customer service team for any kind of queries. They go
                  out of their ways to accommodate clients.
                </p>
                <p className="testimonial_client_name">Rony Rezaul</p>
                <p className="testimonial_designation">
                  Managing Director, RonyRezaul
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
