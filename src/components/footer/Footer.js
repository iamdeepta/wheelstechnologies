import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
        <path
          fill="#f4f9fd"
          fill-opacity="1"
          d="M0,256L60,218.7C120,181,240,107,360,96C480,85,600,139,720,176C840,213,960,235,1080,208C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <footer className="footer__area grey-bg-3 pt-1 p-relative fix">
        {/* <div className="footer__shape">
          <img
            className="footer-circle-1 footer-2-circle-1"
            src="assets/img/icon/footer/home-1/circle-1.png"
            alt=""
          />
          <img
            className="footer-circle-2 footer-2-circle-2"
            src="assets/img/icon/footer/home-1/circle-2.png"
            alt=""
          />
        </div> */}
        <div className="footer__top pb-65">
          <div className="container">
            <div className="row">
              <div
                className="col-xxl-5 col-xl-5 col-lg-5 col-md-4 col-sm-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="footer__widget mb-50">
                  <div className="footer__widget-title mb-25">
                    <div className="footer__logo">
                      <a href="index.html">
                        <img
                          src="images/logo.png"
                          alt="logo"
                          className="logo_img_footer"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="footer__widget-content">
                    <p>
                      Our ambition is to always give our customer a good
                      experience, fast speed and consumer friendly design
                    </p>
                  </div>
                  <div className="footer__widget-content">
                    <p>
                      For any support: <br />
                      <a
                        href="mailto:support@designhubtechnologies.com"
                        className="emails"
                      >
                        support@designhubtechnologies.com
                      </a>
                    </p>
                    <p className="email2">
                      For sales queries: <br />
                      <a
                        href="mailto:sales@designhubtechnologies.com"
                        className="emails"
                      >
                        sales@designhubtechnologies.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* <div
                className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="footer__widget mb-50 footer__pl-70">
                  <div className="footer__widget-title mb-25">
                    <h3>Overview</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <li>
                          <a href="index.html">Terms</a>
                        </li>
                        <li>
                          <a href="index.html">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="index.html">Cookies</a>
                        </li>
                        <li>
                          <a href="index.html">Integrations</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
              <div
                className="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="footer__widget mb-50 footer__pl-90">
                  {/* <div className="footer__widget-title mb-25">
                    <h3>Customer</h3>
                  </div> */}
                  <div className="footer__widget-content">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        {/* <li>
                          <a href="index.html">Pricing</a>
                        </li>
                        <li>
                          <a href="index.html">Integrations</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="footer__widget mb-50">
                  {/* <div className="footer__widget-title mb-25">
                    <h3>Product</h3>
                  </div> */}
                  <div className="footer__widget-content">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <li>
                          <Link to="/services">Services</Link>
                        </li>
                        <li>
                          <Link to="/blogs">Blogs</Link>
                        </li>
                        {/* <li>
                          <a href="index.html">Licences</a>
                        </li>
                        <li>
                          <a href="index.html">Changelog</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <div className="footer__widget mb-50 float-md-end fix">
                  <div className="footer__widget-title mb-25">
                    <h3>Follow Us</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__social footer__social-2">
                      <ul>
                        <li>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/Designhub-Technologies-105073211942134"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://twitter.com/designhubtech"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.pinterest.com/f390d6356eefefc56fa719efea0988/_saved/"
                          >
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>

                        <li className="mt-2">
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/company/designhub-technologies/"
                          >
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>

                        <li className="mt-2">
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/designhubtechnologies/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>

                        <li className="mt-2">
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://t.me/designhubtechnologies"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </li>

                        <li className="mt-2">
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/channel/UC8u8awSKqhFjrmL48V2xCAA"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__copyright">
              <div className="row">
                <div className="col-xxl-12 wow fadeInUp" data-wow-delay="1.5s">
                  <div className="footer__copyright-wrapper footer__copyright-wrapper-2 text-center">
                    <p>
                      Copyright © 2021 All Rights Reserved passion by{" "}
                      <Link to="/">Designhub Technologies</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
