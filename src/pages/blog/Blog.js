import React from "react";
//import Preloader from "../../components/preloader/Preloader.js";
//import BackToTop from "../../components/backToTop/BackToTop.js";
//import Header from "../../components/header/Header.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import BlogMain from "../../components/blogMainContents/BlogMain.js";
//import Footer from "../../components/footer/Footer.js";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Katex Entertainment | Blogs</title>
        <meta
          name="description"
          content="Get in touch with our tech related blogs."
        />
        <link rel="canonical" href="/blog" />
      </Helmet>
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
