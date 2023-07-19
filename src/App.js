import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route,HashRouter } from "react-router-dom";
import Home from "./Screens/Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";


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
      </Routes>
    </Router>

  
  );
}

export default App;
