import React from "react";
import logo from "../bist-alumni-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [homeActive, setHomeActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [eventActive, setEventActive] = useState(false);
  const [galleryActive, setGalleryActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const handleActive = (setThisActive) => {
    setHomeActive(false);
    setAboutActive(false);
    setEventActive(false);
    setGalleryActive(false);
    setContactActive(false);

    setThisActive(true);
  };

  return (
    <header id="header-area">
      <div class="preheader-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-sm-7 col-7">
              <div class="preheader-left">
                <a href="mailto:contact@bistalumni.net">
                  <strong>Email:</strong> contact@bistalumni.net
                </a>
                <a href="tel:016710000000">
                  <strong>Hotline:</strong> 016710000000
                </a>
              </div>
            </div>

            <div class="col-lg-6 col-sm-5 col-5 text-right">
              <div class="preheader-right">
                <Link title="Login" class="btn-auth btn-auth-rev" to="/login">
                  Login
                </Link>
                <Link title="Register" class="btn-auth btn-auth" to="/register">
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="header-bottom-area" id="fixheader">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav class="main-menu navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/">
                  <img src={logo} alt="Logo" />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#menucontent"
                  aria-controls="menucontent"
                  aria-expanded="false"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="menucontent">
                  <ul class="navbar-nav ml-auto">
                    <li class={`nav-item ${homeActive ? "active" : ""}`}>
                      <a class="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li
                      class={`nav-item ${aboutActive ? "active" : ""}`}
                      onClick={() => handleActive(setAboutActive)}
                    >
                      <Link class="nav-link" to="/aboutus">
                        About
                      </Link>
                    </li>
                    <li
                      class={`nav-item ${eventActive ? "active" : ""}`}
                      onClick={() => handleActive(setEventActive)}
                    >
                      <Link class="nav-link" to="/event">
                        Event
                      </Link>
                    </li>
                    <li
                      class={`nav-item ${galleryActive ? "active" : ""}`}
                      onClick={() => handleActive(setGalleryActive)}
                    >
                      <Link class="nav-link" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="/"
                        data-toggle="dropdown"
                        role="button"
                      >
                        Lifetime-Member
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a class="nav-link" href="/">
                            Membership Rules
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/">
                            Members List
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class={`nav-item ${contactActive ? "active" : ""}`}
                      onClick={() => handleActive(setContactActive)}
                    >
                      <Link class="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
