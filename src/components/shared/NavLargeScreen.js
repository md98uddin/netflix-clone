import React, { useState, useRef } from "react";
import { FaSearch, FaGift, FaBell } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../../css/NavLoggedIn.css";

const NavLargeScreen = () => {
  const [active, setActive] = useState(false);
  const searchInput = useRef(null);

  //use ref to dynamically display search on toggle
  const toggleSearch = () => {
    const searchBar = searchInput.current.childNodes[1];
    if (active) {
      searchBar.classList.remove("active");
      searchBar.classList.add("inactive");
      setActive(false);
      for (let i = 2; i <= 5; i++) {
        searchInput.current.childNodes[i].classList.remove("hide-active");
      }
    } else {
      searchBar.classList.remove("inactive");
      searchBar.classList.add("active");
      setActive(true);
      for (let i = 2; i <= 5; i++) {
        searchInput.current.childNodes[i].classList.add("hide-active");
      }
    }

    console.log(searchBar);
  };

  return (
    <>
      <div className="nav__list__container lg__screen">
        <ul className="nav__list">
          {["Home", "TV Shows", "Movies", "New & Popular", "My List"].map(
            (category) => (
              <Link
                to={
                  category === "Home" ? "/" : `/view/${category.toLowerCase()}`
                }
                className="list__link"
                key={category}
              >
                <li className="list-center" role="button">
                  {category}
                </li>
              </Link>
            )
          )}
        </ul>
      </div>
      <div className="nav__list__right lg__screen">
        <ul className="nav__list" ref={searchInput}>
          <li className="search-icon" key="search-icon" role="button">
            {!active ? (
              <FaSearch
                className="search"
                onClick={() => toggleSearch()}
                data-testid="search-icon"
              />
            ) : (
              <FiX
                className="search"
                onClick={() => toggleSearch()}
                data-testid="search-icon"
              />
            )}
          </li>
          <SearchBar active={active} toggleSearch={toggleSearch} />
          <li className="" key="dvd-link" role="button">
            DVD
          </li>
          <li className="" key="gift-icon" role="button">
            <FaGift />
          </li>
          <li className="" key="notification-icon" role="button">
            <FaBell />
          </li>
          <img
            src={require("../../assets/images/orange_avatar.png").default}
            alt="account icon"
            className="account__img"
            key="account-icon"
          />
        </ul>
      </div>
    </>
  );
};

export default NavLargeScreen;
