import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "../CSS/Courses.css";
import Computer from "../../../Images/home/courses/computer.jpg";
import Mechanical from "../../../Images/home/courses/mechanical.jpg";
import Eletrical from "../../../Images/home/courses/electrical.jpg"
import Civil from "../../../Images/home/courses/civil.jpg";
import Electronics from "../../../Images/home/courses/e&tc.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="text-center pt-5 course-section" data-aos="fade-up">
        <h4 className="section-title bg-white text-center px-3 mb-5">
          Popular Courses
        </h4>
        <div className="row text-center d-flex justify-content-center dept-section">
          <Link className="col-xl-2 col-sm-6  mb-5 dept-img shadow-lg m-2 mb-sm-3 mb-xl-2 rounded" to="department/cse">
            <div>
              <img src={Computer}/>
              <div className="text p-4">
                <h4>Computer Science</h4>
              </div>
            </div>
          </Link>

          <Link className="col-xl-2 col-sm-6 mb-5 dept-img shadow-lg m-2 mb-sm-3 mb-xl-2 rounded" to="/department/mechanical">
            <div>
              <img src={Mechanical}/>
              <div className="text p-4">
                <h4>Mechanical</h4>
              </div>
            </div>
          </Link>

          <Link className="col-xl-2 col-sm-6 mb-5 dept-img shadow-lg m-2 mb-sm-3 mb-xl-2 rounded" to="/department/civil">
            <div>
              <img src={Civil}/>
              <div className="text p-4">
                <h4>Civil</h4>
              </div>
            </div>
          </Link>

          <Link className="col-xl-2 col-sm-6 mb-5 dept-img shadow-lg m-2 mb-sm-3 mb-xl-2 rounded" to="/department/electronics">
            <div>
              <img src={Electronics}/>
              <div className="text p-4">
                <h4>E &amp; TC</h4>
              </div>
            </div>
          </Link>

          <Link className="col-xl-2 col-sm-6 mb-5 dept-img shadow-lg m-2 mb-sm-3 mb-xl-2 rounded" to="/department/electrical">
            <div>
              <img src={Eletrical}/>
              <div className="text p-4">
                <h4>Electrical</h4>
              </div>
            </div>
          </Link>
          </div>
      </div>
    </>
  );
};

export default Courses;
