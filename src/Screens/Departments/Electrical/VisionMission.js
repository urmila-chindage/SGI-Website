import React, { useState } from "react";
import Main from "../../../ReusableComponents/JS/Main";
import MenuLinks from "./MenuLinks";
import DeptMenuList from "../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../Components/JS/ScrollToTop";


const VisionMission = () => {
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
                <h2>Vision & Mission - Electrical Department</h2>


                <div>
                  <ul className="tabs">
                    <li
                      className={activeTab === 1 ? "active" : ""}
                      onClick={() => handleTabClick(1)}
                    >
                      Vision
                    </li>
                    <li
                      className={activeTab === 2 ? "active" : ""}
                      onClick={() => handleTabClick(2)}
                    >
                      Mission
                    </li>
                   
                  </ul>

                  <div className="tab_content">
                    {activeTab === 1 && (
                      <div className="tab_panel">
                        <ul>
                          <li>
                          Achieve excellence in field of Electrical Engineering by providing quality and value based education that will meet the ever changing challenges of the industry and society.
                          </li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 2 && (
                      <div className="tab_panel">
                        <ul>
                          <li>
                          To impart necessary technical and professional skills of the discipline among the students that will make them industry ready
                          </li>
                          <li>
                          To create awareness among students for societal and environmental concerns
                          </li>
                          <li>To establish effective institute-industry interaction</li>
                          <li>To inculcate the spirit of lifelong learning among students for career enhancement</li>
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

export default VisionMission;
