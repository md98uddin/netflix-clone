import React from "react";
import NavLanding from "./shared/NavLanding";
import "../css/NavLanding.css";
import LandingHeader from "./shared/LandingHeader";

const LandingPage = () => {
  return (
    <div className="wrapper__landing">
      <div className="landing__page__container">
        <NavLanding />
        <LandingHeader />
      </div>
    </div>
  );
};

export default LandingPage;
