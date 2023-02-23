import "./video.css";
import React from "react";
import logo from "../../../Assets/logo/wednesday-seeklogo.com.svg";
import video from "./Wednesday Addams _ Official Teaser _ Netflix.mp4";

const VideoSlider = () => {
  return (
    <div className="container">
      <h3 className="logo__wednesday">
        The most popular movie right now
        <img width={100} src={logo} alt="" />
      </h3>
      <div className="video">
        <video className="video1" src={video} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default VideoSlider;
