import React from "react";
//import Preloader from "../../components/preloader/Preloader.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import Header from "../../components/header/Header.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import ServicesMain from "../../components/servicesMainContents/ServicesMain.js";
import Footer from "../../components/footer/Footer.js";

const Services = () => {
  return (
    <>
      {/* <Preloader /> */}
      <BackToTop />
      <Header />
      {/* {window.innerWidth <= 460 ? <Sidebar /> : ""} */}
      <Sidebar />
      <ServicesMain />
      <Footer />
    </>
  );
};

export default Services;
