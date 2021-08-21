import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FaHamburger, FaSearch, FaGift, FaBell } from "react-icons/fa";
import "../../css/NavLoggedIn.css";

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
        <div className="nav__list__container lg__screen">
          <ul className="nav__list">
            {["Home", "TV Shows", "Movies", "New & Popular", "My List"].map(
              (category) => (
                <Link
                  to={
                    category === "Home"
                      ? "/"
                      : `/view/${category.toLowerCase()}`
                  }
                  className="list__link"
                >
                  <li key={category} className="list-center" role="button">
                    {category}
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>
        <div className="nav__list__right lg__screen">
          <ul className="nav__list">
            <li role="button">
              <FaSearch />
            </li>
            <li role="button">DVD</li>
            <li role="button">
              <FaGift />
            </li>
            <li role="button">
              <FaBell />
            </li>
            <img
              src={require("../../assets/images/orange_avatar.png").default}
              alt="account picture"
              className="account__img"
            />
          </ul>
        </div>
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
                      category === "Home"
                        ? "/"
                        : `/view/${category.toLowerCase()}`
                    }
                    className="list__link"
                  >
                    <li key={category} className="list-left" role="button">
                      {category}
                    </li>
                  </Link>
                )
              )}
              <DropdownItem header>Account</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default NavLoggedIn;
