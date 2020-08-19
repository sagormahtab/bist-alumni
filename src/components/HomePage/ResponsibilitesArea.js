import React from "react";
import scholImg from '../../images/01.png';
import helpImg from '../../images/02.png';
import commImg from '../../images/04.png';
import uniImg from '../../images/03.png';

const ResponsibilitesArea = () => {
  return (
    <section id="responsibility-area" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title">
              <h2>Our Responsibility</h2>
            </div>
          </div>
        </div>

        <div class="row text-center text-sm-left">
          <div class="col-lg-3 col-sm-6">
            <div class="single-responsibility">
              <img
                src={scholImg}
                alt="Responsibility"
              />
              <h4>Scholarship</h4>
              <p>
                De create building thinking about your requirment and latest
                treand on our marketplace area
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="single-responsibility">
              <img
                src={helpImg}
                alt="Responsibility"
              />
              <h4>Help Current Students</h4>
              <p>
                De create building thinking about your requirment and latest
                treand on our marketplace area
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="single-responsibility">
              <img
                src={uniImg}
                alt="Responsibility"
              />
              <h4>Help Our University</h4>
              <p>
                De create building thinking about your requirment and latest
                treand on our marketplace area
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="single-responsibility">
              <img
                src={commImg}
                alt="Responsibility"
              />
              <h4>Build Our Community</h4>
              <p>
                De create building thinking about your requirment and latest
                treand on our marketplace area
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibilitesArea;
