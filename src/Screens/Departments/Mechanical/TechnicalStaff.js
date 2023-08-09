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
          <h1 className="pt-1">Mechanical Engineering</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <DeptMenuList dept="Mechanical" subMenu={MenuLinks}/>

            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content" data-target="#navbar-example3" data-offset="0">
            <div className="m-2">
              <StaffCard
                name="Mr. Khavate Vipul Mahaveer"
                designation="Lab Assistant"
                qualification="Diploma in Mechanical Engineering"
                areaOfEpertise="Mechanical Engineering"
                imageURL={Profile}
                experience="Academic 7 years , Industrial 5 years"
                emailId="vipul.khavate@sgipolytechnic.in"
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
