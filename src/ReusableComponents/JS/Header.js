import React from "react";
import "../CSS/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container-fluid w-100 banner">
      <Link to="/">
      <img src={require("../../Images/SGI-New-Logo.jpg")} className="bannner-img" />
      </Link>
    </div>
  );
};
// src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/staticFiles%2Fbanner%20v1.2.jpg?alt=media&token=0bfa5941-9473-41a1-9454-8d9632f1e5c8"
export default Header;