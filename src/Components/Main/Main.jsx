import React from "react";
import Header from "../Header/Header";
import MoviePost from "../MoviePost/MoviePost";
import MoviePost2 from "../MoviePost-2/MoviePost-2";
import MoviePost3 from "../MoviePost-3/MoviePost-3";
import MoviePost4 from "../MoviePost-4/MoviePost-4";
import LogoSlider from "../Categorys/LogoSlider/LogoSlider";
import MoviePostFive from "../MoviePost-5/MoviePost-5";

const Main = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <MoviePost />
      </div>
      <div>
        <MoviePost2 />
      </div>
      <div>
        <MoviePost3 />
      </div>
      <div>
        <MoviePost4 />
      </div>
      <div>
        <LogoSlider />
      </div>
      <div>
        <MoviePostFive />
      </div>
    </>
  );
};

export default Main;
