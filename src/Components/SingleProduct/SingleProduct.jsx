import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import SimilarMovies from "../SimilarMovies/SimilarMovies";
import single from "../../Styles/SingleProduct/singleProduct.module.css";
import SingleProductDescription from "./Description";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `
      https://api.themoviedb.org/3/movie/${id}?api_key=2576e26d3fabae45b3ca2a56844da15a&language=en-US`
    )
      .then((res) => res.json())
      .then((elem) => {
        setData(elem);
        console.log(elem);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const imageUrl = (posterPath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterPath}`;
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className={single.single__product}>
          <div className="single__fathers">
            <div className={single.name__father}>
              <h3 className={single.title}>{data.title}</h3>
              <h3 className={single.like}>
                Maturity rating: <span>{data.vote_average}</span>|
                <span> {data.vote_count}+ </span>|<span> {data.status} </span>
              </h3>
              <p className={single.description}>{data.overview}</p>
              <p className={single.year}>
                <span>Released in the company: </span>
                {data?.production_companies?.[0].name}
                <span></span>
                {/* {data?.production_companies?.[1].name} */}
              </p>
              <p className={single.year}>
                <span>Language: </span> {data?.original_language}
              </p>
              <p className={single.year}>
                <span>Budget:</span> {data?.budget}$
              </p>
              <p className={single.year}>
                <span>Movie year:</span> {data.release_date}
              </p>
              <p className={single.year}>
                <span>Popularity:</span>
                {data.popularity}
                <a class="fa-solid star fa-star"></a>
                <a class="fa-solid star fa-star"></a>
                <a class="fa-solid star fa-star"></a>
                <a class="fa-solid star fa-star"></a>
                <a class="fa-solid star fa-star"></a>
              </p>
              <p className={single.year}>
                <span>Produced in the city: </span>
                {data?.production_countries?.[0].name}
                <span></span>
                {data?.production_countries?.[0].iso_3166_1}
              </p>
              <div className={single.genres}>
                {/* <span>{data?.genres?.[0].name}</span> */}
                {/* <span>{data?.genres?.[1].name}</span> */}
                {/* <span>{data?.genres?.[2].name}</span> */}
                {/* <span>{data?.genres?.[3].name}</span> */}
                {/* <span>{data?.genres?.[4].name}</span> */}
              </div>
            </div>
          </div>
          <img src={imageUrl(data.poster_path)} width={100} alt="" />
        </div>
        <SingleProductDescription id={id} />
        <div className={single.product__country}>
          <div className={single.country}>
            <img
              src={imageUrl(data.belongs_to_collection?.backdrop_path)}
              alt=""
            />
            <h3>{data?.belongs_to_collection?.name}</h3>
            <h3>{data?.belongs_to_collection?.origin_country}</h3>
          </div>
        </div>
        <h2>We recommend you 😍</h2>
        <SimilarMovies id={id} />
      </div>
    </>
  );
};

export default SingleProduct;
