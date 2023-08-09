import React, { useState,useEffect } from "react";
import Main from "../../../../ReusableComponents/JS/Main";
import DeptMenuList from "../../ReusableComponent/JS/DeptMenuList";
import MenuLinks from "../JS/MenuLinks";
import StaffCard from "../../ReusableComponent/JS/StaffCard";
import ScrollToTop from "../../../Components/JS/ScrollToTop";
import Profile from "../../../../Images/profileimage.jpg";

const StaffProfile = () => {
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
            <div className="m-2">
              <StaffCard
                name="Mr.Sagar V Chavan"
                designation="HOD"
                qualification="M.Tech (IT)"
                areaOfEpertise="Machine Learning & AI"
                imageURL={require("../../../../Images/Departments/Staff/CSE-Hod.jpg")}
                experience="10 Years"
                emailId="sagar.chavan@sgipolytechnic.in"
                resumeURL=""
              />
            </div>
            <div className="m-2">
              <StaffCard
                name="Prof.Suraj Sayyad Jamadar"
                designation="Lecturer"
                qualification="ME (CSE) Appearing"
                areaOfEpertise="Software Testing, Cyber Security"
                imageURL={Profile}
                experience="7.5 + Years"
                emailId="suraj.jamadar@sgipolytechnic.in"
                resumeURL=""
              />
            </div>
           </div>
        </div>
      </div>
    </Main>
  );
};

export default StaffProfile;
