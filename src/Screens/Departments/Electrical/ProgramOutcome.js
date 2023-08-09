import React,{useState} from "react";
import Main from "../../../ReusableComponents/JS/Main";
import MenuLinks from "./MenuLinks";
import DeptMenuList from "../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../Components/JS/ScrollToTop";

const ProgramOutcome = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  
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
            <div className="row">
              <div className="col text-center">
                <h2>Program Outcomes - Electrical Department</h2>


                <div>
                  <ul className="tabs">
                    <li
                      className={activeTab === 1 ? "active" : ""}
                      onClick={() => handleTabClick(1)}
                    >
                      Program Educational Objectives (PEOs)
                    </li>
                    <li
                      className={activeTab === 2 ? "active" : ""}
                      onClick={() => handleTabClick(2)}
                    >
                    Program Outcome (POs)
                    </li>
                    <li
                      className={activeTab === 3 ? "active" : ""}
                      onClick={() => handleTabClick(3)}
                    >
                     Program Specific Outcomes (PSOs)
                    </li>
                  </ul>

                  <div className="tab_content">
                    {activeTab === 1 && (
                      <div className="tab_panel">
                        <ul>
                          <li>
                          Engineer will exhibit an ability to apply knowledge of mathematics, sciences and electrical engineering to identify and solve electrical engineering problems.
                          </li>

                          <li>
                          Engineer will exercise leadership skills and ethical outlook at appropriate levels as per their experience in practices of engineering discipline with societal and environmental concerns.
                          </li>

                          <li>Engineer will exhibit effective professional communication skills with an inclination towards lifelong learning.</li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 2 && (
                      <div className="tab_panel">
                        <ul>
                          <li>
                          <b>Basic and Discipline specific knowledge</b> : Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.
                          </li>
                          <li>
                          <b>Problem analysis </b> : Identify and analyze well-defined engineering problems using codified standard methods.
                          </li>
                          <li><b>Design/ development of solutions</b> : Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.</li>
                          <li><b>Engineering Tools, Experimentation and Testing</b> : Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.</li>
                          <li><b>Engineering practices for society, sustainability and environment</b> : Apply appropriate technology in context of society, sustainability, environment and ethical practices.</li>
                          <li><b>Project Management</b> : Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.</li>
                          <li><b>Life-long learning</b> : Ability to analyze individual needs and engage in updating in the context of technological changes</li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 3 && (
                      <div className="tab_panel">
                        <ul>
                          <li>The Electrical Engineer will test and maintain Electrical machines and equipments.</li>
                          <li>The Electrical Engineer will apply knowledge of Electrical Power Systems to solve domain related problems.</li>
                         
                        </ul>
                      </div>
                    )}
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ProgramOutcome;
