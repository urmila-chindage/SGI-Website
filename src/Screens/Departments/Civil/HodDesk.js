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
          <h1 className="pt-1">Civil Engineering</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <DeptMenuList dept="Civil" subMenu={MenuLinks} />

          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <img
              src={require("../../../Images/Departments/Staff/Civil-Hod.jpg")}
              className="profile-picture"
            />
            <div className="col-12 text-center mt-3">
              <b>Mr. Chavan Sagar Vilasrao</b>
            </div>
            <div className="col-12 text-center">
              <b>Head of Department</b>
            </div>
            <p className="m-1 mt-2">
              Civil engineering is the application of physical and scientific
              principles for solving the problems of society, and its history is
              intricately linked to advances in understanding of physics and
              mathematics throughout history. Because civil engineering is a
              wide-ranging profession, including several specialized
              sub-disciplines, its history is linked to knowledge of structures,
              materials science, geography, geology, soils, hydrology,
              environment, mechanics and other fields. Throughout ancient and
              medieval history most architectural design and construction was
              carried out by artisans, such as stonemasons and carpenters,
              rising to the role of master builder. Knowledge was retained in
              guilds and seldom supplanted by advances. Structures, roads and
              infrastructure that existed were repetitive, and increases in
              scale were incremental. Civil Engineering department of Sanjay
              Ghodawat Polytechnic aims to provide quality technical education
              to students and prepare them to meet future need of society. There
              are several activities like site visits; expert lectures and
              personality development programs are conducted in the department
              for students to develop their professional skills. Civil
              engineering department has well qualified teaching faculties who
              are enthusiastic in imparting the quality teaching to the
              students. Our department has well equipped laboratories,
              computational facilities and good environment for learning. "We
              welcome you to civil engineering department as undergraduate
              student and we hope to be part of your success". So far about more
              than 85% students admitted to higher educational institutes of
              various universities in Maharashtra. All this was achievable due
              to dedicated teaching and non-teaching faculty and the support
              from the generous management. We have 15teaching & 03 non-teaching
              faculty members both from which 05 have acquired Master's Degree
              in various fields of Civil Engineering and all remaining 10
              faculties are perusing their Master's Degree. Our infrastructure
              has been state-of-the-art for which we thank for support of
              management. Quality of students and their achievements in
              curricular and co-curricular activities have branded our
              department as a leading center of learning. In the year 2016-17,
              we have applied for the National Board of Accreditation, India.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HodDesk;
