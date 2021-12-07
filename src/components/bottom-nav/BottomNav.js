import React from "react";
import "./css/bottom-nav.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faList,
//   faReceipt,
//   faImage,
//   faCommentAlt,
// } from "@fortawesome/free-solid-svg-icons";
import { RiHome4Fill } from "react-icons/ri";
import {
  MdDesignServices,
  MdOutlineMiscellaneousServices,
  MdConnectWithoutContact,
} from "react-icons/md";
import { ImBlog } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const BottomNav = () => {
  //   let nav = document.querySelector(".nav");
  //   if (nav !== null) {
  //     nav.querySelectorAll("li .bottom_nav_a").forEach((a, i) => {
  //       a.onclick = (e) => {
  //         if (a.classList.contains("nav-item-active")) return;
  //         nav
  //           .querySelector("li .bottom_nav_a.nav-item-active")
  //           .classList.remove("nav-item-active");

  //         a.classList.add("nav-item-active");

  //         let nav_indicator = nav.querySelector(".nav-indicator");
  //         nav_indicator.style.left = `calc(${i * 80 + 51}px - 45px)`;
  //       };
  //     });
  //   }

  function clickServices() {
    let nav = document.querySelector(".nav_bottom");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_menu").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${0 * 20 + 12.5}vw - 45px)`;
  }

  function clickBlogs() {
    let nav = document.querySelector(".nav_bottom");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_stories").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");

    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${1 * 20 + 12.5}vw - 45px)`;
  }

  function clickHome() {
    let nav = document.querySelector(".nav_bottom");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_home").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");

    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${2 * 20 + 12.5}vw - 45px)`;
  }

  function clickContact() {
    let nav = document.querySelector(".nav_bottom");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_contact").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");

    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${3 * 20 + 12.5}vw - 45px)`;
  }

  function clickAboutUs() {
    let nav = document.querySelector(".nav_bottom");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_about_us").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");

    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${4 * 20 + 12.5}vw - 45px)`;
  }

  return (
    <>
      <ul className="nav_bottom">
        <span className="nav-indicator"></span>

        <li>
          <Link
            to="/services"
            className="bottom_nav_a bottom_nav_menu"
            id="bottom_nav_menu"
            onClick={clickServices}
          >
            {/* <FontAwesomeIcon className="navbar_menu_icon" icon={faReceipt} /> */}
            <MdDesignServices className="navbar_menu_icon" />
            <span className="title">Services</span>
          </Link>
        </li>

        <li>
          <Link
            to="/blog"
            className="bottom_nav_a bottom_nav_stories"
            onClick={clickBlogs}
          >
            {/* <FontAwesomeIcon className="navbar_stories_icon" icon={faImage} /> */}
            <ImBlog className="navbar_stories_icon" />
            <span className="title">Blogs</span>
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className="bottom_nav_a nav-item-active bottom_nav_home"
            id="bottom_nav_home"
            onClick={clickHome}
          >
            {/* <FontAwesomeIcon className="navbar_home_icon" icon={faHome} /> */}
            <RiHome4Fill className="navbar_home_icon" />
            <span className="title">Home</span>
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="bottom_nav_a bottom_nav_contact"
            onClick={clickContact}
          >
            {/* <FontAwesomeIcon
              className="navbar_contact_icon"
              icon={faCommentAlt}
            /> */}
            <MdConnectWithoutContact className="navbar_contact_icon" />
            <span className="title">Contact</span>
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="bottom_nav_a bottom_nav_about_us"
            onClick={clickAboutUs}
          >
            {/* <FontAwesomeIcon className="navbar_about_us_icon" icon={faList} /> */}
            <FaUsers className="navbar_about_us_icon" />
            <span className="title">About</span>
          </Link>
        </li>

        {/* <li>
          <a href=".">
            <FontAwesomeIcon className="navbar_title_icon" icon={faChair} />
            <span className="title">Book Table</span>
          </a>
        </li> */}
      </ul>
    </>
  );
};

export default BottomNav;
