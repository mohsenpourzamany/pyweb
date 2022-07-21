import React from "react";
import "./Cards.css";
import Button from "../../UI/button/Button";
import Card from "./Card";
import { DataCard } from "../data/DataCard";

const Cards = (props) => {
  return (
    <div className="row cards">
      <h3>وب سایت</h3>
      <div className="row container">
        {DataCard &&
          DataCard.length !== 0 &&
          DataCard.map((cardData) => {
            return (
              <Card
                key={cardData.id}
                img={cardData.img}
                title={cardData.title}
                category={cardData.category}
                desc={cardData.desc}
              />
            );
          })}

        <Button to="/" className="btn-cards">
          نمایش بیشتر
        </Button>
      </div>
      <div className="hr"></div>
    </div>
  );
};

export default Cards;
