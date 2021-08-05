import React from "react";
import "../App.css";
import "../css/UserAccounts.css";
import { Container, Row, Col, Button } from "reactstrap";

function RenderAccounts({ accounts }) {
  if (accounts) {
    return accounts.map((account) => (
      <div className="avatar__div" key={account.id}>
        <img
          src={account?.image.default}
          alt="account__avatar"
          className="account__avatar img-thumbnail"
          role="button"
        />
        <h5 className="account__name">{account.name}</h5>
      </div>
    ));
  }
}

function UserAccounts({ accounts }) {
  return (
    <div className="accounts__main">
      <h1 className="accounts__title">Who's watching?</h1>
      <div className="accounts__card">
        <RenderAccounts accounts={accounts} />
        <div className="avatar__div">
          <img
            src={require("../assets/images/add_sign.png").default}
            alt="account__avatar"
            className="account__avatar img-thumbnail"
          />
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
  );
}

export default UserAccounts;
