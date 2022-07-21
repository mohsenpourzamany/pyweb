import React, { useEffect, useState } from "react";
import CardService from "../component/cardservice/CardService";
import HeroSectin from "../component/heroSection/HeroSection";
import cost from "../assets/images/cost-services.jpg";
import "../styles/Services.css";
import Spiner from "../component/spiner/Spiner";

const Services = () => {
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
      <div className="row img-services">
        <img src={cost} alt="/" />
        <HeroSectin />
      </div>

      <CardService />
    </div>
  );
};

export default Services;
