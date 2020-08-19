import React from "react";
import logo from '../bist-alumni-logo.png';
import { Link } from "react-router-dom";

const Header = () => {
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
                <Link
                  title="Login"
                  class="btn-auth btn-auth-rev"
                  to="/register"
                >
                  Login
                </Link>
                <Link
                  title="Register"
                  class="btn-auth btn-auth"
                  to="/register"
                >
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
                    <li class="nav-item active">
                      <a class="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/">
                        Event
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/">
                        Gallery
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="/"
                        data-toggle="dropdown"
                        role="button"
                      >
                        Blog
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a class="nav-link" href="/">
                            Blog List
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/">
                            Single Blog Right Sidebar
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="/"
                          >
                            Single Blog left Sidebar
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="/"
                          >
                            Single Blog No Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="/"
                        data-toggle="dropdown"
                        role="button"
                      >
                        Pages
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a
                            class="nav-link dropdown-toggle"
                            href="/"
                            role="button"
                          >
                            Gallery
                          </a>
                          <ul class="dropdown-menu">
                            <li class="nav-item">
                              <a class="nav-link" href="/">
                                Gallery
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/">
                                Single Album
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/">
                            Committee
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/">
                            Directory
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/register">
                            Register
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/">
                            Career
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/">
                            Off Canvas Menu
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/">
                            Typography
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/">
                        Contact
                      </a>
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
