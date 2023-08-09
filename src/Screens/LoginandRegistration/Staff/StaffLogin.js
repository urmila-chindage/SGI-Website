import React, { useState, useRef } from "react";
import Header from "../../../ReusableComponents/JS/Header";
import Footer from "../../../ReusableComponents/JS/Footer";
import Main from "../../../ReusableComponents/JS/Main";
import { Link, useNavigate } from "react-router-dom";
import "../Staff/StaffLogin.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

const StaffLogin = () => {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [passwordType, setPasswordType] = useState("password");

  const [staff, setStaff] = useState({
    email: "",
    password: "",
  });

  const loginSubmit = (e) => {
    e.preventDefault();
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

      <div className="StaffLoginContainer">
       
        <div className="StaffLoginBox">
        <h4 className="form-title bg-white text-center px-3">
          Staff Login
        </h4>
          <form className="loginForm" onSubmit={loginSubmit}>
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

         
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StaffLogin;
