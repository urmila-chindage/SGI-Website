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
            <div className="row">
              <div className="col text-center">
                <h2>Program Outcomes - Electronics Department</h2>


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
                          Engineer will attain excellence in the profession by applying basic and disciplinary knowledge to provide solutions for the societal challenges.
                          </li>

                          <li>
                          Engineer will work in multi-disciplinary fields of engineering with concern towards environmental issues.
                          </li>

                          <li>Engineer will exhibit effective communication skills, a strong team spirit and inclination towards lifelong learning with ethical values.</li>
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
                          <b>Problem analysis</b> : Identify and analyze well-defined engineering problems using codified standard methods.
                          </li>
                          <li><b>Design/ development of solutions</b> : Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.</li>
                          <li><b>Engineering Tools, Experimentation and Testing</b> : Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.</li>
                          <li><b>Engineering practices for society, sustainability and environment</b> : Apply appropriate technology in context of society, sustainability, environment and ethical practices.</li>
                          <li><b>Project Management </b> : Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.</li>
                          <li><b>Life-long learning</b> : Ability to analyze individual needs and engage in updating in the context of technological changes</li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 3 && (
                      <div className="tab_panel">
                        <ul>
                          <li>Engineer will be able to apply knowledge of Analog & Digital systems to provide solutions to multi-disciplinary problems.</li>
                          <li>Engineer will be able to implement hardware and software co-designs for signal processing and communication applications.</li>
                         
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
