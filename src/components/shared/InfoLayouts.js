import React from "react";
import "../../css/InfoLayout.css";

const InfoLayout = () => {
  return (
    <div className="wrapper">
      <div className="hr"></div>
      <div className="layout enjoy">
        <div className="split">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="split">
          <img src={require("../../assets/images/grid-1-image.png").default} />
        </div>
      </div>
      <div className="hr"></div>
      <div className="layout download">
        <div className="split"></div>
        <div className="split"></div>
      </div>
      <div className="layout watch">
        <div className="split"></div>
        <div className="split"></div>
      </div>
      <div className="layout create">
        <div className="split"></div>
        <div className="split"></div>
      </div>
    </div>
  );
};

export default InfoLayout;
