import React from "react";
//import Preloader from "../../components/preloader/Preloader.js";
//import BackToTop from "../../components/backToTop/BackToTop.js";
//import Header from "../../components/header/Header.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import HomeMain from "../../components/homeMainContents/HomeMain.js";
//import Footer from "../../components/footer/Footer.js";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Katex Entertainment | Home</title>
        <meta
          name="description"
          content="We create award-winning websites, cutting-edge mobile applications and top notch motion video and graphics."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      {/* <Preloader /> */}
      {/* <BackToTop /> */}
      {/* <Header /> */}
      {/* {window.innerWidth <= 460 ? <Sidebar /> : ""} */}
      {/* <Sidebar /> */}
      <HomeMain />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
