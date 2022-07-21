import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
const STYLE = ["btn--sign"];
const Button = (props) => {
  const { to, children, buttonStyle } = props;
  const ButtonSTyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  return (
    <Link to={to}>
      <button
        type="button"
        className={`btn ${ButtonSTyle} btn-primary `}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
