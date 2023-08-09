import React from "react";
import LaboratoryCard from "../../ReusableComponent/JS/LaboratoryCard";
import Main from "../../../../ReusableComponents/JS/Main";
import MenuLinks from "../JS/MenuLinks";
import DeptMenuList from "../../ReusableComponent/JS/DeptMenuList";
import ScrollToTop from "../../../Components/JS/ScrollToTop";

const Laboratories = () => {
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
            <DeptMenuList dept="Computer Science" subMenu={MenuLinks}/>

            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-8 dept-content" data-target="#navbar-example3" data-offset="0">
            <h3 className="text-center">Infrastructure &amp; Laboratories</h3>
            <p className="text-center">
              All machines are enabled to work on various platforms like Windows
              and Linux. The labs have been scientifically designed to provide
              freedom of movement.
              <br />
              <br />
              CSE department consists of different laboratories listed below.
            </p>
            <div className="m-2">
              <LaboratoryCard
                labName="Computer Center Lab"
                labcost="15,48,233"
                invoiceurl=""
                use="Uses for internet center."
                description="This lab is equipped with 30 systems of Dell OptiPlex Series With Intel I3 Processor, 3 Printers , 3 scanners and 1 projector. This is central lab of the Polytechnic consisting of DELL SERVER X206 acting as central ERP server."
                imageurl={require("../../../../Images/Departments/CSE/CSE1.jpg")}
                itemno={0}
              />
            </div>

            <div className="m-2">
              <LaboratoryCard
                labName="Programming Lab"
                labcost="9,40,704.00"
                invoiceurl=""
                use="Uses for programming subjects like C, Java, Databases etc"
                description="This lab is equipped with 24 systems of Dell OptiPlex Series With Intel I3 Processor with Software's Like C, Java, Oracle, VB 6.0"
                imageurl={require("../../../../Images/Departments/CSE/CSE2.jpg")}
                itemno={1}
              />
            </div>

            <div className="m-2">
              <LaboratoryCard
                labName="Basic Workshop Lab"
                labcost="6,59,085.00"
                invoiceurl=""
                use="Uses for computer hardware demonstration and hardware testing"
                description="This lab is equipped with 20 systems of Dell OptiPlex Series With Intel I3 Processor , 1 prionter with Hardware Material, Lan Tester, Crimping Tool."
                imageurl={require("../../../../Images/Departments/CSE/CSE3.jpg")}
                itemno={2}
              />
            </div>

            <div className="m-2">
              <LaboratoryCard
                labName="Network Lab"
                labcost="9,58,894.00"
                invoiceurl=""
                use="Uses for networking related practical's, open source Red Hat Linux, SUSE Server products and database use."
                description="This lab is equipped with 24 systems of Dell OptiPlex Series with Intel I3 Processor , 24 Port Switch, UTP Cable's & Networking Ports, Sockets."
                imageurl={require("../../../../Images/Departments/CSE/CSE4.jpg")}
                itemno={3}
              />
            </div>

            <div className="m-2">
              <LaboratoryCard
                labName="Software Testing Lab"
                labcost="9,95,106.00"
                invoiceurl=""
                use="Uses for programming subjects software testing and error handlings."
                description="This lab is equipped with 20 systems of Dell OptiPlex Series with Intel I3 Processor , Software's Like C, Java, Oracle products"
                imageurl={require("../../../../Images/Departments/CSE/CSE5.jpg")}
                itemno={4}
              />
            </div>

            <div className="m-2">
              <LaboratoryCard
                labName="Linux Lab"
                labcost="10,39,630.00"
                invoiceurl=""
                use="Uses for Linux server practices and Linux programming subjects"
                description="This lab is equipped with 20 systems of Dell OptiPlex Series with Intel I3 Processor specially designed For Open Source, Linux server practical's and Linux programming."
                imageurl={require("../../../../Images/Departments/CSE/CSE6.jpg")}
                itemno={5}
              />
            </div>

            <div className="m-2">
              <LaboratoryCard
                labName="Programming Lab 1"
                labcost="10,76,380.00"
                invoiceurl=""
                use="Usesd for programming subjects like C, Java, Databases etc."
                description="This lab is equipped with 20 systems of Dell OptiPlex Series with Intel I3 Processor , software's Like C, Java, Oracle, VB 6.0"
                imageurl={require("../../../../Images/Departments/CSE/CSE7.jpg")}
                itemno={6}
              />
            </div>

            <div className="m-2">
              <LaboratoryCard
                labName="Language Lab"
                labcost="9,78,006.00 "
                invoiceurl=""
                use="Uses for communication skills"
                description="This lab is equipped with 20 systems of Dell OptiPlex Series with Intel I3 Processor , 1 Printer , 1 Projector , Language Lab Software with headphones"
                imageurl={require("../../../../Images/Departments/CSE/CSE8.jpg")}
                itemno={7}
              />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Laboratories;
