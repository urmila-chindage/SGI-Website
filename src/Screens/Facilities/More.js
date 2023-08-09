import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Main from "../../ReusableComponents/JS/Main";
import "./facilities.css";

const More = () => {
  const hostelgalleryImages = [
    {
      img: require("../../Images/facilities/more/ATM01.jpg"),
    },
    {
      img: require("../../Images/facilities/more/Bus1.jpg"),
    },
    {
      img: require("../../Images/facilities/more/computer_lab.jpg"),
    },
    {
      img: require("../../Images/facilities/more/drawing_hall.jpg"),
    },
    {
      img: require("../../Images/facilities/more/Health_Care01.jpg"),
    },
    {
      img: require("../../Images/facilities/more/Parking03.jpg"),
    },
    {
      img: require("../../Images/facilities/more/reading_hall.jpg"),
    },
    {
      img: require("../../Images/facilities/more/seminar_room.jpg"),
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(hostelgalleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === hostelgalleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />
          <div className="fullScreenImage">
            <img src={hostelgalleryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}
      <Main>
        <div className="facility-photogallery container-fluid">
          <div className="container">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className=" m-2 text-center p-3">
                <div className="title-section">
                  <h4 className="text-center px-3 mt-3 mb-3">
                      More Photoes
                  </h4>
                </div>
              </div>
            </div>

            <div className="gallery-wrapper row mb-5">
              {hostelgalleryImages &&
                hostelgalleryImages.map((slide, index) => {
                  return (
                    <div
                      className="single col-md-3"
                      key={index}
                      onClick={() => handleOpenModal(index)}
                    >
                      <img className="gallery-image" src={slide.img} alt="" />
                      <div className="overlay-box">
                        <FontAwesomeIcon
                          className="search-icon"
                          icon={faMagnifyingGlass}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default More;