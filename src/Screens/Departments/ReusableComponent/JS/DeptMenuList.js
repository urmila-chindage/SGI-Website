import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../CSS/DeptMenuList.css";

const DeptMenu = ({ dept = "", subMenu = [{ title: "", path: "" }] }) => {
  let loc = useLocation();

  return (
    <div className="col-sm-4 col-lg-3 col-md-4 mb-4">
      <nav
        id="navbar-example3"
        className="navbar navbar-light flex-column mt-4 menubar-wrapper"
      >
        <span className="mb-3 DeptHeading">{dept}</span>
        <nav className="nav nav-pills flex-column nav-pills-wrapper">
          {subMenu.map((v, i) => (
            <Link
              className={`nav-link ${loc.pathname === v.path ? "active" : ""}`}
              to={v.path} key={i}
            >
              {v.title}
            </Link>
          ))}
        </nav>
      </nav>
    </div>
  );
};

export default DeptMenu;
