import React, {useEffect} from "react";
import "../CSS/NewsSection.css";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const NewsSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  function handleMouseOver() {
    document.getElementById("scroll_news").stop();
  }

  function handleMouseLeave() {
    document.getElementById("scroll_news").start();
  }

  function handleMouseOver1() {
    document.getElementById("scroll_important_links").stop();
  }

  function handleMouseLeave1() {
    document.getElementById("scroll_important_links").start();
  }
  return (
    <div className="container newsSection mb-5" data-aos="fade-up">
      <div className="row">
        <div className="col-md-6 text-center">
          <h4 className="section-title bg-white text-center px-3 m-5">
            Latest News
          </h4>
          <marquee
            id="scroll_news"
            behavior="scroll"
            direction="up"
            scrollamount="4"
            className="marquee-container"
          >
            <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
              <div className="latest-news-section">
                <ul>
                  <li>
                    <div className="news-date">
                      <span>15</span>
                      <span>March 2023</span>
                    </div>
                    <div className="news-link">
                      <Link to="/newspage">
                        <h6>
                          Extension of Approval (EOA) Letters from Inception of
                          Institute
                        </h6>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="news-date">
                      <span>5</span>
                      <span>March 2023</span>
                    </div>
                    <div className="news-link">
                      <Link to="/newspage">
                        <h6>NBA Accreditation Till 2025 </h6>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="news-date">
                      <span>24</span>
                      <span>July 2023</span>
                    </div>
                    <div className="news-link">
                      <Link to="/newspage">
                        <h6>Admissions Information Session</h6>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </marquee>
        </div>

        <div className="col-md-6 text-center">
          <h4 className="section-title bg-white text-center px-3 m-5">
            Important Links
          </h4>
          <marquee
            id="scroll_important_links"
            behavior="scroll"
            direction="up"
            scrollamount="4"
             className="marquee-container"
          >
            <div
              onMouseEnter={handleMouseOver1}
              onMouseLeave={handleMouseLeave1}
            >
              <div className="latest-news-section">
                <ul>
                  <li>
                    <div className="news-date">
                      <span>15</span>
                      <span>March 2023</span>
                    </div>
                    <div className="news-link">
                      <Link to="/newspage">
                        <h6>
                          Extension of Approval (EOA) Letters from Inception of
                          Institute
                        </h6>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="news-date">
                      <span>5</span>
                      <span>March 2023</span>
                    </div>
                    <div className="news-link">
                      <Link to="/newspage">
                        <h6>NBA Accreditation Till 2025 </h6>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="news-date">
                      <span>24</span>
                      <span>July 2023</span>
                    </div>
                    <div className="news-link">
                      <Link to="/newspage">
                        <h6>Admissions Information Session</h6>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
