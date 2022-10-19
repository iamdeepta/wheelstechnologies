import React from "react";
//import Preloader from "../../components/preloader/Preloader.js";
//import BackToTop from "../../components/backToTop/BackToTop.js";
//import Header from "../../components/header/Header.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import ServicesMain from "../../components/servicesMainContents/ServicesMain.js";
//import Footer from "../../components/footer/Footer.js";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Katex Entertainment | Services</title>
        <meta
          name="description"
          content="We create award-winning websites, cutting-edge mobile applications and top notch motion video and graphics."
        />
        <link rel="canonical" href="/services" />
      </Helmet>
      {/* <Preloader /> */}
      {/* <BackToTop /> */}
      {/* <Header /> */}
      {/* {window.innerWidth <= 460 ? <Sidebar /> : ""} */}
      <Sidebar />
      <ServicesMain />
      {/* <Footer /> */}
    </>
  );
};

export default Services;
