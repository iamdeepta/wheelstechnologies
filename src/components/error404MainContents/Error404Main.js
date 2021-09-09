import React from "react";
import { Link } from "react-router-dom";

const Error404Main = () => {
  return (
    <>
      <main>
        <section className="error__area pt-105 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                <div className="error__wrapper text-center">
                  <div className="error__thumb mb-65">
                    <img src="assets/img/error/error.png" alt="" />
                  </div>
                  <div className="error__content">
                    <h3>Page not found</h3>
                    <p>
                      Starkers pardon you knees up is Elizabeth geeza Why, quain
                      standard guvnor gosh cras brilliant.
                    </p>
                    <Link to="/" className="w-btn w-btn-11">
                      Go Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Error404Main;
