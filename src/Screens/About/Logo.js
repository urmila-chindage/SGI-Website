import React from "react"; 
import Main from "../../ReusableComponents/JS/Main";
import "./CSS/Logo.css"

function Logo() {
  return (
    <>
      <Main>
        <div className="container ">
          <div className="card m-4">
            <div className="row " >
              <div className="col-lg-4 d-flex text-center justify-content-center align-items-center">
                <img
                  src={require("../../Images/sgi-footer-logo.png")}
                  className="card-img pt-2 logoimg"
                  alt="..."
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body">
                  <h3 className="card-title">About our Logo</h3>
                  <hr></hr>

                  <p className="card-text">
                    <strong style={{color:'red'}}>Sanjay Ghodawat Institute</strong> has a remarkable logo with a
                    shield like shape bearing five stars and the symbol of the
                    Sun. The logo has an aura of excellence and richness in its
                    presentation. The shield stands for the defense of great
                    moral force that Nature contains in it. The five stars that
                    are on the top of the logo stand for five great values of
                    commitment, excellence, innovation, dynamism and morality.
                    In the middle the acronym SGI stands for the name of the
                    Institution. The symbol of the Sun portrays the supremacy of
                    the institution in educational field as the sun in our
                    planetary system. The red color expresses the commitment
                    that the institution has towards the society in providing
                    the best education for the betterment of the society. In the
                    logo, the white background suggests the spiritual strength
                    on which the institution stands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}

export default Logo;
