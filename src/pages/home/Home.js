import React from "react";
import Preloader from "../../components/preloader/Preloader.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import Header from "../../components/header/Header.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import HomeMain from "../../components/homeMainContents/HomeMain.js";
import Footer from "../../components/footer/Footer.js";

const Home = () => {
  return (
    <>
      <Preloader />
      <BackToTop />
      <Header />
      <Sidebar />
      <HomeMain />
      <Footer />
    </>
  );
};

export default Home;
