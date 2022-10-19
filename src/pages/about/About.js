import React from "react";
//import Preloader from "../../components/preloader/Preloader.js";
//import BackToTop from "../../components/backToTop/BackToTop.js";
//import Header from "../../components/header/Header.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import AboutMain from "../../components/aboutMainContents/AboutMain.js";
//import Footer from "../../components/footer/Footer.js";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Katex Entertainment | About</title>
        <meta
          name="description"
          content="Our dedicated team of creatives is bursting with talent, experience and passion for what we do."
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      {/* <Preloader /> */}
      {/* <BackToTop /> */}
      {/* <Header /> */}
      {/* {window.innerWidth <= 460 ? <Sidebar /> : ""} */}
      <Sidebar />
      <AboutMain />
      {/* <Footer /> */}
    </>
  );
};

export default About;
