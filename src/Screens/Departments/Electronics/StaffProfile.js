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
          <h1 className="pt-1">Electronics & Telecommunication Engineering</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <DeptMenuList dept="E & TC" subMenu={MenuLinks}/>

            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content" data-target="#navbar-example3" data-offset="0">
            <div className="m-2">
              <StaffCard
                name="Mr. Dhongadi Ravindra Purushottam"
                designation="HOD"
                qualification="B.E. - Electronics, ADCSSAA, M.E. - Electronics (Pursuing), LMISTE"
                areaOfEpertise="Electronics Applications"
                imageURL={require("../../../Images/Departments/Staff/Electronics-Hod.jpg")}
                experience="Academic 19 years , Industrial 1 year"
                emailId="ravindra.dhongadi@sgipolytechnic.in"
                resumeURL=""
              />
            </div>
            <div className="m-2">
              <StaffCard
                name="Mr. Kamble Deepak Vilas"
                designation="Lecturer"
                qualification="M.E. - Electronics & Telecommunication, LMISTE"
                areaOfEpertise="Communications"
                imageURL={Profile}
                experience="Academic 9 years , Industrial 3 years"
                emailId="deepak.kamble@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Ms. Mulla Raisa Mahamadrafiq"
                designation="Lecturer"
                qualification="M.E. - Electronics & Telecommunication , LMISTE"
                areaOfEpertise="Digital Techniques"
                imageURL={Profile}
                experience="Academic 5.6 years , Industrial 6 months"
                emailId="raisa.mulla@sgipolytechnic.in"
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
