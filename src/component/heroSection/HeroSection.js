import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import tel from "../../assets/images/telegram.png";
import git from "../../assets/images/github.png";
import wat from "../../assets/images/whatsapp.png";
import gim from "../../assets/images/gmail.png";
import services from "../../assets/images/services.png";
import lin from "../../assets/images/linkedin.png";

const HeroSectin = () => {
  const [call, setCall] = useState("");

  const servicesHandler = (event) => {
    event.preventDefault();
    setCall(event.target.value);
    setCall("");
  };
  return (
    <div className="row hero">
      <div className="col-md-6 hero-left">
        {/* <h1>
          <span>پای وبینو</span>
        </h1> */}
      </div>
      <div className="col-md-6 hero-right">
        <button
          className="btn btn-primary call"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          onClick={servicesHandler}
          value={call}
        >
          <img src={services} alt="/" />
        </button>

        <div
          className="offcanvas offcanvas-end social"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="row offcanvas-header">
            <Link to="/">
              <img src={tel} alt="/" />
            </Link>
            <Link to="/">
              <img src={git} alt="/" />
            </Link>
            <Link to="/">
              <img src={wat} alt="/" />
            </Link>
            <Link to="/">
              <img src={gim} alt="/" />
            </Link>
            <Link to="/">
              <img src={lin} alt="/" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectin;
