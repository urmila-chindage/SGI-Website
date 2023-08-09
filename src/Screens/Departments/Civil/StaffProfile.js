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
          <h1 className="pt-1">Civil Engineering</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <DeptMenuList dept="Civil" subMenu={MenuLinks}/>

            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content" data-target="#navbar-example3" data-offset="0">
            <div className="m-2">
              <StaffCard
                name="Mr. Patil Dhiraj Ramchandra"
                designation="HOD"
                qualification="M.E. - Structures , Pune University"
                areaOfEpertise="Structures"
                imageURL={require("../../../Images/Departments/Staff/Civil-Hod.jpg")}
                experience="Academic 11 years"
                emailId="dhiraj.patil@sgipolytechnic.in"
                resumeURL=""
              />
            </div>
            <div className="m-2">
              <StaffCard
                name="Mr. Kumbhar Vikas Sampatrao"
                designation="Lecturer"
                qualification="M.E. - Environmental Engineering"
                areaOfEpertise="Civil Engineering"
                imageURL={Profile}
                experience="Academic 13 years , Industrial 3 years"
                emailId="vikas.kumbhar@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Rajemahadik Chandrasen F."
                designation="Lecturer"
                qualification="M. Tech. - Environmental Science & Technology"
                areaOfEpertise="Environmental Engineering"
                imageURL={Profile}
                experience="Academic 13 years , Industrial 1 years"
                emailId="chandrasen.rajemahadik@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Patil Sandeep Narayan"
                designation="Lecturer"
                qualification="M.E. - Construction Management"
                areaOfEpertise="Construction Management"
                imageURL={Profile}
                experience="Academic 10.5 years, Industrial 3 years"
                emailId="sandeep.patil@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Pavate Vinayak Siddheshwar"
                designation="Lecturer"
                qualification="B.E. - Civil Engineering"
                areaOfEpertise="Construction Management"
                imageURL={Profile}
                experience="Academic 9 years , Industrial 6 months"
                emailId="vinayak.pavate@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Patil Mayuresh Bhimrao"
                designation="Lecturer"
                qualification="B.E. - Civil Engineering"
                areaOfEpertise="Structural Engineering"
                imageURL={Profile}
                experience="Academic 7 years , Industrial 6 months"
                emailId="mayuresh.patil@sgipolytechnic.in"
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
