import React, { useEffect, useState } from "react";
import "./css/description.css";

const Description = () => {
  const [active_description, setActiveDescription] = useState(false);
  const [active_intro, setActiveIntro] = useState(false);
  const [active_main_div, setActiveMainDiv] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActiveMainDiv(true);
    }, 600);

    setTimeout(() => {
      setActiveDescription(true);
    }, 1000);

    setTimeout(() => {
      setActiveIntro(true);
    }, 2200);
  });
  return (
    <>
      <div
        className={
          active_main_div
            ? "container work_details_description_main_div container work_details_description_main_div_active"
            : "container work_details_description_main_div container work_details_description_main_div_inactive"
        }
      >
        <div className="work_details_description_image_div">
          <img
            className="work_details_description_image"
            src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <div
            className={
              active_description
                ? "work_details_description_bg1_active"
                : "work_details_description_bg1"
            }
          ></div>
        </div>

        <div
          className={
            active_intro
              ? "work_details_description_intro_div work_details_description_intro_div_active"
              : "work_details_description_intro_div work_details_description_intro_div_inactive"
          }
        >
          <p className="work_details_description_intro_div_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            ut sequi nobis velit iure sint rerum, facilis, consequuntur
            molestias dolor architecto, magnam a ex numquam unde porro.
            Recusandae, placeat nam.
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
