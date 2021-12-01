import React from "react";
//import Preloader from "../../components/preloader/Preloader.js";
//import BackToTop from "../../components/backToTop/BackToTop.js";
//import Header from "../../components/header/Header.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import BlogMain from "../../components/blogMainContents/BlogMain.js";
//import Footer from "../../components/footer/Footer.js";

const Blog = () => {
  return (
    <>
      {/* <Preloader /> */}
      {/* <BackToTop /> */}
      {/* <Header /> */}
      {/* {window.innerWidth <= 460 ? <Sidebar /> : ""} */}
      <Sidebar />
      <BlogMain />
      {/* <Footer /> */}
    </>
  );
};

export default Blog;
