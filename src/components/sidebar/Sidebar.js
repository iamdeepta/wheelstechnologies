import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__area sidebar-opened">
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
            <div className="mobile-menu mobile-menu-2">
              <div class="mobile-menu mobile-menu-2 mean-container">
                <div class="mean-bar">
                  <a
                    href="#nav"
                    class="meanmenu-reveal"
                    style={{ right: 0, left: "auto", display: "inline" }}
                  >
                    <span>
                      <span>
                        <span></span>
                      </span>
                    </span>
                  </a>
                  <nav class="mean-nav">
                    <ul style={{ display: "none" }}>
                      <li class="has-dropdown">
                        <a href="index.html">Home</a>
                        <ul class="submenu" style={{ display: "none" }}>
                          <li>
                            <a href="index.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home 4</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home 5</a>
                          </li>
                        </ul>
                        <a
                          class="mean-expand"
                          href="index.html"
                          style={{ fontSize: 18 }}
                        >
                          <i class="fal fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li class="has-dropdown">
                        <a href="services.html">Services</a>
                        <ul class="submenu" style={{ display: "none" }}>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="services-details.html">Services Details</a>
                          </li>
                        </ul>
                        <a
                          class="mean-expand"
                          href="index.html"
                          style={{ fontSize: 18 }}
                        >
                          <i class="fal fa-plus"></i>
                        </a>
                      </li>
                      <li class="has-dropdown">
                        <a href="blog.html">Blog</a>

                        <ul class="submenu" style={{ display: "none" }}>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-standard.html">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                        <a
                          class="mean-expand"
                          href="index.html"
                          style={{ fontSize: 18 }}
                        >
                          <i class="fal fa-plus"></i>
                        </a>
                      </li>
                      <li class="has-dropdown">
                        <a href="about.html">Pages</a>
                        <ul class="submenu" style={{ display: "none" }}>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="portfolio.html">Portfolio</a>
                          </li>
                          <li>
                            <a href="portfolio-details.html">
                              Portfolio Details
                            </a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="error.html">Error 404</a>
                          </li>
                          <li>
                            <a href="sign-up.html">Sign Up</a>
                          </li>
                          <li>
                            <a href="sign-in.html">Sign In</a>
                          </li>
                        </ul>
                        <a
                          class="mean-expand"
                          href="index.html"
                          style={{ fontSize: 18 }}
                        >
                          <i class="fal fa-plus"></i>
                        </a>
                      </li>
                      <li class="mean-last">
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
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
      <div className="body-overlay opened"></div>
      {/* sidebar area end */}
    </>
  );
};

export default Sidebar;
