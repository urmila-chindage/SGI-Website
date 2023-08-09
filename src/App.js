import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route,HashRouter } from "react-router-dom";
import Home from "./Screens/Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import Contact from './Screens/Contact/Contact';
import AboutSGI from './Screens/About/AboutSGI';
import Logo from './Screens/About/Logo';
import StudentLogin from './Screens/LoginandRegistration/Student/StudentLoginSignup';
import StaffLogin from './Screens/LoginandRegistration/Staff/StaffLogin';
import AdmissionForm from './Screens/AdmissionForm/AdmissionForm';

import BasicScienceDept from './Screens/Departments/BasicScienceFY/BasicScienceDept';
import BasicScienceHodDesk from './Screens/Departments/BasicScienceFY/HodDesk';
import BasicScienceStaffProfile from './Screens/Departments/BasicScienceFY/StaffProfile';
import BasicScienceTechnicalStaff from './Screens/Departments/BasicScienceFY/TechnicalStaff';
import BasicScienceLaboratory from './Screens/Departments/BasicScienceFY/Laboratories';

import CSEDept from "./Screens/Departments/Computer/JS/CSEDept";
import CSEHodDesk from './Screens/Departments/Computer/JS/HodDesk';
import CSEVisionMission from './Screens/Departments/Computer/JS/VisionMission';
import CSELaboratories from './Screens/Departments/Computer/JS/Laboratories';
import CSEProgramOutcome from './Screens/Departments/Computer/JS/ProgramOutcome';
import CSEStaffProfile from './Screens/Departments/Computer/JS/StaffProfile';
import CSETechnicalStaff from './Screens/Departments/Computer/JS/TechnicalStaff';

import ElectricalDept from './Screens/Departments/Electrical/ElectricalDept';
import ElectricalHodDesk from './Screens/Departments/Electrical/HodDesk';
import ElectricalVisionMission from './Screens/Departments/Electrical/VisionMission';
import ElectricalProgramOutcome from './Screens/Departments/Electrical/ProgramOutcome';
import ElectricalStaffProfile from './Screens/Departments/Electrical/StaffProfile';
import ElectricalTechnicalStaff from './Screens/Departments/Electrical/TechnicalStaff';

import CivilDept from './Screens/Departments/Civil/CivilDept';
import CivilHodDesk from './Screens/Departments/Civil/HodDesk';
import CivilVisionMission from './Screens/Departments/Civil/VisionMission';
import CivilProgramOutcome from './Screens/Departments/Civil/ProgramOutcome';
import CivilStaffProfile from './Screens/Departments/Civil/StaffProfile';
import CivilTechnicalStaff from './Screens/Departments/Civil/TechnicalStaff';

import MechDept from './Screens/Departments/Mechanical/MechanicalDept';
import MechHodDesk from './Screens/Departments/Mechanical/HodDesk';
import MechVisionMission from './Screens/Departments/Mechanical/VisionMission';
import MechProgramOutcome from './Screens/Departments/Mechanical/ProgramOutcome';
import MechStaffProfile from './Screens/Departments/Mechanical/StaffProfile';
import MechTechnicalStaff from './Screens/Departments/Mechanical/TechnicalStaff';

import ETCDept from './Screens/Departments/Electronics/ETCDept';
import ETCHodDesk from './Screens/Departments/Electronics/HodDesk';
import ETCVisionMission from './Screens/Departments/Electronics/VisionMission';
import ETCProgramOutcome from './Screens/Departments/Electronics/ProgramOutcome';
import ETCStaffProfile from './Screens/Departments/Electronics/StaffProfile';
import ETCTechnicalStaff from './Screens/Departments/Electronics/TechnicalStaff';

import Library from './Screens/Departments/Library/Library';
import EJournals from './Screens/Departments/Library/EJournals';

