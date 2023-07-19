import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "../CSS/Counter.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Courses from "../../Icons/Courses";
import CertifiedTeachers from "../../Icons/CertifiedTeachers";
import Students from "../../Icons/Students";

const Counter = ({ setIsCounterLoading }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="counter-section">
      <div className="counter" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        {/* <div className="overlay"></div> */}
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-10 offset-1">
              <div className="row">
                <div className="col-md-3 col-sm-6 text-center animate-box bg-transparent p-2">
                  <span className="icon"><Students/></span>
                       
                  <CountUp className="counter-wrapper js-counter" end={300}>
                    <ReactVisibilitySensor delayedCall>
                      <span className="counter-wrapper js-counter" />
                    </ReactVisibilitySensor>
                  </CountUp>

                  <span className="counter-label">Total Students</span>
                </div>
                <div className="col-md-3 col-sm-6 text-center animate-box bg-transparent p-0">
                  <span className="icon w-100 h-100"><Courses/></span>

                  <CountUp
                    className="counter-wrapper js-counter"
                    end={5}
                    redraw={true}
                  >
                    <ReactVisibilitySensor delayedCall>
                      <span className="counter-wrapper js-counter" />
                    </ReactVisibilitySensor>
                  </CountUp>

                  <span className="counter-label">Courses</span>
                </div>
                <div className="col-md-3 col-sm-6 text-center animate-box bg-transparent p-0">
                  <span className="icon w-100 h-100"><CertifiedTeachers/></span>

                  <CountUp
                    className="counter-wrapper js-counter"
                    end={59}
                    redraw={true}
                  >
                    <ReactVisibilitySensor delayedCall>
                      <span className="counter-wrapper js-counter" />
                    </ReactVisibilitySensor>
                  </CountUp>

                  <span className="counter-label">Certified Teachers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
