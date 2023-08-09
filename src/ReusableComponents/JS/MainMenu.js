import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/MainMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

const MainMenu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-6 link1"
          style={{ marginBottom: "5px" }}
        >
          <Link to="/admission" className="">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p>Admission Enquiry</p>
          </Link>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-6 link1"
          style={{ marginBottom: "5px" }}
        >
          <Link to="/brochure" className="">
            <FontAwesomeIcon icon={faCloudArrowDown} className="icon" />
            <p>Download Brochure</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
