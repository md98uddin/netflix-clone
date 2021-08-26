import React from "react";
import { Button } from "reactstrap";

const LandingHeader = () => {
  return (
    <div className="header-container">
      <h1 className="header-title text-white">
        Unlimted movies, TV shows, and more.
      </h1>
      <h4 className="header-subtitle text-white">
        Watch anywhere, Cancel anytime.
      </h4>
      <h6 className="header-caption text-white">
        Read to watch? Enter your email to create or restart your membership.
      </h6>
      <input type="text" className="email-input" placeholder="Email address" />
      <Button>Get Started</Button>
    </div>
  );
};

export default LandingHeader;
