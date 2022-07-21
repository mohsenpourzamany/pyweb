import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <div className="navbar-logo">
          <img src={logo} alt="/" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" collapse navbar-collapse navbar-menu"
          id="navbarNavDropdown"
        >
          <ul className="navbar-menu navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="navbar-menu-link nav-link active"
                aria-current="page"
                href="#"
              >
                صفحه نخست
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/project"
                className="navbar-menu-link nav-link"
                href="#"
              >
                پروژه ها
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="navbar-menu-link nav-link"
                href="#"
              >
                تعرفه خدمات
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pyweb" className="navbar-menu-link nav-link" href="#">
                پای وبینو
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signin"
                className="navbar-menu-link nav-link last-child"
                href="#"
              >
                ورود / ثبت نام
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
