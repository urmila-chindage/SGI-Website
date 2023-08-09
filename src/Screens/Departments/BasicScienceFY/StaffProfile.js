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
          <h1 className="pt-1">Basic Science and Humanities</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <DeptMenuList dept="Basic Science and Humanities" subMenu={MenuLinks}/>

            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content" data-target="#navbar-example3" data-offset="0">
            <div className="m-2">
              <StaffCard
                name="Mrs. Mahadik Shubhangi Balaso"
                designation="HOD"
                qualification="M.Sc. - Physics, Ph.D. (Pursuing)"
                areaOfEpertise="Material Science"
                imageURL={require("../../../Images/Departments/Staff/Fy-Hod.jpg")}
                experience="Academic 13 years"
                emailId="shubhangi.mahadik@sgipolytechnic.in"
                resumeURL=""
              />
            </div>
            <div className="m-2">
              <StaffCard
                name="Mr. Kamble Sachin Janardan"
                designation="Lecturer"
                qualification="M.Sc. - Chemistry , Shivaji University Kolhapur , Ph.D. (pursuing)"
                areaOfEpertise="Analytical Chemistry, Inorganic Chemistry"
                imageURL={Profile}
                experience="Academic 14.5 years"
                emailId="sachin.kamble@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Makandar Gafurso Ashraf"
                designation="Lecturer"
                qualification="M.Sc. , B.Ed. - Maths"
                areaOfEpertise="Applied Mathematics"
                imageURL={Profile}
                experience="Academic 9.5 years"
                emailId="gafur.makandar@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Jadhav Samadhan Madhukar"
                designation="Lecturer"
                qualification="M. A. - English"
                areaOfEpertise="Literature, Communication Skills, Soft Skills"
                imageURL={Profile}
                experience="Academic 8 years"
                emailId="samadhan.jadhav@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mrs. Patil Apurva Umesh"
                designation="Lecturer"
                qualification="M.Sc. , B.Ed. - Mathematics"
                areaOfEpertise="Applied Mathematics"
                imageURL={Profile}
                experience="Academic 6 years"
                emailId="apurva.patil@sgipolytechnic.in"
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
