import React from "react";
import "../CSS/TopContainer.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faSquareTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const TopContainer = () => {
  return (
    <div className="top-container">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="top-container-left">
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
          <div className="top-container-right">
            <ul>
              <li>
                <Link to="/stafflogin">
                   Staff Login
                </Link>
              </li>
              <li>
                <Link to="/studentlogin">
                  Student Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="top-container-social">
            <ul>
              <li>
              <Link className="btn-floating btn-fb" to="/facebook">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="font-icon"
                  />
                </Link>
              </li>
              <li>
              <Link className="btn-floating btn-fb" to="/twitter">
                  <FontAwesomeIcon
                    icon={faSquareTwitter}
                    className="font-icon"
                  />
                </Link>
              </li>
              <li>
              <Link className="btn-floating btn-fb" to="/instagram">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="font-icon"
                  />
                </Link>
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
