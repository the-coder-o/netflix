import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import netflix from "../../Assets/logo/pngwing.com.png";
import video from "../../Styles/SingleVideo/singleVideo.module.css";

import "swiper/css";
import "swiper/css/navigation";

const SingleVideo = ({ id }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=2576e26d3fabae45b3ca2a56844da15a&language=en-US`
    )
      .then((res) => res.json())
      .then((elem) => {
        setData(elem.results);
        console.log(data.key);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const imageUrl = (posterPath) => {
    return `https://www.youtube.com/watch?v=${posterPath}`;
  };

  return (
    <div>
      <>
        <div className={video.slider}>
          <img src={netflix} className={video.img__netflix} alt="" />
          <video src={imageUrl(data.key)}></video>
        </div>
      </>
    </div>
  );
};

export default SingleVideo;
