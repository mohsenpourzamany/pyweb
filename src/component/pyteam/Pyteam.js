import React from "react";
import { Link } from "react-router-dom";
import "./Pyteam.css";
import lin from "../../assets/images/linkedin.png";
import git from "../../assets/images/github.png";
import mem from "../../assets/images/member.png";
const Pyteam = () => {
  return (
    <div className="row pyteam">
      <h2>اعضای تیم پای وبینو</h2>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={mem} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Mrs jonson</h4>
            <h5 className="card-title">python programmer</h5>
            <p className="card-text"> More than 5 yaers </p>
            <Link to="/" className="btn btn-outline-primary px-4">
              <img className="img-pyteam" src={lin} alt="/" />
            </Link>
            <Link to="/" className="btn btn-primary me-3 px-4">
              <img className="img-pyteam" src={git} alt="/" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={mem} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Mrs jonson</h4>
            <h5 className="card-title">python programmer</h5>
            <p className="card-text"> More than 5 yaers </p>
            <Link to="/" className="btn btn-outline-primary px-4">
              <img className="img-pyteam" src={lin} alt="/" />
            </Link>
            <Link to="/" className="btn btn-primary me-3 px-4">
              <img className="img-pyteam" src={git} alt="/" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={mem} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Mrs jonson</h4>
            <h5 className="card-title">python programmer</h5>
            <p className="card-text"> More than 5 yaers </p>
            <Link to="/" className="btn btn-outline-primary px-4">
              <img className="img-pyteam" src={lin} alt="/" />
            </Link>
            <Link to="/" className="btn btn-primary me-3 px-4">
              <img className="img-pyteam" src={git} alt="/" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pyteam;
