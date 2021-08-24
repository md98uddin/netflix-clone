import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "../css/Banner.css";
import NavLoggedIn from "./shared/NavLoggedIn";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  function truncate(text, n) {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  }

  return (
    <>
      <NavLoggedIn />
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          background: `linear-gradient(to left, rgb(0,0,0,0),rgb(0,0,0,1) ), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {" "}
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </header>
      <div className="banner--fadeBottom"></div>
    </>
  );
}

export default Banner;
