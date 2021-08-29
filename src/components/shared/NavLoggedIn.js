import React, { useState } from "react";
import "../../css/NavLoggedIn.css";
import NavSmallScreen from "./NavSmallScreen";
import NavLargeScreen from "./NavLargeScreen";

const NavLoggedIn = () => {
  const [isOpen, setToggle] = useState(false);

  const toggle = () => setToggle((prevState) => !prevState);
  return (
    <>
      <div className="nav__container">
        <img
          src={require("../../assets/images/netflix_logo.png").default}
          alt="netflix__img__header"
          role="button"
        />
        <NavLargeScreen />
        <NavSmallScreen isOpen={isOpen} toggle={toggle} />
      </div>
    </>
  );
};

export default NavLoggedIn;
