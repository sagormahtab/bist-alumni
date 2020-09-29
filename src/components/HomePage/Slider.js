import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <section id="slider-area">
      <div class="slider-active-wrap owl-carousel text-center text-md-left">
        <div class="single-slide-wrap slide-bg-1">
          <div class="container">
            <div class="row">
              <div class="col-lg-9">
                <div class="slider-content">
                  <h2>We Are Proud</h2>
                  <h3>
                    Students of <span>BIST</span>
                  </h3>
                  <p>
                    Alumni Needs enables you to harness the power of your alumni
                    network. Whatever may be the need (academic, relocation,
                    career, projects, mentorship, etc. you can ask the community
                    and get responses in three.
                  </p>
                  <div class="slider-btn">
                    <Link to="#about-area" class="btn btn-brand smooth-scroll">
                      our mission
                    </Link>
                    <Link to="/aboutus" class="btn btn-brand-rev">
                      our story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="single-slide-wrap slide-bg-2">
          <div class="container">
            <div class="row">
              <div class="col-lg-9">
                <div class="slider-content">
                  <h2>We Are Not Proud</h2>
                  <h3>
                    Students of <span>BIST</span>
                  </h3>
                  <p>
                    Alumni Needs enables you to harness the power of your alumni
                    network. Whatever may be the need (academic, relocation,
                    career, projects, mentorship, etc. you can ask the community
                    and get responses in three.
                  </p>
                  <div class="slider-btn">
                    <a href="/aboutus" class="btn btn-brand">
                      our mission
                    </a>
                    <a href="/aboutus" class="btn btn-brand-rev">
                      our story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="single-slide-wrap slide-bg-3">
          <div class="container">
            <div class="row">
              <div class="col-lg-9">
                <div class="slider-content">
                  <h2>Why Proud for u</h2>
                  <h3>
                    Students of <span>BIST</span>
                  </h3>
                  <p>
                    Alumni Needs enables you to harness the power of your alumni
                    network. Whatever may be the need (academic, relocation,
                    career, projects, mentorship, etc. you can ask the community
                    and get responses in three.
                  </p>
                  <div class="slider-btn">
                    <a href="/aboutus" class="btn btn-brand">
                      our mission
                    </a>
                    <a href="/aboutus" class="btn btn-brand-rev">
                      our story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="social-networks-icon">
        <ul>
          <li>
            <a href="/">
              <i class="fa fa-facebook"></i> <span>7.2k Likes</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa fa-twitter"></i> <span>3.2m Followers</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa fa-pinterest"></i> <span>7.2k Likes</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa fa-youtube"></i> <span>2.2k Subscribers</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Slider;
