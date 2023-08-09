import React from "react";
import Main from "../../../ReusableComponents/JS/Main";
import MenuLinks from "./MenuLinks";
import DeptMenuList from "../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../Components/JS/ScrollToTop";

const MechanicalDept = () => {
  return (
    <Main className="container-fluid cse w-100 p-0">
      <ScrollToTop showBelow={250} />
      <div className="dept-bg">
        <div className="dept-heading">
          <h1 className="pt-1">Electronics & Telecommunication Engineering</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <DeptMenuList dept="E & TC" subMenu={MenuLinks} />

          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <h3 className="dept-title text-center px-3 mb-5">
              About Department
            </h3>
            <p className="m-1">
            Greetings!!. The department E&TC is established in the year 2023 with the intake of 60 students. The department is having highly qualified; devoted & dedicated staff. The department is having well equipped laboratories and facilities for supporting our teaching.The department aims at inculcating quality education to bring engineers with a solid foundation in basic engineering principles and concepts.We strive to prepare our students to become technically competent engineers who will continue learning in an ever-changing and diverse world. As the engineering field is extremely demanding, future engineering students must be able to adapt to a new dynamic environment and react positively to new challenges and opportunities. Students are taught to be independent thinkers, create independent types of work, write technical reports and present their work before classNamemates and faculty members. Workshops & seminars are regularly takento bridge the gap between curriculum & industries.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default MechanicalDept;
