import React from "react";
import userImg from '../../images/user.svg';
import pictureImg from '../../images/picture.svg';
import eventImg from '../../images/event.svg';
import medalImg from '../../images/medal.svg';

const FunFact = () => {
  return (
    <section id="funfact-area">
      <div class="container-fluid">
        <div class="row text-center">
          <div class="col-lg-3 col-sm-6">
            <div class="single-funfact-wrap">
              <div class="funfact-icon">
                <img src={userImg} alt="Funfact" />
              </div>
              <div class="funfact-info">
                <h5 class="funfact-count">4025</h5>
                <p>Members</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="single-funfact-wrap">
              <div class="funfact-icon">
                <img src={pictureImg} alt="Funfact" />
              </div>
              <div class="funfact-info">
                <h5 class="funfact-count">8725</h5>
                <p>Photos</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="single-funfact-wrap">
              <div class="funfact-icon">
                <img src={eventImg} alt="Funfact" />
              </div>
              <div class="funfact-info">
                <h5>
                  <span class="funfact-count">231</span>+
                </h5>
                <p>Events</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="single-funfact-wrap">
              <div class="funfact-icon">
                <img src={medalImg} alt="Funfact" />
              </div>
              <div class="funfact-info">
                <h5>
                  <span class="funfact-count">32</span>+
                </h5>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
