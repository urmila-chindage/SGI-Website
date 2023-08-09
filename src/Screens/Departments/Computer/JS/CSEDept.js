import React from "react";
import Main from "../../../../ReusableComponents/JS/Main";
import MenuLinks from "../JS/MenuLinks";
import "../CSS/CSEDept.css";
import DeptMenuList from "../../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../../Components/JS/ScrollToTop";

const CSEDept = () => {
  return (
    <Main className="container-fluid cse w-100 p-0">
      <ScrollToTop showBelow={250} />
      <div className="dept-bg">
        <div className="dept-heading">
          <h1 className="pt-1">Computer Science And Engineering</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <DeptMenuList dept="Computer Science" subMenu={MenuLinks}/>

            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content" data-target="#navbar-example3" data-offset="0">
                <h3 className="dept-title text-center px-3 mb-5">
                    About Department
                </h3>
                <p className="m-1">
                    The Computer Science and Engineering (CSE) program was started in
                    the year 2023. The main focus of the department is to deliver the
                    professionals with strong fundamentals in Computer Science and
                    Engineering domain. The department has well qualified and
                    experienced teaching faculty members with various specializations.
                    The department has maintained a student staff ratio of 15:1, has
                    excellent infrastructure with state of the art equipment and
                    software tools. Department regularly organizes a series of
                    lectures by experts &amp; professional of good repute, helping the
                    students to be aware of the Global Scenario.
                </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default CSEDept;
