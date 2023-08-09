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
          <h1 className="pt-1">Electrical Engineering</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <DeptMenuList dept="Electrical" subMenu={MenuLinks}/>

            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content" data-target="#navbar-example3" data-offset="0">
            <img src={require("../../../Images/Departments/Staff/Electrical-Hod.jpg")} className="profile-picture"/>
            <div className="col-12 text-center mt-3">
                <b>Mr. Patil Nitin Surgonda</b>
              </div>
              <div className="col-12 text-center">
                <b>Head of Department</b>
              </div>
                <p className="m-1 mt-2">
                The department empowers the students with the proficiency and knowledge required to excel in the dynamic field of Electrical to pursue higher education. It also imparts technical knowledge and skills to students towards continuous improvement in education and placement and prepares the students to meet the challenges in the technical advancement to serve the community.
                </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HodDesk;
