import React, { useEffect } from "react";
import HeroSectin from "../component/heroSection/HeroSection";
import "../styles/SignIn.css";
import sin from "../assets/images/signup.jpg";
import SignIn from "../component/sign/SignIn";
import SignUp from "../component/sign/SignUp";

const Sign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="row">
      <div className="row img-signin">
        <img src={sin} alt="/" />
        <HeroSectin />
      </div>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Sign;
