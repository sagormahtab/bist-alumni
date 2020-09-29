import React from "react";
import Select from "react-select";
import SingleEvent from "./SingleEvent";

const yearOptions = [
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
];
const placeOptions = [
  { value: "Kakrail", label: "Kakrail" },
  { value: "Khilgaon", label: "Khilgaon" },
  { value: "Shantinagar", label: "Shantinagar" },
];
const typeOptions = [
  { value: "Meetup", label: "Meetup" },
  { value: "Seminar", label: "Seminar" },
  { value: "Get Together", label: "Get Together" },
];

const eventsInfo = [
  {
    img:
      "https://i.ibb.co/4J50Kc3/118622494-1512414892265356-173808580789745789-n.jpg",
  },
  {
    img:
      "https://i.ibb.co/2WYcf0K/119465444-646870709298835-7769728070591038940-n.jpg",
  },
  {
    img:
      "https://i.ibb.co/4J50Kc3/118622494-1512414892265356-173808580789745789-n.jpg",
  },
  {
    img:
      "https://i.ibb.co/2WYcf0K/119465444-646870709298835-7769728070591038940-n.jpg",
  },
];

const Event = () => {
  return (
    <div>
      <section id="page-title-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <div class="page-title-content">
                <h1 class="h2">All Event Archive</h1>
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
        <div class="event-page-content-wrap section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="event-filter-area">
                  <form class="form-inline">
                    <Select
                      options={yearOptions}
                      placeholder="Year"
                      isSearchable={false}
                    />

                    <Select
                      options={placeOptions}
                      placeholder="Place"
                      isSearchable={false}
                    />

                    <Select
                      options={typeOptions}
                      placeholder="Type"
                      isSearchable={false}
                    />

                    <button class="btn btn-brand">Filter</button>
                  </form>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="all-event-list">
                  {eventsInfo.map((el, i) => (
                    <SingleEvent img={el.img} num={i + 1} key={i} />
                  ))}
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="pagination-wrap text-center">
                  <nav>
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="/">
                          <i class="fa fa-angle-left"></i>
                        </a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="/">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="/">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="/">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="/">
                          ...
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="/">
                          50
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="/">
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
