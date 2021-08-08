import React from "react";
import "../App.css";
import "../css/UserAccounts.css";
import { FaPlus } from "react-icons/fa";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import fadeIn from "react-animations/lib/fade-in";
import Radium, { StyleRoot } from "radium";

function RenderAccounts({ accounts }) {
  if (accounts) {
    return accounts.map((account) => (
      <div className="avatar__div" key={account.id}>
        <Link to="/">
          <img
            src={account?.image.default}
            alt="account__avatar"
            className="account__avatar img-thumbnail"
            role="button"
          />
        </Link>
        <h5 className="account__name">{account.name}</h5>
      </div>
    ));
  }
}

function UserAccounts({ accounts }) {
  return (
    <StyleRoot>
      <div className="accounts__main" style={styles.fadeIn}>
        <h1 className="accounts__title">Who's watching?</h1>
        <div className="accounts__card">
          <RenderAccounts accounts={accounts} />
          <div className="avatar__div">
            <Link to="/accounts/create">
              <FaPlus
                style={{
                  backgroundColor: "#111",
                  color: "grey",
                  border: "none",
                }}
                className="account__avatar img-thumbnail add__profile__avatar"
                role="button"
              />
            </Link>
            <h5 className="account__name">Add Profile</h5>
          </div>
        </div>
        <Button
          className="manage__profile__btn"
          outline
          style={{
            color: "grey",
            backgroundColor: "transparent",
            marginBottom: "50px",
            marginTop: "200px",
          }}
        >
          MANAGE PROFILES
        </Button>
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

export default UserAccounts;
