import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./jenres.css";

const Jenres = () => {
  const [data, setData] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=2576e26d3fabae45b3ca2a56844da15a&language=en-US`
    )
      .then((elem) => elem.json())
      .then((item) => {
        setData(item.genres);
        console.log(item);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const genreClick = (e) => {};

  return (
    <div className="container">
      <div className="jenres__fathers">
        {data.map((elem) => (
          <Link onClick={(e) => genreClick(e.target.value)}>{elem?.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Jenres;
