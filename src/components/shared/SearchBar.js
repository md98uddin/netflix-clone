import React from "react";
import fadeIn from "react-animations/lib/fade-in";
import Radium, { StyleRoot } from "radium";
import "../../css/NavLoggedIn.css";

const SearchBar = ({ toggleSearch }) => {
  return (
    <StyleRoot className="search-bar inactive lg__screen" key="search-bar">
      <input
        type="text"
        name="search"
        className="search-bar"
        placeholder="Search for movies, shows..."
      />
    </StyleRoot>
  );
};

const styles = {
  fadeIn: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

export default SearchBar;
