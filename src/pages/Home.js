import React, { useState, useEffect } from "react";
import HeroSectin from "../component/heroSection/HeroSection";
import Cards from "../component/cards/Cards";
import Conect from "../component/conect/Conect";
import "../styles/Home.css";
import des from "../assets/images/design.jpg";
import Spiner from "../component/spiner/Spiner";

const Home = () => {
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
    <div className="row bg--home">
      <div className="row img-home">
        <img src={des} alt="/" />
        <HeroSectin />
      </div>
      <Cards />
      <Conect />
    </div>
  );
};

export default Home;
