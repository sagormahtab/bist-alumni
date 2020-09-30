import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/otp-login");
  };

  return (
    <div>
      <section id="page-title-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <div class="page-title-content">
                <h1 class="h2">Log In</h1>
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
        <div class="register-page-wrapper section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="register-page-inner">
                  <div class="col-lg-10 m-auto">
                    <div class="register-form-content">
                      <div class="row">
                        {/* <!-- Signin Area Content Start --> */}
                        <div class="col-lg-12 col-md-6 text-center">
                          <div class="display-table">
                            <div class="display-table-cell">
                              <div class="signin-area-wrap">
                                <h4>Already a Member?</h4>
                                <div class="sign-form">
                                  <form onSubmit={handleSubmit}>
                                    <input
                                      type="text"
                                      placeholder="Enter your ID"
                                    />
                                    <input
                                      type="password"
                                      placeholder="Password"
                                    />
                                    <button type="submit" class="btn btn-reg">
                                      Login
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Signin Area Content End --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
