import React, { useState } from "react";
import "../../styles/SignIn.css";
import siu from "../../assets/images/sign-up.png";

const SignUp = () => {
  const [erroeMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");

  const validate = () => {
    if (user === "") {
      setErrorMessage("user empty");
      return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("email empty");
      return false;
    } else if (password === "") {
      setErrorMessage("password empty");
      return false;
    } else if (password.length < 5) {
      setErrorMessage("password invalid");
      return false;
    } else if (!repeatpassword === password) {
      setErrorMessage("password incorect");
    }
    setErrorMessage("");
    return true;
  };

  const signupHandler = () => {
    const validateResult = validate();
    if (validateResult) {
      setErrorMessage("");
    }
    // else{
    //   setErrorMessage('something went wrong')
    //   return false;
    // }
  };

  const repeatpasswordHandler = (event) => {
    setRepeatPassword(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const userHandler = (event) => {
    setUser(event.target.value);
  };
  return (
    <div className="row signup">
      <p style={{ color: "red", fontSize: "28" }}>{erroeMessage}</p>
      <div className="col-md-8 signup-l">
        <form>
          <div className="mb-3">
            <label className="form-label">نام و نام خانوادگی</label>
            <input
              type="text"
              className="form-control"
              id="/"
              value={user}
              onChange={userHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">ایمیل</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              dir="ltr"
              value={email}
              onChange={emailHandler}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">رمز</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              value={password}
              onChange={passwordHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">تکرار رمز</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword3"
              value={repeatpassword}
              onChange={repeatpasswordHandler}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck2"
              dir="ltr"
            />
            <label className="form-check-label">
              کلیه قوانین پای وبینو را می پذیرم
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary px-5"
            onClick={signupHandler}
          >
            ثبت نام
          </button>
        </form>
      </div>
      <div className="col-md-4">
        <img className="img-sin" src={siu} alt="/" />
      </div>
    </div>
  );
};

export default SignUp;
