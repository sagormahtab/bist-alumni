import React from "react";
import regImg from '../../images/Registration (1).jpg'
import { Link } from "react-router-dom";

const UpcomingEvent = () => {
  return (
    <section id="upcoming-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="upcoming-event-wrap">
              <div class="up-event-titile">
                <h3>Upcoming event</h3>
              </div>
              <div class="upcoming-event-content owl-carousel">
                <div class="single-upcoming-event">
                  <div class="row">
                    <div class="col-lg-5">
                      <div class="up-event-thumb">
                        <img
                          src={regImg}
                          class="img-fluid"
                          alt="Upcoming Event"
                        />
                        <h4 class="up-event-date">It’s 27 February 2019</h4>
                      </div>
                    </div>

                    <div class="col-lg-7">
                      <div class="display-table">
                        <div class="display-table-cell">
                          <div class="up-event-text">
                            <div class="event-countdown">
                              <div
                                class="event-countdown-counter"
                                data-date="2020/9/10"
                              ></div>
                              <p>Remaining</p>
                            </div>
                            <h3>
                              <a href="single-event.html">
                                BIST Alumni registration is going on!
                              </a>
                            </h3>
                            <p>
                              Hello everybody Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim and minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquipv ex
                              ea.
                            </p>
                            <Link
                              to="/register"
                              class="btn btn-brand btn-brand-dark"
                            >
                              join with us
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single-upcoming-event">
                  <div class="row">
                    <div class="col-lg-5">
                      <div class="up-event-thumb">
                        <img
                          src={regImg}
                          class="img-fluid"
                          alt="Upcoming Event"
                        />
                        <h4 class="up-event-date">It’s 27 February 2019</h4>
                      </div>
                    </div>

                    <div class="col-lg-7">
                      <div class="display-table">
                        <div class="display-table-cell">
                          <div class="up-event-text">
                            <div class="event-countdown">
                              <div
                                class="event-countdown-counter"
                                data-date="2018/9/10"
                              ></div>
                              <p>Remaining</p>
                            </div>
                            <h3>
                              <a href="single-event.html">
                                We are going to arrange a get together!
                              </a>
                            </h3>
                            <p>
                              Hello everybody Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim and minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquipv ex
                              ea.
                            </p>
                            <a
                              href="single-event.html"
                              class="btn btn-brand btn-brand-dark"
                            >
                              join with us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single-upcoming-event">
                  <div class="row">
                    <div class="col-lg-5">
                      <div class="up-event-thumb">
                        <img
                          src={regImg}
                          class="img-fluid"
                          alt="Upcoming Event"
                        />
                        <h4 class="up-event-date">It’s 27 February 2019</h4>
                      </div>
                    </div>

                    <div class="col-lg-7">
                      <div class="display-table">
                        <div class="display-table-cell">
                          <div class="up-event-text">
                            <div class="event-countdown">
                              <div
                                class="event-countdown-counter"
                                data-date="2018/9/10"
                              ></div>
                              <p>Remaining</p>
                            </div>
                            <h3>
                              <a href="single-event.html">
                                We are going to arrange a get together!
                              </a>
                            </h3>
                            <p>
                              Hello everybody Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim and minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquipv ex
                              ea.
                            </p>
                            <a
                              href="single-event.html"
                              class="btn btn-brand btn-brand-dark"
                            >
                              join with us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
