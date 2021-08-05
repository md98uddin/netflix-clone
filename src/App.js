import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import GenreCarousels from "./components/GenreCarousels";
import UserAccounts from "./components/UserAccounts";
import AddProfile from "./components/AddProfile";

const accounts = [
  {
    name: "Main",
    id: "1XLSLRL",
    image: require("./assets/images/wolf_avatar.jfif"),
  },
  {
    name: "Secondary",
    id: "1XLSRR",
    image: require("./assets/images/cat_avatar.jfif"),
  },
  {
    name: "Guest",
    id: "1XLSRT",
    image: require("./assets/images/panda_avatar.jfif"),
  },
  {
    name: "Another",
    id: "1XLSLRT",
    image: require("./assets/images/wolf_avatar.jfif"),
  },
];

function RenderUserAccounts() {
  return (
    <div className="accounts__div">
      <img
        src={require("./assets/images/netflix_logo.png").default}
        className="netflix__img__header"
      />
      <UserAccounts accounts={accounts} />
    </div>
  );
}

function RenderAddAccount() {
  return (
    <div className="add__profile__div">
      <AddProfile />
    </div>
  );
}

function App() {
  const [profiles, addProfile] = useState(accounts);

  function addAccount(account) {
    addProfile(accounts.push(account));
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GenreCarousels} />
        <Route exact path="/accounts" component={RenderUserAccounts} />
        <Route path="/accounts/create" component={RenderAddAccount} />
      </Switch>
    </Router>
  );
}

export default App;
