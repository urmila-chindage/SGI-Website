import React from "react";
import Main from "../../../ReusableComponents/JS/Main";
import MenuLinks from "./MenuLinks";
import DeptMenuList from "../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../Components/JS/ScrollToTop";

const HodDesk = () => {
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
            <DeptMenuList dept="Basic Science and Humanities" subMenu={MenuLinks}/>

            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content" data-target="#navbar-example3" data-offset="0">
            <img src={require("../../../Images/Departments/Staff/Fy-Hod.jpg")} className="profile-picture"/>
            <div className="col-12 text-center mt-3">
                <b>Mrs. Mahadik Shubhangi Balaso</b>
              </div>
              <div className="col-12 text-center">
                <b>Head of Department</b>
              </div>
                <p className="m-1 mt-2">
                On behalf of BSH department, I take opportunity to welcome you all to our department. As per our vision our team strive to persistently improve educational environment in our department. We are always engaged in the activities for overall development of our students with various aspects like technical education, self-motivation, ethics and personality.
                </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HodDesk;
