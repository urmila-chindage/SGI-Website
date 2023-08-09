import React from "react";
import "../CSS/BannerVideo.css";
import videobg from "../../Images/Sanjay Ghodawat Institute (Marathi) (1).mp4";
import MainMenu from "./MainMenu";

const BannerVideo = () => {
  return (
    <div className="main">
        <div className="overlay"></div>
        {/*<video src={videobg} autoPlay={false} />  */}

        <MainMenu/>
        
    </div>
  );
};

export default BannerVideo;