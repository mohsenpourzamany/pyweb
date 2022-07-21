import React, { useState } from "react";
import "../../styles/SignIn.css";
import sig from "../../assets/images/signin.png";

const SignIn = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    if (email === "") {
      setErrorMessage("email is empty");
      return false;
    } else if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("email empty");
      return false;
    } else if (password === "") {
      setErrorMessage("password empty");
      return false;
    } else if (password.length < 5) {
      setErrorMessage("password invalid");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const loginHandler = () => {
    const validateResult = validate();
    if (validateResult) {
      setErrorMessage("");
    }
    // else{
    //   setErrorMessage('something went wrong')
    //   return false;
    // }
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <p style={{ color: "red", fontSize: "24" }}>{errorMessage}</p>
      <div className="row signin">
        <div className="col-md-4">
          <img className="img-sin" src={sig} alt="/" />
        </div>
        <div className="col-md-8 signin-r">
          <form>
            <div className="mb-3">
              <label className="form-label">ایمیل</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={emailHandler}
                dir="ltr"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">رمز</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={passwordHandler}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">رمز را فراموش کردم</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary px-5"
              onClick={loginHandler}
            >
              ورود
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
