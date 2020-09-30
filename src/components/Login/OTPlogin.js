import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OTPlogin = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  const handleChange = (otp) => {
    setOtp(otp);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setOtp("");
  };

  const handleResend = (e) => {
    e.preventDefault();
    setTimer(60);
    setOtp("");
    toast.info("An OTP has been sent to your email!", { autoClose: 5000 });
  };

  const inputStyle = {
    width: "5rem",
    height: "5rem",
    margin: "0 1.4rem",
    fontSize: "2rem",
    borderRadius: "4px",
    border: "1px solid rgba(0,0,0,0.3)",
  };

  useEffect(() => {
    toast.info("An OTP has been sent to your email!", { autoClose: 5000 });
  }, []);

  useEffect(() => {
    const timervar = setTimeout(() => {
      if (timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearTimeout(timervar);
  }, [timer]);

  return (
    <div>
      <section id="page-title-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <div class="page-title-content">
                <h1 class="h2">Login OTP</h1>
                <p>
                  Alumni Needs enables you to harness the power of your alumni
                  network. Whatever may be the need
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />

      <section id="page-content-wrap">
        <div class="login-otp-page-content-warp section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div
                  class="alert alert-secondary text-center mb-5"
                  role="alert"
                >
                  Check your Email to get the OTP!
                </div>
                <form>
                  <h5 className="text-center">Enter Verification Code</h5>
                  <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={4}
                    separator={<span>-</span>}
                    inputStyle={inputStyle}
                    containerStyle="container-style"
                    shouldAutoFocus={true}
                    isInputNum={true}
                  />

                  <div className="timer-area d-flex justify-content-center align-items-center">
                    {timer > 0 ? (
                      <p style={{ margin: "0" }}>{timer}s remaining</p>
                    ) : (
                      <p style={{ margin: "0" }}>OTP is expired!</p>
                    )}
                    <button
                      className="btn btn-brand clear-btn ml-5"
                      onClick={handleResend}
                    >
                      Resend
                    </button>
                  </div>

                  <div className="btn-row">
                    <button
                      className="btn btn-brand mr-5 clear-btn"
                      onClick={handleReset}
                    >
                      Clear
                    </button>
                    <button
                      className="btn btn-brand"
                      type="submit"
                      disabled={otp.length < 4 || timer < 1 ? true : false}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OTPlogin;
