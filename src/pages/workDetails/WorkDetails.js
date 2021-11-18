import React from "react";
import WorksDetails from "../../components/ourWorksDetails/WorkDetails";
//import BackToTop from "../../components/backToTop/BackToTop";
//import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";

const WorkDetails = () => {
  return (
    <>
      {/* <BackToTop /> */}
      {/* <Header /> */}
      <Sidebar />
      <WorksDetails />
      <Footer />
    </>
  );
};

export default WorkDetails;
