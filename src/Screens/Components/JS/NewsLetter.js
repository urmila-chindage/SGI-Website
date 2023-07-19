import React, { useEffect,useState } from "react";
import "../CSS/NewsLetter.css";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsLetter = () => {
  const [email,setEmail] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
      <h4>Subscribe now!</h4>
        <form>
          <div className="form-control form-container">
            <input type="email"
                  name="email"
                  required=""
                  placeholder="Your Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
            <button>Subscribe</button>
          </div>
        </form>
       
      </div>
    </section>
  );
};

export default NewsLetter;