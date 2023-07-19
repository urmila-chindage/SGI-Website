import React from "react";
import "../CSS/ManagementTeam.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


function ManagementTeam() {
  return (
    <div className="img-gallery-container">
      <div className="text-center pt-5" id="#skew4">
        <h4 className="section-title bg-white text-center px-3">
          Our Management
        </h4>
      </div>
      <div className="Marquee">
        <Marquee
          speed={100}
          gradient={false}
          pauseOnHover={true}
          pauseOnClick={true}
          className="mq-cont"
        >
       
            <div className="Marquee-tag">
              <div className="management_card">
                <div className="management_card_image">
                  <img
                    src={require("../../../Images/home/Board-Members/team1.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="management_card_text_wrapper">
                  <h4 className="management_card_title">Mr. Sanjay Ghodawat</h4>
                  <h6 className="management_card_post">Chairman</h6>
                  <Link
                    to="/management/chairman"
                    className="management_card_read"
                  >
                    Read more
                  </Link>
                </div>
              </div>

              <div className="management_card">
                <div className="management_card_image">
                  <img
                    src={require("../../../Images/home/Board-Members/team2.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="management_card_text_wrapper">
                  <h4 className="management_card_title">
                    Mr. Shrenik Ghodawat
                  </h4>
                  <h6 className="management_card_post">Secretary</h6>
                  <Link
                    to="/management/chairman"
                    className="management_card_read"
                  >
                    Read more
                  </Link>
                </div>
              </div>

              <div className="management_card">
                <div className="management_card_image">
                  <img
                    src={require("../../../Images/home/Board-Members/team3.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="management_card_text_wrapper">
                  <h4 className="management_card_title">Mr. Vinayak Bhosale</h4>
                  <h6 className="management_card_post">Trustee</h6>
                  <Link
                    to="/management/chairman"
                    className="management_card_read"
                  >
                    Read more
                  </Link>
                </div>
                </div>

                <div className="management_card">
                  <div className="management_card_image">
                    <img
                      src={require("../../../Images/home/Board-Members/team4.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="management_card_text_wrapper">
                    <h4 className="management_card_title">Mr. Virat Giri</h4>
                    <h6 className="management_card_post">Principal</h6>
                    <Link
                      to="/management/chairman"
                      className="management_card_read"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
            
            
         </div>
        </Marquee>
     </div>
    </div>
  );
}

export default ManagementTeam;
