import React, { useState,useEffect } from "react";
import ProfilePhoto from "../../../Images/profileimage.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "../CSS/PhotoGallery.css";
import AOS from "aos";
import "aos/dist/aos.css";

const PhotoGallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const galleryImages = [
    {
      img: require ("../../../Images/home/Photo-Gallery/photo1.jpg"),
    },
    {
      img: require ("../../../Images/home/Photo-Gallery/photo2.jpg"),
    },
    {
      img: require ("../../../Images/home/Photo-Gallery/photo3.jpg"),
    },
    {
      img: require ("../../../Images/home/Photo-Gallery/photo4.jpg"),
    },
    {
      img: require ("../../../Images/home/Photo-Gallery/photo5.jpg"),
    },
    {
      img: require ("../../../Images/home/Photo-Gallery/photo6.jpg"),
    },
    {
      img: require ("../../../Images/home/Photo-Gallery/photo7.jpg"),
    },
    {
      img: require ("../../../Images/home/Photo-Gallery/photo8.jpg"),
    },
    {
      img: require ("../../../Images/home/Photo-Gallery/photo9.jpg"),
    },
    {
      img: require ("../../../Images/home/Photo-Gallery/photo10.jpg"),
    },
    {
      img: require ("../../../Images/home/Photo-Gallery/photo11.jpg"),
    },
    {
      img: require ("../../../Images/home/Photo-Gallery/photo12.jpg"),
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
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
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
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}

      <div className="photogallery-section container-fluid">
        <div className="row" style={{justifyContent: "center"}}>
        <div className="text-center p-3 photo-section col-md-5">
         
        <div className="title-section" data-aos="fade-up">
          <h4 className="text-center px-3 mb-5">
           Photo Gallary
          </h4>
          </div>
         
          <div className="galleryWrap">
         
            {galleryImages &&
              galleryImages.map((slide, index) => {
                return (
                  <div
                    className="single"
                    key={index}
                    onClick={() => handleOpenModal(index)}
                  >
                    <img src={slide.img} alt="" />
                  </div>
                );
              })}
          </div>
        </div>
       

        <div className="testimonial-section text-center p-3 col-md-5 offset-1" data-aos="fade-up">
         
        <div className="title-section">
          <h4 className="text-center px-3">
              Testimonials
          </h4>

          <div id="testmonials" className="carousel slide row" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div>
                <img
                  src={ProfilePhoto}
                  className="profile-image col-md-12"
                  alt="Profile Photo"
                />
              </div>
              <div className="testimonial-content col-md-12">
              <h6>Xyz Pqr</h6>
                <p>
                I have completed my Degree in Computer Science from Sanjay Ghodawat Institute. During those four years I experienced a wonderful learning environment in the college as well as in my department. The freedom that I enjoyed around the laboratory of my department helped me to develop an insight in scientific research. The co-curricular and extracurricular activities like science exhibitions, which were often held in the college, created a vibrant environment that simultaneously challenged and stimulated us. The Computer Science Department boasts a group of extremely knowledgeable faculty who continually encouraged and mentored us. They were always willing to help us out whenever approached and I do hope that they will continue to do so in future as well.
                </p>
               
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="10000">
              <div>
                <img
                  src={ProfilePhoto}
                  className="profile-image col-md-12"
                  alt="Profile Photo"
                />
              </div>
              <div className="testimonial-content col-md-12">
              <h6>Abc Xyz</h6>
               <p>
                Sanjay Ghodawat Institute provided me with an opportunity to enhance my skill and enriched my knowledge. The College has very interactive teachers who made everyone excited about the classes. I cherish each moment spent in College extra-curricular activities and will remember these moments forever.
                </p>
               
              </div>
            </div>
          </div> 
         
          <button
            className="carousel-control-prev color-black"
            type="button"
            data-bs-target="#testmonials"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next color-black"
            type="button"
            data-bs-target="#testmonials"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
          </div>
        </div>
      </div>
      </div>
   
  );
};

export default PhotoGallery;
