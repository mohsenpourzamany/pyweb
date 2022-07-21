import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { img, title, category, desc } = props;
  return (
    <div className="col-md-3 card-container">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text category">{category}</p>
          <p className="card-text desc">{desc}</p>
          <Link to="/" className="btn btn-primary">
            جزییات بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
