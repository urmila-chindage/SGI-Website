import React from "react";
import Main from "../../../ReusableComponents/JS/Main";
import "./library.css";
import MenuLinks from "./MenuLinks";
import DeptMenuList from "../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../Components/JS/ScrollToTop";

const EJournals = () => {
  return (
    <Main className="container-fluid cse w-100 p-0">
      <ScrollToTop showBelow={250} />
      <div className="dept-bg">
        <div className="dept-heading">
          <h1 className="pt-1">Library</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <DeptMenuList dept="Library" subMenu={MenuLinks}/>

            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content" data-target="#navbar-example3" data-offset="0">
            <div className="card ">
              <div className="card-header text-center ">Guidelines for using electronic resources, computers and photocopies</div>
              <div className="card-body">
                  <li>You can only use the computers if you are a member of the library</li>
                  <li>Electronic databases can only be used in a way that complies with the database copyright holders' terms and conditions. Unauthorized use such as redistributing or selling data is strictly prohibited</li>
                  <li>Material must be photocopied within the rules of copyright.</li>
              </div>
            </div>  

            <div className="card ">
              <div className="card-header text-center ">IEEE</div>
              <div className="card-body">
                  <p className="card-text">IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities</p>
              </div>
            </div>  

            <div className="card ">
              <div className="card-header text-center ">ASME</div>
              <div className="card-body">
                  <p className="card-text">ASME is a not-for-profit membership organization that enables collaboration, knowledge sharing, career enrichment, and skills development across all engineering disciplines, toward a goal of helping the global engineering community develop solutions to benefit lives and livelihoods. Founded in 1880 by a small group of leading industrialists, ASME has grown through the decades to include more than 120,000 members in over 150 countries worldwide</p>
              </div>
            </div> 

            <div className="card ">
              <div className="card-header text-center ">ASCE</div>
              <div className="card-body">
                  <p className="card-text">ASCE founded in 1852, the American Society of Civil Engineers (ASCE) represents more than 140,000 members of the civil engineering profession worldwide and is America's oldest national engineering society</p>
              </div>
            </div> 

            <table className="table table-striped table-hover">
            <thead className="table-heading">
                <tr>
                  <th>E Journal</th>
                  <th>Link to Access E-Resources</th>
                </tr>
                </thead>
            <tbody>
             
                <tr>
                  <th>IEEE</th>
                  <td>
                    <a href="http://www.ieee.org/ieeexplore">
                      http://www.ieee.org/ieeexplore
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>ASME</th>
                  <td>
                    <a href="http://asmedl.org/jounals/doc/ASMEDl-home/jrnls">
                      http://asmedl.org/jounals/doc/ASMEDl-home/jrnls
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>ASCE</th>
                  <td>
                    <a href="http://www.asce.org">http://www.asce.org</a>
                  </td>
                </tr>
                <tr>
                  <th>McGraw Hill</th>
                  <td>
                    <a href="http://2.accessengineeringlibrary.com">
                      http://2.accessengineeringlibrary.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>ELSEVIER</th>
                  <td>
                    <a href="www.sciencedirect.com">www.sciencedirect.com</a>
                  </td>
                </tr>
                <tr>
                  <th>ASTM</th>
                  <td>
                    <a href="http://enterprise.astm.org">
                      http://enterprise.astm.org
                    </a>
                  </td>
                </tr>

                <tr>
                  <th>SPRINGER</th>
                  <td>
                    <a href="www.springer.com">www.springer.com</a>
                  </td>
                </tr>
                <tr>
                  <th>J Gate Engineering &amp; Management</th>
                  <td>
                    <a href="http://www.jagte.in">http://www.jagte.in</a>,{" "}
                    <a href="http://www.j-gate.informindia.co.in">
                      http://www.j-gate.informindia.co.in
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>EBSCO</th>
                  <td>
                    <a href="http://search.ebscohost.com">
                      http://search.ebscohost.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>



          </div>
        </div>
      </div>
    </Main>
  );
};

export default EJournals;
