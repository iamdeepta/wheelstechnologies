import React from "react";
//import Preloader from "../../components/preloader/Preloader.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import Header from "../../components/header/Header.js";
//import Sidebar from "../../components/sidebar/Sidebar.js";
import Error404Main from "../../components/error404MainContents/Error404Main.js";
import Footer from "../../components/footer/Footer.js";

const Error404 = () => {
  return (
    <>
      {/* <Preloader /> */}
      <BackToTop />
      <Header />
      {/* {window.innerWidth <= 460 ? <Sidebar /> : ""} */}

      <Error404Main />
      <Footer />
    </>
  );
};

export default Error404;
