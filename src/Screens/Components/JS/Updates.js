import React, {useEffect} from "react";
import "../CSS/Updates.css";
import CourseImage from "../../../Images/course-bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Updates() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
   
   <div className="text-center w-100 update-section" data-aos="fade-up">
    
      <div className="mt-4 mt-md-2 mt-sm-2 mt-xl-1">
      <h4 className="section-title1 text-center px-3 mb-5">
          Latest Updates
        </h4> 
       
        <div className="container">
        <div id="update" className="carousel slide row" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div>
                <img
                  src={CourseImage}
                  className="update-image col-md-4"
                  alt="Update news"
                />
              </div>
              <div className="update-content col-md-8">
                <p>12/07/2023</p>
                <h4> Smriti Mandhana in SGU</h4>
                <p>
                  Proud moment for Sanjay Ghodawat University as Indian Star
                  Woman Cricketer and Vice Captain, Smriti Mandhana has taken
                  admission in our University's Faculty of Commerce and
                  Management for B. Com Program. It is indeed a great news for
                  SGU and Faculty of Commerce and Management..! Congratulations
                  Team SGU FoCM and Smriti Mandhana 💐💐
                </p>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="10000">
              <div>
                <img
                  src={CourseImage}
                  className="update-image col-md-4"
                  alt="Update news"
                />
              </div>
              <div className="update-content col-md-8">
                <p>12/07/2023</p>
                <h4> Smriti Mandhana in SGU</h4>
                <p>
                  Proud moment for Sanjay Ghodawat University as Indian Star
                  Woman Cricketer and Vice Captain, Smriti Mandhana has taken
                  admission in our University's Faculty of Commerce and
                  Management for B. Com Program. It is indeed a great news for
                  SGU and Faculty of Commerce and Management..! Congratulations
                  Team SGU FoCM and Smriti Mandhana 💐💐
                </p>
              </div>
            </div>
          </div> 
         
          <button
            className="carousel-control-prev color-black"
            type="button"
            data-bs-target="#update"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next color-black"
            type="button"
            data-bs-target="#update"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Updates;
