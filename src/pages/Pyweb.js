import React, { useEffect, useState } from "react";
import HeroSectin from "../component/heroSection/HeroSection";
import Conect from "../component/conect/Conect";
import py from "../assets/images/pyweb.jpg";
import "../styles/Pyweb.css";
import Pyteam from "../component/pyteam/Pyteam";
import Support from "../component/support/Support";
import Spiner from "../component/spiner/Spiner";

const Pyweb = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getData();
  }, []);
  // async function | HTTP Request
  const getData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return loading ? (
    <Spiner />
  ) : (
    <div className="row">
      <div className="row img-pyweb">
        <img src={py} alt="/" />
        <HeroSectin />
      </div>
      <Pyteam />
      <Support />
      <Conect />
    </div>
  );
};

export default Pyweb;
