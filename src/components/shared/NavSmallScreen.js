import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../css/NavLoggedIn.css";

const NavSmallScreen = ({ isOpen, toggle }) => {
  return (
    <div className="nav__dropdown__container sm__screen">
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle style={{ backgroundColor: "black" }}>
          <FaHamburger
            style={{
              backgroundColor: "black",
              color: "grey",
              border: "none",
            }}
            className=""
            role="button"
          />
        </DropdownToggle>
        <DropdownMenu
          style={{
            color: "white",
            backgroundColor: "rgb(10,10,10, 0.9)",
            marginTop: "0.6em",
          }}
        >
          <DropdownItem header>Discover</DropdownItem>
          {["Home", "TV Shows", "Movies", "New & Popular", "My List"].map(
            (category) => (
              <Link
                to={
                  category === "Home" ? "/" : `/view/${category.toLowerCase()}`
                }
                className="list__link"
                key={category}
              >
                <li className="list-left" role="button">
                  {category}
                </li>
              </Link>
            )
          )}
          <DropdownItem header>Account</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavSmallScreen;
