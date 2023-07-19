import React from 'react';
import {Link} from "react-router-dom";
import "../CSS/MainMenu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faCloudArrowDown} from "@fortawesome/free-solid-svg-icons";

const MainMenu = () => {
  return (
    <div className="container">
    <div className="row">
        <div className="wed-hom-ser">
            <ul>
                <li>
                    <Link to="/admission" className="waves-effect waves-light btn-large wed-pop-ser-btn"><FontAwesomeIcon icon={faPhone} className="icon"/>Admission Enquiry</Link>
                </li>
                <li>
                    <Link to="/brochure" className="waves-effect waves-light btn-large wed-pop-ser-btn"><FontAwesomeIcon icon={faCloudArrowDown} className="icon"/>Download Brochure</Link>
                </li>
               
            </ul>
        </div>
    </div>
</div>
  )
}

export default MainMenu