import React, { useState } from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const validate = () => {
    if (email === "") {
      setErrorMessage("email empty");
      return false;
    } else if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("email empty");
      return false;
    } else if (text === "") {
      setErrorMessage("text empty");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const textChengeHandler = () => {
    const validateResult = validate();
    if (validateResult) {
      setErrorMessage("");
    } else {
      setErrorMessage("something went wrong");
      return false;
    }
  };

  const emailHandler = (event) => {
    setEmail(event.targrt.value);
  };
  const textHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="footer">
        <p style={{ color: "red", fontSize: "28" }}>{errorMessage}</p>
        <div className="row container">
          <div className="col-md-3 col-first">
            <h6>پای وبینو</h6>
            <hr></hr>
            <Link className="footer-link" to="/">
              <p>پروژه ها</p>
            </Link>
            <Link className="footer-link" to="/">
              <p>تعرفه خدمات</p>
            </Link>
            <Link className="footer-link" to="/">
              {" "}
              <p>همکاری با ما</p>
            </Link>
          </div>
          <div className="col-md-3">
            <h6>راهنما</h6>
            <hr></hr>
            <Link className="footer-link" to="/">
              <p>نقشه سایت</p>
            </Link>
            <Link className="footer-link" to="/">
              <p>سوالات متداول</p>
            </Link>
            <Link className="footer-link" to="/">
              <p>حریم شخصی</p>
            </Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-8">
                <div className="mb-3">
                  <label className="form-label">ایمیل</label>
                  <input
                    type="email"
                    className="form-control"
                    style={{ direction: "ltr" }}
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    value={email}
                    onChange={emailHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">متن پیام</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={text}
                    onChange={textHandler}
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={textChengeHandler}
                  className="btn btn-outline-light"
                >
                  ارسال پیام
                </button>
              </div>
              <div className="col-md-4">
                <img className="footer-img offset-0" src={logo} alt="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
