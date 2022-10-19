import React from "react";
//import Preloader from "../../components/preloader/Preloader.js";
//import BackToTop from "../../components/backToTop/BackToTop.js";
//import Header from "../../components/header/Header.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import ConcernMain from "../../components/concernMain/ConcernMain.js";
//import Footer from "../../components/footer/Footer.js";
import { Helmet } from "react-helmet-async";

const Concern = () => {
  return (
    <>
      <Helmet>
        <title>Katex Entertainment | Our Concerns</title>
        <meta
          name="description"
          content="We create award-winning websites, cutting-edge mobile applications and top notch motion video and graphics."
        />
        <link rel="canonical" href="/our-concerns" />
      </Helmet>
      {/* <Preloader /> */}
      {/* <BackToTop /> */}
      {/* <Header /> */}
      {/* {window.innerWidth <= 460 ? <Sidebar /> : ""} */}
      <Sidebar />
      <ConcernMain />
      {/* <Footer /> */}
    </>
  );
};

export default Concern;
