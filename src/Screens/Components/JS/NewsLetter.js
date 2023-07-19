import React, { useState } from "react";
import "../CSS/NewsLetter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NewsLetter = () => {
    const [email,setEmail] = useState("");

  return (
    <div className="newsletter-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
            <div className="subscribe-section">
              <h6>Subscribe to our Newsletter</h6>
              <p>
                Be the first one to know the updates related to the Institute
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <form className="form-inline">
              <div className="form-group">
                <input
                  className="form-control newsletter-input"
                  type="email"
                  name="email"
                  required=""
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="btn btn-primary waves-effect waves-light subscribe-btn"
                  type="submit" 
                >Subscribe</button>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
