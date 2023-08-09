import React from "react";
import Main from "../../ReusableComponents/JS/Main";
import "./Map.css";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Main>
        <div className="bg-img">
          <div className="container">
            <div className="row p-5">
              <div className="col-lg-6">
                <div className="map-box ">
                    <iframe
                      class="gmap_iframe rounded border border-light"
                      width="100%"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=650&amp;height=500&amp;hl=en&amp;q=sanjay ghodawat university&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="my-2 title">Contact US</h3>
                <form action="" className="">
                  <input type="text" placeholder="Name" className="input-box" required></input>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input-box" 
                    required
                  ></input>
                  <input type="email" placeholder="E-Mail" className="input-box" required></input>
                  <textarea placeholder="Message" className="input-box" rows="8"></textarea>
                  <button type="submit" className="btn btn-danger" style={{display:'block',margin:'auto'}}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}

export default Contact;
