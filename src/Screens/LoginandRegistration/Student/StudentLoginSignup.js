import React, { useState, useRef } from "react";
import Header from "../../../ReusableComponents/JS/Header";
import Footer from "../../../ReusableComponents/JS/Footer";
import Profile from "../../../Images/profileimage.jpg";
import "../Student/StudentLogin.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

const StudentLoginSignup = () => {
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [passwordType, setPasswordType] = useState("password");

  const [student, setStudent] = useState({
    name: "",
    email: "",
    dept: "",
    year: "",
    mobile: "",
    password: "",
  });

  const [profile, setProfile] = useState(Profile);

  const { name, email, dept, year, mobile, password, avatar } = student;

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
  };

  const registerDataChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setProfile(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setStudent({ ...student, [e.target.name]: e.target.value });
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
      <Header />

      <div className="LoginSignUpContainer">
        <div className="StudentLoginSignUpBox">
          <div>
          <div className="login_signUp_toggle">
            <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
            <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
          </div>
          <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>

            <div className="loginPassword">
              <LockOpenIcon />
              <input
                type={passwordType}
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />

              <button className="showhidebtn" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityIcon />
                )}
              </button>
            </div>

            <input type="submit" value="Login" className="loginBtn" />
          </form>

          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <FaceIcon />
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />
            </div>

            <div className="signUpEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>

            <div className="signUpDept">
              <select
                className="select-dropdown"
                required
                value={dept}
                name="dept"
                onChange={registerDataChange}
              >
                <option value="">--Choose Department--</option>
                <option value="Computer">Computer</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electrical">Electrical</option>
                <option value="Electronics">Electronics</option>
                <option value="Civil">Civil</option>
              </select>
            </div>

            <div className="signUpYear">
              <select
                className="select-dropdown"
                required
                value={year}
                name="year"
                onChange={registerDataChange}
              >
                <option value="">--Choose Year--</option>
                <option value="FY">FY</option>
                <option value="SY">SY</option>
                <option value="TY">TY</option>
              </select>
            </div>

            <div className="signUpMobile">
              <PhoneIphoneIcon />
              <input
                type="Number"
                placeholder="Mobile Number"
                required
                name="mobile"
                value={mobile}
                onChange={registerDataChange}
              />
            </div>

            <div className="signUpPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />

              <button className="showhidebtn" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityIcon />
                )}
              </button>
            </div>

            <div id="registerImage">
              <img src={profile} alt="Profile Picture" />
              <input
                type="file"
                name="profile"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div>

            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StudentLoginSignup;
