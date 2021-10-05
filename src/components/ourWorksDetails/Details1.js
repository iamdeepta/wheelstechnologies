import React from "react";
import "./css/details1.css";

const Details1 = () => {
  return (
    <>
      <section className="work_details_details1_section">
        <div
          className="work_details_details1_project_by wow fadeInUp"
          data-wow-delay=".3s"
        >
          <p>Project By</p>
          <p>Designhub Technologies</p>
        </div>

        <div
          className="work_details_details1_client wow fadeInUp"
          data-wow-delay=".6s"
        >
          <p>Client</p>
          <p>Deepta Barua</p>
        </div>

        <div
          className="work_details_details1_website wow fadeInUp"
          data-wow-delay=".9s"
        >
          <p>Website</p>
          <p>
            <a href="https://covidsurokkha.com">covidsurokkha.com</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Details1;
