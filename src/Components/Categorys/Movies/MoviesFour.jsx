import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import netflix from "../../../Assets/logo/pngwing.com.png";
import movies from "../../Categorys/Cartoons/cartoon.module.css";
import Header from "../../Header/Header";

const MoviesActionFour = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2576e26d3fabae45b3ca2a56844da15a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((elem) => {
        setData(elem.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const imageUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  return (
    <>
      <div className="container">
        <div className={movies.cartoon__father}>
          {data?.map((elem) => {
            return (
              <div className={movies.slider}>
                <img src={netflix} className={movies.img__netflix} alt="" />
                <Link to={`/movie-product/${elem.id}`}>
                  <img
                    className={movies.cartoon__img}
                    src={imageUrl(elem?.poster_path)}
                  />
                  <p className={movies.text}>{elem?.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MoviesActionFour;
