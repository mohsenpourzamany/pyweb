import React, { useEffect, useState } from "react";
import HeroSectin from "../component/heroSection/HeroSection";
import Cards from "../component/cards/Cards";
import pro from "../assets/images/project.jpg";
import "../styles/Project.css";
import Spiner from "../component/spiner/Spiner";

const Project = () => {
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
      <div className="row img-project">
        <img src={pro} alt="/" />
        <HeroSectin />
      </div>
      <h2>پروژه ها</h2>

      <Cards />
    </div>
  );
};

export default Project;
