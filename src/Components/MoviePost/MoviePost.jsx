import { Link } from "react-router-dom";

import React from "react";
import logo from "../../Assets/logo/movielogo.svg";
import MoviePostOne from "../MoviePost-1/MoviePost-1";
import movie from "../../Styles/MovieStyle/movieStyle.module.css";
import logoWednesday from "../../Assets/logo/wednesday-seeklogo.com.svg";

const MoviePost = () => {
  return (
    <div className={movie.movie__post}>
      <div className={movie.father}>
        <div className={movie.movie__post}>
          <h1 className={movie.text}>
            <img src={logoWednesday} width={300} alt="" />2
          </h1>
          <div className={movie.img__logo}>
            <img src={logo} alt="" />
            <h2>Number 4 in New York Today</h2>
          </div>
          <div className={movie.movie__text}>
            <p>
              Follows Wednesday Addams' years as a student, when she attempts to
              master her emerging psychic ability, thwart a killing spree, and
              solve the mystery that embroiled her parents.
            </p>
          </div>
          <div className={movie.btn__movie}>
            <Link
              className={movie.btn__play}
              to={"https://www.netflix.com/uz/title/81231974"}
            >
              <i className="fa-solid fa-play"></i>
              Play now
            </Link>
            <Link
              className={movie.btn__more}
              to={"https://en.wikipedia.org/wiki/Wednesday_(TV_series)"}
            >
              <i className="fa-solid fa-play"></i>
              More information
            </Link>
          </div>
          <h3 className={movie.popular__text}>Released in the Past Year</h3>
          <div className={movie.post1__father}>
            <MoviePostOne />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePost;
