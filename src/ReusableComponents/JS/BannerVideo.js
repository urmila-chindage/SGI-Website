import React from "react";
import "../CSS/BannerVideo.css";
import videobg from "../../Images/BannerVideo.mp4";
import MainMenu from "./MainMenu";

const BannerVideo = () => {
  return (
    <div className="main">
        <div className="overlay"></div>
        <video src={videobg} autoPlay={false} loop muted />

        <MainMenu/>
        
    </div>
  );
};

export default BannerVideo;