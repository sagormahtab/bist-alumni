import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Register.css";
import PersonalInfo from "./PersonalInfo";
import EduQualific from "./EduQualific";
import MastersDeg from "./MastersDeg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontSize: "2rem !important",
  },
  button: {
    marginRight: theme.spacing(1),
    fontSize: "1.25rem",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  labelStyle: {
    fontSize: "2rem !important",
  },
}));

function getSteps() {
  return [
    "Personal Information",
    "Educational Qualifications",
    "Master's Degree",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <EduQualific />;
    case 2:
      return <MastersDeg />;
    default:
      return "Unknown step";
  }
}

const Register = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      {/* <!--== Page Title Area Start ==--> */}
      <section id="page-title-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <div class="page-title-content">
                <h1 class="h2">Membership Form</h1>
                <p>
                  Alumni Needs enables you to harness the power of your alumni
                  network. Whatever may be the need
                </p>
                <a
                  href="#page-content-wrap"
                  class="btn btn-brand smooth-scroll"
                >
                  Let's See
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--== Page Title Area End ==--> */}

      {/* <!--== Register Page Content Start ==--> */}
      <section id="page-content-wrap">
        <div class="register-page-wrapper section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="register-page-inner">
                  <div class="col-lg-10 m-auto">
                    <div class="register-form-content">
                      <div class="row">
                        {/* <!-- Regsiter Form Area Start --> */}
                        <div class="col-lg-12 ml-auto">
                          <div class="register-form-wrap">
                            <h3>
                              Application Form for Inclusion as a life time
                              member
                            </h3>
                            <div class="register-form">
                              <form action="index.html">
                                <div className={classes.root}>
                                  <Stepper
                                    activeStep={activeStep}
                                    alternativeLabel
                                  >
                                    {steps.map((label, index) => {
                                      const stepProps = {};
                                      const labelProps = {};
                                      return (
                                        <Step key={label} {...stepProps}>
                                          <StepLabel
                                            className={classes.labelStyle}
                                            {...labelProps}
                                          >
                                            {label}
                                          </StepLabel>
                                        </Step>
                                      );
                                    })}
                                  </Stepper>
                                  <div>
                                    {activeStep === steps.length ? (
                                      <div>
                                        <Typography
                                          className={classes.instructions}
                                        >
                                          All steps completed - you&apos;re
                                          finished
                                        </Typography>
                                        <Button
                                          onClick={handleReset}
                                          className={classes.button}
                                        >
                                          Reset
                                        </Button>
                                      </div>
                                    ) : (
                                      <div>
                                        <Typography
                                          className={classes.instructions}
                                        >
                                          {getStepContent(activeStep)}
                                        </Typography>
                                        <div>
                                          <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                          >
                                            Back
                                          </Button>

                                          <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                          >
                                            {activeStep === steps.length - 1
                                              ? "Finish"
                                              : "Next"}
                                          </Button>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Regsiter Form Area End --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--== Register Page Content End ==--></div> */}
    </div>
  );
};

export default Register;
