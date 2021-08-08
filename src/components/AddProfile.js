import React from "react";
import "../css/AddProfile.css";
import { Button, Input } from "reactstrap";
import fadeIn from "react-animations/lib/fade-in";
import Radium, { StyleRoot } from "radium";

function AddProfile() {
  return (
    <StyleRoot>
      <div className="profile__main" style={styles.fadeIn}>
        <h1 className="add__profile__title">Add Profile</h1>
        <div className="subtitle__div">
          <h5 className="add__profile__subtitle">
            Add a profile for another person watching Netflix.
          </h5>
        </div>
        <hr className="hr-rule" />
        <div className="input__div">
          <img
            src={require("../assets/images/green_avatar.png").default}
            alt="account__avatar"
            className="account__avatar img-thumbnail"
            role="button"
          />
          <input type="text" className="input" />
          <input type="checkbox" />
        </div>
        <hr className="hr-rule" />
        <div className="button__group">
          <Button className="manage__profile__btn btn" outline>
            CONTINUE
          </Button>
          <Button className="manage__profile__btn btn" outline>
            CANCEL
          </Button>
        </div>
      </div>
    </StyleRoot>
  );
}

const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

export default AddProfile;
