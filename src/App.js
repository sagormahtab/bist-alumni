import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import AboutUs from "./components/AboutUs/AboutUs";
import Event from "./components/Events/Event";
import Contact from "./components/ContactUs/Contact";
import Login from "./components/Login/Login";
import LifetimeMembers from "./components/Membership/LifetimeMembers";
import OurGallery from "./components/Gallery/Gallery";
import RouterScrollToTop from "./components/RouterScrollToTop";
import NoMatch from "./components/NoMatch";
import MembershipRules from "./components/Membership/MembershipRules";

function App() {
  return (
    <div>
      <Router>
        <RouterScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/gallery">
            <OurGallery />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/life-time-members">
            <LifetimeMembers />
          </Route>
          <Route path="/membership-rules">
            <MembershipRules />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
