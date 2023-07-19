import React from "react";
import "../CSS/Main.css";
import NavBar from "../JS/Navbar";
import Header from "../JS/Header";
import TopContainer from "../JS/TopContainer";
import Footer from "../JS/Footer";


const Main = ({
  title = "My Title",
  description = "My description",
  className = "",
  children,
  isSlideShow = false,
}) => {
  return (
    <div className="" style={{ overflowX: "hidden" }}>
      <TopContainer />
      <Header />
      <NavBar />
      {/* <SearchBar/> */}

      <div className="backcolor">
        <div className={className} id="page-wrap">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Main;
