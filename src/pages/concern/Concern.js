import React from "react";
//import Preloader from "../../components/preloader/Preloader.js";
//import BackToTop from "../../components/backToTop/BackToTop.js";
//import Header from "../../components/header/Header.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import ConcernMain from "../../components/concernMain/ConcernMain.js";
//import Footer from "../../components/footer/Footer.js";

const Concern = () => {
  return (
    <>
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
