import React from "react";
import Main from "../../../../ReusableComponents/JS/Main";
import MenuLinks from "../JS/MenuLinks";
import "../CSS/HodDesk.css";
import DeptMenuList from "../../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../../Components/JS/ScrollToTop";

const HodDesk = () => {
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
            <img src={require("../../../../Images/Departments/Staff/CSE-Hod.jpg")} className="profile-picture"/>
            <div className="col-12 text-center mt-3">
                <b>Mr. Chavan Sagar Vilasrao</b>
              </div>
              <div className="col-12 text-center">
                <b>Head of Department</b>
              </div>
                <p className="m-1 mt-2">
                On behalf of department of Computer Technology, I take opportunity
              to welcome you all to our department. As per our vision our team
              strive to persistently improve educational environment in our
              department. We are always engaged in the activities for overall
              development of our students with various aspects like technical
              education, self-motivation, ethics and personality. As the field
              of Computer is ever-changing, we arrange various additional
              workshops, seminars and expert lectures for our students and
              motivate them to pursue advanced graduate studies so that they can
              cope-up with challenging industrial context.
                </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HodDesk;
