import React from "react";
import "./css/blogList.css";

const BlogList = () => {
  const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <>
      <div id="blog_card_section">
        <div id="blog_card_section_inside">
          {i.map((item) => {
            return (
              <>
                <div id="blogs_card_main_div">
                  <div
                    class="card blogs_card"
                    id="blogs_card'.$result['blogs_id'].'"
                  >
                    <img
                      class="card-img-top"
                      src="/assets/img/page-title/page-title.jpg"
                      alt="blog images"
                    />

                    <div id="blogs_date_div">
                      <span id="blogs_date_text">8 Sep</span>
                    </div>

                    <div id="blog_tag_div">
                      <span id="blog_tag_text">Blog</span>
                    </div>

                    <div class="card-body" id="blogs_card_body">
                      <h5 class="card-title">This is blog title</h5>
                      <p class="card-text">This is blog description</p>
                      <div id="blogs_card_bottom_div">
                        <p id="blogs_category_p">
                          <a id="blogs_category_a" href=".">
                            category
                          </a>
                        </p>

                        <span id="blogs_time_span">
                          <i class="far fa-clock"></i>
                          <span id="blogs_time_text">9 minutes</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogList;
