import React from "react";
import fadeIn from "react-animations/lib/fade-in";
import Radium, { StyleRoot } from "radium";
import "../../css/NavLoggedIn.css";
import PropTypes from "prop-types";

const SearchBar = ({ toggleSearch, active }) => {
  return (
    <StyleRoot
      className="search-bar inactive lg__screen"
      key="search-bar"
      data-testid="search-bar"
    >
      <input
        type="text"
        name="search"
        className="search-bar"
        placeholder="Search for movies, shows..."
        style={styles.fadeIn}
      />
    </StyleRoot>
  );
};

const styles = {
  fadeIn: {
    animation: "x 0.5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

//prop type checking
SearchBar.propTypes = {
  active: PropTypes.bool,
  toggleSearch: PropTypes.func.isRequired,
};

//default prop
SearchBar.defaultProps = {
  active: false,
};

export default SearchBar;
