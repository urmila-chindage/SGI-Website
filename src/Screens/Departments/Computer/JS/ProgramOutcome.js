import React, { useState } from "react";
import Main from "../../../../ReusableComponents/JS/Main";
import MenuLinks from "../JS/MenuLinks";
import "../CSS/VisionMission.css";
import DeptMenuList from "../../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../../Components/JS/ScrollToTop";


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
          <h1 className="pt-1">Computer Science And Engineering</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <DeptMenuList dept="Computer Science" subMenu={MenuLinks} />

          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col text-center">
                <h2>Program Outcomes - CSE Department</h2>


                <div>
                  <ul className="tabs">
                    <li
                      className={activeTab === 1 ? "active" : ""}
                      onClick={() => handleTabClick(1)}
                    >
                      Program Educational Objectives (PEO)
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
                          PEO-2: Engineer will work as an individual or a team member with effective communication exhibiting ethical values having environmental concern.
                          </li>

                          <li>
                          PEO-1: Engineer will apply knowledge of basic mathematics, science and discipline to design and develop systems in multi-disciplinary environments.
                          </li>

                          <li>PEO-3: Engineer will engage in lifelong learning, career enhancement and adopt changes as per professional and societal needs</li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 2 && (
                      <div className="tab_panel">
                        <ul>
                          <li>
                          PO1 - a. Basic and Discipline specific knowledge Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.
                          </li>
                          <li>
                          PO2 - b. Problem analysis Identify and analyze well-defined engineering problems using codified standard methods.
                          </li>
                          <li>PO3 - c. Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.</li>
                          <li>PO4 - d. Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.</li>
                          <li>PO5 - e. Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.</li>
                          <li>PO6 - f. Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.</li>
                          <li>PO7 - g. Life-long learning: Ability to analyze individual needs and engage in updating in the context of technological changes.</li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 3 && (
                      <div className="tab_panel">
                        <ul>
                          <li>PSO 1: Software Domain : The Computer Engineer will able to provide specific solutions to problems in software domain with use of engineering tools and technology</li>
                          <li>PSO 2: Computer Hardware and Networking : The Computer Engineer will apply knowledge, techniques and professional skills for real time operation and maintenance of computer hardware and networking.</li>
                         
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
