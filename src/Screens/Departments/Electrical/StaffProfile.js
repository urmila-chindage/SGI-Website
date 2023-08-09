import React, { useState,useEffect } from "react";
import Main from "../../../ReusableComponents/JS/Main";
import DeptMenuList from "../ReusableComponent/JS/DeptMenuList";
import MenuLinks from "./MenuLinks";
import StaffCard from "../ReusableComponent/JS/StaffCard";
import ScrollToTop from "../../Components/JS/ScrollToTop";
import Profile from "../../../Images/profileimage.jpg";

const StaffProfile = () => {
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
            <div className="m-2">
              <StaffCard
                name="Mr. Patil Nitin Surgonda"
                designation="HOD"
                qualification="M.Tech. - Power System"
                areaOfEpertise="Power System"
                imageURL={require("../../../Images/Departments/Staff/Electrical-Hod.jpg")}
                experience="Academic 6.6 years"
                emailId="nitin.patil@sgipolytechnic.in"
                resumeURL=""
              />
            </div>
            <div className="m-2">
              <StaffCard
                name="Mr. Patil Suhas Rajaram"
                designation="Lecturer"
                qualification="M.E. - Electrical Engineering"
                areaOfEpertise="Electrical Engineering"
                imageURL={Profile}
                experience="Academic 6.1 years"
                emailId="suhas.patil@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Patil Ashish Arvind"
                designation="Lecturer"
                qualification="B.E. - Electrical Engineering , M.E.(Pursuing)"
                areaOfEpertise="Power System"
                imageURL={Profile}
                experience="Academic 3.5 years, Industrial 6 months"
                emailId="ashish.patil@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Pujari Pandurang Mahadev"
                designation="Lecturer"
                qualification="M.E. - Power System"
                areaOfEpertise="Power System"
                imageURL={Profile}
                experience="Academic 5 years"
                emailId="pandurang.pujari@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Jadhav Nitin Sudhir"
                designation="Lecturer"
                qualification="B.E. - Electrical Engineering , M.E. (Pursuing)"
                areaOfEpertise="AC Machine , PLC & Automation , Power System"
                imageURL={Profile}
                experience="Academic 3.5 years, Industrial 3 years"
                emailId="nitin.jadhav@sgipolytechnic.in"
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
