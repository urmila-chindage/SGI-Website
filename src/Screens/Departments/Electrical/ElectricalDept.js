import React from "react";
import Main from "../../../ReusableComponents/JS/Main";
import MenuLinks from "./MenuLinks";
import DeptMenuList from "../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../Components/JS/ScrollToTop";

const ElectricalDept = () => {
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
          <DeptMenuList dept="Electrical" subMenu={MenuLinks} />

          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <h3 className="dept-title text-center px-3 mb-5">
              About Department
            </h3>
            <p className="m-1">
              The Department of Electrical Engineering was established during
              the year 2023 with an intake capacity of 60. The department has
              competent and committed faculties. The faculty members of
              Electrical Department are from industries and academics to enhance
              the delivery of academic programs in the department. The key
              strengths of the department are qualified staff, established labs,
              Integrity in work, motivation, systematic process approach,
              Liberal work environment, student and staff feedback system.
              Electrical engineering is a professional engineering discipline
              that generally deals with the study and application of
              electricity, electronics. Today, electrical engineers are much in
              demand due to the rising demand for electrical power system, the
              growth of energy and automation in the industry. The Department
              imparts training with the best of teaching expertise in fields of
              Electrical Power Systems, Electrical Machines, Electrical
              Measurement and Instrumentation, Testing and Maintenance of
              Electrical Equipments, Power Electronics, by excellent laboratory
              infrastructure and exposure to recent trends in the industry, to
              ensure that the students are molded into competent electrical
              engineers and worthy citizens of the country.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ElectricalDept;
