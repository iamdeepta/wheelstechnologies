import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./css/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [changePlusIconServices, setChangePlusIconServices] = useState(true);
  const [changePlusIconBlog, setChangePlusIconBlog] = useState(true);
  const [plusToCrossServices, setPlusToCrossServices] = useState(true);
  const [plusToCrossBlog, setPlusToCrossBlog] = useState(true);

  function closeSidebar() {
    let element = document.getElementById("sidebar__area");
    ReactDOM.findDOMNode(element).classList.remove("sidebar-opened");

    let element1 = document.getElementById("body-overlay");
    ReactDOM.findDOMNode(element1).classList.remove("opened");

    //return setSidebarClose(true);
  }

  function servicesToggle() {
    setChangePlusIconServices(!changePlusIconServices);
    setPlusToCrossServices(!plusToCrossServices);
  }

  function blogToggle() {
    setChangePlusIconBlog(!changePlusIconBlog);
    setPlusToCrossBlog(!plusToCrossBlog);
  }
  return (
    <>
      <div className="sidebar__area" id="sidebar__area">
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button
              className="sidebar__close-btn"
              id="sidebar__close-btn"
              onClick={() => closeSidebar()}
            >
              <span>
                <i className="fal fa-times"></i>
              </span>
              <span>close</span>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="logo mb-40">
              <a href="index.html">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </a>
            </div>
            <div className="mobile-menu mobile-menu-2">
              <ul id="mobile_menu_ul">
                <li id="home_li">
                  <Link
                    className="link_a"
                    id="home_link"
                    to="/"
                    onClick={() => closeSidebar()}
                  >
                    HOME
                  </Link>
                </li>
                <li id="about_li">
                  <Link
                    className="link_a"
                    id="about_link"
                    to="/about"
                    onClick={() => closeSidebar()}
                  >
                    ABOUT
                  </Link>
                </li>
                <li id="services_li">
                  <Link
                    className="link_a"
                    id="services_link"
                    to="/services"
                    onClick={() => closeSidebar()}
                  >
                    SERVICES
                  </Link>
                  <Link
                    className="fa_plus_link"
                    id="fa_plus_link_services"
                    to="#"
                    onClick={() => servicesToggle()}
                  >
                    <i
                      className={
                        plusToCrossServices
                          ? "fal fa-plus fa-plus-inactive-services"
                          : "fal fa-plus fa-plus-active-services"
                      }
                    ></i>
                  </Link>
                </li>
                <div
                  id="sub_services_div"
                  className={
                    changePlusIconServices
                      ? "sub_services_div sub_services_inactive"
                      : "sub_services_div sub_services_active"
                  }
                >
                  <li className="sub_li" id="sub_services_li">
                    <Link
                      className="link_a"
                      id="services_link"
                      to="/services"
                      onClick={() => closeSidebar()}
                    >
                      SERVICES
                    </Link>
                  </li>
                  <li className="sub_li" id="sub_services_li">
                    <Link
                      className="link_a"
                      id="services_link"
                      to="/services-details"
                      onClick={() => closeSidebar()}
                    >
                      SERVICES DETAILS
                    </Link>
                  </li>
                </div>
                <li id="blog_li">
                  <Link
                    className="link_a"
                    id="blog_link"
                    to="/blog"
                    onClick={() => closeSidebar()}
                  >
                    BLOG
                  </Link>
                  <Link
                    className="fa_plus_link"
                    id="fa_plus_link_blog"
                    to="#"
                    onClick={() => blogToggle()}
                  >
                    <i
                      className={
                        plusToCrossBlog
                          ? "fal fa-plus fa-plus-inactive-blog"
                          : "fal fa-plus fa-plus-active-blog"
                      }
                    ></i>
                  </Link>
                </li>
                <div
                  id="sub_blog_div"
                  className={
                    changePlusIconBlog
                      ? "sub_blog_div sub_blog_inactive"
                      : "sub_blog_div sub_blog_active"
                  }
                >
                  <li className="sub_li" id="sub_blog_li">
                    <Link
                      className="link_a"
                      id="blog_link"
                      to="/blog"
                      onClick={() => closeSidebar()}
                    >
                      BLOG
                    </Link>
                  </li>
                  <li className="sub_li" id="sub_blog_li">
                    <Link
                      className="link_a"
                      id="blog_link"
                      to="/blog-details"
                      onClick={() => closeSidebar()}
                    >
                      BLOG DETAILS
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
            <div className="sidebar__info mt-50">
              <a
                href="index.html"
                className="w-btn w-btn-blue-2 w-btn-4 d-block mb-15 mt-15"
              >
                login
              </a>
              <a href="index.html" className="w-btn w-btn-blue d-block">
                sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- sidebar area end -->       */}
      <div
        className="body-overlay"
        onClick={() => closeSidebar()}
        id="body-overlay"
      ></div>
      {/* sidebar area end */}
    </>
  );
};

export default Sidebar;
