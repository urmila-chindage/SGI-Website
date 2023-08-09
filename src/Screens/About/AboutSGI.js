import React from "react";
import Main from "../../ReusableComponents/JS/Main";
import "./CSS/Logo.css"

function AboutSGI() {
  return (
    <>
      <Main>
        <div className="container">
          {/* <div className="d-flex text-center justify-content-center align-items-center">
            <img src={require("../../Images/logo.jpg")} className="logoimg " alt="institute building" />
          </div> */}
          <div className="p-4 card m-4">
            <div className=" text-center pb-2">
              <h3>About Sanjay Ghodawat Institute</h3>
              <hr/>
            </div>
            <div className="">
              <p className="">
                Sou. Sushila Danchand Ghodawat charitable trusts Sanjay
                Ghodawat Institute Atigre, Kolhapur is the growing institute imparting technical
                knowledge and skills to the students and society at large. It is
                an unaided polytechnic located in Western region of Maharashtra.
              </p>
              <p className="">
                Sou. Sushila Danchand Ghodawat Charitable Trust's Sanjay
                Ghodawat Polytechnic started with a vision to
                impart the best technical knowledge and skills to the students
                across the country. Its aim is to build and provide the team of
                young technocrats who will be the leading catalysts in the
                development of society and nation at large. Currently, the
                Polytechnic runs five different diploma engineering branches
                such as Civil, Mechanical, Electronics and Telecommunication,
                Computer Science and Engineering and Electrical Engineering with
                the total intake of 420 in first year and more than thousand
                including all years currently.
              </p>
              <p className="">
                The Laboratory of the college from
                Electrical Department has got BEST LABORATORY AWARD with first
                rank and prize of Rs. 50,000 throughout Maharashtra. Many
                students have got remarkable achievements in all the MSBTE Board
                examinations. Many students of the college have got good
                placements in national and multi-national companies of well
                repute. The polytechnic stands for performance par excellence.
              </p>
              <p className="">
                In the world where it is commonplace to see mediocrity as the
                order of the day, SGI always stands as the guiding star of
                brilliance, quality and deliverance beyond expectations.
                Innovativeness and Creativity are the hallmarks of a genius
                enterprise and SGI stands to be a stage where these qualities
                would be nurtured, encouraged and blossomed. Inner
                re-engineering towards a proactive outlook, courage to convert
                challenges into opportunities and an unyielding spirit with
                never-say-die attitude is expected from students, staff and
                management who are present in the grand precincts of the
                Institution. The genius is incomplete without the sense of
                social responsibility and SGI's ultimate goal remains the
                development of an attitude of gratitude that freely gives back
                without expectations.
              </p>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}

export default AboutSGI;
