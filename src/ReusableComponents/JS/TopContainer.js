import React from "react";
import "../CSS/TopContainer.css";

const TopContainer = () => {
  return (
    <div className="Top-container">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="ed-com-t1-left">
            <ul>
              <li>
                <a href="#">
                  Contact: Atigre, 416118, Maharashtra
                </a>
              </li>
              <li>
                <a href="#">Phone: 0230 - 2463800</a>
              </li>
            </ul>
          </div>
          <div className="ed-com-t1-right">
            <ul>
              <li>
                <a href="#!" data-toggle="modal" data-target="#modal1">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#!" data-toggle="modal" data-target="#modal2">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div className="ed-com-t1-social">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopContainer;
