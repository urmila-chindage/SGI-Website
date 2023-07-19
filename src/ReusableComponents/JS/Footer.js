import React, {useEffect} from "react";
import "../CSS/Footer.css";
import SGILogo from "../../Images/logo.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faEnvelope,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faSquareTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import FooterLast from "./FooterLast";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
    <footer className="footer-section">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-4">
            <img src={SGILogo} alt="SGI Logo" className="footer-logo mt-5" />
          </div>
          <div className="col-md-4">
            <h4 className="font-weight-bold text-uppercase mb-4">
              Get In Touch
            </h4>
            <ul className="list-unstyled">
              <li>
                <p>
                  <FontAwesomeIcon icon={faHouseChimney} className="mr-5" />{" "}
                  Atigre, 416118, Maharashtra
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-5" />{" "}
                  principal@sgipolytechnic.in
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faPhoneVolume} className="mr-5" /> 0230
                  - 2463800
                </p>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <div className="social-media">
              <h4>Social Media</h4>
              <div className="social-media-icons">
                <Link className="btn-floating btn-fb" to="/facebook">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="font-icon"
                  />
                </Link>

                <Link className="btn-floating btn-fb" to="/twitter">
                  <FontAwesomeIcon
                    icon={faSquareTwitter}
                    className="font-icon"
                  />
                </Link>

                <Link className="btn-floating btn-fb" to="/facebook">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="font-icon"
                  />
                </Link>

                <Link className="btn-floating btn-fb" to="/facebook">
                  <FontAwesomeIcon icon={faYoutube} className="font-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <FooterLast/>
    </>
  );
};

export default Footer;
