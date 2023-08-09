import React, { useState,useEffect } from "react";
import Main from "../../../../ReusableComponents/JS/Main";
import DeptMenuList from "../../ReusableComponent/JS/DeptMenuList";
import MenuLinks from "../JS/MenuLinks";
import StaffCard from "../../ReusableComponent/JS/StaffCard";
import ScrollToTop from "../../../Components/JS/ScrollToTop";
import Profile from "../../../../Images/profileimage.jpg";

const TechnicalStaff = () => {
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
                name="Mr. Bhoje Vikrant S."
                designation="Lab Assistant"
                qualification="Diploma in Electronics Engineering"
                areaOfEpertise="Computer Hardware and Networking"
                imageURL={Profile}
                experience="Academic 7.5 years , Industrial 3 years"
                emailId="vikrant.bhoje@sgipolytechnic.in"
                resumeURL=""
              />
            </div>
            <div className="m-2">
              <StaffCard
                name="Mr.Jadhav Sagar Maruti"
                designation="Lab Assistant"
                qualification="Diploma in Computer Science Engineering"
                areaOfEpertise="Computer Hardware and Networking, System Administration"
                imageURL={Profile}
                experience="Academic 4 years , Industrial 3.6 years"
                emailId="sagar.jadhav@sgipolytechnic.in"
                resumeURL=""
              />
            </div>
           </div>
        </div>
      </div>
    </Main>
  );
};

export default TechnicalStaff;
