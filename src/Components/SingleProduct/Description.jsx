import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import moment from "moment/moment";
import single from "../../Styles/SingleProduct/singleProduct.module.css";

const SingleProductDescription = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `
      https://api.themoviedb.org/3/movie/${id}/reviews?api_key=2576e26d3fabae45b3ca2a56844da15a&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((elem) => {
        setData(elem.results);
        console.log(elem.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className={single.cartoon__father__two}>
          {data?.map((elem) => {
            return (
              <div className={single.slider__two}>
                <h2>{elem?.author}</h2>
                <p className={single.text}>{elem?.content}</p>
                <div className={single.moment}>
                  <p className={single.text__two}>
                    {moment(elem?.created_at).fromNow()}
                  </p>
                  <a href={elem?.url}>Learn more</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleProductDescription;
