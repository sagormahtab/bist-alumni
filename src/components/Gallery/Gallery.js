import React from "react";
import joyeetaSeminar from '../../images/probable-5.jpg';
import mohasthangarImg from '../../images/probable-7.jpg';
import bistCampusOld from '../../images/probable-9.jpg';
import withKantaMaam from '../../images/probable-12.jpg';
import falgunImg from '../../images/probable-23.jpg';
import pujaImg from '../../images/probable-26.jpg';
import zoomIcon from '../../images/zoom-icon.png';

const Gallery = () => {
  return (
    <section id="gallery-area" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title">
              <h2>Our gallery</h2>
            </div>
          </div>
        </div>

        <div class="gallery-content-wrapper">
          <div class="row">
            <div class="col-lg-12">
              <div class="gallery-menu text-center">
                <span class="active" data-filter="*">
                  All
                </span>
                <span data-filter=".old">Old Memories</span>
                <span data-filter=".event">Event</span>
                <span data-filter=".pic">Our Picnic</span>
                <span class="d-none d-sm-inline-block" data-filter=".recent">
                  Recent
                </span>
              </div>

              <div class="row gallery-gird">
                <div class="col-lg-3  col-sm-6 old event">
                  <div class="single-gallery-item gallery-bg-1">
                    <div class="gallery-hvr-wrap">
                      <div class="gallery-hvr-text">
                        <h4>University Campus</h4>
                        <p class="gallery-event-date">28 Oct, 2018</p>
                      </div>
                      <a
                        href={withKantaMaam}
                        class="btn-zoom image-popup"
                      >
                        <img src={zoomIcon} alt="a" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3  col-sm-6 old event old">
                  <div class="single-gallery-item video gallery-bg-2">
                    <a
                      href="https://www.youtube.com/watch?v=iEA5A3lPyZQ"
                      class="btn btn-video-play video-popup"
                    >
                      <i class="fa fa-play"></i>
                    </a>
                  </div>
                </div>

                <div class="col-lg-3  col-sm-6 recent event">
                  <div class="single-gallery-item gallery-bg-3">
                    <div class="gallery-hvr-wrap">
                      <div class="gallery-hvr-text">
                        <h4>University Campus</h4>
                        <p class="gallery-event-date">28 Oct, 2018</p>
                      </div>
                      <a
                        href={pujaImg}
                        class="btn-zoom image-popup"
                      >
                        <img src={zoomIcon} alt="a" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3  col-sm-6 old pic">
                  <div class="single-gallery-item gallery-bg-4">
                    <div class="gallery-hvr-wrap">
                      <div class="gallery-hvr-text">
                        <h4>University Campus</h4>
                        <p class="gallery-event-date">28 Oct, 2018</p>
                      </div>
                      <a
                        href={mohasthangarImg}
                        class="btn-zoom image-popup"
                      >
                        <img src={zoomIcon} alt="a" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3  col-sm-6 recent event">
                  <div class="single-gallery-item gallery-bg-5">
                    <div class="gallery-hvr-wrap">
                      <div class="gallery-hvr-text">
                        <h4>University Campus</h4>
                        <p class="gallery-event-date">28 Oct, 2018</p>
                      </div>
                      <a
                        href={joyeetaSeminar}
                        class="btn-zoom image-popup"
                      >
                        <img src={zoomIcon} alt="a" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3  col-sm-6 recent event">
                  <div class="single-gallery-item gallery-bg-6">
                    <div class="gallery-hvr-wrap">
                      <div class="gallery-hvr-text">
                        <h4>University Campus</h4>
                        <p class="gallery-event-date">28 Oct, 2018</p>
                      </div>
                      <a
                        href={falgunImg}
                        class="btn-zoom image-popup"
                      >
                        <img src={zoomIcon} alt="a" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3  col-sm-6 event old">
                  <div class="single-gallery-item video gallery-bg-7">
                    <a
                      href="https://www.youtube.com/watch?v=S7hVZb-Heao"
                      class="btn btn-video-play video-popup"
                    >
                      <i class="fa fa-play"></i>
                    </a>
                  </div>
                </div>

                <div class="col-lg-3  col-sm-6 old pic">
                  <div class="single-gallery-item gallery-bg-8">
                    <div class="gallery-hvr-wrap">
                      <div class="gallery-hvr-text">
                        <h4>University Cumpus</h4>
                        <p class="gallery-event-date">28 Oct, 2018</p>
                      </div>
                      <a
                        href={bistCampusOld}
                        class="btn-zoom image-popup"
                      >
                        <img src={zoomIcon} alt="a" />
                      </a>
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

export default Gallery;
