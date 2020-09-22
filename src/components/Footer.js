import React from "react";
import logo from "../images/favicon.png";

const Footer = () => {
  return (
    <div>
      <footer id="footer-area">
        <div class="footer-widget section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="single-widget-wrap">
                  <div class="widgei-body">
                    <div class="footer-about">
                      <img src={logo} alt="Logo" class="img-fluid" />
                      <p>
                        We are legend Lorem ipsum dolor sitmet, nsecte ipisicing
                        eit, sed do eiusmod tempor incidunt ut et do maga aliqua
                        enim ad minim.
                      </p>
                      <a href="tel:016710000000">Phone: +88-016710000000</a>{" "}
                      <a href="mailto:contact@bistalumni.net">
                        Email: contact@bistalumni.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-sm-6">
                <div class="single-widget-wrap">
                  <h4 class="widget-title">Get In Touch</h4>
                  <div class="widgei-body">
                    <p>
                      We are legend Lorem ipsum dolor sitmet, nsecte ipisicing
                      eit, sed
                    </p>
                    <div class="newsletter-form">
                      <form id="cbx-subscribe-form" role="search">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          id="subscribe"
                          required
                        />
                        <button type="submit">
                          <i class="fa fa-send"></i>
                        </button>
                      </form>
                    </div>
                    <div class="footer-social-icons">
                      <a href="/" target="_blank">
                        <i class="fa fa-facebook fcb"></i>
                      </a>
                      <a href="/" target="_blank">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="/" target="_blank">
                        <i class="fa fa-pinterest"></i>
                      </a>
                      <a href="/" target="_blank">
                        <i class="fa fa-youtube ytb"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-sm-6">
                <div class="single-widget-wrap">
                  <h4 class="widget-title">Useful Link</h4>
                  <div class="widgei-body">
                    <ul class="double-list footer-list clearfix">
                      <li>
                        <a href="/">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="/">Categories</a>
                      </li>
                      <li>
                        <a href="/">Popular Deal</a>
                      </li>
                      <li>
                        <a href="/">FAQ</a>
                      </li>
                      <li>
                        <a href="/">Support</a>
                      </li>
                      <li>
                        <a href="/">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="/">Categories</a>
                      </li>
                      <li>
                        <a href="/">Populer Deal</a>
                      </li>
                      <li>
                        <a href="/">FAQ</a>
                      </li>
                      <li>
                        <a href="/">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-lg-2 col-sm-6">
                <div class="single-widget-wrap">
                  <h4 class="widget-title">University</h4>
                  <div class="widgei-body">
                    <ul class="footer-list clearfix">
                      <li>
                        <a href="/">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="/">Categories</a>
                      </li>
                      <li>
                        <a href="/">Popular Deal</a>
                      </li>
                      <li>
                        <a href="/">FAQ</a>
                      </li>
                      <li>
                        <a href="/">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="footer-bottom-text">
                  <p>
                    © {new Date().getFullYear()} Bangladesh Institute of Science
                    &amp; Technology Alumni Association, All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <!--== Scroll Top ==--> */}
      <a href="/" class="scroll-top">
        <i class="fa fa-angle-up"></i>
      </a>
      {/* <!--== Scroll Top ==--> */}
    </div>
  );
};

export default Footer;
