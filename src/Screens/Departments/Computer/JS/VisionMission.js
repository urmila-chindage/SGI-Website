import React, { useState } from "react";
import Main from "../../../../ReusableComponents/JS/Main";
import MenuLinks from "../JS/MenuLinks";
import "../CSS/VisionMission.css";
import DeptMenuList from "../../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../../Components/JS/ScrollToTop";


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
                <h2>Vision & Mission - CSE Department</h2>


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
                    <li
                      className={activeTab === 3 ? "active" : ""}
                      onClick={() => handleTabClick(3)}
                    >
                      Mission Objectives
                    </li>
                  </ul>

                  <div className="tab_content">
                    {activeTab === 1 && (
                      <div className="tab_panel">
                        <ul>
                          <li>
                            Achieve excellence in Computer Science & Engineering
                            by providing quality education and produce competent
                            technocrats who will meet ever changing industrial
                            and social needs.
                          </li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 2 && (
                      <div className="tab_panel">
                        <ul>
                          <li>
                            To impart necessary technical and professional
                            skills among students to make them employable
                          </li>
                          <li>
                            To produce competent technocrats to meet industrial
                            challenges with societal and environmental concerns
                          </li>
                          <li>To establish effective institute-industry interaction</li>
                          <li>To motivate students for lifelong learning that will enable them to choose better career opportunities</li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 3 && (
                      <div className="tab_panel">
                        <ul>
                          <li>M-1 : Make Students industry ready by imparting necessary technical and professional skills</li>
                          <li>M-2 : Create awareness among students for societal and environmental concerns</li>
                          <li>M-3 : Establish institute-industry interaction</li>
                          <li>M-4 : Inculcate the spirit of lifelong learning among students for career enhancement</li>
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
