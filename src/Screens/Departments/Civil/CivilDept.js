import React from "react";
import Main from "../../../ReusableComponents/JS/Main";
import MenuLinks from "./MenuLinks";
import DeptMenuList from "../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../Components/JS/ScrollToTop";

const CivilDept = () => {
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
                <h3 className="dept-title text-center px-3 mb-5">
                    About Department
                </h3>
                <p className="m-1">
                Civil Engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including works like roads, bridges, canals, dams, and buildings. Civil engineering is the second-oldest engineering discipline after military engineering, and it is defined to distinguish non-military engineering from military engineering It is traditionally broken into several sub-disciplines including architectural engineering, environmental engineering, geotechnical engineering, control engineering, structural engineering, earthquake engineering, transportation engineering, forensic engineering, municipal or urban engineering, water resources engineering, materials engineering, wastewater engineering, offshore engineering, aerospace engineering, facade engineering, quantity surveying, coastal engineering, construction surveying, and construction engineering. Civil Engineering takes place in the public sector from municipal through to national governments, and in the private sector from individual homeowners through to international companies.
                </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default CivilDept;
