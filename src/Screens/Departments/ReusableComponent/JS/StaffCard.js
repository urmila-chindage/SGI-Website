import React from "react";
import { useState } from "react";
import "../CSS/StaffCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faSquareTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const StaffCard = ({
  name = "",
  designation = "",
  qualification = "",
  areaOfEpertise = "",
  imageURL = "",
  experience = "",
  emailId = "",
  resumeURL = "",
}) => {
  return (
    <div className="page-content page-container m-0 w-100" id="page-content">
      <div className="">
        <div className="row m-0 p-0 w-100 container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card user-card-full w-100">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white d-flex justify-content-center flex-column">
                    <div className="m-b-25">
                      {" "}
                      <img
                        src={imageURL}
                        className="img-fluid rounded-circle"
                        alt="User-Profile-Image"
                      />{" "}
                    </div>
                    <h6 className="f-w-600">{name}</h6>
                    {designation}
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Personal Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{emailId}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Resume</p>
                        <button className="view-profile-btn">
                          View Profile
                        </button>
                      </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Skills
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Area of Expertise</p>
                        <h6 className="text-muted f-w-400">{areaOfEpertise}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Experience</p>
                        <h6 className="text-muted f-w-400">{experience}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Qualification</p>
                        <h6 className="text-muted f-w-400">{qualification}</h6>
                      </div>
                    </div>
                    <ul className="social-link list-unstyled m-t-40 m-b-10">
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="facebook"
                          data-abc="true"
                        >
                          <FontAwesomeIcon
                            icon={faFacebookF}
                            className="profile-font-icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="twitter"
                          data-abc="true"
                        >
                          <FontAwesomeIcon
                            icon={faSquareTwitter}
                            className="profile-font-icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="instagram"
                          data-abc="true"
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="profile-font-icon"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    
    </div>
   
  );
};

export default StaffCard;
