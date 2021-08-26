import React, { useState } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import { FiGlobe } from "react-icons/fi";
import { BsCaretDownFill } from "react-icons/bs";
import "../../css/NavLanding.css";

const NavLanding = () => {
  const [isOpen, toggle] = useState(false);

  const toggleDropdown = () => {
    toggle(!isOpen);
  };

  return (
    <div className="nav-div">
      <img
        src={require("../../assets/images/netflix_logo.png").default}
        alt="netflix__img__header"
        role="button"
        className="netflix__logo"
      />
      <div className="lang__sign__in__container">
        <Dropdown
          isOpen={isOpen}
          toggle={toggleDropdown}
          size="sm"
          style={{ width: "6.5em" }}
        >
          <DropdownToggle
            style={{
              height: "2.3em",
              backgroundColor: "#111",
              width: "7em",
              fontSize: "1em",
            }}
            className="drop-toggle"
          >
            <FiGlobe style={{ marginRight: "0.2em", marginBottom: "0.1em" }} />
            English
            <BsCaretDownFill />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>English</DropdownItem>
            <DropdownItem>Spanish</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button
          size="sm"
          style={{
            width: "6em",
            height: "2.3em",
            backgroundColor: "#e50914",
            fontSize: "1em",
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default NavLanding;
