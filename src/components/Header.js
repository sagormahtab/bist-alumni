import React, { useEffect } from "react";
import logo from "../bist-alumni-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [homeActive, setHomeActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [eventActive, setEventActive] = useState(false);
  const [galleryActive, setGalleryActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [lifeTime, setLifeTime] = useState(false);
  const location = useLocation();

  const handleActive = (setThisActive) => {
    setHomeActive(false);
    setAboutActive(false);
    setEventActive(false);
    setGalleryActive(false);
    setContactActive(false);
    setLifeTime(false);

    if (setThisActive !== null) {
      setThisActive(true);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      handleActive(setHomeActive);
    } else if (location.pathname === "/aboutus") {
      handleActive(setAboutActive);
    } else if (location.pathname === "/event") {
      handleActive(setEventActive);
    } else if (location.pathname === "/gallery") {
      handleActive(setGalleryActive);
    } else if (location.pathname === "/contact") {
      handleActive(setContactActive);
    } else if (location.pathname === "/life-time-members") {
      handleActive(setLifeTime);
    } else if (location.pathname === "/membership-rules") {
      handleActive(setLifeTime);
    } else {
      handleActive(null);
    }
  }, [location]);

  return (
    <header id="header-area">
      <div className="preheader-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-7 col-7">
              <div className="preheader-left">
                <a href="mailto:contact@bistalumni.net">
                  <strong>Email:</strong> contact@bistalumni.net
                </a>
                <a href="tel:016710000000">
                  <strong>Hotline:</strong> 016710000000
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-sm-5 col-5 text-right">
              <div className="preheader-right">
                <Link
                  title="Login"
                  className="btn-auth btn-auth-rev text-white"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  title="Register"
                  className="btn-auth btn-auth text-white"
                  to="/register"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom-area" id="fixheader">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="main-menu navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                  <img src={logo} alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#menucontent"
                  aria-controls="menucontent"
                  aria-expanded="false"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menucontent">
                  <ul className="navbar-nav ml-auto">
                    <li className={`nav-item ${homeActive ? "active" : ""}`}>
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className={`nav-item ${aboutActive ? "active" : ""}`}>
                      <Link className="nav-link" to="/aboutus">
                        About
                      </Link>
                    </li>
                    <li className={`nav-item ${eventActive ? "active" : ""}`}>
                      <Link className="nav-link" to="/event">
                        Event
                      </Link>
                    </li>
                    <li className={`nav-item ${galleryActive ? "active" : ""}`}>
                      <Link className="nav-link" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li
                      className={`nav-item dropdown ${
                        lifeTime ? "active" : ""
                      }`}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        data-toggle="dropdown"
                        role="button"
                      >
                        Lifetime-Member
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link className="nav-link" to="/membership-rules">
                            Membership Rules
                          </Link>
                        </li>
                        <li className={`nav-item`}>
                          <Link className="nav-link" to="/life-time-members">
                            Members List
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={`nav-item ${contactActive ? "active" : ""}`}>
                      <Link className="nav-link" to="/contact">
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
