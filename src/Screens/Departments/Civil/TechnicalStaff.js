import React, { useState,useEffect } from "react";
import Main from "../../../ReusableComponents/JS/Main";
import DeptMenuList from "../ReusableComponent/JS/DeptMenuList";
import MenuLinks from "./MenuLinks";
import StaffCard from "../ReusableComponent/JS/StaffCard";
import ScrollToTop from "../../Components/JS/ScrollToTop";
import Profile from "../../../Images/profileimage.jpg";

const TechnicalStaff = () => {
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
                name="Mr. Sisal Sandipan Dattatray"
                designation="Lab Assistant"
                qualification="Diploma in Civil Engineering"
                areaOfEpertise="Civil Engineering"
                imageURL={Profile}
                experience="Academic 3 years , Industrial 1.6 years"
                emailId="sandipan.sisal@sgipolytechnic.in"
                resumeURL=""
              />
            </div>
            <div className="m-2">
              <StaffCard
                name="Mr. Kadam Akhilesh Satish"
                designation="Lab Assistant"
                qualification="Diploma in Civil Engineering"
                areaOfEpertise="Civil Engineering"
                imageURL={Profile}
                experience="Academic 1.6 years , Industrial 1 year"
                emailId="akhilesh.kadam@sgipolytechnic.in"
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
