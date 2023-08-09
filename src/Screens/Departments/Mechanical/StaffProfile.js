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
          <h1 className="pt-1">Mechanical Engineering</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <DeptMenuList dept="Mechanical" subMenu={MenuLinks}/>

            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content" data-target="#navbar-example3" data-offset="0">
            <div className="m-2">
              <StaffCard
                name="Mr. Patil Prashant Mahavir"
                designation="HOD"
                qualification="B.E. - Mechanical Engg. , M.E.(Pursuing) , MBA (Marketing)"
                areaOfEpertise="Product Design and CAD/CAM/CAE"
                imageURL={require("../../../Images/Departments/Staff/Mechanical-Hod.jpg")}
                experience="Academic 9 years"
                emailId="prashant.patil@sgipolytechnic.in"
                resumeURL=""
              />
            </div>
            <div className="m-2">
              <StaffCard
                name="Mr. Awati Pratik Sudhir"
                designation="Lecturer"
                qualification="M.E. - Automobile"
                areaOfEpertise="Machine Design , Drawing , Automobile Engineering"
                imageURL={Profile}
                experience="Academic 9 years"
                emailId="pratik.awati@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Powar Yogesh Sanjay"
                designation="Lecturer"
                qualification="M.E. - Machine Design"
                areaOfEpertise="Mechanical (m/c design)"
                imageURL={Profile}
                experience="Academic 9 years"
                emailId="yogesh.powar@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Hingmire Tushar Mahadev"
                designation="Lecturer"
                qualification="M.E. - Mechanical Production, Shivaji University Kolhapur"
                areaOfEpertise="Production Technology, Machin Design, Manufacturing Processes"
                imageURL={Profile}
                experience="Academic 7 years"
                emailId="tushar.hingmire@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Thikane Swapnil Jinendra"
                designation="Lecturer"
                qualification="M.E. - Mechanical (Heat & Power Engineering)"
                areaOfEpertise="Thermal Engineering , Fluid Power"
                imageURL={Profile}
                experience="Academic 5 years , Industrial 2 years"
                emailId="swapnil.thikane@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Patole Sushant Sukumar"
                designation="Lecturer"
                qualification="M.E. - Mechine Design , Shivaji University Kolhapur"
                areaOfEpertise="Machine Design , Mechanical Vibration"
                imageURL={Profile}
                experience="Academic 4 years"
                emailId="sushant.patole@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Kale Maheshkumar Sarjerao"
                designation="Lecturer"
                qualification="M.E. - Design Engineering"
                areaOfEpertise="Design , Production, Manufacturing, Automation"
                imageURL={Profile}
                experience="Academic 4 years"
                emailId="maheshkumar.kale@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Dhavale Amit Shashikant"
                designation="Lecturer"
                qualification="B.E. - Mechanical"
                areaOfEpertise="Research & Development"
                imageURL={Profile}
                experience="Academic 9 years , Industrial 8 years"
                emailId="amit.dhavale@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Teli Vishal Shivaji"
                designation="Lecturer"
                qualification="B.E. - Mechanical"
                areaOfEpertise="Thermal Engineering"
                imageURL={Profile}
                experience="Academic 3 years"
                emailId="vishal.teli@sgipolytechnic.in"
                resumeURL=""
              />
            </div>

            <div className="m-2">
              <StaffCard
                name="Mr. Ghaste Akash Anil"
                designation="Lecturer"
                qualification="B.E. - Mechanical Engineering"
                areaOfEpertise="Renewable Energy Sources, Manufacturing"
                imageURL={Profile}
                experience="Academic 3 years"
                emailId="akash.ghaste@sgipolytechnic.in"
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
