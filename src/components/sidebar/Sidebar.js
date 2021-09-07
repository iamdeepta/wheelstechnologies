import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__area">
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button className="sidebar__close-btn" id="sidebar__close-btn">
              <span>
                <i className="fal fa-times"></i>
              </span>
              <span>close</span>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="logo mb-40">
              <a href="index.html">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </a>
            </div>
            <div className="mobile-menu mobile-menu-2"></div>
            <div className="sidebar__info mt-350">
              <a
                href="index.html"
                className="w-btn w-btn-blue-2 w-btn-4 d-block mb-15 mt-15"
              >
                login
              </a>
              <a href="index.html" className="w-btn w-btn-blue d-block">
                sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- sidebar area end -->       */}
      <div className="body-overlay"></div>
      {/* sidebar area end */}
    </>
  );
};

export default Sidebar;
