import "./page18.css";
import React from "react";
import Header from "../Header/Header";
import page18 from "./pngaaa.com-80733.png";

const Page18 = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="page__img">
          <img width={500} src={page18} alt="" />
          <br />
          <h3>18+ movies are prohibited on our website </h3>
        </div>
      </div>
    </>
  );
};

export default Page18;
