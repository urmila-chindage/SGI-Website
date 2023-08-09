import React from "react";
import Main from "../../../ReusableComponents/JS/Main";
import MenuLinks from "./MenuLinks";
import DeptMenuList from "../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../Components/JS/ScrollToTop";

const Laboratories = () => {
  
  return (
    <Main className="container-fluid cse w-100 p-0">
      <ScrollToTop showBelow={250} />
      <div className="dept-bg">
        <div className="dept-heading">
          <h1 className="pt-1">Basic Science and Humanities</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <DeptMenuList
            dept="Basic Science and Humanities"
            subMenu={MenuLinks}
          />

          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <h3 className="text-center">Infrastructure &amp; Laboratories</h3>
            <p className="text-center">
              All machines are enabled to work on various platforms like Windows
              and Linux. The labs have been scientifically designed to provide
              freedom of movement.
              <br />
              <br />
              Basic Science and Humanities department consists of different
              laboratories listed below.
            </p>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                   Language Lab
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    <img src={require("../../../Images/Departments/BasicSc/BasicSc1.jpg")} alt="Language Lab" className="lab-img mx-2"/>
                    <img src={require("../../../Images/Departments/BasicSc/BasicSc2.jpg")} alt="Language Lab" className="lab-img mx-2"/>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Physics Lab
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    <img src={require("../../../Images/Departments/BasicSc/BasicSc5.jpg")} alt="Physics Lab" className="lab-img mx-2"/>
                    <img src={require("../../../Images/Departments/BasicSc/BasicSc6.jpg")} alt="Physics Lab" className="lab-img mx-2"/>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                   Chemistry Lab
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    <img src={require("../../../Images/Departments/BasicSc/BasicSc3.jpg")} alt="Chemistry Lab" className="lab-img mx-2"/>
                    <img src={require("../../../Images/Departments/BasicSc/BasicSc4.jpg")} alt="Chemistry Lab" className="lab-img mx-2"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Laboratories;
