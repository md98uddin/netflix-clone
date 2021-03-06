import React, { useState } from "react";
import "../css/AddProfile.css";
import { Button } from "reactstrap";
import fadeIn from "react-animations/lib/fade-in";
import Radium, { StyleRoot } from "radium";
import { Link, useHistory } from "react-router-dom";

function AddProfile({ submitProfile, accounts }) {
  const [profile, setProfile] = useState({
    name: null,
    isKid: false,
    image: require("../assets/images/orange_avatar.png"),
    id: "RLSXA" + Math.random() + 10,
  });

  let history = useHistory();

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
            className="account__avatar__create img-thumbnail"
            role="button"
          />
          <input
            type="text"
            className="input"
            placeholder="Name"
            name="name"
            onChange={(event) =>
              setProfile({
                ...profile,
                [event.target.name]: event.target.value,
              })
            }
          />
          <input
            type="checkbox"
            className="kids__check"
            name="isKid"
            onChange={(event) =>
              setProfile({ ...profile, isKid: !profile.isKid })
            }
          />
          <label className="kids__label">Kid?</label>
        </div>
        <hr className="hr-rule" />
        <div className="button__group">
          <Button
            className="manage__profile__btn btn"
            outline={false}
            style={{
              backgroundColor: "#e50914",
              color: "white",
              borderRadius: 0,
            }}
            onClick={() => {
              submitProfile(profile);
              history.push("/accounts");
            }}
          >
            CONTINUE
          </Button>
          <Link to="/accounts">
            <Button
              className="manage__profile__btn btn"
              outline
              style={{
                color: "grey",
                borderRadius: 0,
              }}
            >
              CANCEL
            </Button>
          </Link>
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
