import React from "react";

const NoMatch = () => {
  return (
    <div>
      <section id="page-title-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <div class="page-title-content">
                <h1 class="h2">Non Existing Page</h1>
                <p>
                  Alumni Needs enables you to harness the power of your alumni
                  network. Whatever may be the need
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="page-content-wrap">
        <div class="directory-page-content-warp section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2>Error 404</h2>
                <div className="alert alert-danger" role="alert">
                  The page you're looking for doesn't exist!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoMatch;
