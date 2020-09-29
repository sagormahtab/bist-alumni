import React from "react";

const SingleEvent = (props) => {
  const { img, num } = props;
  return (
    <div
      className={`single-upcoming-event ${num % 2 === 0 ? "bg-orange" : ""}`}
    >
      <div class="row">
        <div class="col-lg-5">
          <div class="up-event-thumb">
            <img src={img} class="img-fluid" alt="Upcoming Event" />
            <h4 class="up-event-date">It’s 04 September 2020</h4>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="display-table">
            <div class="display-table-cell">
              <div class="up-event-text">
                <h3>
                  <a href="single-event.html">
                    We are going to arrange a get together!
                  </a>
                </h3>
                <p>
                  Hello everybody Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim and minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquipv ex ea.
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
  );
};

export default SingleEvent;
