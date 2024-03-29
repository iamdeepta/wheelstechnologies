import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
//import $ from "jquery";
import "./header.css";

const Header = () => {
  //   $(".sidebar__close-btn").on("click", function () {
  //     $(".sidebar__area").addClass("sidebar-opened");
  //     $(".body-overlay").addClass("opened");
  //     console.log("Hello");
  //   });
  // const [scrollPos, setScrollPos] = useState(false);

  // useEffect(() => {
  //   if (window.scrollY > 50) {
  //     setScrollPos(true);
  //   } else if (window.scrollY <= 4) {
  //     setScrollPos(false);
  //   }
  // }, []);

  function sidebarOpen() {
    let element = document.getElementById("sidebar__area");
    ReactDOM.findDOMNode(element).classList.add("sidebar-opened");

    let element1 = document.getElementById("body-overlay");
    ReactDOM.findDOMNode(element1).classList.add("opened");
  }

  return (
    <>
      <header>
        <div
          id="header-sticky"
          className="header__area header__border header__padding"
        >
          <div className="header_top">
            <div className="container header_top_inside">
              <i className="fas fa-envelope"></i>
              <span className="email1_text">
                <a href="mailto:support@katexentertainment.com">
                  Email: support@katexentertainment.com
                </a>
              </span>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-12">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="/katex_logo1.png"
                      alt="logo"
                      className="logo_img"
                    />
                    <span className="logo_text">Katex Entertainment</span>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="main-menu main-menu-2 pl-40">
                  <nav id="mobile-menu">
                    <ul>
                      {/* <li className="has-dropdown">
                        <a href="index.html">Home</a>
                        <ul className="submenu">
                          <li>
                            <a href="index.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home 4</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home 5</a>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      {/* <li className="has-dropdown">
                        <Link to="/services">Services</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/services">Services</Link>
                          </li>
                          <li>
                            <Link to="/services-details">Services Details</Link>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <Link to="/our-concerns">Our Concerns</Link>
                      </li>
                      <li className="">
                        <Link to="/blog">Blogs</Link>

                        {/* <ul className="submenu">
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <a href="blog-standard.html">Blog Standard</a>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      {/* <li>
                        <Link to="/faq">FAQ</Link>
                      </li> */}
                      {/* <li className="has-dropdown">
                        <a href="about.html">Pages</a>
                        <ul className="submenu">
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="portfolio.html">Portfolio</a>
                          </li>
                          <li>
                            <a href="portfolio-details.html">
                              Portfolio Details
                            </a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="error.html">Error 404</a>
                          </li>
                          <li>
                            <a href="sign-up.html">Sign Up</a>
                          </li>
                          <li>
                            <a href="sign-in.html">Sign In</a>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li>
                        <a href="contact.html">Contact</a>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="header__right text-end d-flex align-items-center justify-content-end">
                  <div className="header__right-btn d-none d-md-flex d-xl-block">
                    <a
                      href="sign-in.html"
                      className="w-btn w-btn-transparent w-btn-transparent-2"
                    >
                      login
                    </a>
                    <a
                      href="contact.html"
                      className="w-btn w-btn-blue w-btn-blue-header ml-30"
                    >
                      Get Started
                    </a>
                  </div>
                  <div
                    className="sidebar__menu d-lg-none"
                    onClick={() => sidebarOpen()}
                  >
                    <div
                      className="sidebar-toggle-btn sidebar-toggle-btn-2"
                      id="sidebar-toggle"
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
