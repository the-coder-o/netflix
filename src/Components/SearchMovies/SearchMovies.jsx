import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Genres from "../Categorys/Jenres/Jenres";
import netflix from "../../Assets/logo/pngwing.com.png";
import search from "../../Styles/SearchMovies/searchMovies.module.css";

const SearchMovies = () => {
  const [data, setData] = useState([]);
  const [dataTwo, setDataTwo] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2576e26d3fabae45b3ca2a56844da15a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((elem) => {
        setDataTwo(elem.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const imageUrlTwo = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };
  const prohibited = () => {
    alert("You are looking for banned movies and you must be 18+");
    window.location.href =
      "/You-are-looking-for-banned-movies-and-you-must-be-18+🔞";
  };

  function submitSearch(e) {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=2576e26d3fabae45b3ca2a56844da15a&language=en-US&query=${searchMovies}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((elem) => {
        setData(elem.results);
        console.log(elem.results);
      })
      .catch((error) => {
        console.log(error);
      });
    if (searchMovies === "sex" || searchMovies === "porno") {
      prohibited();
    }
  }

  const imageUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  const searchTitle = (e) => {
    setSearchMovies(e.target.value);
  };

  return (
    <div>
      <Header />
      <Genres />
      <div className="container">
        <form onSubmit={submitSearch} className={search.form__search}>
          <input
            name="searchMovies"
            value={searchMovies}
            onChange={searchTitle}
            type="search"
            placeholder="Search all movies and cartoons..."
          />
          <button>Search</button>
        </form>
        <div className={search.cartoon__father}>
          {data?.map((elem) => {
            return (
              <div className={search.slider}>
                <img src={netflix} className={search.img__netflix} alt="" />
                <Link to={`/movie-product/${elem.id}`}>
                  <img
                    className={search.cartoon__img}
                    src={imageUrl(elem?.poster_path)}
                  />
                  <p className={search.text}>{elem?.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={search.cartoon__father}>
          {dataTwo?.map((elem) => {
            return (
              <div className={search.slider}>
                <img src={netflix} className={search.img__netflix} alt="" />
                <Link to={`/movie-product/${elem.id}`}>
                  <img
                    className={search.cartoon__img}
                    src={imageUrl(elem?.poster_path)}
                  />
                  <p className={search.text}>{elem?.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchMovies;
