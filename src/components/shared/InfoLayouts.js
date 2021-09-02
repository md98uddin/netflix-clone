import React from "react";
import "../../css/InfoLayout.css";
import "../../css/NavLanding.css";
import FaqAccordion from "./FaqAccordion";
import { Button } from "reactstrap";
import { AiOutlineRight } from "react-icons/ai";
import Footer from "./Footer";

const InfoLayout = () => {
  return (
    <div className="wrapper">
      <div className="hr"></div>
      <div className="layout enjoy">
        <div className="split">
          <h1 className="enjoy_header">Enjoy on your TV.</h1>
          <p className="enjoy_caption">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="split">
          <img
            src={require("../../assets/images/grid-1-image.png").default}
            className="enjoy_image"
            alt="grid 1"
          />
        </div>
      </div>
      <div className="hr"></div>
      <div className="layout download">
        <div className="split">
          <img
            src={require("../../assets/images/grid-2-image.jpg").default}
            className="enjoy_image"
            alt="grid 2"
          />
        </div>
        <div className="split">
          <h1 className="download_header">
            Download your shows to watch offline.
          </h1>
          <p className="download_caption">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
      <div className="hr"></div>
      <div className="layout watch">
        <div className="split">
          <h1 className="watch_header">Watch everywhere.</h1>
          <p className="watch_caption">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.{" "}
          </p>
        </div>
        <div className="split">
          <img
            src={require("../../assets/images/grid-3-image.png").default}
            className="enjoy_image"
            alt="grid 3"
          />
        </div>
      </div>
      <div className="hr"></div>
      <div className="layout create">
        <div className="split">
          <img
            src={require("../../assets/images/grid-4-image.png").default}
            className="enjoy_image"
            alt="grid 4"
          />
        </div>
        <div className="split">
          <h1 className="create_header">Create profiles for kids.</h1>
          <p className="create_caption">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
      <div className="hr"></div>
      <div className="layout faq">
        <h1 className="faq_header">Frequently Asked Questions</h1>
        <FaqAccordion />
        <h6
          className="header-caption text-white"
          style={{
            marginTop: "2em",
            textAlign: "center",
          }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </h6>
        <div className="email-container">
          <input
            type="text"
            className="email-input"
            placeholder="Email address"
          />
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
      </div>
      <div className="hr"></div>
      <Footer />
    </div>
  );
};

export default InfoLayout;