import Hostel from "./Screens/Facilities/Hostel";
import Classrooms from "./Screens/Facilities/Classrooms";
import Laboratories from "./Screens/Facilities/Laboratories";
import Gymnasium from "./Screens/Facilities/Gymnasium";
import Swimmingpool from "./Screens/Facilities/Swimmingpool";
import Auditorium from "./Screens/Facilities/Auditorium";
import ConferenceHall from "./Screens/Facilities/ConferenceHall";
import Cafeteria from "./Screens/Facilities/Cafeteria";
import PlayingGround from "./Screens/Facilities/PlayingGround";
import TennisCourt from "./Screens/Facilities/TennisCourt";
import More from "./Screens/Facilities/More";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalData, setModalData] = useState({
    imageURL: "",
    moreInfoURL: "",
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router basename="/">
    <div
    className={isModalOpen ? "modal" : "modal closed-modal"}
    id="modal"
    onClick={(e) => {
      setIsModalOpen(false);
      e.stopPropagation();
    }}
  >
    <div
      className="modal-content"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="close-btn" onClick={closeModal}>
        <button className="btn btn-danger p-2">
        <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
      <img
        src={require("./Images/Modal/SGI-Ad.jpg")}
        alt="modal"
        className="modal-img img-fluid"
      />
    </div>
  </div>

  
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about/aboutsgi" element={<AboutSGI/>} />
          <Route exact path="/about/logo" element={<Logo/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/studentlogin" element={<StudentLogin/>} />
          <Route exact path="/stafflogin" element={<StaffLogin/>} />
          <Route exact path="/admissionform" element={<AdmissionForm/>} />

      {/* --------------------Basic Science Department Links------------------------------------------------*/}
        <Route path="/department/fy" exact element={<BasicScienceDept/>} />
        <Route path="/department/fy/hoddesk" exact element={<BasicScienceHodDesk/>} />
        <Route path="/department/fy/teachingstaff" exact element={<BasicScienceStaffProfile/>} />
        <Route path="/department/fy/technicalstaff" exact element={<BasicScienceTechnicalStaff/>} />
        <Route path="/department/fy/labs" exact element={<BasicScienceLaboratory/>} />
      {/* --------------------Basic Science Department Links Ends------------------------------------------------*/}

      {/* --------------------CSE Department Links------------------------------------------------*/}
        <Route path="/department/cse" exact element={<CSEDept/>} />
        <Route path="/department/cse/hoddesk" exact element={<CSEHodDesk/>} />
        <Route path="/department/cse/visionmission" exact element={<CSEVisionMission/>} />
        <Route path="/department/cse/labs" exact element={<CSELaboratories/>} />
        <Route path="/department/cse/programs" exact element={<CSEProgramOutcome/>} />
        <Route path="/department/cse/teachingstaff" exact element={<CSEStaffProfile/>} />
        <Route path="/department/cse/technicalstaff" exact element={<CSETechnicalStaff/>} />
      {/* --------------------CSE Department Links Ends------------------------------------------------*/}

      {/* --------------------Electrical Department Links------------------------------------------------*/}
        <Route path="/department/electrical" exact element={<ElectricalDept/>} />
        <Route path="/department/electrical/hoddesk" exact element={<ElectricalHodDesk/>} />
        <Route path="/department/electrical/visionmission" exact element={<ElectricalVisionMission/>} />
        <Route path="/department/electrical/programs" exact element={<ElectricalProgramOutcome/>} />
        <Route path="/department/electrical/teachingstaff" exact element={<ElectricalStaffProfile/>} />
        <Route path="/department/electrical/technicalstaff" exact element={<ElectricalTechnicalStaff/>} />
      {/* --------------------Electrical Department Links Ends------------------------------------------------*/}

      {/* --------------------Civil Department Links------------------------------------------------*/}
        <Route path="/department/civil" exact element={<CivilDept/>} />
        <Route path="/department/civil/hoddesk" exact element={<CivilHodDesk/>} />
        <Route path="/department/civil/visionmission" exact element={<CivilVisionMission/>} />
        <Route path="/department/civil/programs" exact element={<CivilProgramOutcome/>} />
        <Route path="/department/civil/teachingstaff" exact element={<CivilStaffProfile/>} />
        <Route path="/department/civil/technicalstaff" exact element={<CivilTechnicalStaff/>} />
      {/* --------------------Civil Department Links Ends------------------------------------------------*/}

      {/* --------------------Mechanical Department Links------------------------------------------------*/}
        <Route path="/department/mechanical" exact element={<MechDept/>} />
        <Route path="/department/mechanical/hoddesk" exact element={<MechHodDesk/>} />
        <Route path="/department/mechanical/visionmission" exact element={<MechVisionMission/>} />
        <Route path="/department/mechanical/programs" exact element={<MechProgramOutcome/>} />
        <Route path="/department/mechanical/teachingstaff" exact element={<MechStaffProfile/>} />
        <Route path="/department/mechanical/technicalstaff" exact element={<MechTechnicalStaff/>} />
      {/* --------------------Mechanical Department Links Ends------------------------------------------------*/}

      {/* --------------------Electronics Department Links------------------------------------------------*/}
        <Route path="/department/electronics" exact element={<ETCDept/>} />
        <Route path="/department/electronics/hoddesk" exact element={<ETCHodDesk/>} />
        <Route path="/department/electronics/visionmission" exact element={<ETCVisionMission/>} />
        <Route path="/department/electronics/programs" exact element={<ETCProgramOutcome/>} />
        <Route path="/department/electronics/teachingstaff" exact element={<ETCStaffProfile/>} />
        <Route path="/department/electronics/technicalstaff" exact element={<ETCTechnicalStaff/>} />
      {/* --------------------Electronics Department Links Ends------------------------------------------------*/}

      {/* --------------------Library Department Links------------------------------------------------*/}
        <Route path="/department/library" exact element={<Library/>} />
        <Route path="/department/library/ejournals" exact element={<EJournals/>} />
      {/* --------------------Library Department Links Ends------------------------------------------------*/}

       {/* --------------------Facilities Menu Links------------------------------------------------*/}
        <Route path="/facilities/hostel" exact element={<Hostel/>} />
        <Route path="/facilities/classrooms" exact element={<Classrooms/>} />
        <Route path="/facilities/laboratories" exact element={<Laboratories/>} />
        <Route path="/facilities/Gymnasium" exact element={<Gymnasium/>} />
        <Route path="/facilities/swimmingpool" exact element={<Swimmingpool/>} />
        <Route path="/facilities/auditorium" exact element={<Auditorium/>} />
        <Route path="/facilities/conferencehall" exact element={<ConferenceHall/>} />
        <Route path="/facilities/cafeteria" exact element={<Cafeteria/>} />
        <Route path="/facilities/playingground" exact element={<PlayingGround/>} />
        <Route path="/facilities/tenniscourt" exact element={<TennisCourt/>} />
        <Route path="/facilities/more" exact element={<More/>} />
      {/* --------------------Facilities Menu Links Ends------------------------------------------------*/}

      </Routes>
    </Router>

  
  );
}

export default App;
