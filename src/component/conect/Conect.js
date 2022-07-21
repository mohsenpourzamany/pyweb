import React, { useState } from "react";
import "./Conect.css";

const Conect = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState("");

  const validate = () => {
    if (email === "") {
      setErrorMessage("email is empty");
      return false;
    } else if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("email empty");
      return false;
    } else if (cv === "") {
      setErrorMessage("file not found");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const sendHolder = () => {
    const validateResult = validate();
    if (validateResult) {
      setErrorMessage("");
    } else {
      setErrorMessage("something went wrong");
      return false;
    }
  };

  const userChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const cvHandler = (event) => {
    setCv(event.target.value);
  };
  return (
    <>
      <p style={{ color: "red", fontSize: "24" }}>{errorMessage}</p>
      <div className="row conect">
        <h3>
          اگر میخواهید به تیم پای وبینو بپیوندید ایمیل و رزومه خودتان را برای ما
          ارسال کنید
        </h3>

        <form className="form-conect">
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">
              نام و نام خانوادگی
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                value={userName}
                onChange={userChangeHandler}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">ایمیل</label>
            <div className="col-sm-10">
              <input
                type="text"
                value={email}
                className="form-control"
                id="staticEmail"
                placeholder="email@example.com"
                onChange={emailHandler}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">رزومه خود را آپلود کنید </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              value={cv}
              onChange={cvHandler}
            />
          </div>
          <button
            type="button"
            className="btn btn-outline-primary btn-conect"
            onClick={sendHolder}
          >
            {" "}
            ارسال مدارک
          </button>
        </form>
      </div>
    </>
  );
};

export default Conect;
