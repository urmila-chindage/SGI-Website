import React from "react";
import Main from "../../../ReusableComponents/JS/Main";
import MenuLinks from "./MenuLinks";
import DeptMenuList from "../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../Components/JS/ScrollToTop";

const MechanicalDept = () => {
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
          <DeptMenuList dept="Mechanical" subMenu={MenuLinks} />

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
            Mechanical engineering is one of the basic engineering branches. It deals with design and development of all kinds of machines. Through innovation and inventions, it has given humanity at large comfort and safety for life. At SGI, we have state of the art infrastructure and laboratories with total investment in equipments of more than one crore. Taking into consideration the requirements of industry and research organization we have developed all our labs. We have always tried to be globally competitive in all round development of our department. Today we can boast of most talented bunch of students and professors being developed in our department. We are thus contributing in making the future of India bright by providing talented and skillful Engineers trained in our Polytechnic.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default MechanicalDept;
