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
          <h1 className="pt-1">Electronics & Telecommunication Engineering</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <DeptMenuList dept="E & TC" subMenu={MenuLinks} />

          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <img
              src={require("../../../Images/Departments/Staff/Electronics-Hod.jpg")}
              className="profile-picture"
            />
            <div className="col-12 text-center mt-3">
              <b>Mr. Dhongadi Ravindra Purushottam</b>
            </div>
            <div className="col-12 text-center">
              <b>Head of Department</b>
            </div>
            <p className="m-1 mt-2">
            The E & TC department provides indepth knowledge to the students about basic principles of Electronics, Communication systems, electronic gadgets, circuits, programming of Microcontroller, Digital System Design etc. and enables students to choose the correct path for their career. The department also encourages research in the field of Electonics & communication. The department admires technology development through innovations and its exploitation for the benefit of human kind. Department offers quality education through use of modern reaching aids technique and to undertake research in engineering and technology. Students are also encouraged to undergo supervised practical training in different industries so as to get hand on experience and become employable technocrats.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HodDesk;
