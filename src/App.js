import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import GenreCarousels from "./components/GenreCarousels";
import UserAccounts from "./components/UserAccounts";
import AddProfile from "./components/AddProfile";

const accounts = [
  {
    name: "Main",
    id: "1XLSLRL",
    isKid: false,
    image: require("./assets/images/green_avatar.png"),
  },
  {
    name: "Secondary",
    id: "1XLSRR",
    isKid: true,
    image: require("./assets/images/yellow_avatar.png"),
  },
  {
    name: "Guest",
    id: "1XLSRT",
    isKid: false,
    image: require("./assets/images/green_glasses_avatar.png"),
  },
  {
    name: "Another",
    id: "1XLSLRT",
    isKid: false,
    image: require("./assets/images/orange_avatar.png"),
  },
];

function RenderUserAccounts() {
  return (
    <div className="accounts__div">
      <Link to="/">
        <img
          src={require("./assets/images/netflix_logo.png").default}
          className="netflix__img__header"
          alt="netflix__img__header"
          role="button"
        />
      </Link>
      <UserAccounts accounts={accounts} />
    </div>
  );
}

function RenderAddAccount({ submitProfile, accounts }) {
  return (
    <div className="add__profile__div">
      <Link to="/">
        <img
          src={require("./assets/images/netflix_logo.png").default}
          className="netflix__img__header"
          alt="netflix__img__header"
          role="button"
        />
      </Link>
      <AddProfile submitProfile={submitProfile} accounts={accounts} />
    </div>
  );
}

function App() {
  const [profiles, addProfile] = useState(accounts);
  const [errorMsg, setErrMsg] = useState({});

  function submitProfile(newAccount) {
    if (newAccount.name && newAccount.name.length > 3) {
      setErrMsg({});
      accounts.push(newAccount);
    } else {
      setErrMsg({
        ...errorMsg,
        errorMsg: "Name should be minimum 3 characters",
        errorType: "InvalidFormInput/n" + JSON.stringify({ name: "invalid" }),
      });
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GenreCarousels} />
        <Route exact path="/accounts" component={RenderUserAccounts} />
        <Route
          path="/accounts/create"
          render={(props) => (
            <RenderAddAccount
              submitProfile={submitProfile}
              accounts={accounts}
            />
          )}
        />
        {/* <Route path="/accounts/edit/:id" component={RenderAccountEdit} /> */}
      </Switch>
    </Router>
  );
}

export default App;
