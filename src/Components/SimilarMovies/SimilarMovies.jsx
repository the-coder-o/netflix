import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import netflix from "../../Assets/logo/pngwing.com.png";
import similar from "../../Styles/SimilarMovies/similarMovies.module.css";

import "swiper/css";
import "swiper/css/navigation";

const SimilarMovies = ({ id }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=2576e26d3fabae45b3ca2a56844da15a&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((elem) => {
        setData(elem.results);
        console.log(elem);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const imageUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  const windowReload = (e) => {
    window.reload();
  };

  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={{
          clickable: true,
        }}
        modules={[Navigation]}
        className={similar.swipe}
      >
        {data.map((elem) => {
          return (
            <>
              <div className={similar.slider}>
                <h2>Similar movies</h2>
                <SwiperSlide className={similar.swiper__slide}>
                  <img src={netflix} className={similar.img__netflix} alt="" />
                  <Link onClick={windowReload} to={`/movie-product/${elem.id}`}>
                    <img src={imageUrl(elem?.poster_path)} />
                  </Link>
                  <p className={similar.text}>{elem?.name}</p>
                </SwiperSlide>
              </div>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SimilarMovies;
