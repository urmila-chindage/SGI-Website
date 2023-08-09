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
            <div className="row">
              <div className="col text-center">
                <h2>Vision & Mission -MSBTE</h2>


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
                          Achieve excellence in Civil Engineering discipline that will help students to contribute towards the growth of industry & society with a concern for environment.
                          </li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 2 && (
                      <div className="tab_panel">
                        <ul>
                          <li>
                          To impart domain specific knowledge, professional and communication skills among students with the aid of supportive facilities
                          </li>
                          <li>
                          To expose students to the recent trends and technologies with industry collaboration.
                          </li>
                          <li>To create awareness among civil engineering students about environmental and societal concerns</li>
                          <li>To inculcate a spirit of life-long learning with ethical bent of mind for better career enhancement</li>
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
