import React from "react";
import "./Spiner.css";

const Spiner = () => {
  return (
    <div className="row spiner-container">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spiner;
