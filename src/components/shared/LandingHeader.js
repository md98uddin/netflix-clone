import React from "react";
import { Button } from "reactstrap";
import { AiOutlineRight } from "react-icons/ai";

const LandingHeader = () => {
  return (
    <div className="header-container">
      <h1 className="header-title text-white">
        Unlimited movies, TV shows, and more.
      </h1>
      <h4 className="header-subtitle text-white">
        Watch anywhere, Cancel anytime.
      </h4>
      <h6 className="header-caption text-white">
        Ready to watch? Enter your email to create or restart your membership.
      </h6>
      <input type="text" className="email-input" placeholder="Email address" />
      <Button className="submit__email__btn">
        <p className="submit__email__p">
          {" "}
          Get Started
          <AiOutlineRight
            style={{ marginLeft: "0.25em", borderWidth: "1px" }}
          />
        </p>
      </Button>
    </div>
  );
};

export default LandingHeader;
