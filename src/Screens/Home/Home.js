import React from 'react'
import Main from "../../ReusableComponents/JS/Main";
import "./Home.css";
import BannerVideo from "../../ReusableComponents/JS/BannerVideo";
import Courses from "../Components/JS/Courses";
import Updates from "../Components/JS/Updates";
import ManagementTeam from "../Components/JS/ManagementTeam";
import PhotoGallery from "../Components/JS/PhotoGallery";
import ScrollToTop from '../Components/JS/ScrollToTop';
import NewsSection from "../Components/JS/NewsSection";
import NewsLetter from '../Components/JS/NewsLetter';

const Home = () => {
 return (
    
    <Main>
      <ScrollToTop showBelow={250} />
      <BannerVideo/>
      <NewsSection/>
      <Courses/>
      <Updates/>
      <ManagementTeam/>
      <PhotoGallery/>
      <NewsLetter/>
    
    </Main>
  );
}

export default Home;
